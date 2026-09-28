// Tipovačka: návštěvníci tipují výsledek všech kandidátek v Mariánských
// Lázních, kdo se trefí nejpřesněji, vyhrává likér. Texty, kandidátky,
// pravidla i přepočet na mandáty jsou tady; stránka /tipovacka a API
// /api/tipovacka je jen používají.
//
// Uzávěrka je stejná v kódu i v databázi (constraint `tipy_uzaverka` na
// tabulce `tipy`). Kdyby se měnila, musí se změnit na obou místech.

export const tipEndpoint = "/api/tipovacka";

/** Otevření volebních místností. Po tomhle okamžiku se tipy nepřijímají. */
export const TIP_UZAVERKA_ISO = "2026-10-09T14:00:00+02:00";

/**
 * Moratorium: ve dnech voleb a tři dny před nimi se nesmí zveřejňovat
 * výsledky předvolebních průzkumů (§ 30 odst. 3 zákona č. 491/2001 Sb.),
 * tedy od úterý 6. 10. 00:00 do uzavření místností v sobotu 10. 10. ve 14:00.
 * Průměr tipů je predikce, takže ho v tomhle okně neukazujeme — ani přes API.
 * Tipovat se dá dál až do uzávěrky.
 */
export const TIP_KARENCE_OD_ISO = "2026-10-06T00:00:00+02:00";
export const TIP_KARENCE_DO_ISO = "2026-10-10T14:00:00+02:00";

/** Průměr ukážeme až od tolika tipů, ať z něj nejde vyčíst jednotlivec. */
export const TIP_MIN_PRO_PRUMER = 10;

/** Počet členů zastupitelstva Mariánských Lázní. */
export const MANDATU = 21;

/** Uzavírací klauzule ve volbách do zastupitelstev obcí (§ 45 zák. 491/2001 Sb.). */
export const KLAUZULE = 5;

export type Kandidatka = { cislo: number; nazev: string; nase?: boolean };

/**
 * Registrované kandidátní listiny v pořadí podle losování (čísla na
 * hlasovacím lístku). Zdroj: volby.gov.cz, jmenné seznamy KV 2026,
 * obec Mariánské Lázně (554642), stav k 23. 9. 2026. Názvy doslovně.
 */
export const kandidatky: Kandidatka[] = [
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

/** Součet tipů musí dát 100 %, s tolerancí na zaokrouhlení. */
export const SOUCET_TOLERANCE = 1;

/**
 * Přepočet procent na mandáty jako ve volbách do zastupitelstev obcí:
 * kandidátky pod klauzulí vypadnou (když by prošly méně než dvě, klauzule
 * se snižuje po procentu), zbytek dostane mandáty d'Hondtovou metodou
 * (dělitelé 1, 2, 3 …). Procenta se nejdřív přepočtou na součet 100.
 */
export function prepocetMandatu(procenta: Record<number, number>): Record<number, number> {
  const soucet = Object.values(procenta).reduce((a, b) => a + b, 0);
  const vysledek: Record<number, number> = {};
  for (const k of Object.keys(procenta)) vysledek[Number(k)] = 0;
  if (soucet <= 0) return vysledek;

  const podil = Object.fromEntries(
    Object.entries(procenta).map(([k, v]) => [Number(k), (v / soucet) * 100]),
  ) as Record<number, number>;

  let klauzule = KLAUZULE;
  let prosli = Object.keys(podil).map(Number).filter((k) => podil[k] >= klauzule);
  while (prosli.length < 2 && klauzule > 0) {
    klauzule -= 1;
    prosli = Object.keys(podil).map(Number).filter((k) => podil[k] >= klauzule);
  }

  const podily: { k: number; hodnota: number }[] = [];
  for (const k of prosli) {
    for (let d = 1; d <= MANDATU; d++) podily.push({ k, hodnota: podil[k] / d });
  }
  // Při shodě podílů rozhoduje vyšší celkový výsledek, pak nižší číslo.
  podily.sort((a, b) => b.hodnota - a.hodnota || podil[b.k] - podil[a.k] || a.k - b.k);
  for (const { k } of podily.slice(0, MANDATU)) vysledek[k] += 1;
  return vysledek;
}

export const tipMeta = {
  title: "Tipněte si výsledek voleb",
  lead: "Jak dopadnou volby v Mariánských Lázních?",
  intro:
    "Rozdělte 100 % hlasů mezi deset kandidátek. Kdo se nejvíc trefí do skutečného výsledku, vyhrává láhev likéru Maria.",
  cena: "láhev likéru Maria",
  uzaverkaText: "pátek 9. října 2026 ve 14:00",
};

export const tipPravidla: string[] = [
  "Soutěž pořádá Za lepší Mariánské Lázně, z. s. Zúčastnit se může každý, komu je 18 let a víc.",
  "Tipovat můžete do pátku 9. října 2026 do 14:00, kdy se otevírají volební místnosti. Z jednoho e-mailu platí jen jeden tip.",
  "Vyhodnocujeme podle výsledků voleb do zastupitelstva Mariánských Lázní na volby.cz. U každé kandidátky spočítáme rozdíl mezi vaším tipem a skutečným procentem hlasů. Vyhrává tip s nejmenším součtem rozdílů.",
  "Při shodě rozhoduje odhad volební účasti — vyhrává ten bližší. Pokud se shodne i ten, vyhrává dřív odeslaný tip.",
  "Výherce kontaktujeme e-mailem do týdne po zveřejnění výsledků a domluvíme předání v Mariánských Lázních. Výhru nelze vyměnit za peníze.",
  "Když se výherce do 14 dnů neozve, výhra připadne dalšímu nejbližšímu tipu.",
];

export const tipSouhlas =
  "Souhlasím s pravidly soutěže a se zpracováním e-mailu (a jména a telefonu, pokud je vyplním) za účelem vyhodnocení soutěže a předání výhry. Správcem je Za lepší Mariánské Lázně, z. s. Údaje nikomu nepředáváme a po předání výhry, nejpozději do 30. listopadu 2026, je smažeme.";

export const tipNovinky =
  "Chci dostávat i informace o plánech pro Mariánské Lázně. Kontakt pak použijeme do komunálních voleb 2026 a smažeme ho do konce roku. Odhlásit se lze kdykoli.";

export const tipPrumerPoznamka =
  "Nejde o průzkum. Je to jen průměr tipů lidí, kteří si zatipovali tady na webu, přepočtený na 21 mandátů s pětiprocentní klauzulí.";

export const tipDisclaimer =
  "Alkohol nepodáváme osobám mladším 18 let. Pijte zodpovědně. Tipovačka není volebním průzkumem a na tom, koho budete volit, nijak nezávisí.";
