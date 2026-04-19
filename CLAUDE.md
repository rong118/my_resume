# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build    # Generate docs/ for GitHub Pages deployment
npm start        # Run Express dev server locally (port from the.env or 3000)
```

There are no tests and no linter configured.

## Architecture

This is a single-page resume website built with Node.js + Express + EJS.

- **server.js** — Express app with one route (`GET /`) that renders `views/index.ejs`; serves static assets from `/public`
- **views/index.ejs** — All resume content lives here (profile, work history, skills, education)
- **public/css/** — Six pre-built Bootstrap pillar theme variations (`pillar-1.css` through `pillar-6.css`); the active theme is referenced in `index.ejs`
- **public/scss/** — Source SCSS for the theme (not compiled as part of the npm workflow — edit CSS directly or add a SCSS build step if needed)
- **public/images/** — Profile photo (`me.png`) and company logos

Deployment target is Heroku (`Procfile: web: node server.js`).
