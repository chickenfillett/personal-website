# Architecture

## Boundaries

`src/content/siteContent.ts` owns every visible sentence and label. Components must not add locale branches or page copy inline. The strict locale record requires all ten supported languages to share the same content shape.

`src/domain` owns product identifiers and stable product metadata. `src/lib` contains behavior: locale state, price selection, policy assembly, image mapping, and browser hooks. `src/server` is reserved for code that belongs to the standalone server runtime.

Routes in `src/app` compose these layers. Route components should remain presentational and should not duplicate product metadata, locale fallback rules, or asset paths.

## Adding a product

1. Add its identifier and stable routes to `src/domain/products.ts`.
2. Add complete copy for every locale in `src/content/siteContent.ts`.
3. Add one canonical asset mapping in `src/lib/siteAssets.ts`.
4. Add the route under `src/app/products` and assemble existing product components.
5. Add privacy and legal content to the centralized content structure.
6. Run `npm run validate`, then both builds.

## Adding server interactions

Use route handlers under `src/app/api` for small HTTP endpoints and place reusable backend logic under `src/server`. Keep secrets in deployment environment variables, validate request bodies at the route boundary, and keep database or external-service clients out of client components.

Static hosting cannot execute server code. Interactive browser features should either call a separately deployed API or use the standalone build. Keep the static build until the site intentionally becomes server-only.
