<?php

use App\Models\SiteSetting;

require_once __DIR__.'/helpers.php';

// The storefront through the core's theme, page cache and server-rendered meta.
beforeEach(function () {
    config(['content.page_cache.enabled' => true]);
    activateReactTheme();
    SiteSetting::set('site_name', 'Smoke Site');
});

/**
 * @return array<int, array<string, mixed>>
 */
function storefrontJsonLd(string $html): array
{
    preg_match_all('#<script inertia type="application/ld\+json">(.*?)</script>#s', $html, $m);

    return array_map(fn ($json) => json_decode($json, true), $m[1]);
}

it('keeps private shop pages out of the cache', function () {
    bootShopPlugin($this);

    $product = createShopProduct();

    $this->get('/shop/cart')->assertOk()->assertHeaderMissing('X-Page-Cache');
    $this->get('/shop/'.$product->slug)->assertOk()->assertHeader('X-Page-Cache', 'miss');
});

it('describes products for rich results and keeps the cart out of search', function () {
    bootShopPlugin($this);
    $product = createShopProduct(['price' => 20, 'sale_price' => 15, 'sku' => 'TEE']);

    $html = $this->get('/shop/'.$product->slug)->assertOk()->getContent();
    $schema = collect(storefrontJsonLd($html))->firstWhere('@type', 'Product');

    expect($schema['name'])->toBe($product->title)
        ->and($schema['sku'])->toBe('TEE')
        ->and($schema['offers'][0])->toMatchArray(['price' => '15.00', 'availability' => 'https://schema.org/InStock']);

    expect($this->get('/shop/cart')->getContent())->toContain('<meta inertia name="robots" content="noindex, follow">');
});
