# website-guru MEMORY

## Project
Static Astro site for VOID RTS game. Dark space theme.
Root: `/Users/slawek/AIGames/VoxelRTS/Claude/Website/`
Context file: `/Users/slawek/AIGames/VoxelRTS/Claude/Context/website-context.md`

## Tech Stack
- Astro (static, no SSR) — build with `npm run build`
- No framework (no React/Vue). Pure Astro components + CSS.
- Fonts: Tiny5 (pixel, all chrome) + Inter (body text only)
- CSS: single `global.css`, imported in BaseLayout via `<style is:global>`

## Key File Paths
- Layout: `src/layouts/BaseLayout.astro` — accepts `lang` prop ("en"|"pl")
- Styles: `src/styles/global.css`
- Content config: `src/content.config.ts`
- Collections: `devlog`, `news`, `devlog-pl`, `news-pl`
- EN pages: `src/pages/` | PL pages: `src/pages/pl/`
- EN content: `src/content/devlog/`, `src/content/news/`
- PL content: `src/content/devlog-pl/`, `src/content/news-pl/`

## i18n Pattern (added 2026-03-02)
- Manual /pl/ prefix, no plugin
- BaseLayout lang prop controls html[lang], nav labels, nav hrefs, lang selector
- Language switcher: EN→PL prepends /pl; PL→EN strips /pl prefix
- Same filename in devlog-pl/ as devlog/ so switcher URLs match automatically
- Header: 3-col CSS grid (`.header-inner`): logo | nav centre | lang selector right

## Content Rules
- Devlog: bullet points only, factual, no invented motivations
- News articles: plan with user first, only write what user confirms
- Polish content: translate naturally, keep "VOID RTS" and "PayPal" untranslated

## Astro Quirks
- Collection IDs include `.md` in Astro 5 — always `.replace(/\.md$/, '')` before building URLs
- `getStaticPaths` required in `[id].astro` files for static generation

## Build Output
12 pages (6 EN + 6 PL). Build: ~835ms. Output: `dist/`.

## GitHub Pages Deployment (added 2026-03-02)
- Repo: `github.com/your-daddy-studio/void-rts`
- Live URL: `https://your-daddy-studio.github.io/void-rts/`
- `astro.config.mjs`: `site: 'https://your-daddy-studio.github.io'`, `base: '/void-rts'`
- Workflow: `.github/workflows/deploy.yml` — auto-deploys on push to `main`
- Git repo initialized in project root; initial commit made

## Base Path Pattern (IMPORTANT — added 2026-03-02)
All internal paths in pages/layouts must be prefixed with base. Pattern:
```
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
// then use: `${base}/devlog/` instead of `/devlog/`
```
In BaseLayout, a `url()` helper function does this. Every page file that builds
internal hrefs or src paths must define `base` at the top of its frontmatter.
Never use raw absolute paths like `/devlog/` — they break under `/void-rts/`.
