# Za lepší Mariánské Lázně

Statický web pro kandidátku **Za lepší Mariánské Lázně** do komunálních voleb v Mariánských Lázních v září 2026.

## Tech stack

- **Astro 5** (statický výstup, SSG)
- **Tailwind CSS 4** (`@tailwindcss/vite`, CSS-first konfigurace přes `@theme`)
- **React 19** jako Astro islands (hamburger menu, kontaktní formulář)
- **Source Sans 3** z Google Fonts
- **Lucide ikony** přes `astro-icon` + `@iconify-json/lucide` (inlined SVG, zero runtime JS)
- **Vercel** deploy (statický hosting, konfigurace v `vercel.json`)
- **Formspree** pro kontaktní formulář (endpoint v `src/lib/site.ts`)
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
    ContactForm.tsx             # React island — POST na Formspree endpoint
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

## Deploy na Vercel

1. Propojte repozitář (vercel.com → New Project → Import).
2. Vercel automaticky detekuje Astro framework. Konfigurace je
   v `vercel.json`:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Security headers a cache pro `/_astro/*` assety
3. Nic víc není potřeba — Vercel nasadí pure statický výstup bez adaptéru.
4. Po nasazení domény odkomentujte Plausible script v `Base.astro`
   a doplňte správnou hodnotu `data-domain`.

### Kontaktní formulář (Formspree)

Formulář na `/kontakt` je React island, který posílá `POST` na externí
endpoint. Výchozí nastavení používá **Formspree**:

1. Zaregistrujte se na [formspree.io](https://formspree.io) a vytvořte
   nový formulář (např. „Kontakt — kampaň").
2. Z dashboardu zkopírujte endpoint ve tvaru
   `https://formspree.io/f/xxxxxxxx`.
3. Vložte ho do `src/lib/site.ts` → `forms.contactEndpoint`.
4. Dokud je tam výchozí placeholder `REPLACE_WITH_FORM_ID`, formulář
   uživateli zobrazí chybovou hlášku a vyzve ke kontaktu e-mailem.

Alternativy: Basin, Web3Forms, nebo vlastní Vercel Serverless Function
v `src/pages/api/contact.ts` — stačí změnit endpoint v `site.ts`
(a v případě API route přidat `@astrojs/vercel` adaptér + přepnout
na SSR).

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

## Dotazník pro obyvatele

Online dotazník na `/dotaznik` zapisuje odpovědi do Postgresu na Neonu.

**Proměnná prostředí:** `DATABASE_URL` — connection string na Neon projekt
`lepsiml-dotaznik`. Nastavuje se v Nastavení projektu na Vercelu
(Environment Variables) pro Production i Preview. Bez ní vrací
`/api/dotaznik` chybu 503 a nic se neukládá; zbytek webu funguje.

Lokálně: založit `.env` s `DATABASE_URL=...` (soubor je v `.gitignore`).

**Schéma** je v tabulce `odpovedi`. Kromě sloupců hlídá i dvě věci, na které
se nedá zapomenout v aplikačním kódu: v otázce 1 smí být nejvýš tři odpovědi
a kontaktní údaje se nedají uložit bez zaškrtnutého souhlasu.

**Export odpovědí** pro vyhodnocení:

```sql
select vytvoreno, problemy, problem_jine, projekty, zmena, zdroj
from odpovedi order by vytvoreno;
```

Kontaktní údaje jsou v samostatných sloupcích (`email`, `telefon`, `jmeno`,
`souhlas`, `kontakt_zajmy`) — pro analýzu odpovědí je nepotřebujete, tak je
do exportu netahejte.
