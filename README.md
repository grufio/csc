# CSC Electronic AG — Website

Responsive Website für **CSC Electronic AG** (csc.ch), dem unabhängigen Schweizer
Distributor für elektronische Komponenten. Editoriales, architektonisches Design
mit großformatiger Typografie, warmer Zwei-Ton-Palette und ruhigem, feingliedrigem Layout.

## Stack

- **[Astro](https://astro.build)** — statische Site-Generierung
- **Tailwind CSS v4** (via `@tailwindcss/vite`) + zentrales Design-System in `src/styles/global.css`
- **Schriften** lokal gebündelt via `@fontsource-variable` (Syne für Display, Inter für Text) — keine externen CDNs
- **TypeScript**

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf http://localhost:4321
npm run build      # statischer Build nach dist/
npm run preview    # Build lokal vorschauen
```

## Struktur

```
content/                 # Original-Inhalte von csc.ch (Copy-Quelle, DE)
public/favicon.png
src/
  assets/images/         # optimierte Bilder (astro:assets)
  components/            # Header, Footer, Hero, ServiceGrid, Section, FeatureList, SpecTable, Callout, PageHero, ContactCTA
  data/site.ts          # zentrale Firmen-/Navigations-/Service-Daten
  layouts/BaseLayout.astro
  pages/                # index + 8 Leistungsseiten + kontakt
  styles/global.css     # Design-Tokens & Basis-Styles
```

## Design-System

In Anlehnung an floema.com — große solide Farbblöcke, ruhige Grotesk-Typografie, weiche Rundungen.

- **Palette (3 Blöcke + Akzent):** warmes Hellgrau `#eceae3` (Basis), tiefes Dunkelgrün `#0e2a22`,
  Chartreuse `#e9e778` (Akzent), Ink `#1c1c1a`
- **Typografie:** Hanken Grotesk (Display + Text), mittlere Gewichte, sentence-case, moderate Größen
- **Muster:** Pill-Tab-Navigation, große abwechselnde Farbsektionen, Line-Art-Komponenten-„Skyline",
  runde Icon-Badges & Kreis-Pfeil-Buttons, nummerierter Leistungs-Index, kinetischer Marquee,
  zentrierte Statements auf Dunkelgrün
- **Motion:** dezente Scroll-Reveals (IntersectionObserver), respektiert `prefers-reduced-motion`

## Inhalte

Alle Texte stammen aus `content/*.md` (Extrakt von csc.ch, Deutsch). Die Architektur ist
i18n-vorbereitet; eine englische Version erfordert die Übersetzung der Inhaltsseiten.
Aktuell ist ein Motiv-Foto (Leiterplatte) vorhanden — weitere Sektionen nutzen
typografische/hairline-basierte Gestaltung und können bei Bedarf mit echten Fotos ergänzt werden.
