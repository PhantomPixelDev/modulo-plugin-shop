<?php

namespace Plugins\ModuloShop\database\seeders;

use App\Models\Post;
use App\Models\PostType;
use App\Models\Taxonomy;
use App\Models\TaxonomyTerm;
use App\Models\User;
use Illuminate\Database\Seeder;

/**
 * Demo products for the shop archive (/shop). Posts of type 'product' carry
 * their sellable data in meta_data, matching ProductData.
 *
 * Three fixtures: regular price, sale price, and sold out. Production requires
 * the core's explicitly authorized disposable demo command.
 */
class ShopDemoSeeder extends Seeder
{
    public function run(): void
    {
        // Defense in depth: the provider only auto-runs this outside
        // production, but the entry point must refuse there too.
        if (app()->isProduction() && (! config('demo.enabled') || ! config('demo.seeding_authorized'))) {
            $this->command?->warn('ShopDemoSeeder refuses to run in production.');

            return;
        }

        $productType = PostType::where('slug', 'product')->first();

        if (! $productType) {
            $this->command?->warn('No "product" post type. Install/activate ModuloShop first.');

            return;
        }

        $authorId = User::value('id');
        if (! $authorId) {
            $this->command?->warn('ShopDemoSeeder needs at least one user to own the products; skipping.');

            return;
        }

        $taxonomy = Taxonomy::where('slug', 'product-category')->first();

        if ($taxonomy) {
            foreach (['stationery' => 'Stationery', 'kitchen' => 'Kitchen', 'apparel' => 'Apparel'] as $slug => $name) {
                TaxonomyTerm::firstOrCreate(
                    ['slug' => $slug, 'taxonomy_id' => $taxonomy->id],
                    ['name' => $name],
                );
            }
        }

        $categories = TaxonomyTerm::whereHas('taxonomy', fn ($q) => $q->where('slug', 'product-category'))
            ->get()
            ->keyBy('slug');

        $products = [
            ['title' => 'Field Notebook A5', 'slug' => 'field-notebook-a5', 'price' => 14.0, 'stock' => 12, 'category' => 'stationery', 'excerpt' => 'A demo product at its regular price.'],
            ['title' => 'Ceramic Mug — Sand', 'slug' => 'ceramic-mug-sand', 'price' => 22.0, 'sale_price' => 18.0, 'stock' => 6, 'category' => 'kitchen', 'excerpt' => 'A demo product with an active sale price.'],
            ['title' => 'Merino Wool Scarf', 'slug' => 'merino-wool-scarf', 'price' => 48.0, 'stock' => 0, 'category' => 'apparel', 'excerpt' => 'A sold-out demo product for testing stock limits.'],
        ];

        foreach ($products as $product) {
            $post = Post::updateOrCreate(
                ['slug' => $product['slug'], 'post_type_id' => $productType->id],
                [
                    'post_type_id' => $productType->id,
                    'author_id' => $authorId,
                    'title' => $product['title'],
                    'excerpt' => $product['excerpt'],
                    'content' => '<p>'.$product['excerpt'].'</p>',
                    'status' => 'published',
                    'published_at' => now()->subDay(),
                    'meta_title' => $product['title'],
                    'meta_description' => $product['excerpt'],
                    'meta_data' => [
                        'price' => $product['price'],
                        'sale_price' => $product['sale_price'] ?? null,
                        'stock' => $product['stock'],
                        'currency' => 'USD',
                    ],
                ],
            );

            if ($category = $categories->get($product['category'])) {
                $post->taxonomyTerms()->sync([$category->id]);
            }
        }

        $this->command?->info('Demo products seeded.');
    }
}
