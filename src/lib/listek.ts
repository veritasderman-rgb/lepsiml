// Hlasovací lístek do zastupitelstva Mariánských Lázní — jak se počítají
// hlasy podle § 34 zákona č. 491/2001 Sb.:
//
//   a) křížek u jedné strany → hlas dostanou její kandidáti v pořadí,
//      nejvýš tolik, kolik má zastupitelstvo členů;
//   b) křížky u jednotlivých kandidátů z libovolných stran, nejvýš 21;
//   c) obojí — strana dostane hlasy jen pro tolik svých kandidátů v pořadí,
//      kolik zbývá do 21 po kandidátech označených u jiných stran.
//      Křížky u kandidátů téže strany se nepočítají, platí křížek u strany.
//
// Lístek je neplatný, když je označeno víc stran nebo víc než 21 kandidátů.
// Data kandidátek jsou z volby.gov.cz (src/data/kandidatky-kv2026.json).

import data from "../data/kandidatky-kv2026.json";
import { MANDATU } from "./volby2026";

export type Kandidat = {
  poradi: number;
  jmeno: string;
  vek: number;
  navrh: string;
  prislusnost: string;
  povolani: string;
  bydliste: string;
};
export type Listina = { cislo: number; nazev: string; kandidati: Kandidat[] };

export const listiny = data.kandidatky as Listina[];
export const legenda = data.legenda as Record<string, string>;
export const zdrojDat = { popis: data.zdroj, generovano: data.generovano };

/** Kandidát jednoznačně: číslo strany a pořadí na listině. */
export type Volba = { strana: number; poradi: number };

export type Vysledek =
  | { stav: "prazdny" }
  | { stav: "neplatny"; duvod: string }
  | {
      stav: "platny";
      /** Kdo dostane hlas, v pořadí: nejdřív jednotlivě označení, pak strana. */
      hlasy: (Volba & { pres: "kandidat" | "strana" })[];
      /** Křížky u kandidátů strany, která má křížek i u sebe — nepočítají se. */
      ignorovani: Volba[];
      nevyuzito: number;
    };

export function vyhodnot(strany: number[], vybrani: Volba[]): Vysledek {
  if (strany.length > 1) {
    return { stav: "neplatny", duvod: "Křížek je u víc než jedné strany. Takový lístek je neplatný." };
  }
  const strana = strany[0];
  const jednotlivi = vybrani.filter((v) => v.strana !== strana);
  const ignorovani = strana ? vybrani.filter((v) => v.strana === strana) : [];

  if (jednotlivi.length > MANDATU) {
    return {
      stav: "neplatny",
      duvod: `Označili jste ${jednotlivi.length} kandidátů, ale hlasů máte jen ${MANDATU}. Takový lístek je neplatný.`,
    };
  }
  if (!strana && jednotlivi.length === 0) return { stav: "prazdny" };

  const hlasy: (Volba & { pres: "kandidat" | "strana" })[] = jednotlivi.map((v) => ({ ...v, pres: "kandidat" }));
  if (strana) {
    const zbyva = MANDATU - jednotlivi.length;
    const listina = listiny.find((l) => l.cislo === strana);
    for (const k of (listina?.kandidati ?? []).slice(0, zbyva)) {
      hlasy.push({ strana, poradi: k.poradi, pres: "strana" });
    }
  }
  return { stav: "platny", hlasy, ignorovani, nevyuzito: MANDATU - hlasy.length };
}
