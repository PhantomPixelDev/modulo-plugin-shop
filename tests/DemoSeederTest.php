<?php

use App\Models\Post;
use App\Models\User;
use Database\Seeders\BootstrapSeeder;
use Plugins\ModuloShop\database\seeders\ShopDemoSeeder;
use Plugins\ModuloShop\database\seeders\ShopSeeder;
use Plugins\ModuloShop\src\Services\CartService;

require_once __DIR__.'/helpers.php';

beforeEach(function () {
    activateReactTheme();
    bootShopPlugin($this);
    $this->seed(BootstrapSeeder::class);
    $this->seed(ShopSeeder::class);
    User::factory()->create();
});

it('seeds three repeatable products with regular sale and sold out behavior', function () {
    $this->seed(ShopDemoSeeder::class);
    $this->seed(ShopDemoSeeder::class);
    expect(Post::count())->toBe(3);
    $this->getJson('/shop')->assertOk()->assertJsonCount(3, 'products.data');
    foreach (Post::all() as $post) {
        $this->get($post->publicPath())->assertOk();
    }
    $mug = Post::where('slug', 'ceramic-mug-sand')->firstOrFail();
    app(CartService::class)->addItem($mug->id, 1);
    expect(app(CartService::class)->getCartWithProducts()['items'][0]['price'])->toBe(18.0);
    $scarf = Post::where('slug', 'merino-wool-scarf')->firstOrFail();
    expect(fn () => app(CartService::class)->addItem($scarf->id, 1))->toThrow(InvalidArgumentException::class);
});

it('refuses production unless both disposable demo guards are present', function () {
    app()->detectEnvironment(fn () => 'production');
    config(['demo.enabled' => false, 'demo.seeding_authorized' => true]);
    $this->artisan('db:seed', ['--class' => ShopDemoSeeder::class, '--force' => true])->assertSuccessful();
    config(['demo.enabled' => true, 'demo.seeding_authorized' => false]);
    $this->artisan('db:seed', ['--class' => ShopDemoSeeder::class, '--force' => true])->assertSuccessful();
    expect(Post::count())->toBe(0);
    config(['demo.seeding_authorized' => true]);
    $this->artisan('db:seed', ['--class' => ShopDemoSeeder::class, '--force' => true])->assertSuccessful();
    expect(Post::count())->toBe(3);
});
