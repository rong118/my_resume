# Rong Li — Resume

A single-page resume website built with Node.js, Express, and EJS. Deployable to both Heroku and GitHub Pages.

## Stack

- **Node.js / Express** — dev server
- **EJS** — resume template (`views/index.ejs`)
- **Bootstrap** — six pre-built theme variations (`public/css/pillar-1.css` through `pillar-6.css`)

## Local Development

```bash
npm install
npm run build   # Render EJS → docs/index.html and copy assets
npm start       # Serve docs/ via Express on port 3000
```

Open http://localhost:3000

## Build

`npm run build` runs `build.js`, which:
1. Renders `views/index.ejs` → `docs/index.html`
2. Copies `public/css/` and `public/images/` into `docs/`

The `docs/` directory is what both the Express server and GitHub Pages serve.

## Deployment

**GitHub Pages** — push to `main`; Pages is configured to serve from `docs/`.

**Heroku** — `Procfile` runs `node server.js`. Set the `PORT` env var if needed (defaults to 3000).
