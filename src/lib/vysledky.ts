// Dotazy pro vyhodnocení dotazníku. Drženo mimo stránku, ať jde SQL číst
// bez prokousávání se šablonou.

import { neon } from "@neondatabase/serverless";

export type Souhrn = {
  celkem: number;
  web: number;
  papir: number;
  prvni: string | null;
  posledni: string | null;
  sKontaktem: number;
};

export type ProblemRadek = { problem: string; pocet: number };

export type ProjektRadek = {
  id: string;
  hodnoceni: number;
  prumer: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
};

export type VolnyText = { vytvoreno: string; text: string };

export type Kontakt = {
  vytvoreno: string;
  jmeno: string | null;
  email: string | null;
  telefon: string | null;
  zajmy: string[];
  zmena: string | null;
};

export type Vysledky = {
  souhrn: Souhrn;
  problemy: ProblemRadek[];
  jine: VolnyText[];
  projekty: ProjektRadek[];
  zmeny: VolnyText[];
  kontakty: Kontakt[];
};

export async function nactiVysledky(url: string): Promise<Vysledky> {
  const sql = neon(url);

  const [souhrn, problemy, jine, projekty, zmeny, kontakty] = await Promise.all([
    sql`
      select
        count(*)::int                                      as celkem,
        count(*) filter (where zdroj = 'web')::int         as web,
        count(*) filter (where zdroj = 'papir')::int       as papir,
        min(vytvoreno)                                     as prvni,
        max(vytvoreno)                                     as posledni,
        count(*) filter (where souhlas)::int               as "sKontaktem"
      from odpovedi
    `,
    sql`
      select p as problem, count(*)::int as pocet
      from odpovedi, unnest(problemy) as p
      group by p
      order by count(*) desc, p
    `,
    sql`
      select vytvoreno, problem_jine as text
      from odpovedi
      where problem_jine is not null
      order by vytvoreno desc
    `,
    sql`
      select
        key                                                as id,
        count(*)::int                                      as hodnoceni,
        round(avg(value::int), 2)::float                   as prumer,
        count(*) filter (where value::int = 1)::int        as h1,
        count(*) filter (where value::int = 2)::int        as h2,
        count(*) filter (where value::int = 3)::int        as h3,
        count(*) filter (where value::int = 4)::int        as h4
      from odpovedi, jsonb_each_text(projekty)
      group by key
      order by avg(value::int) desc, key
    `,
    sql`
      select vytvoreno, zmena as text
      from odpovedi
      where zmena is not null
      order by vytvoreno desc
    `,
    // Kontakty jen tam, kde je souhlas. Databáze jinak uložit nedovolí,
    // ale filtrujeme i tady — obrana do hloubky.
    sql`
      select vytvoreno, jmeno, email, telefon, kontakt_zajmy as zajmy, zmena
      from odpovedi
      where souhlas and (email is not null or telefon is not null)
      order by vytvoreno desc
    `,
  ]);

  return {
    souhrn: souhrn[0] as Souhrn,
    problemy: problemy as ProblemRadek[],
    jine: jine as VolnyText[],
    projekty: projekty as ProjektRadek[],
    zmeny: zmeny as VolnyText[],
    kontakty: kontakty as Kontakt[],
  };
}
