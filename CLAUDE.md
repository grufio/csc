# CLAUDE.md

Guidance for working in this repository.

## What this is

Static marketing website for **CSC Electronic AG** (csc.ch), built with **Astro** +
**Tailwind CSS v4**. Design closely follows floema.com: large alternating solid colour blocks
(warm light grey `#eceae3`, deep green `#0e2a22`, chartreuse `#e9e778`), a calm medium-weight
grotesk (Hanken Grotesk) in sentence case, pill-tab navigation, thin line-art component
illustrations, circular icon badges, and soft rounded UI. Keep it calm and spacious — *not* an
"Apple tile" look, *not* heavy display type.

## Commands

- `npm run dev` — dev server (http://localhost:4321)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the build

## Conventions

- **Design tokens live in `src/styles/global.css`** (`@theme` block). Use the CSS custom
  properties (`--color-grey`, `--color-green`, `--color-acid`, `--color-ink`, `--color-olive`,
  `--font-display`, etc.) and the shared utility classes (`.display`, `.h1`/`.h2`, `.eyebrow`,
  `.lead`, `.link-more`, `.btn`, `.icon-circle`, `.container`, `.section`,
  `.bg-alt`/`.bg-green`/`.bg-acid`, `.marquee`, `.reveal`). Don't hardcode colors.
  (`--color-navy`/`--color-char`/`--color-paper` are legacy aliases mapped to the new palette.)
- **Fonts are self-hosted** via `@fontsource-variable/*` (imported in `global.css`). Do not add
  external font CDNs — outbound network is restricted.
- **Content** is German and sourced from `content/*.md`. Company/nav/service data is centralized
  in `src/data/site.ts` — update there, not in individual pages.
- **Components** (`src/components/`) are composable primitives; pages in `src/pages/` compose them.
- Keep motion subtle and behind `prefers-reduced-motion` (handled globally by `.reveal`).
- Images go through `astro:assets` (`src/assets/images/`) for optimization.

## Adding a page

Create `src/pages/<slug>.astro`, wrap in `BaseLayout`, compose `PageHero` + `Section` +
content primitives + `ContactCTA`. If it's a service, add it to `services` in `src/data/site.ts`
so it appears in the nav, homepage index, and footer automatically.
