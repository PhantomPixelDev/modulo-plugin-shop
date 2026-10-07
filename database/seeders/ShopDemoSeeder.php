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
 * Idempotent (keyed by slug), but refuses production like the core demo
 * seeder: it exists so fresh dev installs have something to look at.
 */
class ShopDemoSeeder extends Seeder
{
    public function run(): void
    {
        // Defense in depth: the provider only auto-runs this outside
        // production, but the entry point must refuse there too.
        if (app()->isProduction()) {
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
            foreach (['stationery' => 'Stationery', 'kitchen' => 'Kitchen', 'apparel' => 'Apparel', 'accessories' => 'Accessories', 'home' => 'Home'] as $slug => $name) {
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
            ['title' => 'Field Notebook A5', 'slug' => 'field-notebook-a5', 'price' => 14.0, 'stock' => 120, 'category' => 'stationery', 'excerpt' => 'A dotted A5 notebook with sturdy 120gsm paper.'],
            ['title' => 'Ceramic Mug — Sand', 'slug' => 'ceramic-mug-sand', 'price' => 22.0, 'stock' => 64, 'category' => 'kitchen', 'excerpt' => 'Hand-thrown stoneware mug, matte sand finish.'],
            ['title' => 'Merino Wool Scarf', 'slug' => 'merino-wool-scarf', 'price' => 48.0, 'stock' => 32, 'category' => 'apparel', 'excerpt' => 'Soft merino scarf woven in limited seasonal colorways.'],
            ['title' => 'Canvas Tote Bag', 'slug' => 'canvas-tote-bag', 'price' => 34.0, 'stock' => 90, 'category' => 'accessories', 'excerpt' => 'Heavy 16oz canvas everyday tote with reinforced straps.'],
            ['title' => 'Desk Lamp — Brass', 'slug' => 'desk-lamp-brass', 'price' => 89.0, 'stock' => 18, 'category' => 'home', 'excerpt' => 'Dimmable brass desk lamp with a warm 2700K LED.'],
            ['title' => 'Travel Wallet', 'slug' => 'travel-wallet', 'price' => 42.0, 'stock' => 45, 'category' => 'accessories', 'excerpt' => 'Passport-sized leather travel wallet with RFID slots.'],
        ];

        foreach ($products as $product) {
            $post = Post::updateOrCreate(
                ['slug' => $product['slug']],
                [
                    'post_type_id' => $productType->id,
                    'author_id' => $authorId,
                    'title' => $product['title'],
                    'excerpt' => $product['excerpt'],
                    'content' => '<p>'.$product['excerpt'].'</p>',
                    'status' => 'published',
                    'published_at' => now()->subDays(random_int(1, 30)),
                    'meta_title' => $product['title'],
                    'meta_description' => $product['excerpt'],
                    'meta_data' => [
                        'price' => $product['price'],
                        'stock' => $product['stock'],
                        'currency' => 'USD',
                    ],
                ],
            );

            if ($category = $categories->get($product['category'])) {
                $post->taxonomyTerms()->syncWithoutDetaching([$category->id]);
            }
        }

        $this->command?->info('Demo products seeded.');
    }
}
