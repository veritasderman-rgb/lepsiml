// Co se za naší éry na radnici (2018–2022) udělalo a co jsme měli připravené
// na další období. Podklad dodal tým; částky jsou celkové náklady projektu,
// dotace se uvádí zvlášť. Stránka /co-jsme-dokazali tohle jen vykresluje.

export type Investice = {
  title: string;
  /** Celkové náklady, pokud je známe. */
  cost?: string;
  /** Získaná dotace. */
  grant?: string;
  note?: string;
};

export type OblastPrace = {
  id: string;
  icon: string;
  title: string;
  items: string[];
};

export const odvedenaPraceMeta = {
  title: "Co jsme dokázali",
  period: "2018–2022",
  lead: "Za naší éry na radnici se ve městě stavělo, opravovalo a otevíralo. Tady je přehled toho, co jsme dotáhli — s částkami a dotacemi, které se podařilo získat.",
};

/** Čísla do pruhu v hlavičce. Jen to, co je v seznamech níž. */
export const odvedenaPraceStats: { label: string; value: string }[] = [
  { label: "Do silnic a chodníků", value: "60 mil. Kč" },
  { label: "Dotace na trolejbusy", value: "100+ mil. Kč" },
  { label: "Participativní rozpočet", value: "1 mil. Kč / rok" },
  { label: "Zápis do UNESCO", value: "2021" },
];

export const velkeInvestice: Investice[] = [
  {
    title: "Rekonstrukce domu Chopin",
    cost: "85 mil. Kč",
    grant: "41,4 mil. Kč",
  },
  {
    title: "Rekonstrukce zimního stadionu",
    cost: "38 mil. Kč",
    grant: "19,6 mil. Kč",
    note: "Chlazení, ledová plocha a technické zázemí.",
  },
  {
    title: "Nové školní dílny na ZŠ Úšovice",
    cost: "16 mil. Kč",
    grant: "13 mil. Kč",
  },
  {
    title: "Revitalizace sídliště Plzeňská",
    cost: "5 mil. Kč",
  },
  {
    title: "Nové trolejbusy a měnírna",
    grant: "přes 100 mil. Kč",
    note: "Žadatelem byla městská dopravní společnost MDML.",
  },
  {
    title: "Modernizace učeben ZŠ Úšovice a ZŠ Vítězství",
    grant: "3,6 mil. Kč",
  },
  {
    title: "Senior taxi (Senior expres)",
    grant: "250 tis. Kč",
  },
];

export const oblastiPrace: OblastPrace[] = [
  {
    id: "doprava",
    icon: "lucide:route",
    title: "Doprava a infrastruktura",
    items: [
      "60 mil. Kč do silnic a chodníků — Ruská, Palackého, Plzeňská, Lužická, Jiráskova, Křižíkova, Komenského, U Nemocnice, Vora a další.",
      "Opravy zastávek MHD (knihovna, City Servis, Cristal, Hlavní třída, Goethovo náměstí, Centrum, Mírové náměstí) a nové přístřešky.",
    ],
  },
  {
    id: "sport",
    icon: "lucide:trophy",
    title: "Sport a volný čas",
    items: [
      "Discgolfové hřiště (rozšířené z 12 na 18 jamek) a parkourové hřiště — obojí z participativního rozpočtu.",
      "Nová palubovka v basketbalové hale na Slovanu a vzduchotechnika bazénu (zhruba 3 mil. Kč).",
      "Zprůchodnění Viktorky a stržení plechového plotu.",
      "Převod „kolonie“ v Pavlovicích pod Správu městských sportovišť.",
    ],
  },
  {
    id: "priroda",
    icon: "lucide:trees",
    title: "Příroda a kultura",
    items: [
      "Pět přírodních tůní a jedna dlážděná od roku 2018, opravy rybníků.",
      "Komunitní ovocný sad (2020, zhruba 50 stromů), později doplněný o 10 úlů.",
      "Odkup hudebního divadla u Lesního pramene a návrat sousoší múz Olbrama Zoubka.",
      "Zápis Mariánských Lázní na seznam světového dědictví UNESCO.",
    ],
  },
  {
    id: "sprava",
    icon: "lucide:landmark",
    title: "Otevřená správa města",
    items: [
      "Participativní rozpočet — z 500 tis. na 1 mil. Kč ročně.",
      "Mobilní rozhlas s více než 500 vyřešenými podněty.",
      "Otevřené účty a přenosy ze zastupitelstva.",
      "Fond kultury (2 mil. Kč ročně) a fond sportu (5 mil. Kč).",
    ],
  },
];

/** Plán, se kterým jsme počítali na volební období 2022–2026. */
export const planovano2022: { title: string; detail?: string }[] = [
  { title: "Rekonstrukce radnice", detail: "Zhruba 300 mil. Kč, začátek v letech 2024/2025." },
  { title: "Kompletní výměna veřejného osvětlení", detail: "Start v Úšovicích, inteligentní systém řízení." },
  { title: "Startovací nájemní byty", detail: "Přestavba Taorminy." },
  { title: "Vodovod do Sklářů", detail: "Realizace od poloviny roku 2023." },
  { title: "Skatepark a inline dráha", detail: "V Hamrnické zóně klidu." },
  { title: "Kruhový objezd na Černém mostě", detail: "A opravy Plzeňské a Hlavní ve spolupráci s krajem." },
  { title: "Statut klimatických lázní" },
  { title: "Parkování", detail: "Odstavná parkoviště na kraji města a parkoviště u nemocnice." },
  { title: "Bezpečnost", detail: "Nový kamerový systém a radary." },
  { title: "Odbahnění Knížecího rybníka" },
  { title: "Školy", detail: "Rozšíření tříd na ZŠ Hamrníky a vyšší kapacita družin." },
  { title: "Pozemky pro rodinné domy", detail: "Příprava více než 60 pozemků, lokality u Pily a Ke Kasárnům." },
  { title: "Solární panely na veřejných budovách" },
  { title: "Doprava v Úšovicích a cyklostezky", detail: "Revitalizace MHD, cyklostezky a stojany na elektrokola." },
  { title: "Záchytné nádrže na dešťovou vodu", detail: "Na centrálním parkovišti." },
  { title: "Digitalizace úřadu", detail: "Portál občana." },
  { title: "MHD zdarma pro seniory 70+" },
  { title: "Garance silnic a chodníků", detail: "Nejméně 10 mil. Kč ročně." },
];
