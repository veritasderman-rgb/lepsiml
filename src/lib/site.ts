// Shared site constants — obsah kampaně Za lepší Mariánské Lázně.

export const site = {
  name: "Za lepší Mariánské Lázně",
  shortName: "ZLML",
  url: "https://zalepsimarianskelazne.cz",
  claim: "Protože víme, jak na to.",
  election: "Komunální volby 2026",
  headline: "Mariánské Lázně si zaslouží víc!",
  subheadline:
    "Hrdé město. Pro rodiny i mladé. Otevřené, udržitelné, naše.",
  description:
    "Za lepší Mariánské Lázně — lokální kandidátka do zastupitelstva. Vojta Franta a tým s praktickou zkušeností z radnice i kraje.",
};

export const nav: { label: string; href: string }[] = [
  { label: "Program", href: "/program" },
  { label: "Kandidáti", href: "/kandidati" },
  { label: "Podcast", href: "/podcast" },
  { label: "Kontakt", href: "/kontakt" },
];

export const forms = {
  // Endpoint kontaktního formuláře.
  // Po registraci vlastního formuláře na https://formspree.io sem doplňte
  // ID (např. "https://formspree.io/f/xyzvpknw"). Do té doby formulář zobrazí
  // chybu „není nakonfigurováno". Alternativa: vlastní Vercel API route
  // v src/pages/api/contact.ts a endpoint "/api/contact".
  contactEndpoint: "https://formspree.io/f/REPLACE_WITH_FORM_ID",
};

export const contact = {
  email: "info@zalepsimarianskelazne.cz",
  facebook: "https://facebook.com/zalepsimarianskelazne",
  instagram: "https://instagram.com/zalepsimarianskelazne",
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
    id: "hrdi",
    icon: "lucide:landmark",
    title: "Město, na které jsme hrdí",
    short:
      "Rekonstrukce radnice, nové osvětlení s optikou, úsporné zahájení sezóny a kolonáda v režii města.",
    borderColor: "var(--color-primary)",
  },
  {
    id: "rodiny",
    icon: "lucide:users-round",
    title: "Město pro rodiny a mladé",
    short:
      "Veřejné lázně u bazénu, chybějící dětská hřiště, oprava Viktorky a Lokotky, inlinová dráha.",
    borderColor: "var(--color-primary-light)",
  },
  {
    id: "unesco",
    icon: "lucide:mountain",
    title: "Prosperující UNESCO destinace",
    short:
      "Bikepark, cykloinfrastruktura, nové rybníky, oprava lanovky a obnovené lázeňské vycházky.",
    borderColor: "var(--color-accent)",
  },
  {
    id: "radnice",
    icon: "lucide:eye",
    title: "Otevřená a průhledná radnice",
    short:
      "Participativní rozpočet, rozklikávací rozpočet, audit Development centra, fóra v každé čtvrti.",
    borderColor: "var(--color-dark)",
  },
  {
    id: "zelene",
    icon: "lucide:leaf",
    title: "Udržitelné a zelené Mariánky",
    short:
      "Komunitní energetika po vzoru Aše, poptávková doprava do okrajových částí, péče o zeleň a prameny.",
    borderColor: "var(--color-primary-light)",
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
  role: "Lídr kandidátky · Bývalý náměstek hejtmana Karlovarského kraje",
  bio: "Dlouhé roky jsem působil ve vedení Karlovarského kraje. Teď chci pomoci městu, které mám rád. Mariánské Lázně jsou UNESCO město — zaslouží si vedení, které dotahuje věci do konce. Máme zkušenosti, máme plán a máme odvahu.",
  quote: "Mariánské Lázně nepotřebují další sliby. Potřebují někoho, kdo práci dotáhne.",
  isLeader: true,
};

