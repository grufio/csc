# CLAUDE.md

Guidance for working in this repository.

## What this is

Static marketing website for **CSC Electronic AG** (csc.ch), built with **Astro** +
**Tailwind CSS v4**. Bold editorial / architectural design inspired by floema.com:
big Syne type, high-contrast two-tone palette (charcoal `#211e1c` + acid `#e9e778` on a pale
base), hairlines, large color blocks, kinetic marquee. Deliberately *not* a rounded "Apple tile"
look and *not* a centered marketing layout — keep it asymmetric and type-led.

## Commands

- `npm run dev` — dev server (http://localhost:4321)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the build

## Conventions

- **Design tokens live in `src/styles/global.css`** (`@theme` block). Use the CSS custom
  properties (`--color-char`, `--color-paper`, `--color-acid`, `--color-ink`, `--font-display`,
  etc.) and the shared utility classes (`.display`, `.h2`, `.eyebrow`, `.lead`, `.link-more`,
  `.btn`/`.badge`, `.container`, `.section`, `.bg-alt`/`.bg-dark`/`.bg-acid`, `.marquee`,
  `.reveal`). Don't hardcode colors. (`--color-navy` is a legacy alias mapped to charcoal.)
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
