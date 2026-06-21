// Shared site constants — obsah kampaně Za lepší Mariánské Lázně.

export const site = {
  name: "Za lepší Mariánské Lázně",
  shortName: "ZLML",
  url: "https://lepsiml.cz",
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
  { label: "Kontakt", href: "/kontakt" },
];

export const contact = {
  email: "mail@josefpavlovic.cz",
  phone: "+420 607 517 967",
  facebook: "https://www.facebook.com/PiratiML",
  instagram: "https://www.instagram.com/pirati_zalepsiml/",
  spotify: "https://open.spotify.com/",
  youtube: "https://www.youtube.com/",
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
    borderColor: "var(--color-spa-gold)",
  },
  {
    id: "rodiny",
    icon: "lucide:users-round",
    title: "Město pro rodiny a mladé",
    short:
      "Veřejné lázně u bazénu, chybějící dětská hřiště, oprava Viktorky a Lokotky, inlinová dráha.",
    borderColor: "var(--color-pirate)",
  },
  {
    id: "unesco",
    icon: "lucide:mountain",
    title: "Prosperující UNESCO destinace",
    short:
      "Bikepark, cykloinfrastruktura, nové rybníky, oprava lanovky a obnovené lázeňské vycházky.",
    borderColor: "var(--color-spa-gold)",
  },
  {
    id: "radnice",
    icon: "lucide:eye",
    title: "Otevřená a průhledná radnice",
    short:
      "Participativní rozpočet, rozklikávací rozpočet, audit Development centra, fóra v každé čtvrti.",
    borderColor: "var(--color-ink)",
  },
  {
    id: "zelene",
    icon: "lucide:leaf",
    title: "Udržitelné a zelené Mariánky",
    short:
      "Komunitní energetika po vzoru Aše, poptávková doprava do okrajových částí, péče o zeleň a prameny.",
    borderColor: "var(--color-spa-forest)",
  },
  {
    id: "zdravotnictvi",
    icon: "lucide:stethoscope",
    title: "Zdravotnictví a naše město",
    short:
      "Moderní zázemí pro lékaře, Obecní sestra a Senior Taxi pro seniory, duševní zdraví ve školách, koordinátor péče.",
    borderColor: "var(--color-pirate-dark)",
  },
];

export type Candidate = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  isLeader?: boolean;
  quote?: string;
  personalMotivation?: string;
};

export const leader: Candidate = {
  name: "Vojta Franta",
  role: "Lídr kandidátky · Bývalý náměstek hejtmana Karlovarského kraje",
  photo: "/team/vojta-franta.jpg",
  bio: "Dlouhé roky jsem působil ve vedení Karlovarského kraje. Teď chci pomoci městu, které mám rád. Mariánské Lázně jsou UNESCO město — zaslouží si vedení, které dotahuje věci do konce. Máme zkušenosti, máme plán a máme odvahu.",
  quote: "Mariánské Lázně potřebují někoho s vizí a citem pro architekturu a kulturu. Musíme vidět dál než za jeden megaprojekt — pečovat o celek, o ulice, parky i detaily, které dělají Mariánky Mariánkami. Hrdost se buduje denně, ne jednou za čtyři roky.",
  personalMotivation:
    "V Karlovarském kraji jsem se naučil, že dobrá správa se buduje trpělivostí a poctivostí. Mariánky si to zaslouží.",
  isLeader: true,
};

