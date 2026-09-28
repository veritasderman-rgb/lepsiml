// Tipovačka → Neon (tabulka `tipy`).
//
// POST uloží tip, GET vrátí jen souhrn: počet tipů, průměr za každou
// kandidátku a přepočet na mandáty. Jednotlivé tipy ani kontakty ven nejdou.
// Stejně jako /api/dotaznik: `prerender = false` z ní na Vercelu udělá
// funkci a bez DATABASE_URL vrací 503. Uzávěrku, věk a souhlas hlídá
// i databáze, tady se kontrolují kvůli srozumitelné chybové hlášce.

import type { APIRoute } from "astro";
import { neon } from "@neondatabase/serverless";
import {
  SOUCET_TOLERANCE,
  TIP_KARENCE_DO_ISO,
  TIP_KARENCE_OD_ISO,
  TIP_MIN_PRO_PRUMER,
  TIP_UZAVERKA_ISO,
  kandidatky,
  prepocetMandatu,
} from "../../lib/tipovacka";

export const prerender = false;

const LIMIT = { email: 254, telefon: 40, jmeno: 100 };
const UZAVERKA = new Date(TIP_UZAVERKA_ISO).getTime();
const KARENCE_OD = new Date(TIP_KARENCE_OD_ISO).getTime();
const KARENCE_DO = new Date(TIP_KARENCE_DO_ISO).getTime();
const CISLA = kandidatky.map((k) => k.cislo);

function json(body: unknown, status: number, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...headers },
  });
}

function dbUrl(): string | undefined {
  return import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
}

/** Ořízne, zkrátí a prázdný řetězec převede na null. */
function text(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim().slice(0, max);
  return t.length ? t : null;
}

/** Procento 0–100 zaokrouhlené na desetiny; přijme i desetinnou čárku. */
function procento(v: unknown): number | null {
  const s = typeof v === "number" ? String(v) : typeof v === "string" ? v.trim().replace(",", ".") : "";
  if (!/^\d{1,3}(\.\d+)?$/.test(s)) return null;
  const n = Math.round(Number(s) * 10) / 10;
  return n >= 0 && n <= 100 ? n : null;
}

export const GET: APIRoute = async () => {
  const now = Date.now();
  if (now >= KARENCE_OD && now < KARENCE_DO) {
    return json({ karence: true }, 200, { "cache-control": "public, s-maxage=300" });
  }

  const url = dbUrl();
  if (!url) return json({ chyba: "Tipovačka zatím není nakonfigurovaná." }, 503);

  try {
    const sql = neon(url);
    const [souhrn, radky] = await Promise.all([
      sql`select count(*)::int as pocet, round(avg(tip_ucast), 1)::float as ucast from tipy`,
      sql`
        select key as cislo, round(avg(value::numeric), 1)::float as prumer
        from tipy, jsonb_each_text(tip)
        group by key
      `,
    ]);
    const pocet = (souhrn[0]?.pocet as number) ?? 0;
    if (pocet < TIP_MIN_PRO_PRUMER) {
      return json({ pocet, min: TIP_MIN_PRO_PRUMER }, 200, { "cache-control": "public, s-maxage=60" });
    }

    const prumery: Record<number, number> = {};
    for (const c of CISLA) prumery[c] = 0;
    for (const r of radky) {
      const c = Number(r.cislo);
      if (CISLA.includes(c)) prumery[c] = r.prumer as number;
    }
    return json(
      { pocet, ucast: souhrn[0].ucast, prumery, mandaty: prepocetMandatu(prumery) },
      200,
      { "cache-control": "public, s-maxage=60" },
    );
  } catch (e) {
    console.error("souhrn tipů selhal:", e instanceof Error ? e.message : "neznámá chyba");
    return json({ chyba: "Souhrn se nepodařilo načíst." }, 500);
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (Date.now() >= UZAVERKA) {
    return json({ chyba: "Tipovačka je uzavřená — volební místnosti už jsou otevřené." }, 403);
  }

  const url = dbUrl();
  if (!url) return json({ chyba: "Tipovačka zatím není nakonfigurovaná." }, 503);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ chyba: "Neplatný formát požadavku." }, 400);
  }

  // Past na roboty: skryté pole `web` člověk nevyplní.
  if (text(body.web, 100)) return json({ ok: true }, 200);

  // Tip za každou kandidátku; prázdné pole bereme jako nulu.
  const raw = (body.tip && typeof body.tip === "object" ? body.tip : {}) as Record<string, unknown>;
  const tip: Record<string, number> = {};
  for (const c of CISLA) {
    const v = raw[String(c)];
    const n = v === "" || v === undefined || v === null ? 0 : procento(v);
    if (n === null) {
      return json({ chyba: "Tipy zadejte jako procenta od 0 do 100." }, 400);
    }
    tip[String(c)] = n;
  }
  const soucet = Object.values(tip).reduce((a, b) => a + b, 0);
  if (Math.abs(soucet - 100) > SOUCET_TOLERANCE) {
    return json({ chyba: `Součet tipů musí dát 100 %, teď dává ${soucet.toFixed(1).replace(".", ",")} %.` }, 400);
  }

  const tipUcast = procento(body.tipUcast);
  if (tipUcast === null) {
    return json({ chyba: "Volební účast zadejte jako procento od 0 do 100." }, 400);
  }

  const email = text(body.email, LIMIT.email);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ chyba: "Zadejte prosím platný e-mail, ať se vám můžeme ozvat." }, 400);
  }

  if (body.plnolety !== true || body.souhlas !== true) {
    return json({ chyba: "Potvrďte prosím, že je vám 18 let, a souhlas s pravidly." }, 400);
  }

  const jmeno = text(body.jmeno, LIMIT.jmeno);
  const telefon = text(body.telefon, LIMIT.telefon);
  const novinky = body.novinky === true;

  try {
    const sql = neon(url);
    const r = await sql`
      insert into tipy (tip, tip_ucast, email, jmeno, telefon, plnolety, souhlas, novinky, zdroj)
      values (${JSON.stringify(tip)}::jsonb, ${tipUcast}, ${email}, ${jmeno}, ${telefon}, true, true, ${novinky}, 'web')
      on conflict ((lower(email))) do nothing
      returning id
    `;
    if (r.length === 0) {
      return json({ chyba: "Z tohoto e-mailu už tip máme. Platí jen jeden tip na e-mail." }, 409);
    }
    return json({ ok: true }, 201);
  } catch (e) {
    // Obsah tipu nelogujeme — je v něm e-mail.
    console.error("zápis tipu selhal:", e instanceof Error ? e.message : "neznámá chyba");
    return json({ chyba: "Tip se nepodařilo uložit. Zkuste to prosím znovu." }, 500);
  }
};

export const ALL: APIRoute = () => json({ chyba: "Použijte GET nebo POST." }, 405);
