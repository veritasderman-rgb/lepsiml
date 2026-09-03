// Dotazník pro obyvatele Mariánských Lázní — obsah shodný s tištěnou verzí
// (ZLM-dotaznik-A4-oboustranne.pdf). Když se mění tisk, mění se i tohle.

/** Cílová adresa pro QR kód na tištěném dotazníku. Krátká schválně. */
export const surveyUrl = "https://lepsiml.cz/dotaznik";

/**
 * Odkaz na online formulář (Google Forms). QR na tištěném dotazníku míří na
 * /dotaznik, ne sem — díky tomu jde formulář vyměnit bez přetisku letáků.
 * Dokud je prázdný, stránka místo tlačítka ukáže, že se online sběr připravuje.
 */
export const surveyFormUrl = "";

/**
 * Tisková verze dotazníku ke stažení. Zatím prázdná: tiskové PDF má
 * v tiráži nevyplněné `IČO ________` a veřejně nabízet ke stažení
 * dokument s nedokončenou identifikací zadavatele nechceme. Až bude
 * IČO doplněno, sem přijde cesta k souboru a tlačítko naskočí samo.
 */
export const surveyPdf = "";

/**
 * QR kód pro tištěný dotazník — soubory v public/dotaznik/ jsou tiskové
 * podklady, ne assety webu, takže je odsud nic needituje ani nelinkuje.
 * Míří na `surveyUrl`, ne rovnou na formulář, aby šel formulář vyměnit
 * bez přetisku.
 */
export const surveyQrAssets = {
  print: "/dotaznik/qr-dotaznik.svg",
  raster: "/dotaznik/qr-dotaznik.png",
  onDark: "/dotaznik/qr-dotaznik-invert.svg",
};

export const surveyMeta = {
  title: "Dotazník pro obyvatele Mariánských Lázní",
  lead: "Co je pro budoucnost Mariánských Lázní opravdu důležité?",
  intro:
    "Kandidujeme za lepší Mariánské Lázně a chceme znát názor lidí, kteří tu žijí. Tento krátký dotazník nám pomůže zjistit, které problémy a které projekty mají podle obyvatel největší význam. Odpovědi použijeme jako jeden z podkladů pro naši další práci a pro program.",
  duration: "Vyplnění zabere přibližně 3 minuty.",
};

/** Otázka 1 — max. 3 odpovědi. */
export const surveyProblems: string[] = [
  "Stav ulic, budov a veřejného prostoru",
  "Doprava a dostupnost jednotlivých částí města",
  "Bydlení a odchod mladých lidí",
  "Možnosti pro děti, mladé a rodiny",
  "Sport a volný čas",
  "Parky, zeleň a lázeňské prostředí",
  "Zdravotní a sociální služby",
  "Kultura a společenský život",
  "Fungování a otevřenost radnice",
  "Pracovní a podnikatelské možnosti",
];

export const SURVEY_MAX_PROBLEMS = 3;

export type SurveyProject = { id: string; title: string; description: string };

/** Otázka 2 — devět projektů na škále 1–4. */
export const surveyProjects: SurveyProject[] = [
  {
    id: "01",
    title: "Rekonstrukce staré radnice",
    description:
      "Přestavba chátrající budovy radnice na moderní úřad a zároveň na veřejné a komunitní zázemí — například dílny, sdílenou kuchyni nebo prostory pro místní spolky.",
  },
  {
    id: "02",
    title: "Sportovní zázemí města",
    description:
      "Renovace sportovního areálu Viktorka a výstavba moderní kryté sportovní haly, kterou by využívaly školy, sportovní kluby i veřejnost.",
  },
  {
    id: "03",
    title: "Areál pro mladé a aktivní",
    description:
      "Areál se skateparkem a bikrosovou dráhou, se zázemím pro občerstvení a s možností pořádat veřejné akce a závody.",
  },
  {
    id: "04",
    title: "Doprava na zavolání",
    description:
      "Mikrobus přivolaný telefonem nebo aplikací, propojený se službou senior taxi, který zajistí dostupnost okrajových částí města.",
  },
  {
    id: "05",
    title: "Komunitní energetika",
    description:
      "Výroba elektřiny na městských budovách, její chytré využívání a sdílení přebytků ve prospěch města a jeho obyvatel.",
  },
  {
    id: "06",
    title: "Veřejné lázně",
    description:
      "Obnovení lázeňských služeb pro obyvatele města: prostor pro koupání a odpočinek, sauny a vířivka u bazénu a další lázeňské procedury.",
  },
  {
    id: "07",
    title: "Revitalizace kolonád a veřejného prostoru",
    description:
      "Stavební obnova kolonád a navazujících veřejných prostor, včetně kolonády Ferdinandova pramene s kavárnou, kulturním prostorem a venkovním amfiteátrem.",
  },
  {
    id: "08",
    title: "Moderní vzdělávání",
    description:
      "Výuka zaměřená na jazyky, technologie a praktické dovednosti včetně AI a programování, doplněná projekty, ve kterých si děti vyzkoušejí vedení menšího podniku.",
  },
  {
    id: "09",
    title: "Město připravené na klima",
    description:
      "Adaptační plán města: zadržování vody v krajině, ochrana a kontrola pramenů a úpravy veřejného prostoru tak, aby lépe zvládal sucho a vedra.",
  },
];

export const surveyScale: { value: number; label: string }[] = [
  { value: 1, label: "vůbec není důležité" },
  { value: 2, label: "spíše není důležité" },
  { value: 3, label: "spíše důležité" },
  { value: 4, label: "velmi důležité" },
];

/** Kontaktní blok — všechno dobrovolné. */
export const surveyContactOptions: { id: string; label: string }[] = [
  {
    id: "novinky",
    label: "ANO, chci zůstat v kontaktu a dostávat informace o plánech pro město.",
  },
  { id: "zapojit", label: "Chci se zapojit — ozvěte se mi, rád/a pomůžu." },
  {
    id: "podnet",
    label: "Chci, aby se mi někdo ozval k mému podnětu z otázky 3.",
  },
  {
    id: "projekt",
    label: "Chci si o některém projektu promluvit osobně — zajímají mě podrobnosti.",
  },
];

export const surveyConsent =
  "Souhlasím se zasíláním informací od Za lepší Mariánské Lázně na uvedený kontakt. Souhlas je dobrovolný a mohu jej kdykoli odvolat. Správcem údajů je Za lepší Mariánské Lázně, z. s. Kontakt použijeme pouze k zasílání informací do komunálních voleb 2026 a poté jej smažeme. Nikomu jej nepředáváme. Odhlásit se lze kdykoli na mail@josefpavlovic.cz.";

export const surveyPromises: string[] = [
  "Všechny dotazníky si přečteme a souhrn odpovědí zveřejníme na lepsiml.cz — včetně projektů, které dopadly nejhůř.",
  "Máte otázku k některému projektu? Napište na mail@josefpavlovic.cz nebo zavolejte na +420 607 517 967.",
];

export const surveyDisclaimer =
  "Vydává Za lepší Mariánské Lázně, z. s., jako kandidující politický subjekt pro komunální volby 9.–10. října 2026. Dotazník není volebním průzkumem — nezjišťujeme volební preference ani politickou orientaci.";
