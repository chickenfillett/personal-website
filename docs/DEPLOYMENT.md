# Deployment

## Static target

Run `npm run build:static`. The output in `dist/` can be hosted by Netlify or any static file server. `netlify.toml` already selects this target and configures long-lived caching for versioned image and Next.js assets.

## Standalone server target

Run:

```bash
npm run build:server
npm run start:server
```

The server reads `PORT` and `HOSTNAME`. Copy `.env.example` to a local, untracked environment file when additional server settings are introduced. Production secrets belong in the deployment platform, never in Git.

The included Dockerfile builds and runs the standalone target:

```bash
docker build -t solocraft-web .
docker run --rm -p 3000:3000 solocraft-web
```

Use `/api/health` for liveness checks. Future database migrations should run as a separate deployment step rather than during application startup.

## Release checks

Run `npm ci`, `npm run validate`, `npm run build:static`, and `npm run build:server`. The pull-request workflow performs the same checks on Node.js 22.