export const coreTeam: Candidate[] = [
  {
    name: "Josef Pavlovic",
    role: "Zastupitel města · bývalý náměstek ministra zdravotnictví",
    bio: "Zaměstnanec společnosti Léčebné lázně Mariánské Lázně. Zastupitel města se zkušeností z celostátní úrovně ve zdravotnictví a lázeňství.",
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
    id: "hrdi",
    icon: "lucide:landmark",
    title: "Město, na které jsme hrdí",
    borderColor: "var(--color-primary)",
    lead: "Radnice, osvětlení, zahájení sezóny, kolonáda. Mariánské Lázně si zaslouží investice, které jdou do detailu a které nestojí víc, než mají.",
    promises: [
      {
        title: "Rekonstrukce radnice",
        body: "Projektová dokumentace je hotová, financování zajistíme úvěrem. Rekonstrukce začne v prvním roce a dotáhne se do konce volebního období.",
      },
      {
        title: "Veřejné osvětlení s optikou — dva projekty za cenu jednoho",
        body: "Modernizace osvětlení v celém městě na úsporné LED. Při té příležitosti do zemních prací natáhneme optiku — jedna investice, dva výsledky.",
      },
      {
        title: "Úsporné zahájení sezóny",
        body: "Audit současné předražené akce a návrh úsporného modelu. Zahájení sezóny má být hrdostí, ne dírou v rozpočtu.",
      },
      {
        title: "Kolonáda v režii města",
        body: "Město převezme organizaci kulturních akcí na kolonádě. Konec vyvádění peněz externím dodavatelům a pořadatelům — kolonáda patří Mariánkám.",
      },
      {
        title: "Systematický plán údržby majetku",
        body: "Pasport stavu všech budov a prostranství. Oprav se dočká každá lokalita podle priorit, ne podle přízně.",
      },
    ],
    ano: [
      "Radnice chátrá roky bez jasného plánu.",
      "Zahájení sezóny stojí město obrovské peníze.",
      "Akce na kolonádě v rukou externích dodavatelů.",
    ],
    us: [
      "Rekonstrukce radnice s jasným harmonogramem a financováním.",
      "Úsporný model zahájení sezóny podložený auditem.",
      "Kolonáda v režii města a lokálních tvůrců.",
    ],
  },
  {
    id: "rodiny",
    icon: "lucide:users-round",
    title: "Město pro rodiny a mladé",
    borderColor: "var(--color-primary-light)",
    lead: "Mariánky nesmí být jen skanzen pro turisty. Chceme město, ve kterém chtějí rodiny zůstat a mladí se do něj chtějí vracet.",
    promises: [
      {
        title: "Veřejné lázně — rozšíření bazénu o sauny a vířivku",
        body: "Tři sauny a vířivka na městských pozemcích vedle bazénu. Pozemky jsou zasíťované, projekt je realizovatelný do čtyř let pod pracovním názvem Veřejné lázně.",
      },
      {
        title: "Dětská hřiště, která akutně chybí",
        body: "Audit stavu hřišť, doplnění chybějících ploch v každé čtvrti a modernizace stávajících. Hřiště mají být tam, kde bydlí děti — ne jen tam, kde je zrovna místo.",
      },
      {
        title: "Oprava Viktorky a Lokotky",
        body: "Viktorka městská už se modernizuje, nesmíme se zastavit — zbývá vyřešit tribunu. Lokotka je v dezolátním stavu; najdeme cestu ve spolupráci s vlastníkem.",
      },
      {
        title: "Inlinová dráha u Ploché dráhy",
        body: "Nová volnočasová plocha pro bruslaře, rodiny i mládež. Plochá dráha dostane přirozené okolí pro sport i setkávání.",
      },
    ],
    ano: [
      "Dětská hřiště chybí a chátrají.",
      "Sportoviště v polovičatém stavu — jen část se řeší.",
      "Mladí v Mariánkách nemají kam jít.",
    ],
    us: [
      "Veřejné lázně jako rozšíření bazénu do čtyř let.",
      "Doplněná a modernizovaná dětská hřiště v každé čtvrti.",
      "Dotažená Viktorka, řešená Lokotka, nová inlinová dráha.",
    ],
  },
  {
    id: "unesco",
    icon: "lucide:mountain",
    title: "Prosperující UNESCO destinace",
    borderColor: "var(--color-accent)",
    lead: "Mariánské Lázně jsou UNESCO město. Status ale nesmí zůstat jen na ceduli — musí být vidět v kvalitě veřejného prostoru, v péči o krajinu a v nabídce pro návštěvníky.",
    promises: [
      {
        title: "Bikepark a cyklosjezdy u sjezdovky",
        body: "Projekt cyklosjezdů jako bikeparku existuje roky — chybí jen dotažení. Zároveň rozvoj cykloinfrastruktury obecně: bezpečné stezky, napojení na okolí, servis.",
      },
      {
        title: "Nové rybníky po městě",
        body: "Zadržení vody v krajině, nové rekreační plochy, příroda na dosah obyvatelům. Rybníky jsou odpověď na klimatickou změnu i na potřebu volného času.",
      },
      {
        title: "Oprava lanovky",
        body: "Lanovka je symbol Mariánek. Zajistíme její modernizaci a dlouhodobý provoz ve spolupráci s krajem a provozovatelem.",
      },
      {
        title: "Obnovené lázeňské vycházky a péče o parky",
        body: "Kalamitní těžba v parcích dávno skončila. Je čas vrátit se k systematické péči o lázeňské parky, obnovit značené vycházkové trasy a informační systém.",
      },
    ],
    ano: [
      "Bikepark zaseknutý v šuplíku.",
      "Lanovka bez perspektivy.",
      "Lázeňské parky po kalamitě zanedbané.",
    ],
    us: [
      "Dotažený bikepark a cykloinfrastruktura.",
      "Plán oprav a provozu lanovky.",
      "Obnovené vycházky a systematická péče o parky.",
    ],
  },
  {
    id: "radnice",
    icon: "lucide:eye",
    title: "Otevřená a průhledná radnice",
    borderColor: "var(--color-dark)",
    lead: "Radnice musí naslouchat dřív, než rozhodne. Vrátíme nástroje otevřené správy, které v Mariánkách prokazatelně fungovaly.",
    promises: [
      {
        title: "Obnovení participativního rozpočtu",
        body: "Lidé rozhodnou o části rozpočtu tak, jak to v Mariánkách fungovalo. Jasná pravidla, transparentní hlasování.",
      },
      {
        title: "Plně rozklikávací rozpočet",
        body: "Každá položka, každá faktura. Otevřená data jako standard, ne jako ústupek.",
      },
      {
        title: "Nezávislý audit Development centra",
        body: "Podíváme se, kam tečou peníze a zda Development centrum skutečně plní svou funkci pro město.",
      },
      {
        title: "Fóra v každé čtvrti",
        body: "Starosta i radní vyrazí pravidelně za lidmi do Úšovic, Chotěnova, na Stanoviště i do centra. Ne jen před volbami.",
      },
      {
        title: "Nezávislý městský zpravodaj",
        body: "Redakční rada mimo přímý vliv radnice. Žádný volební leták placený z veřejného rozpočtu.",
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
    id: "zelene",
    icon: "lucide:leaf",
    title: "Udržitelné a zelené Mariánky",
    borderColor: "var(--color-primary-light)",
    lead: "Mariánské Lázně jsou od roku 2023 klimatickými lázněmi. Tento status si musí zasloužit i praktickými kroky — v energetice, dopravě i péči o krajinu.",
    promises: [
      {
        title: "Komunitní energetika — zlevnění elektřiny obyvatelům",
        body: "Vytvoříme městskou energetickou komunitu po vzoru města Aš. Solární výroba na střechách městských budov se promítne do nižších účtů obyvatel.",
      },
      {
        title: "Poptávková doprava do okrajových částí",
        body: "Kladská a Stanoviště dnes nemají prakticky žádné spojení. Zavedeme poptávkový mikrobus nebo sdílenou dopravu, aby nikdo nebyl odříznutý.",
      },
      {
        title: "Klimatické lázně naplno",
        body: "Statusu klimatických lázní dáme obsah: program ochrany ovzduší, léčivých zdrojů a zeleně s měřitelnými cíli.",
      },
      {
        title: "Péče o léčivé prameny a lázeňskou krajinu",
        body: "Systematická ochrana pramenů, průhledné hospodaření se zdroji, rozšířená péče o lázeňské parky i okolní krajinu.",
      },
      {
        title: "Udržitelné investice města",
        body: "U každé velké investice vyhodnotíme provozní energetické a ekologické dopady. Levnější provoz, menší zátěž.",
      },
    ],
    ano: [
      "Obyvatelé platí plnou cenu elektřiny bez alternativy.",
      "Kladská a Stanoviště prakticky bez dopravy.",
      "Status klimatických lázní zatím bez konkrétního obsahu.",
    ],
    us: [
      "Komunitní energetika a úspory pro obyvatele.",
      "Poptávková doprava do okrajových částí.",
      "Konkrétní program naplnění statusu klimatických lázní.",
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
  "Zveřejníme harmonogram rekonstrukce radnice a zahájíme přípravu úvěru.",
  "Zadáme audit zahájení sezóny a úsporný model pro další ročník.",
  "Spustíme participativní rozpočet pro rok 2027 a svoláme první čtvrťová fóra.",
  "Zadáme nezávislý audit Development centra a zahájíme přípravu komunitní energetiky po vzoru Aše.",
  "Předložíme projekt Veřejných lázní a doplníme akutně chybějící dětská hřiště.",
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
