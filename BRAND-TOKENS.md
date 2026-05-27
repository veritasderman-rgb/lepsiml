# Brand Tokens — „Ať to tu žije!" (Piráti Mariánské Lázně)

> **Účel:** Technické vstupy pro Claude Designer (grafika) a Claude Code (vývoj webu).
> **Identita:** Hybrid — vychází z oficiální vizuální identity České pirátské strany (čerň + tyrkysová),
> doplněno o lokální akcent inspirovaný empírovou architekturou a lázeňskými lesy Mariánských Lázní.
>
> **Pravidlo č. 1:** Všechno staví na **pirátské černi** a **tyrkysové**. Lokální akcenty (zlato-okrová, lesní zeleň)
> používej pouze jako doplněk — nikdy nesmí přebít hlavní pirátskou identitu.

---

## 1. Barevná paleta

### 1.1 Primární (Piráti — nedotknutelné)

| Token | HEX | RGB | Použití |
|---|---|---|---|
| `--color-ink` | `#000000` | `0, 0, 0` | Logo, headlines, hlavní text |
| `--color-paper` | `#FFFFFF` | `255, 255, 255` | Pozadí, inverze loga |
| `--color-pirate` | `#00B2A8` | `0, 178, 168` | CTA buttony, odkazy, akcent, hover stavy |
| `--color-pirate-dark` | `#008078` | `0, 128, 120` | Hover na tyrkysové, aktivní stav |
| `--color-pirate-light` | `#7FE0D9` | `127, 224, 217` | Highlight, subtle bg, badge |

### 1.2 Lokální akcent (Mariánské Lázně)

| Token | HEX | RGB | Použití |
|---|---|---|---|
| `--color-spa-gold` | `#D4A24C` | `212, 162, 76` | Lokální akcent — kolonáda, krémové fasády; sekundární CTA, decorative |
| `--color-spa-forest` | `#2D5F4E` | `45, 95, 78` | Lázeňské lesy; success state, ekologie, příroda |
| `--color-spa-stone` | `#F5EFE0` | `245, 239, 224` | Pískovcový krém; jemné pozadí sekcí, karty |

### 1.3 Neutrály (UI)

| Token | HEX | Použití |
|---|---|---|
| `--color-graphite` | `#1A1A1A` | Tmavý text na světlém pozadí (alternativa k čisté černi pro delší texty) |
| `--color-smoke` | `#6B6B6B` | Sekundární text, popisky, metadata |
| `--color-ash` | `#A8A8A8` | Disabled stav, placeholder |
| `--color-mist` | `#E8E8E8` | Borders, dividers |
| `--color-cream` | `#FAF8F3` | Teplé pozadí stránek (alternativa k čistě bílé) |

### 1.4 Stavové barvy

| Token | HEX | Použití |
|---|---|---|
| `--color-success` | `#2D7D5B` | Úspěch, validace OK (laděno do lázeňské zeleně) |
| `--color-warning` | `#E89F2E` | Upozornění |
| `--color-error` | `#C8392D` | Chyba, destruktivní akce |
| `--color-info` | `#2E78C8` | Informační hláška |

### 1.5 Pravidla použití barev

- **Hlavní plocha:** vždy `--color-paper` nebo `--color-cream` jako pozadí, `--color-ink` pro text.
- **CTA (Volit, Přidej se, Podpoř):** `--color-pirate` na `--color-paper`, nebo `--color-ink` na `--color-pirate`.
- **Lokální akcent:** používej `--color-spa-gold` pro dekorativní prvky (linky, ikony, podtržení), **nikdy ne pro CTA** — to patří pirátské tyrkysové.
- **Kontrast:** všechny kombinace text/pozadí musí splňovat WCAG AA (min 4.5:1 pro body text, 3:1 pro headlines).
- **Tmavý režim:** invertuj `--color-ink` ↔ `--color-paper`, tyrkysovou ponech, neutrály otoč na tmavé varianty.

