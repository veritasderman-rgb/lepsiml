// Shared site constants — obsah kampaně Pro lepší Mariánské Lázně.

export const site = {
  name: "Pro lepší Mariánské Lázně",
  shortName: "PLML",
  url: "https://prolepsimarianskelazne.cz",
  claim: "Protože víme, jak na to.",
  election: "Komunální volby 2026",
  headline: "Mariánské Lázně si zaslouží líp.",
  subheadline:
    "Dotáhneme radnici. Otevřeme ji lidem. Zajistíme kulturu pro celý rok.",
  description:
    "Pro lepší Mariánské Lázně — lokální kandidátka do zastupitelstva. Vojta Franta a tým s praktickou zkušeností z radnice i kraje.",
};

export const nav: { label: string; href: string }[] = [
  { label: "Program", href: "/program" },
  { label: "Kandidáti", href: "/kandidati" },
  { label: "Podcast", href: "/podcast" },
  { label: "Kontakt", href: "/kontakt" },
];

export const contact = {
  email: "info@prolepsimarianskelazne.cz",
  facebook: "https://facebook.com/prolepsimarianskelazne",
  instagram: "https://instagram.com/prolepsimarianskelazne",
  spotify: "https://open.spotify.com/",
  youtube: "https://www.youtube.com/",
  transparentAccount: {
    number: "0000000000/0000",
    bank: "Fio banka",
    note: "Transparentní účet kampaně — všechny příjmy i výdaje jsou veřejné.",
  },
};

export type Pillar = {
  id: string;
  icon: string;
  title: string;
  short: string;
  borderColor: string;
};

export const pillars: Pillar[] = [
  {
    id: "radnice",
    icon: "lucide:building-2",
    title: "Dotáhneme radnici",
    short:
      "Fontána, Hlavní ulice, Boheminium. Přinesli jsme UNESCO — dotáhneme i zbytek.",
    borderColor: "var(--color-primary)",
  },
  {
    id: "komunikace",
    icon: "lucide:message-circle",
    title: "Město, co s vámi komunikuje",
    short:
      "Vrátíme participativní rozpočet. Přijdeme za vámi do každé čtvrti.",
    borderColor: "var(--color-primary-light)",
  },
  {
    id: "kultura",
    icon: "lucide:music",
    title: "Stop předraženým akcím",
    short:
      "Každá koruna do kultury musí sloužit Mariánkám celý rok. Zachráníme orchestr.",
    borderColor: "var(--color-accent)",
  },
];

export type Candidate = {
  name: string;
  role: string;
  bio: string;
  isLeader?: boolean;
  quote?: string;
};

export const leader: Candidate = {
  name: "Vojta Franta",
  role: "Lídr kandidátky · Bývalý hejtman Karlovarského kraje",
  bio: "Vedl jsem Karlovarský kraj. Teď chci pomoci městu, které mám rád. Mariánské Lázně jsou UNESCO město — zaslouží si vedení, které dotahuje věci do konce. Máme zkušenosti, máme plán a máme odvahu.",
  quote: "Mariánské Lázně nepotřebují další sliby. Potřebují někoho, kdo práci dotáhne.",
  isLeader: true,
};

export const coreTeam: Candidate[] = [
  {
    name: "Josef Pavlovic",
    role: "Místní podnikatel · komunální politika",
    bio: "Zastupitel se zkušeností s rozpočtovou odpovědností a praktickým vedením města.",
  },
  {
    name: "Martin Kalina",
    role: "Odborník na kulturu · producent",
    bio: "Dohlédne na to, aby kulturní investice města skutečně fungovaly pro Mariánky celý rok.",
  },
  {
    name: "Žaneta Pivcová",
    role: "Komunitní organizátorka",
    bio: "Propojuje lidi napříč čtvrtěmi. Participativní rozpočet má v malíčku.",
  },
  {
    name: "Petr Třešňák",
    role: "Bývalý poslanec · expert na zdravotnictví a lázeňství",
    bio: "Stojí za projekty, které dostaly Mariánky mezi klimatické lázně.",
  },
  {
    name: "Jan Pivec",
    role: "IT specialista · otevřená data",
    bio: "Rozklikávací rozpočet a transparentní hospodaření jako standard, ne jako výjimka.",
  },
];

export type ProgramTopic = {
  id: string;
  icon: string;
  title: string;
  lead: string;
  borderColor: string;
  promises: { title: string; body: string }[];
  ano: string[];
  us: string[];
};

