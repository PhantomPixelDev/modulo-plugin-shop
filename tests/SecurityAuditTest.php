<?php

use App\Models\Post;
use App\Models\Taxonomy;
use App\Models\TaxonomyTerm;
use Illuminate\Support\Facades\Mail;
use Plugins\ModuloShop\src\Models\Order;
use Plugins\ModuloShop\src\Models\Payment;
use Plugins\ModuloShop\src\Services\CartService;
use Plugins\ModuloShop\src\Services\PaymentService;
use Plugins\ModuloShop\src\Services\ShopShortcodeService;

require_once __DIR__.'/helpers.php';

beforeEach(function () {
    bootShopPlugin($this);
    Mail::fake();
});

it('keeps private product types out of the catalog cart and shortcodes', function () {
    $product = createShopProduct();
    $product->postType->update(['is_public' => false]);

    $this->getJson('/shop')->assertOk()->assertJsonCount(0, 'products.data');
    $this->getJson('/shop/'.$product->slug)->assertNotFound();
    $this->postJson('/shop/cart/add', ['product_id' => $product->id])->assertStatus(400);
    expect(app(ShopShortcodeService::class)->renderProduct(['id' => $product->id]))->not->toContain($product->title);
});

it('does not serialize private metadata or taxonomy labels from catalog endpoints', function () {
    $product = createShopProduct(['internal_supplier_secret' => 'supplier-secret']);
    $taxonomy = Taxonomy::create(['name' => 'product-category', 'label' => 'Category', 'plural_label' => 'Categories', 'slug' => 'product-category', 'is_public' => false]);
    $term = TaxonomyTerm::create(['taxonomy_id' => $taxonomy->id, 'name' => 'Private category', 'slug' => 'private-category']);
    $product->taxonomyTerms()->attach($term);

    $this->getJson('/shop')->assertOk()->assertDontSee('supplier-secret')->assertDontSee('Private category');
    $this->getJson('/shop/'.$product->slug)->assertOk()->assertJsonCount(0, 'product.categories');
    $this->getJson('/product-category/'.$term->slug)->assertNotFound();
});

it('only shows public released products through the price shortcode', function (string $kind) {
    $product = $kind === 'non-product' ? Post::factory()->published()->create(['meta_data' => ['price' => 12345]]) : createShopProduct(['price' => 12345]);
    if ($kind === 'draft') {
        $product->update(['status' => 'draft']);
    } elseif ($kind === 'scheduled') {
        $product->update(['published_at' => now()->addDay()]);
    }
    expect(app(ShopShortcodeService::class)->renderProductPrice(['id' => $product->id]))->toBe('<!-- Product not found -->');
})->with(['draft', 'scheduled', 'non-product']);

it('rejects array catalog filters with validation errors', function (string $filter) {
    createShopProduct();
    $this->getJson('/shop?'.http_build_query([$filter => ['unexpected']]))
        ->assertUnprocessable()->assertJsonValidationErrors($filter);
})->with(['search', 'category', 'tag', 'order', 'orderby', 'min_price', 'max_price', 'per_page']);

it('treats malformed order access keys as unauthorized', function (string $suffix) {
    $product = createShopProduct();
    app(CartService::class)->addItem($product->id);
    $this->postJson('/shop/checkout', [
        'customer_name' => 'Jane', 'customer_email' => 'jane@example.test',
        'billing_address_1' => '1 Main Street', 'billing_city' => 'Berlin',
        'billing_postcode' => '10115', 'billing_country' => 'DE', 'payment_method' => 'cod',
    ])->assertOk();
    $order = Order::firstOrFail();
    if ($suffix === '/pay') {
        $this->postJson('/shop/order/'.$order->order_number.$suffix, ['key' => ['invalid']])->assertNotFound();
    } else {
        $this->getJson('/shop/order/'.$order->order_number.$suffix.'?key[]=invalid')->assertNotFound();
    }
})->with(['', '/invoice', '/pay']);

it('keeps refunded payments terminal when a paid event is delivered again', function () {
    $product = createShopProduct(['stock' => 5]);
    app(CartService::class)->addItem($product->id);
    $this->postJson('/shop/checkout', [
        'customer_name' => 'Jane', 'customer_email' => 'jane@example.test',
        'billing_address_1' => '1 Main Street', 'billing_city' => 'Berlin',
        'billing_postcode' => '10115', 'billing_country' => 'DE', 'payment_method' => 'cod',
    ])->assertOk();
    $order = Order::firstOrFail();
    $payments = app(PaymentService::class);
    $payments->markPaid($order, 'stripe', 'cs_refunded', (float) $order->total, $order->currency);
    $payments->markRefunded($order, 'Refunded by test');

    expect($payments->markPaid($order, 'stripe', 'cs_refunded', (float) $order->total, $order->currency))->toBeFalse()
        ->and($order->fresh()->payment_status)->toBe(Order::PAYMENT_REFUNDED)
        ->and(Payment::where('provider_ref', 'cs_refunded')->value('status'))->toBe(Payment::REFUNDED)
        ->and($product->fresh()->meta_data['stock'])->toBe(5);
});

it('escapes product shortcode attributes and sanitizes its rich content', function (string $method) {
    $product = createShopProduct(['sku' => '<svg onload="alert(1)">', 'stock' => 5]);
    $product->update([
        'title' => '<script>alert("title")</script>',
        'featured_image' => '/image.png" onerror="alert(2)',
        'content' => '<p>Safe description</p><script>alert(3)</script><img src=x onerror="alert(4)">',
    ]);
    $html = app(ShopShortcodeService::class)->{$method}(['id' => $product->id]);
    $dom = new DOMDocument;
    @$dom->loadHTML($html);
    $xpath = new DOMXPath($dom);
    expect($xpath->query('//script|//svg|//*[@onerror or @onload]')->length)->toBe(0)
        ->and($html)->toContain('&lt;script&gt;');
})->with(['renderProducts', 'renderProduct', 'renderProductSlider']);