---

## 2. Typografie

### 2.1 Fonty (Google Fonts — zdarma, plná CZ diakritika)

| Role | Font | Fallback | Důvod |
|---|---|---|---|
| **Display / Headlines** | `Bebas Neue` | `Impact, Arial Black, sans-serif` | Pirátská tradice — condensed, dramatic, výborný pro slogany |
| **Body / UI** | `Inter` | `Roboto, "Helvetica Neue", Arial, sans-serif` | Moderní, čistý, perfektní pro screen, plná CZ diakritika |
| **Akcent / Citáty** | `Cormorant Garamond` | `Georgia, "Times New Roman", serif` | Lázeňská elegance — empírová typografie, odkazuje na historii Mariánek |
| **Mono / Kód** | `JetBrains Mono` | `Menlo, Consolas, monospace` | Pro technické sekce, čísla, data |

### 2.2 Import (HTML head)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### 2.3 Typografická škála (modular scale 1.250 — major third)

| Token | Velikost | Line-height | Použití |
|---|---|---|---|
| `--text-display` | `4.768rem` / 76px | 1.05 | Hero headline (Bebas Neue uppercase) |
| `--text-h1` | `3.815rem` / 61px | 1.1 | Stránkové nadpisy (Bebas Neue) |
| `--text-h2` | `3.052rem` / 49px | 1.15 | Sekce (Bebas Neue) |
| `--text-h3` | `2.441rem` / 39px | 1.2 | Podsekce (Bebas Neue / Inter 700) |
| `--text-h4` | `1.953rem` / 31px | 1.25 | Karty, bloky (Inter 600) |
| `--text-h5` | `1.563rem` / 25px | 1.3 | Inter 600 |
| `--text-lg` | `1.25rem` / 20px | 1.5 | Lead paragraph, perex |
| `--text-base` | `1rem` / 16px | 1.6 | Body text |
| `--text-sm` | `0.8rem` / 13px | 1.5 | Metadata, popisky |
| `--text-xs` | `0.64rem` / 10px | 1.4 | Legal, captions |

### 2.4 Pravidla typografie

