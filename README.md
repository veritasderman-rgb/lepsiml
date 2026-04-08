# Za lepší Mariánské Lázně

Statický web pro kandidátku **Za lepší Mariánské Lázně** do komunálních voleb v Mariánských Lázních v září 2026.

## Tech stack

- **Astro 5** (statický výstup, SSG)
- **Tailwind CSS 4** (`@tailwindcss/vite`, CSS-first konfigurace přes `@theme`)
- **React 19** jako Astro islands (hamburger menu, kontaktní formulář)
- **Source Sans 3** z Google Fonts
- **Lucide ikony** přes `astro-icon` + `@iconify-json/lucide` (inlined SVG, zero runtime JS)
- **Netlify** deploy (statický hosting + Netlify Forms pro kontakt)
- **Plausible** analytika (script v `Base.astro` zakomentovaný, doplní se po nasazení domény)

## Struktura

```
src/
  layouts/Base.astro            # HTML shell, head, fonty, OG meta
  components/
    Header.astro                # Desktop navigace
    MobileMenu.tsx              # React island — fullscreen overlay
    Footer.astro
    Hero.astro
    PillarStrip.astro           # 3 pilíře pod hero
    LeaderCard.astro
    TeamGrid.astro
    FeatureCard.astro
    ProgramTopic.astro          # Karta programového tématu + accordion
    PodcastCard.astro
    PhotoPlaceholder.astro      # Šedý placeholder s Lucide ikonou User
    ContactForm.tsx             # React island — Netlify Forms
  pages/
    index.astro
    program.astro
    kandidati.astro
    podcast.astro
    kontakt.astro
  lib/site.ts                   # Shared obsah (nav, kandidáti, program…)
  styles/global.css             # Tailwind 4 + design tokens + komponenty
public/
  favicon.svg                   # Zelený čtverec s „ML“
  robots.txt
```

## Vývoj

```bash
npm install
npm run dev
```

Build pro produkci:

```bash
npm run build
npm run preview
```

## Obsah

Veškerý obsah kampaně (pilíře, kandidáti, program, podcast, kontakty)
je centralizovaný v `src/lib/site.ts`. Úpravy textů i přidávání kandidátů
dělejte zde — komponenty automaticky konzumují.

## Fotografie

Kandidáti zatím používají šedé placeholdery s Lucide ikonou. Až budete
mít fotky, stačí je nahrát do `public/images/` a v komponentě
`PhotoPlaceholder.astro` (nebo přímo v datech) doplnit `src`.

## Deploy na Netlify

1. Propojte repozitář.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Netlify Forms: formulář na `/kontakt` má build-time detekci
   (skrytý statický form) + React island posílá `POST` na `/`
   s `form-name=contact`.
5. Po nasazení domény odkomentujte Plausible script v `Base.astro`
   a doplňte správnou hodnotu `data-domain`.

## Design principy

- **Profesionální, ne amatérské.** Čistý typografický hero, žádné emoji.
- **Lucide SVG ikony**, konzistentní velikost 20–34 px.
- **Barvy:** zelená (příroda, lázně) + zlatá (UNESCO, hodnota).
- **Whitespace:** štědrý — sekce 72–96 px, karty 28 px vnitřní padding.
- **Animace:** Intersection Observer fade-in, 600 ms, respektuje
  `prefers-reduced-motion`.
- **Responsive:** mobile-first, breakpointy 640/768/1024 px, max 1120 px.

---

Za lepší Mariánské Lázně — Protože víme, jak na to.
