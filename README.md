# Cutting Edge Landscaping & Snowplowing

Marketing website for Cutting Edge Landscaping & Snowplowing (Toronto / GTA).
It is a static site — no server and no runtime build. Vercel serves the files
as-is.

## How it renders

The page is a React app, but it is **pre-compiled** — there is no in-browser
Babel and no external CDN at runtime. Everything loads from local files:

- `assets/vendor/react.production.min.js`
- `assets/vendor/react-dom.production.min.js`
- `assets/vendor/framer-motion.js`
- `assets/app.js` — the compiled app bundle

These are loaded with `defer` from `index.html`, in order.

## Editing the app

Edit the source, not the compiled output:

- **Source:** `src/app.jsx` (JSX)
- **Generated:** `assets/app.js` (do not edit by hand)

After changing `src/app.jsx`, rebuild:

```bash
npm install      # one time — installs Babel (dev only)
npm run build    # regenerates assets/app.js
```

Then commit both `src/app.jsx` and the regenerated `assets/app.js`.

## Other files

- `styles.css` — all styling
- `assets/` — images and the demo video
- `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest` — SEO / crawler files
- Structured data (JSON-LD) lives in the `<head>` of `index.html`