export const coreTeam: Candidate[] = [
  {
    name: "Josef Pavlovic",
    role: "Zastupitel města · bývalý náměstek ministra zdravotnictví",
    photo: "/team/josef-pavlovic.png",
    bio: "Zaměstnanec společnosti Léčebné lázně Mariánské Lázně. Zastupitel města se zkušeností z celostátní úrovně ve zdravotnictví a lázeňství.",
    personalMotivation:
      "Znám zdravotnictví i lázně zevnitř. Vím, kde se dá ušetřit a kde se naopak musí investovat, aby Mariánky zůstaly klenotem.",
  },
  {
    name: "Ing. Martin Kalina",
    role: "Bývalý starosta Mariánských Lázní · dispečer mezinárodní dopravy",
    photo: "/team/martin-kalina.jpg",
    bio: "Je mu 41 let, téměř pět let byl starostou Mariánských Lázní. Dnes pracuje jako dispečer mezinárodní dopravy a ve volných chvílích se věnuje hlavně četbě, rodině a pasivnímu odpočinku.",
    personalMotivation:
      "Chuť pomáhat s rozvojem Mariánek mě neopustila. Rozhodl jsem se spolu s přáteli znovu nabídnout městu a jeho občanům své nápady a vize.",
  },
  {
    name: "Žaneta Pivcová",
    role: "Zubní technička · specialistka na kombinovanou protetiku",
    photo: "/team/zaneta-pivcova.jpg",
    bio: "Jsem zubní technička, specialistka na kombinovanou protetiku – ve své práci řeším věci na setiny milimetrů, přesně, funkčně a tak, aby dlouhodobě dávaly smysl. Stejný přístup chci přenést i do fungování města. Mám zkušenost ze sociálně-zdravotní komise, kde jsem se věnovala sociálním službám a zdravotnictví. Dostupnost zdravotní péče vnímám jako klíčovou – zdravotnictví má fungovat pro všechny, bez zbytečných bariér. Zajímá mě také, jak město spravuje svůj majetek a hospodaří s veřejnými prostředky.",
    personalMotivation:
      "Jsem zvyklá věci dotahovat a nést za ně odpovědnost. V životě mě drží pohyb, hudba a svoboda.",
  },
  {
    name: "Jan Pivec",
    role: "Student sociologie a politologie · Radní Studentské rady FF UK",
    photo: "/team/jan-pivec.jpg",
    bio: "Spoluzakladatel studentské iniciativy „Média nedáme!“. Volný čas věnuje přípravě studentských akcí, protestních iniciativ a četbě filosofie. Je přesvědčen, že investice do mladých lidí a jejich budoucnosti jsou klíčem k prosperujícímu městu.",
    personalMotivation:
      "Město musí podporovat kultivaci myšlení. Nikoliv propagandou, ale projekty, které budou otevřeny kreativitě a odlišnostem občanů.",
  },
  {
    name: "Alan Hodovský",
    role: "Truhlář · pendler v Německu",
    photo: "/team/alan-hodovsky.png",
    bio: "Jsem hrdý truhlář a momentálně pracuji jako pendler v Německu, odkud si domů vozím inspiraci, jak věci dělat lépe. Chci, aby Mariánky byly městem, kde mladí lidé vidí svou budoucnost a mají chuť zde zůstávat. Mým hlavním cílem je aktivně budovat a podporovat místní komunity, které u nás vytvoří živé a přátelské prostředí.",
    personalMotivation:
      "Jako srdcař a řemeslník se chci zasadit o konkrétní projekty — mým velkým snem a závazkem je vybudování moderního skateparku pro naše děti a mládež. Pojďme společně dát Mariánkám novou energii a prostor pro život.",
  },
  {
    name: "Huy Khánh Nguyen",
    role: "Student učitelství geografie · Univerzita Karlova",
    photo: "/team/huy-khanh-nguyen.jpg",
    bio: "Student učitelství geografie a teritoriálních studií na Univerzitě Karlově. Jeho blízkými tématy jsou kultura a školství. Ve volném čase se věnuje regionálnímu rozvoji a hře na hudební nástroje.",
    personalMotivation:
      "Studium geografie mi dalo cenné znalosti a dovednosti, které bych rád uplatnil na lokální úrovni. Chci, aby Mariánky byly místem, kde mladí lidé chtějí zůstávat a kde rozvoj neprobíhá na úkor přírody.",
  },
  {
    name: "Zdeněk Třešňák",
    role: "Kandidát",
    bio: "",
  },
  {
    name: "Jana Barcziová",
    role: "Kandidátka",
    bio: "",
  },
  {
    name: "Jana Kalinová",
    role: "Kandidátka",
    bio: "",
  },
  {
    name: "František Vachout",
    role: "Kandidát",
    bio: "",
  },
  {
    name: "Stanislav Rezek",
    role: "Kandidát",
    bio: "",
  },
];

