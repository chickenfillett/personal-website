# SoloCraft Brand Site

SoloCraft is Chicken Fillet's multilingual product site for EnergyFlow, DeskHaven, and ADHD Focus Timer. It supports a static export for CDN hosting and a standalone Next.js server for future interactive features.

## Development

```bash
npm install
npm run dev
```

The development server uses the server target. Product images are committed as optimized WebP assets and are not regenerated during ordinary development or builds.

## Validation and builds

```bash
npm run validate
npm run build:static
npm run build:server
```

- `npm run build` is an alias for `build:static` and writes the deployable static site to `dist/`.
- `build:server` writes a standalone Next.js application to `.next-server/standalone/`.
- `npm run start:server` starts the previously built server target.
- `GET /api/health` is available in both modes. Static export emits a fixed response; server mode serves it through Next.js.

## Source layout

- `src/app`: routes, route-local components, and stylesheets.
- `src/content/siteContent.ts`: the single source for all visible localized copy.
- `src/domain`: stable product identifiers and domain types.
- `src/lib`: locale state, asset mapping, pricing selection, and reusable browser logic.
- `src/server`: server runtime utilities and future backend-only modules.
- `public/photo`: current, web-ready product assets only.
- `scripts`: deterministic asset import and build launchers.

See [Architecture](docs/ARCHITECTURE.md), [Deployment](docs/DEPLOYMENT.md), and [Assets](docs/ASSETS.md) before adding new pages, server features, or product media.

`npm run audit` rejects unreachable source files, retired paths, legacy asset references, and byte-for-byte duplicate public files.
