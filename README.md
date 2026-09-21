# Modulo Shop

Products, categories, cart and orders for Modulo CMS.

A plugin for [Modulo CMS](https://github.com/PhantomPixelDev/modulo-cms).

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

The storefront pages are rendered by the active theme; the default `modern-react`
theme in core ships them. A theme without shop templates still gets the admin and the
API, just no public shop pages.

## Releasing

1. Bump `version` in `plugin.json`.
2. Tag it: `git tag vX.Y.Z && git push --tags`. The release workflow refuses a tag that
   does not match `plugin.json`, then publishes `modulo-shop-X.Y.Z.zip` and its `.sha256`.
3. Update this plugin's entry in the registry with the new version, asset URL and checksum.

## License

MIT
