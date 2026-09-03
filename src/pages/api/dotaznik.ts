// Příjem odpovědí z online dotazníku → Neon.
//
// Jediná serverová cesta na jinak statickém webu: `prerender = false` z ní
// na Vercelu udělá funkci, zbytek webu zůstává předgenerovaný. Potřebuje
// proměnnou prostředí DATABASE_URL s connection stringem na Neon; bez ní
// vrací 503 a nic nezapisuje.

import type { APIRoute } from "astro";
import { neon } from "@neondatabase/serverless";
import {
  SURVEY_MAX_PROBLEMS,
  surveyContactOptions,
  surveyProblems,
  surveyProjects,
} from "../../lib/survey";

export const prerender = false;

// Horní meze délek — ochrana proti zahlcení, ne validace obsahu.
const LIMIT = {
  problemJine: 500,
  zmena: 2000,
  email: 254,
  telefon: 40,
  jmeno: 100,
};

const PROBLEMY = new Set(surveyProblems);
const PROJEKTY = new Set(surveyProjects.map((p) => p.id));
const ZAJMY = new Set(surveyContactOptions.map((o) => o.id));

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

/** Ořízne, zkrátí a prázdný řetězec převede na null. */
function text(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim().slice(0, max);
  return t.length ? t : null;
}

export const POST: APIRoute = async ({ request }) => {
  const url = import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
  if (!url) {
    // Radši viditelná chyba než tiše zahozená odpověď respondenta.
    return json({ chyba: "Sběr odpovědí není nakonfigurovaný." }, 503);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ chyba: "Neplatný formát požadavku." }, 400);
  }

  // Past na roboty: pole `web` je ve formuláři skryté, člověk ho nevyplní.
  if (text(body.web, 100)) {
    // Tváříme se úspěšně, ať robot nezkouší jinou cestu.
    return json({ ok: true }, 200);
  }

  // Otázka 1 — jen známé možnosti, nejvýš tři.
  const problemy = Array.isArray(body.problemy)
    ? [...new Set(body.problemy.filter((p): p is string => typeof p === "string" && PROBLEMY.has(p)))]
        .slice(0, SURVEY_MAX_PROBLEMS)
    : [];

  // Otázka 2 — jen známé projekty, hodnota celé číslo 1–4.
  const projekty: Record<string, number> = {};
  const rawProjekty = body.projekty;
  if (rawProjekty && typeof rawProjekty === "object") {
    for (const [id, v] of Object.entries(rawProjekty as Record<string, unknown>)) {
      if (!PROJEKTY.has(id)) continue;
      const n = Number(v);
      if (Number.isInteger(n) && n >= 1 && n <= 4) projekty[id] = n;
    }
  }

  const problemJine = text(body.problemJine, LIMIT.problemJine);
  const zmena = text(body.zmena, LIMIT.zmena);

  const souhlas = body.souhlas === true;
  const zajmy = Array.isArray(body.kontaktZajmy)
    ? [...new Set(body.kontaktZajmy.filter((z): z is string => typeof z === "string" && ZAJMY.has(z)))]
    : [];

  // Kontakt ukládáme výhradně se souhlasem. Stejné pravidlo hlídá i databáze.
  const email = souhlas ? text(body.email, LIMIT.email) : null;
  const telefon = souhlas ? text(body.telefon, LIMIT.telefon) : null;
  const jmeno = souhlas ? text(body.jmeno, LIMIT.jmeno) : null;

  // Úplně prázdný dotazník neukládáme.
  const prazdny =
    problemy.length === 0 &&
    Object.keys(projekty).length === 0 &&
    !problemJine &&
    !zmena &&
    !email &&
    !telefon;
  if (prazdny) {
    return json({ chyba: "Vyplňte prosím aspoň jednu odpověď." }, 400);
  }

  try {
    const sql = neon(url);
    await sql`
      insert into odpovedi
        (problemy, problem_jine, projekty, zmena, kontakt_zajmy,
         email, telefon, jmeno, souhlas, zdroj)
      values
        (${problemy}, ${problemJine}, ${JSON.stringify(projekty)}::jsonb, ${zmena},
         ${souhlas ? zajmy : []}, ${email}, ${telefon}, ${jmeno}, ${souhlas}, 'web')
    `;
    return json({ ok: true }, 201);
  } catch (e) {
    // Obsah odpovědi nikam nelogujeme — jsou v ní osobní údaje.
    console.error("zápis odpovědi selhal:", e instanceof Error ? e.message : "neznámá chyba");
    return json({ chyba: "Odpověď se nepodařilo uložit. Zkuste to prosím znovu." }, 500);
  }
};

/** Jiné metody než POST nedávají smysl. */
export const ALL: APIRoute = () =>
  json({ chyba: "Použijte POST." }, 405);
