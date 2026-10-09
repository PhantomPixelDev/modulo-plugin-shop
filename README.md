# Modulo Shop

Products, categories, cart and orders for Modulo CMS.

Demo seeding creates three products: a notebook at regular price, a mug on sale,
and a sold-out scarf. Reseeding updates these fixtures without adding duplicates.
On a production demo it runs only through the core's explicitly authorized
`MODULO_DEMO=true` / `modulo:seed-demo --force` flow. Normal production shops do
not receive sample products. See the core [demo testing guide](https://github.com/PhantomPixelDev/modulo-cms/blob/main/docs/demo-testing.md).

A plugin for [Modulo CMS](https://github.com/PhantomPixelDev/modulo-cms). Needs Modulo 0.3.0 or newer.

## Features

- Products with sale prices (optionally dated), gallery, categories, tags, weight and
  **variations** (own SKU, price and stock).
- Cart and guest checkout; **tax** (added or included), **shipping methods** with free-shipping
  thresholds, and **coupons** (percent, fixed, free shipping; limits and dates).
- **Payments:** cash on delivery, bank transfer, and **Stripe, PayPal and Mollie** through their
  hosted pages (no card data on your server). Webhooks are verified; unpaid online orders
  expire and return their stock.
- Orders admin with status, tracking, refunds (at the provider), history and notes to the
  customer; order, shipping, cancellation and refund emails; printable invoices.
- Customer "My orders" page and remembered addresses.

## Install

From the admin (**Plugins → Browse**) or the command line:

```bash
php artisan plugin:install modulo-shop
php artisan plugin:activate modulo-shop
```

Installs come from the [Modulo plugin registry](https://github.com/PhantomPixelDev/modulo-registry),
which records the SHA-256 of every release package; the download is verified against it
before anything is unpacked.

## Storefront

As of 1.8.0, catalog JSON uses the same public product fields as the storefront
(`price`, `sale_price`, `categories`, etc.). It no longer serializes the full Post
model or arbitrary `meta_data`; clients reading `meta_data.price` should use `price`.
Private product types and taxonomies are excluded from public routes and shortcodes.
Catalog filters must be scalar values; malformed filters return validation errors.

The storefront pages are rendered by the active theme; the default `modern-react`
theme in core ships them. A theme without shop templates still gets the admin and the
API, just no public shop pages.

## Admin screens

The admin screens are this plugin's own React bundle, `resources/dist/plugin.js`, which the
core loads the first time a shop page is opened. They use the core's admin kit
(`@modulo/ui`: buttons, forms, tables, dialogs, the admin layout) and its React, so the
bundle stays small and the screens look like the rest of the admin. The Shop entry in the
sidebar comes from `admin.menu` in `plugin.json`.

To change them, edit `resources/js`, then rebuild and commit the bundle:

```bash
npm install
npm run types
npm run build
```

## Releasing

1. Bump `version` in `plugin.json`.
2. Tag it: `git tag vX.Y.Z && git push --tags`. The release workflow refuses a tag that
   does not match `plugin.json`, then publishes `modulo-shop-X.Y.Z.zip` and its `.sha256`.
3. The registry picks the release up within the hour.
4. Copy the tagged files into `plugins/ModuloShop` in modulo-cms: its CI checks the bundled copy
   matches this release.

## License

MIT
