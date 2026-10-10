// Výsledek komunálních voleb 9.–10. 10. 2026 v Mariánských Lázních
// a finální průměr tipů z tipovačky. Data jsou zamražená — volby skončily,
// tipovačka se uzavřela, nic z toho se už nemění.
//
// Zdroj výsledků: ČSÚ, volby.gov.cz / volbyhned.cz, zastupitelstvo obce
// Mariánské Lázně (554642), zpracováno 100 % okrsků, data vygenerovaná
// 10. 10. 2026 v 18:37. Strojově: volbyhned.cz/appdata/kv2026/20261009/vysled/4101/554642.json

/** Počet členů zastupitelstva Mariánských Lázní. */
export const MANDATU = 21;

/** Kandidátní listiny v pořadí podle čísla na hlasovacím lístku, názvy doslovně. */
const kandidatky: { cislo: number; nazev: string; nase?: boolean }[] = [
  { cislo: 1, nazev: "Změna pro M. L. s podporou VOK-Volba pro kraj" },
  { cislo: 2, nazev: "STAROSTOVÉ A NEZÁVISLÍ" },
  { cislo: 3, nazev: "Naše Česko" },
  { cislo: 4, nazev: "ANO 2011 a Nezávislí" },
  { cislo: 5, nazev: "Motoristé sobě" },
  { cislo: 6, nazev: "Město sobě" },
  { cislo: 7, nazev: "ODS + KDU-ČSL" },
  { cislo: 8, nazev: "Sdružení pol. stran KSČM a SPD za lepší Mar. Lázně" },
  { cislo: 9, nazev: "Za lepší Mariánské Lázně", nase: true },
  { cislo: 10, nazev: "Svobodní" },
];

export const VYSLEDKY_URL =
  "https://www.volby.cz/pls/kv2026/kv1111?xjazyk=CZ&xid=1&xv=11&xdz=4&xnumnuts=4101&xobec=554642";

export const prehled = {
  okrsky: 17,
  volici: 9576,
  obalky: 3707,
  ucast: 38.71,
  platneHlasy: 68721,
  aktualizovano: "10. 10. 2026, 18:37",
};

export type VysledekKandidatky = {
  cislo: number;
  nazev: string;
  hlasy: number;
  procent: number;
  mandaty: number;
  nase?: boolean;
};

/** Oficiální výsledek, pořadí podle čísla kandidátky na hlasovacím lístku. */
const vysledkyPodleCisla: Omit<VysledekKandidatky, "nazev" | "nase">[] = [
  { cislo: 1, hlasy: 5630, procent: 8.19, mandaty: 2 },
  { cislo: 2, hlasy: 16687, procent: 24.28, mandaty: 6 },
  { cislo: 3, hlasy: 5086, procent: 7.4, mandaty: 2 },
  { cislo: 4, hlasy: 22261, procent: 32.39, mandaty: 8 },
  { cislo: 5, hlasy: 1739, procent: 2.53, mandaty: 0 },
  { cislo: 6, hlasy: 2877, procent: 4.19, mandaty: 0 },
  { cislo: 7, hlasy: 5525, procent: 8.04, mandaty: 2 },
  { cislo: 8, hlasy: 2292, procent: 3.34, mandaty: 0 },
  { cislo: 9, hlasy: 4788, procent: 6.97, mandaty: 1 },
  { cislo: 10, hlasy: 1836, procent: 2.67, mandaty: 0 },
];

export const vysledky: VysledekKandidatky[] = vysledkyPodleCisla.map((v) => {
  const k = kandidatky.find((x) => x.cislo === v.cislo)!;
  return { ...v, nazev: k.nazev, nase: k.nase };
});

/** Výsledky seřazené od nejsilnější kandidátky. */
export const vysledkyPodlePoradi = [...vysledky].sort((a, b) => b.hlasy - a.hlasy);

export const nas = vysledky.find((v) => v.nase)!;

/** Většina v zastupitelstvu. */
export const VETSINA = Math.floor(MANDATU / 2) + 1;

/** Náš zvolený zastupitel. */
export const nasZastupitel = {
  jmeno: "Vojta Franta",
  plneJmeno: "Ing. arch. Vojtěch Franta",
  poradi: 1,
  prednostniHlasy: 478,
};

/** Zvolení zastupitelé podle kandidátek, v pořadí zvolení podle ČSÚ. */
export const zvoleni: Record<number, string[]> = {
  4: [
    "Martin Hurajčík",
    "Vladimír Kafka",
    "MUDr. Roman Dubnický",
    "Mgr. Jana Roubalová",
    "JUDr. Miloslav Chadim",
    "Jan Hamar",
    "Ivana Mottlová",
    "Vladimír Černý",
  ],
  2: [
    "Mgr. Dušan Drexler",
    "Ing. Kamil Špindler",
    "Ing. Tomáš Rákos",
    "Bc. Ondřej Míka",
    "Ing. Nikola Kovárníková",
    "Ing. Andrea Sasková",
  ],
  1: ["Mgr. Miloslav Pelc", "Mgr. Petr Hála"],
  3: ["Bc. Samuel Zabolotný, BBA", "MUDr. Tomáš Foustka"],
  7: ["Ing. arch. Ludmila Míková", "Bohumil Chlad"],
  9: ["Ing. arch. Vojtěch Franta"],
};

/**
 * Finální souhrn tipovačky po uzávěrce 9. 10. 2026 ve 14:00: počet tipů,
 * průměrný tip na kandidátku a účast (na desetiny) a jeho přepočet na
 * mandáty (klauzule 5 %, d'Hondt). Jednotlivé tipy zůstávají v databázi.
 */
export const tipy = {
  pocet: 13,
  ucast: 50.6,
  prumery: { 1: 6.4, 2: 11.8, 3: 11.9, 4: 26.5, 5: 5.8, 6: 5.9, 7: 6, 8: 2.9, 9: 20.5, 10: 2.3 } as Record<
    number,
    number
  >,
  mandaty: { 1: 1, 2: 3, 3: 3, 4: 6, 5: 1, 6: 1, 7: 1, 8: 0, 9: 5, 10: 0 } as Record<number, number>,
};

export type Porovnani = VysledekKandidatky & { tip: number; tipMandaty: number; rozdil: number };

/** Tip vedle skutečnosti, pořadí podle skutečného výsledku. */
export const porovnani: Porovnani[] = vysledkyPodlePoradi.map((v) => ({
  ...v,
  tip: tipy.prumery[v.cislo] ?? 0,
  tipMandaty: tipy.mandaty[v.cislo] ?? 0,
  rozdil: Math.round(((tipy.prumery[v.cislo] ?? 0) - v.procent) * 10) / 10,
}));

/** Součet odchylek průměrného tipu — stejné měřítko jako u soutěže. */
export const odchylkaPrumeru =
  Math.round(porovnani.reduce((s, p) => s + Math.abs(p.tip - p.procent), 0) * 10) / 10;

/** Čísla s desetinnou čárkou: 32,39 %. */
export function pct(n: number, des = 1): string {
  return n.toLocaleString("cs-CZ", { minimumFractionDigits: des, maximumFractionDigits: des }) + " %";
}

/** Celá čísla s mezerou po tisících: 68 721. */
export function cislo(n: number): string {
  return n.toLocaleString("cs-CZ");
}

/** 1 mandát, 2 mandáty, 5 mandátů. */
export function mandatu(n: number): string {
  if (n === 1) return "1 mandát";
  if (n >= 2 && n <= 4) return `${n} mandáty`;
  return `${n} mandátů`;
}
