# Product Assets

Only current, web-ready WebP files belong under `public/photo`. Source PNG archives stay with the application projects and are imported deliberately; ordinary site builds never rewrite assets.

## Layout

- `energyflow/{locale}/screenshots/screenshot-01.webp` through `screenshot-13.webp`
- `energyflow/{zh,en}/posters/poster-01.webp` through `poster-04.webp`
- `adhd-focus-timer/{locale}/screenshots/screenshot-01.webp` through `screenshot-07.webp`
- `deskhaven/{locale}/{posters,screenshots}` with counts defined in `src/lib/siteAssets.ts`

Asset fallback rules are also centralized in `src/lib/siteAssets.ts`. Do not copy an English image into multiple locale directories: point the locale mapping to the canonical English file instead.

EnergyFlow assets can be refreshed with `npm run import:energyflow` after placing a source package in the location expected by the import script. The script validates counts and writes optimized WebP files.
