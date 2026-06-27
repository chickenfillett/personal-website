# DeskHaven image assets

Binary image upload is not supported through the current ChatGPT GitHub connector, so the DeskHaven product page is wired to the following expected paths. Copy the provided DeskHaven asset package into this folder.

Expected files:

- `deskhaven-store-hero.png`
- `deskhaven-icon.png`
- `deskhaven-dashboard.png`
- `deskhaven-file-vault.png`
- `deskhaven-privacy.png`
- `deskhaven-relationship-graph.png`
- `deskhaven-settings.png`
- `deskhaven-poster.png`

After these files are present, `npm run build` will generate optimized WebP files under `public/photo-optimized/deskhaven/`.