export type ProgramTopic = {
  id: string;
  icon: string;
  title: string;
  lead: string;
  borderColor: string;
  promises: { title: string; body: string }[];
  ano?: string[];
  us?: string[];
  forYou?: string[];
  challenges?: string[];
};

export const programTopics: ProgramTopic[] = [
  {
    id: "hrdi",
    icon: "lucide:landmark",
    title: "Město, na které jsme hrdí",
    borderColor: "var(--color-spa-gold)",
    lead: "Radnice, osvětlení, zahájení sezóny, kolonáda. Mariánské Lázně si zaslouží investice, které jdou do detailu a které nestojí víc, než mají.",
    promises: [
      {
        title: "Rekonstrukce radnice",
        body: "Projektová dokumentace je hotová, financování zajistíme úvěrem. Rekonstrukce začne v prvním roce a dotáhne se do konce volebního období.",
      },
      {
        title: "Veřejné osvětlení — dva projekty za cenu jednoho",
        body: "Modernizace osvětlení v celém městě na úsporné LED. Při té příležitosti do zemních prací natáhneme optiku — jedna investice, dva výsledky.",
      },
      {
        title: "Úsporné zahájení sezóny",
        body: "Audit současné předražené akce a návrh úsporného modelu. Zahájení sezóny má být hrdostí, ne dírou v rozpočtu.",
      },
      {
        title: "Kolonáda v režii města",
        body: "Město bude aktivní v organizaci kulturních akcí na kolonádě.",
      },
      {
        title: "Systematický plán údržby majetku",
        body: "Pasport stavu všech budov a prostranství. Oprav se dočká každá lokalita podle priorit, ne podle přízně.",
      },
    ],
    ano: [
      "Radnice chátrá roky bez jasného plánu.",
      "Zahájení sezóny stojí město obrovské peníze.",
    ],
    us: [
      "Rekonstrukce radnice s jasným harmonogramem a financováním.",
      "Úsporný model zahájení sezóny podložený auditem.",
      "Kolonáda v režii města a lokálních tvůrců.",
    ],
    forYou: [
      "Bezpečnější cesta z večerní kolonády i z práce díky modernizovanému osvětlení v celém městě.",
      "Rychlejší a levnější internet přímo ve vašem domě — optika se natáhne souběžně s osvětlením, bez dalších výkopů.",
      "Zahájení sezóny, u kterého se nemusíte stydět přivést návštěvu z jiného města. A které nestojí miliony z vašich daní.",
      "Opravená radnice jako důstojný střed města, který reprezentuje Mariánky i vás.",
    ],
    challenges: [
      "Rekonstrukce radnice bude znamenat zadlužení města vysokou částkou, ale věříme, že město má jít příklad jak se o své budovy starat. Úvěr na rekonstrukci radnice zatíží rozpočet — zveřejníme splátkový plán i dopady, ne jen slibované přínosy.",
      "Přechod na úsporný model zahájení sezóny znamená říct „ne\u201d některým zavedeným dodavatelům. S tím přijde kritika a my ji uneseme.",
    ],
  },
  {
    id: "rodiny",
    icon: "lucide:users-round",
    title: "Město pro rodiny a mladé",
    borderColor: "var(--color-pirate)",
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
      {
        title: "Skatingový park",
        body: "Skatepark se v anketě Fóra zdravého města umístil jednoznačně na prvním místě. Preferovaná lokalita je klidová zóna na místě bývalých Hamrnických kasáren, kde Develop centrum počítá se skateparkem, dalšími sportovišti i bydlením. Klub Spa Riders zajistil německého partnera (skate klub RollSchuppen z Arzbergu) a podepsal memorandum o spolupráci — to otevírá cestu k financování z programu INTERREG. Dotační program běží do roku 2027; projekt byl již prezentován na zastupitelstvu.",
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
    forYou: [
      "Sauny a vířivka přímo v Mariánkách — už nemusíte jezdit do Karlových Varů nebo Františkových Lázní.",
      "Dětské hřiště v docházkové vzdálenosti od domova, kam to zvládnete i s kočárkem.",
      "Viktorka a Lokotka zase jako sportoviště, kam pošlete své děti a nebudete mít strach.",
      "Nová inlinová dráha, kde stráví odpoledne vaše děti i vy — místo aby odjížděly pryč.",
      "Město, ve kterém vaše dospívající děti chtějí zůstat.",
    ],
    challenges: [
      "Veřejné lázně jsou projekt za desítky milionů. Bez úvěru nebo dotace to nepůjde a my to jasně řekneme hned.",
      "Oprava Lokotky je závislá na dohodě s vlastníkem. Bude vyžadovat trpělivé jednání a může trvat víc než jedno volební období.",
      "Doplnění dětských hřišť po celém městě nezvládneme za jeden rok. Zveřejníme priority a harmonogram, abyste věděli, kdy přijde řada na vaši čtvrť.",
    ],
  },
  {
    id: "unesco",
    icon: "lucide:mountain",
    title: "Prosperující UNESCO destinace",
    borderColor: "var(--color-spa-gold)",
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
        title: "Obnovené lázeňské vycházky a péče o parky",
        body: "Kalamitní těžba v lesích okolo města už dávno skončila. Je čas vrátit se k systematické péči o lázeňské parky a lesy, obnovit značené vycházkové trasy a doplnit informační systém.",
      },
    ],
    ano: [
      "Bikepark zaseknutý v šuplíku.",
      "Lázeňské parky po kalamitě zanedbané.",
    ],
    us: [
      "Dotažený bikepark a cykloinfrastruktura.",
      "Obnovené vycházky a systematická péče o parky.",
    ],
    forYou: [
      "Bikepark, kam zajedete s dětmi na kole bez cestování po republice.",
      "Bezpečné cyklostezky po městě i do okolí — pro rodinné výjezdy i dojíždění do práce.",
      "Nové rybníky kousek od domova na procházky, rybaření i koupání.",
      "Obnovené lázeňské parky, kam se zase rádi vrátíte na ranní procházku nebo běh.",
    ],
    challenges: [
      "Nové rybníky musí projít vodoprávním řízením a souhlasem ochrany přírody. Nebudou hotové v prvním roce, možná ani ve druhém.",
      "Bikepark u sjezdovky závisí na dohodě s vlastníky pozemků. Projekt existuje, ale bez jejich souhlasu ho nezahájíme.",
    ],
  },
  {
    id: "radnice",
    icon: "lucide:eye",
    title: "Otevřená a průhledná radnice",
    borderColor: "var(--color-ink)",
    lead: "Radnice musí naslouchat dřív, než rozhodne. Vrátíme nástroje otevřené správy, které v Mariánkách prokazatelně fungovaly.",
    promises: [
      {
        title: "Kávou se starostou v nové podobě",
        body: "Vrátíme vám Kávu se starostou v nové podobě pravidelného podcastu o věcech z našeho města.",
      },
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
      "Participativní de facto rozpočet zrušilo.",
      "Důležitá rozhodnutí padají bez veřejné diskuse.",
      "Zpravodaj slouží jako PR nástroj vedení.",
    ],
    us: [
      "Participativní rozpočet zpátky v prvním roce.",
      "Pravidelná čtvrťová fóra na pevném harmonogramu.",
      "Auditované Development centrum s veřejnými výstupy.",
    ],
    forYou: [
      "Vy sami rozhodnete, kam půjde část rozpočtu — participativní rozpočet zpátky.",
      "Jedním kliknutím uvidíte, za co město utrácí každou korunu.",
      "Starosta a radní přijdou za vámi do vaší čtvrti. Nemusíte nikam cestovat, abyste byli slyšet.",
      "Žádné skryté zakázky, žádná překvapení na konci roku.",
      "Zpravodaj, který vás informuje — ne propaguje jednoho starostu.",
    ],
    challenges: [
      "Participativní rozpočet funguje jen tehdy, když do něj lidé aktivně vstupují. První ročník bude o budování důvěry, ne o zázračných projektech.",
      "Audit Development centra odhalí nepříjemné věci. Politicky to nebude snadné a někomu se to nebude líbit — ale neděláme to pro popularitu.",
      "Rozklikávací rozpočet vyžaduje úpravu informačních systémů. První verze nebude dokonalá, ale bude otevřená a postupně ji vylepšíme společně s vámi.",
    ],
  },
  {
    id: "zelene",
    icon: "lucide:leaf",
    title: "Udržitelné a zelené Mariánky",
    borderColor: "var(--color-spa-forest)",
    lead: "Mariánské Lázně jsou od roku 2023 klimatickými lázněmi. Tento status si musí zasloužit i praktickými kroky — v energetice, dopravě i péči o krajinu.",
    promises: [
      {
        title: "Komunitní energetika — zlevnění elektřiny obyvatelům",
        body: "Vytvoříme městskou energetickou komunitu po vzoru města Aš. Solární výroba na střechách městských budov se promítne do nižších účtů obyvatel.",
      },
      {
        title: "Infrastruktura do okrajových částí",
        body: "Opravíme silnici do Stanoviště a začneme s projekty, které nejenom tam přivedou občanskou vybavenost ale i do ostatních částí města…",
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
    forYou: [
      "Nižší účet za elektřinu díky komunitní energetice po vzoru města Aš.",
      "Spojení z Kladské a ze Stanoviště do centra — konečně se dostanete i bez vlastního auta.",
      "Čistší vzduch a chráněné prameny pro zdraví vaší rodiny.",
      "Levnější provoz městských budov = menší tlak na vaše daně.",
      "Lázeňské parky, zeleň a krajina, kam vykročíte ven rovnou ze své ulice.",
    ],
    challenges: [
      "Komunitní energetika vyžaduje administrativu a rozjezd. Výsledky — nižší účty — přijdou až ve druhém roce, ne hned.",
      "Poptávková doprava do okrajových částí vyžaduje pilotní provoz a vyhodnocení. Je možné, že první model nevyhoví a budeme ho upravovat.",
      "Status klimatických lázní nás zavazuje k cílům, které mohou omezit některé investice nebo aktivity. To je cena za kvalitu ovzduší a ochranu pramenů.",
    ],
  },
  {
    id: "zdravotnictvi",
    icon: "lucide:stethoscope",
    title: "Zdravotnictví a naše město",
    borderColor: "var(--color-pirate-dark)",
    lead: "Zdravotnictví v menším městě čelí chronickému nedostatku lékařů, zhoršené dostupnosti péče pro seniory a rostoucím psychickým problémům mladých. Město může udělat konkrétní kroky — bez čekání na stát.",
    promises: [
      {
        title: "Lékaře nelákáme na úplatky, ale na moderní zázemí",
        body: "Finanční bonusy za příchod lékaře vedou jen k přelévání doktorů mezi městy bez efektu. Nabídneme vybavené sdílené ordinace nebo zdravotnická centra s nižším nájmem — pro mladé lékaře je klíčové zázemí, možnost konzultací s kolegy a infrastruktura pro rodinu (školky, byty), nikoliv jen jednorázový bonus.",
      },
      {
        title: "Pomoc seniorům zůstat doma: Obecní sestra a Senior Taxi",
        body: "Senioři zbytečně končí v nemocnicích nebo domovech důchodců, protože nezvládají drobné úkony nebo dopravu. Zavedeme Obecní sestru (Community Nursing) — zdravotníka placeného obcí, který preventivně navštěvuje seniory a propojuje je se službami. Podpoříme Senior Taxi pro cesty k lékaři a na úřady, ideálně ve spolupráci s okolními obcemi.",
      },
      {
        title: "Duševní zdraví nesmí být tabu",
        body: "Nárůst psychických potíží u dětí a mladistvých a nedostatek péče jsou realitou i u nás. Podpoříme vznik center duševního zdraví v městských prostorách a zavedeme preventivní programy duševní hygieny do škol zřizovaných městem podle programu SZU – Zdravé školy.",
      },
      {
        title: "Koordinace zdravotní a sociální péče",
        body: "Lidé dlouho shánějí doktora s volnou kapacitou — neurologa, kardiologa a dalších specialistů. Zřídíme roli koordinátora, který pomůže lidem — zejména hůře se orientujícím seniorům — se sháněním registrujícího lékaře, zubaře či specialisty i s hledáním rehabilitace a sociálních služeb.",
      },
    ],
  },
];

export type WhyUsItem = {
  icon: string;
  year: string;
  title: string;
  body: string;
};

export const whyUs: WhyUsItem[] = [
  {
    icon: "lucide:award",
    year: "2021",
    title: "UNESCO světové dědictví",
    body: "Zápis Mariánských Lázní na seznam UNESCO jako součást Great Spa Towns of Europe jsme dotáhli za naší éry na radnici. Město získalo ochranu, která zavazuje i chrání.",
  },
  {
    icon: "lucide:leaf",
    year: "2023",
    title: "Klimatické lázně",
    body: "Mariánské Lázně se staly oficiálně klimatickými lázněmi — jako jediné v ČR kombinují čtyři léčivé zdroje (prameny, plyn, klima, rašelinu).",
  },
  {
    icon: "lucide:eye",
    year: "2018–2022",
    title: "Otevřená radnice",
    body: "Zavedli jsme rozklikávací rozpočet, participativní rozpočet a transparentní zakázky jako standard. Ne jako experiment, ale jako způsob práce.",
  },
];

export const quickWins = [
  "Zveřejníme harmonogram rekonstrukce radnice a zahájíme přípravu úvěru.",
  "Zadáme audit zahájení sezóny a úsporný model pro další ročník.",
  "Spustíme participativní rozpočet pro rok 2027 a svoláme první čtvrťová fóra.",
  "Zadáme nezávislý audit Development centra a zahájíme přípravu komunitní energetiky po vzoru Aše.",
  "Předložíme projekt Veřejných lázní a doplníme akutně chybějící dětská hřiště.",
  "Spustíme studii proveditelnosti programu Duševní zdraví v lázeňství a postavíme Mariánské Lázně do role lídra této celostátní debaty.",
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

export type MeetingEvent = {
  title: string;
  date: string;
  isoDate?: string;
  time?: string;
  durationMinutes?: number;
  location: string;
  neighborhood?: string;
  description?: string;
  status: "planned" | "confirmed" | "past";
};

export const meetings: MeetingEvent[] = [
  {
    title: "Veřejná beseda v Úšovicích",
    date: "15. května 2026",
    isoDate: "20260515",
    time: "18:00",
    durationMinutes: 120,
    location: "Kulturní dům Úšovice",
    neighborhood: "Úšovice",
    description:
      "Otevřené setkání s Vojtou Frantou a týmem. Představíme program, odpovíme na vaše otázky a rádi si vyslechneme, co Úšovice trápí.",
    status: "planned",
  },
  {
    title: "Potkejme se na kolonádě",
    date: "5. června 2026",
    isoDate: "20260605",
    time: "17:00",
    durationMinutes: 120,
    location: "Hlavní kolonáda",
    neighborhood: "Centrum",
    description:
      "Neformální setkání u kolonády. Přijďte si popovídat — o Mariánkách, o tom, co vám na městě chybí, nebo jen tak.",
    status: "planned",
  },
  {
    title: "Čtvrťové fórum — Chotěnov",
    date: "20. června 2026",
    isoDate: "20260620",
    time: "18:00",
    durationMinutes: 120,
    location: "Základní škola Chotěnov",
    neighborhood: "Chotěnov",
    description:
      "Co trápí Chotěnov? Jaké jsou priority? Společná debata o konkrétních bodech programu — a o tom, co do něj ještě chybí.",
    status: "planned",
  },
  {
    title: "Beseda na Kladské a Stanovišti",
    date: "Červenec 2026",
    location: "Upřesníme",
    neighborhood: "Kladská a Stanoviště",
    description:
      "Okrajové části mají svá specifika a zasluhují samostatnou debatu. Termín upřesníme podle zájmu — napište nám.",
    status: "planned",
  },
];