export const programTopics: ProgramTopic[] = [
  {
    id: "dotahneme-radnici",
    icon: "lucide:building-2",
    title: "Dotáhneme radnici",
    borderColor: "var(--color-primary)",
    lead: "Fontána, Hlavní ulice, Boheminium. Mariánské Lázně potřebují radnici, která projekty dotahuje do konce — ne přestřihává pásky cizí práci.",
    promises: [
      {
        title: "Záchrana Zpívající fontány",
        body: "Kompletní rekonstrukce s jasným harmonogramem a rozpočtem. Žádné provizorní záplaty.",
      },
      {
        title: "Dokončení rekonstrukce Hlavní ulice",
        body: "Dotáhneme připravené etapy, aby Hlavní ulice konečně sloužila rezidentům i hostům.",
      },
      {
        title: "Udržení Boheminia v Mariánských Lázních",
        body: "Vyjednáme dlouhodobé udržitelné podmínky pro provoz a rozvoj parku miniatur.",
      },
      {
        title: "Systematický plán údržby majetku",
        body: "Pasport stavu všech budov a prostranství. Oprav se bude dočkat každá lokalita podle priorit, ne podle přízně.",
      },
      {
        title: "Rozpočtová odpovědnost",
        body: "Každá velká investice bude mít zdroj financování. Žádné překvapení na konci roku.",
      },
    ],
    ano: [
      "Slibuje fontánu několik volebních období po sobě.",
      "Hlavní ulice zůstává rozkopaná.",
      "Boheminium se řeší za zavřenými dveřmi.",
    ],
    us: [
      "Harmonogram rekonstrukce fontány do prvních 100 dnů.",
      "Dokončení Hlavní ulice jako priorita č. 1 v investičním plánu.",
      "Veřejná jednání o budoucnosti Boheminia.",
    ],
  },
  {
    id: "komunikace",
    icon: "lucide:message-circle",
    title: "Město, co s vámi komunikuje",
    borderColor: "var(--color-primary-light)",
    lead: "Radnice musí naslouchat dřív, než rozhodne. Vrátíme nástroje otevřené správy, které v Mariánkách fungovaly.",
    promises: [
      {
        title: "Obnovení participativního rozpočtu",
        body: "Lidé rozhodnou o části rozpočtu tak, jak to v Mariánkách fungovalo. Jasná pravidla, transparentní hlasování.",
      },
      {
        title: "Fóra v každé čtvrti",
        body: "Starosta i radní vyrazí pravidelně za lidmi do Úšovic, Chotěnova i centra. Ne jen před volbami.",
      },
      {
        title: "Plně rozklikávací rozpočet",
        body: "Každá položka, každá faktura. Otevřená data jako standard, ne jako ústupek.",
      },
      {
        title: "Nezávislý audit Development centra",
        body: "Podíváme se, kam tečou peníze a zda plní svou funkci pro město.",
      },
      {
        title: "Nezávislý městský zpravodaj",
        body: "Redakční rada mimo přímý vliv radnice. Žádný volební leták placený z rozpočtu.",
      },
    ],
    ano: [
      "Participativní rozpočet zrušilo.",
      "Důležitá rozhodnutí padají bez veřejné diskuse.",
      "Zpravodaj slouží jako PR nástroj vedení.",
    ],
    us: [
      "Participativní rozpočet zpátky v prvním roce.",
      "Pravidelná čtvrťová fóra na pevném harmonogramu.",
      "Auditované Development centrum s veřejnými výstupy.",
    ],
  },
  {
    id: "kultura",
    icon: "lucide:music",
    title: "Stop předraženým akcím — kultura celoročně",
    borderColor: "var(--color-accent)",
    lead: "Mariánské Lázně nejsou jednorázový festival. Kultura musí sloužit městu po celý rok, ne dvě víkendové show.",
    promises: [
      {
        title: "Záchrana Západočeského symfonického orchestru",
        body: "ZSO je kulturní kotva města. Zajistíme stabilní financování a podmínky, aby mohl růst.",
      },
      {
        title: "Kulturní strategie pro celý rok",
        body: "Dokument, který jasně říká, kam město investuje a proč. Konec nahodilých rozhodnutí.",
      },
      {
        title: "Audit nákladů na velké akce",
        body: "Podíváme se, kolik opravdu stojí jednotlivé festivaly a co za to Mariánky dostávají.",
      },
      {
        title: "Podpora lokální kultury",
        body: "Granty pro místní umělce, spolky a sezónní programy. Kultura z Mariánek, ne jen do Mariánek.",
      },
      {
        title: "Kasino jako kulturní centrum",
        body: "Otevřeme diskusi o budoucím využití jako živého místa pro koncerty, výstavy a komunitu.",
      },
    ],
    ano: [
      "Miliony za jeden víkendový koncert.",
      "ZSO v nejistotě.",
      "Chybí kulturní plán.",
    ],
    us: [
      "Dlouhodobé smlouvy a férové financování ZSO.",
      "Veřejný audit všech akcí nad 1 mil. Kč.",
      "Kulturní strategie do roku 2030.",
    ],
  },
];

export const whyUs = [
  {
    icon: "lucide:award",
    title: "UNESCO",
    body: "Zápis Mariánských Lázní na seznam UNESCO světového dědictví jsme dotáhli za naší éry na radnici.",
  },
  {
    icon: "lucide:leaf",
    title: "Klimatické lázně",
    body: "V roce 2023 se Mariánské Lázně staly klimatickými lázněmi — unikátní kombinace čtyř léčivých zdrojů.",
  },
  {
    icon: "lucide:eye",
    title: "Otevřená radnice",
    body: "Zavedli jsme rozklikávací rozpočet, participativní rozpočet a transparentní hospodaření jako standard.",
  },
];

export const quickWins = [
  "Zveřejníme kompletní harmonogram rekonstrukce Zpívající fontány.",
  "Spustíme participativní rozpočet pro rok 2027.",
  "Svoláme první kolo čtvrťových fór po celém městě.",
  "Zadáme nezávislý audit Development centra.",
  "Předložíme dlouhodobou smlouvu se ZSO pro záchranu orchestru.",
];

export type PodcastEpisode = {
  number: number;
  title: string;
  date: string;
  description: string;
  spotify?: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    number: 1,
    title: "Proč Ze sklepa a proč teď",
    date: "Připravujeme",
    description:
      "První díl představuje podcast i samotnou kandidátku. O čem budeme mluvit, koho budeme zvát a proč Mariánky zaslouží upřímnou debatu.",
  },
  {
    number: 2,
    title: "Co s fontánou?",
    date: "Připravujeme",
    description:
      "Zpívající fontána jako symbol nedotažených projektů. Rozebíráme, co brání její rekonstrukci a jak to chceme vyřešit.",
  },
];
