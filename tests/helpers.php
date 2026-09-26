<?php

/*
 * Helpers for the shop's tests. CI runs them inside a checkout of Modulo core
 * (plugin at plugins/ModuloShop, tests copied to tests/Feature/Plugins/ModuloShop),
 * so the core's TestCase, factories and helpers like makeAdminUserWithPermissions()
 * are available.
 */

use App\Models\Post;
use App\Models\PostType;
use Plugins\ModuloShop\ModuloShopServiceProvider;
use Tests\TestCase;

if (! function_exists('bootShopPlugin')) {
    /**
     * Register the plugin and run its migrations for the current test.
     */
    function bootShopPlugin(TestCase $test): void
    {
        app()->register(ModuloShopServiceProvider::class);
        // Routes added after boot need their names indexed for route()
        app('router')->getRoutes()->refreshNameLookups();

        $test->artisan('migrate', [
            '--path' => 'plugins/ModuloShop/database/migrations',
            '--realpath' => false,
        ]);
    }

    function createShopProduct(array $meta = []): Post
    {
        $postType = PostType::where('name', 'product')->first()
            ?? PostType::factory()->create([
                'name' => 'product',
                'slug' => 'product',
                'route_prefix' => 'shop',
            ]);

        return Post::factory()->published()->create([
            'post_type_id' => $postType->id,
            'meta_data' => array_merge([
                'price' => 29.99,
                'currency' => 'USD',
                'sku' => 'SKU-TEST',
            ], $meta),
        ]);
    }
}
