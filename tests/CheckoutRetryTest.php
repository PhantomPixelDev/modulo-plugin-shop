<?php

use Illuminate\Support\Facades\Mail;
use Plugins\ModuloShop\src\Models\Order;
use Plugins\ModuloShop\src\Services\CartService;

require_once __DIR__.'/helpers.php';

beforeEach(function () {
    bootShopPlugin($this);
    Mail::fake();
    $this->withCredentials();
});

function retryCheckoutPayload(): array
{
    return [
        'customer_name' => 'Jane Doe', 'customer_email' => 'jane@example.test',
        'billing_address_1' => '123 Main St', 'billing_city' => 'Springfield',
        'billing_postcode' => '12345', 'billing_country' => 'US',
        'payment_method' => 'cod', 'ship_to_different' => false,
    ];
}

it('replays checkout without another order stock reservation or email', function (bool $explicit) {
    $product = createShopProduct(['stock' => 5]);
    app(CartService::class)->addItem($product->id, 1);
    $key = $this->getJson('/shop/checkout')->assertOk()->json('checkout_key');
    $this->withCookie(config('session.cookie'), session()->getId());
    $payload = retryCheckoutPayload() + ($explicit ? ['checkout_key' => $key] : []);
    $first = $this->postJson('/shop/checkout', $payload)->assertOk()->json();
    $second = $this->postJson('/shop/checkout', $payload)->assertOk()->json();
    expect($second['order']['id'])->toBe($first['order']['id'])
        ->and(Order::count())->toBe(1)
        ->and((int) $product->fresh()->meta_data['stock'])->toBe(4);
    Mail::assertQueuedCount(2);
    $this->postJson('/shop/checkout', array_replace($payload, ['customer_name' => 'Different name']))->assertConflict();
    expect(Order::count())->toBe(1);

    $this->postJson('/shop/cart/add', ['product_id' => $product->id, 'quantity' => 1])->assertOk();
    $next = $this->getJson('/shop/checkout')->json('checkout_key');
    expect($next)->not->toBe($key);
    $this->postJson('/shop/checkout', retryCheckoutPayload() + ['checkout_key' => $next])->assertOk();
    expect(Order::count())->toBe(2);
})->with([true, false]);

it('does not expose another session order through a copied checkout key', function () {
    $product = createShopProduct();
    app(CartService::class)->addItem($product->id, 1);
    $key = $this->getJson('/shop/checkout')->json('checkout_key');
    $this->withCookie(config('session.cookie'), session()->getId());
    $this->postJson('/shop/checkout', retryCheckoutPayload() + ['checkout_key' => $key])->assertOk();
    session()->invalidate();
    $this->withCookie(config('session.cookie'), session()->getId());
    $this->postJson('/shop/checkout', retryCheckoutPayload() + ['checkout_key' => $key])->assertStatus(400);
    expect(Order::count())->toBe(1);
});