- **Bebas Neue je VŽDY uppercase** (`text-transform: uppercase`), letter-spacing `0.02em` až `0.05em`.
- **Inter pro body** — nepoužívej Bebas pro odstavce, je to display font.
- **Cormorant Garamond** používej úsporně — citáty, signatury, dekorativní prvky.
- **Max šířka odstavce:** `65ch` pro pohodlné čtení.
- **CZ-specific:** zapni `font-feature-settings: "ss01", "kern"` pro správnou typografii (uvozovky „xxx", apostrofy).

---

## 3. Logo

### 3.1 Soubor

- **Master:** `286659567_5234767386609494_6413822378597525888_n.jpg` (1:1, černá silueta na bílém)
- **Doporučená produkce:** převést do **SVG** pro web (ostrost na všech rozlišeních + možnost barevné varianty CSS-em).
- **Bitmap náhrady:** PNG 24-bit s alfa kanálem ve velikostech 512×512, 1024×1024, 2048×2048.

### 3.2 Varianty (doporučené k vyrobení)

1. **Primary** — černá na bílé (master)
2. **Inverse** — bílá na černé / tyrkysové
3. **Monochrome** — tyrkysová `#00B2A8` (pro tonální použití na bílé)
4. **Outline only** — pouze kruh + obrys plachty (pro favicon, malé velikosti)

### 3.3 Ochranná zóna a minimální velikost

- **Ochranná zóna:** minimálně `1/4 výšky loga` na všech stranách (nic se nesmí dotknout vnějšího kruhu).
- **Minimální velikost — digital:** 32×32 px (favicon), 48×48 px (UI), 96×96 px (čitelná silueta).
- **Minimální velikost — print:** 15 mm na výšku.

### 3.4 Co s logem NEDĚLAT

- Neměnit proporce (vždy 1:1).
- Nepřidávat efekty (stín, glow, gradient, outline).
- Neumisťovat na fotografie bez dostatečného kontrastu (vždy podlož plochou barvou nebo overlay).
- Nedoplňovat texty dovnitř kruhu.
- Nerotovat.

---

## 4. Spacing & Layout

### 4.1 Spacing scale (4px / 8px grid)

| Token | Hodnota | Příklad použití |
|---|---|---|
| `--space-1` | `4px` | Inline gap, ikony |
| `--space-2` | `8px` | Form gaps |
| `--space-3` | `12px` | Button padding (vertical) |
| `--space-4` | `16px` | Base padding |
| `--space-6` | `24px` | Card padding |
| `--space-8` | `32px` | Section gaps |
| `--space-12` | `48px` | Block separations |
| `--space-16` | `64px` | Major section padding |
| `--space-24` | `96px` | Hero spacing |
| `--space-32` | `128px` | Page sections (desktop) |

### 4.2 Breakpoints (mobile-first)

| Token | Hodnota | Cílení |
|---|---|---|
| `--bp-sm` | `640px` | Velký mobil |
| `--bp-md` | `768px` | Tablet |
| `--bp-lg` | `1024px` | Desktop |
| `--bp-xl` | `1280px` | Široký desktop |
| `--bp-2xl` | `1536px` | Velký monitor |

### 4.3 Container

- `max-width: 1200px` pro hlavní obsah.
- `max-width: 720px` pro článkový text (čitelnost).
- Padding kontejneru: `clamp(16px, 5vw, 64px)`.

### 4.4 Radius & Shadows

| Token | Hodnota | Použití |
|---|---|---|
| `--radius-none` | `0` | Pirátská strohá estetika — default pro buttons |
| `--radius-sm` | `2px` | Inputs |
| `--radius-md` | `6px` | Cards |
| `--radius-lg` | `12px` | Modals |
| `--radius-full` | `9999px` | Avatary, badge |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Subtle elevation |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Karty |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | Modaly, dropdowny |

---

## 5. CSS Variables (drop-in)

Vlož do `:root` v hlavním CSS souboru:

```css
:root {
  /* === Barvy — Piráti === */
  --color-ink: #000000;
  --color-paper: #FFFFFF;
  --color-pirate: #00B2A8;
  --color-pirate-dark: #008078;
  --color-pirate-light: #7FE0D9;

  /* === Barvy — Mariánské Lázně === */
  --color-spa-gold: #D4A24C;
  --color-spa-forest: #2D5F4E;
  --color-spa-stone: #F5EFE0;

  /* === Neutrály === */
  --color-graphite: #1A1A1A;
  --color-smoke: #6B6B6B;
  --color-ash: #A8A8A8;
  --color-mist: #E8E8E8;
  --color-cream: #FAF8F3;

  /* === Stavy === */
  --color-success: #2D7D5B;
  --color-warning: #E89F2E;
  --color-error: #C8392D;
  --color-info: #2E78C8;

  /* === Typografie === */
  --font-display: "Bebas Neue", Impact, "Arial Black", sans-serif;
  --font-body: "Inter", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-accent: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-mono: "JetBrains Mono", Menlo, Consolas, monospace;

  --text-display: 4.768rem;
  --text-h1: 3.815rem;
  --text-h2: 3.052rem;
  --text-h3: 2.441rem;
  --text-h4: 1.953rem;
  --text-h5: 1.563rem;
  --text-lg: 1.25rem;
  --text-base: 1rem;
  --text-sm: 0.8rem;
  --text-xs: 0.64rem;

  /* === Spacing === */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* === Radius === */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* === Shadow === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.12);

  /* === Container === */
  --container-max: 1200px;
  --container-prose: 720px;
}

/* === Dark mode (volitelné) === */
@media (prefers-color-scheme: dark) {
  :root {
    --color-ink: #FFFFFF;
    --color-paper: #0A0A0A;
    --color-graphite: #E8E8E8;
    --color-smoke: #A8A8A8;
    --color-mist: #2A2A2A;
    --color-cream: #131313;
  }
}

/* === Base styly === */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-ink);
  background: var(--color-paper);
  font-feature-settings: "ss01", "kern";
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

h1 { font-size: var(--text-h1); }
h2 { font-size: var(--text-h2); }
h3 { font-size: var(--text-h3); }

a {
  color: var(--color-pirate);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
a:hover { color: var(--color-pirate-dark); }

.btn-primary {
  background: var(--color-pirate);
  color: var(--color-paper);
  padding: var(--space-3) var(--space-6);
  border: 2px solid var(--color-pirate);
  border-radius: var(--radius-none);
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: var(--text-lg);
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-primary:hover {
  background: var(--color-pirate-dark);
  border-color: var(--color-pirate-dark);
}

.btn-secondary {
  background: transparent;
  color: var(--color-ink);
  border: 2px solid var(--color-ink);
}
.btn-secondary:hover {
  background: var(--color-ink);
  color: var(--color-paper);
}
```

---

## 6. Tailwind CSS konfigurace

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        pirate: {
          DEFAULT: "#00B2A8",
          dark: "#008078",
          light: "#7FE0D9",
        },
        spa: {
          gold: "#D4A24C",
          forest: "#2D5F4E",
          stone: "#F5EFE0",
        },
        graphite: "#1A1A1A",
        smoke: "#6B6B6B",
        ash: "#A8A8A8",
        mist: "#E8E8E8",
        cream: "#FAF8F3",
        success: "#2D7D5B",
        warning: "#E89F2E",
        error: "#C8392D",
        info: "#2E78C8",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "Arial Black", "sans-serif"],
        body: ['"Inter"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"],
        accent: ['"Cormorant Garamond"', "Georgia", '"Times New Roman"', "serif"],
        mono: ['"JetBrains Mono"', "Menlo", "Consolas", "monospace"],
      },
      fontSize: {
        display: ["4.768rem", { lineHeight: "1.05" }],
        h1: ["3.815rem", { lineHeight: "1.1" }],
        h2: ["3.052rem", { lineHeight: "1.15" }],
        h3: ["2.441rem", { lineHeight: "1.2" }],
        h4: ["1.953rem", { lineHeight: "1.25" }],
        h5: ["1.563rem", { lineHeight: "1.3" }],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        md: "6px",
        lg: "12px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 12px rgba(0,0,0,0.08)",
        lg: "0 12px 32px rgba(0,0,0,0.12)",
      },
      maxWidth: {
        container: "1200px",
        prose: "720px",
      },
    },
  },
  plugins: [],
};
```

---

## 7. Design tokens (JSON — pro Figma Tokens, Style Dictionary, atd.)

```json
{
  "color": {
    "pirate": {
      "ink": { "value": "#000000" },
      "paper": { "value": "#FFFFFF" },
      "primary": { "value": "#00B2A8" },
      "primaryDark": { "value": "#008078" },
      "primaryLight": { "value": "#7FE0D9" }
    },
    "spa": {
      "gold": { "value": "#D4A24C" },
      "forest": { "value": "#2D5F4E" },
      "stone": { "value": "#F5EFE0" }
    },
    "neutral": {
      "graphite": { "value": "#1A1A1A" },
      "smoke": { "value": "#6B6B6B" },
      "ash": { "value": "#A8A8A8" },
      "mist": { "value": "#E8E8E8" },
      "cream": { "value": "#FAF8F3" }
    },
    "status": {
      "success": { "value": "#2D7D5B" },
      "warning": { "value": "#E89F2E" },
      "error": { "value": "#C8392D" },
      "info": { "value": "#2E78C8" }
    }
  },
  "font": {
    "display": { "value": "Bebas Neue" },
    "body": { "value": "Inter" },
    "accent": { "value": "Cormorant Garamond" },
    "mono": { "value": "JetBrains Mono" }
  },
  "size": {
    "text": {
      "display": { "value": "4.768rem" },
      "h1": { "value": "3.815rem" },
      "h2": { "value": "3.052rem" },
      "h3": { "value": "2.441rem" },
      "h4": { "value": "1.953rem" },
      "h5": { "value": "1.563rem" },
      "lg": { "value": "1.25rem" },
      "base": { "value": "1rem" },
      "sm": { "value": "0.8rem" },
      "xs": { "value": "0.64rem" }
    },
    "space": {
      "1": { "value": "4px" },
      "2": { "value": "8px" },
      "3": { "value": "12px" },
      "4": { "value": "16px" },
      "6": { "value": "24px" },
      "8": { "value": "32px" },
      "12": { "value": "48px" },
      "16": { "value": "64px" },
      "24": { "value": "96px" },
      "32": { "value": "128px" }
    }
  },
  "radius": {
    "none": { "value": "0" },
    "sm": { "value": "2px" },
    "md": { "value": "6px" },
    "lg": { "value": "12px" },
    "full": { "value": "9999px" }
  }
}
```

---

## 8. Tone of voice & vizuální charakter (rychlý brief pro Claude Designer)

- **Přímý, neformální, ale věcný.** Žádný korporátní žargon.
- **Lokální kontext:** Mariánské Lázně — lázně, kolonáda, lázeňské lesy, městská hrdost, ale **bez kýče** (žádné stock fotky šťastných důchodců u pramene).
- **Vizuální motiv:** pirátská vlajka + silueta lázeňské architektury (kolonáda, rotunda, fasády).
- **Fotografie:** dokumentární styl — skutečné lokace, skuteční lidé, dobré světlo. Filter: lehce zvýšený kontrast, mírně teplejší tón (lázeňská cream/gold).
- **Ikonografie:** lineární, 2px stroke, ostré rohy (`stroke-linejoin: miter`), barva `--color-ink` nebo `--color-pirate`.
- **Layout:** vzdušný, mřížkovaný, hodně bílého prostoru — kontrastuje s hustotou klasické politické grafiky.
- **NE-dělat:** gradienty, drop shadows na textu, glassmorphism, neon, overengineered animace.
- **ANO-dělat:** velká typografie, ostré hrany, fotka + barevná plocha, jednoduché grid layouty.

---

## 9. Rychlý checklist pro Claude Code (web)

Když začínáš nový komponent / stránku:

1. Importuj fonty v `<head>` (viz sekce 2.2).
2. Zkopíruj `:root` blok z sekce 5 do globálního CSS.
3. Pro Tailwind: nahraď defaultní `tailwind.config.js` blokem ze sekce 6.
4. Logo používej jako `<img src="/logo.svg" alt="Piráti Mariánské Lázně">` s `width`/`height` atributy.
5. Hero CTA: `class="btn-primary"` nebo `class="bg-pirate text-paper font-display uppercase tracking-wider px-6 py-3"`.
6. Body text: `class="font-body text-base text-graphite"`.
7. Před deployem: spusť Lighthouse → cíl 95+ Performance, 100 Accessibility.

---

## 10. Pravidla, která se nedají snadno automatizovat

- **Vždy** se ptej, jestli daný design rezonuje s pirátskou hodnotou (transparentnost, otevřenost, sebeironie) — pokud vypadá jako reklama na banku, je to špatně.
- **Vždy** kontrolui CZ diakritiku v rendrovaných fontech (Bebas Neue má kompletní, Inter taky — ale custom display fonty často ne).
- **Vždy** testuj na mobilu — politický web čte 70 % lidí na telefonu.
- Když si nejsi jistý, ubírej. Pirátský brand miluje strohost.

---

*Verze 1.0 — 2026-05-27. Tento dokument je living spec. Když měníš token, měň ho na jednom místě a propaguj do CSS/Tailwind/JSON současně.*
