# SoloCraft Brand Site

SoloCraft is Chicken Fillet's independent desktop software brand site.

This repository is a static-export Next.js site deployed to Netlify. It presents the studio, product index, and individual product pages for tools such as EnergyFlow, DeskHaven, and ADHD Focus Timer.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build runs `scripts/optimize-images.mjs` before `next build`. The script scans `public/photo` and generates lightweight WebP versions under `public/photo-optimized` so product screenshots can load more smoothly.

## Image performance

The redesigned pages use:

- `SmartScreenshot` for WebP-first screenshots with PNG fallback.
- `usePreloadImages` to preload cross-language image variants before language switching.
- Lazy loading for below-the-fold screenshots and priority loading for hero screenshots.
- Netlify cache headers for `/photo`, `/photo-optimized`, and `/_next/static` assets.

If your deployment uses `npm ci`, run `npm install` locally once and commit the updated `package-lock.json` after adding dependencies.
