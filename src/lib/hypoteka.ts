// Hypoteční program — úrok z hypotéky pro rodiny se dvěma a více dětmi hradí město.
//
// Obsah je záměrně oddělený od šablony (stejně jako plan1155.ts), aby texty
// mohl upravovat kdokoli z týmu bez sahání do .astro souborů.
//
// POZOR NA TÓN: stránka popisuje NÁVRH, ne běžící program. Každé velké číslo
// musí mít vedle sebe svůj předpoklad a sekce `dolaďujeme` musí zůstat nahoře
// mezi obsahem, ne schovaná v patičce. Viz docs/hypotecni-program-integrace.md.

export type Karta = { icon: string; title: string; body: string };
export type Podminka = { icon: string; title: string; body: string };
export type Vzor = {
  misto: string;
  stitek: string;
  body: string[];
  pouceni: string;
};
export type RozpoctovyRadek = {
  label: string;
  hodnoty: [number, number, number, number];
  suma: number;
  /** Souhrnné řádky (náklad/příjem celkem, netto) se zvýrazňují. */
  souhrn?: boolean;
};
export type Faq = { q: string; a: string };
export type Zdroj = { text: string; url?: string };

export const hypotekaMeta = {
  title: "Úrok z hypotéky za vás zaplatí město",
  claim: "Máte dvě děti? V Mariánkách splácíte jen jistinu.",
  lead:
    "Stát podporu hypoték pro mladé rodiny slíbil a odložil. My ji chceme dát dohromady tady, z peněz, které ve městě nechají lázeňští hosté. Tohle je návrh, se kterým jdeme do voleb — ne hotová vyhláška.",
  status:
    "Návrh programu. Než ho předložíme zastupitelstvu, musíme doladit daňové a právní detaily — které, píšeme níž otevřeně.",
  start: "Chceme spustit do roka od voleb.",
};

/** Modelová hypotéka, ze které vychází kalkulačka i příklady v textu. */
export const model = {
  cenaBytu: 3_750_000,
  uver: 3_000_000,
  sazba: 4.9,
  splatnostLet: 30,
  /** Jistina, ze které město hradí úrok. Nad ni si rodina platí úrok sama. */
  strop: 3_000_000,
  /** Jak dlouho město úrok hradí. */
  roky: 10,
  /** Minimální počet dětí. */
  minDeti: 2,
};

/** Roční limit programu v rozpočtu města. */
export const rocniLimit = 20_000_000;

export const procTo: Karta[] = [
  {
    icon: "lucide:file-clock",
    title: "Stát slíbil a odložil",
    body:
      "Podpora hypoték pro mladé rodiny je v programovém prohlášení vlády. V dubnu 2026 k ní ministryně financí řekla, že parametry „nejsou vydiskutovány politicky“, a kabinet se k tématu chce vrátit až v druhé polovině volebního období. Rodina, která splácí dnes, z toho nemá nic.",
  },
  {
    icon: "lucide:calculator",
    title: "Superdávka počítá nájem, ne hypotéku",
    body:
      "Splátka hypotéky není uznatelný náklad na bydlení a úrok už vůbec ne. Vlastníci mají ve výpočtu jen paušál ve výši 30 % nájemního normativu. Kdo pracuje, koupil si bydlení a splácí úrok, nedostane na ten úrok od státu ani korunu.",
  },
  {
    icon: "lucide:map-pin",
    title: "Tak si pomůžeme sami",
    body:
      "Město má vlastní příjem, o kterém rozhoduje samo — poplatek z pobytu. Dnes se rozpustí v rozpočtu. Chceme z něj část vracet rodinám, které tu žijí celý rok, ne jen tři noci.",
  },
];

export const podminky: Podminka[] = [
  {
    icon: "lucide:users-round",
    title: "Dvě děti a víc",
    body:
      "Program míří na rodiny, které drží mariánské školy plné. U jednoho dítěte zatím nepočítáme — rozpočet by to neunesl a raději slíbíme méně a splníme to.",
  },
  {
    icon: "lucide:house",
    title: "Trvalý pobyt v Mariánských Lázních",
    body:
      "Celá rodina, ne jen papír. Platí i pro občany jiných států EU, kteří jsou tu hlášení k pobytu.",
  },
  {
    icon: "lucide:key-round",
    title: "Bydlíte ve svém. Tady.",
    body:
      "Byt nebo dům, ve kterém skutečně bydlíte. Ne investiční byt, ne krátkodobé pronájmy. Tahle podmínka je zároveň nejlepší nástroj proti prázdným bytům, jaký město má.",
  },
  {
    icon: "lucide:percent",
    title: "Úrok z jistiny do 3 milionů",
    body:
      "Máte vyšší hypotéku? Úrok nad tři miliony si platíte sami — a víte to předem, ne až u přepážky. Kalkulačka níž to spočítá na korunu.",
  },
  {
    icon: "lucide:calendar-check",
    title: "Deset let, jednou ročně",
    body:
      "Vyplácí se jednou za rok proti potvrzení z banky o zaplaceném úroku. Žádné měsíční papírování, žádný úředník navíc.",
  },
  {
    icon: "lucide:undo-2",
    title: "Odstěhujete se do deseti let? Vracíte.",
    body:
      "Je to podpora bydlení v Mariánkách, ne odstupné. Podmínku vratky má i švýcarský Albinen, ze kterého vycházíme.",
  },
];

export const financovani = {
  eyebrow: "Financování",
  title: "Hosté platí. Rodiny dostanou.",
  veta:
    "Každý host tu nechá 50 korun za noc. Dnes se ty peníze rozpustí v rozpočtu a nikdo neví kde. Chceme, aby z nich část každý rok šla rodinám, které tu žijí celý rok — ne jen tři noci.",
  polozky: [
    {
      value: "50 Kč",
      label: "za noc",
      note: "Zákonné maximum poplatku z pobytu podle zákona o místních poplatcích. Mariánky ho vybírají už dnes.",
    },
    {
      value: "20 mil.",
      label: "ročně strop programu",
      note: "Do rozpočtu jde pevný roční limit. Program nemůže přerůst přes to, co si město odhlasuje.",
    },
    {
      value: "≈ 2,8 %",
      label: "výdajů rozpočtu ve špičce",
      note: "Modelový propočet při plném náběhu programu v roce 2030.",
    },
  ],
  poznamka:
    "Skutečný roční výnos poplatku z pobytu si necháváme potvrdit ze závěrečného účtu města — čísla v tabulce níž na něm nestojí, stojí na počtu rodin.",
};

export const rozpocet: RozpoctovyRadek[] = [
  { label: "Stávající rodiny (~130, zůstatek ~2 mil.)", hodnoty: [12.7, 11.7, 10.8, 9.9], suma: 45.1 },
  { label: "Nově příchozí (~15/rok, úrok ze 3 mil.)", hodnoty: [1.1, 4.4, 6.6, 8.8], suma: 20.9 },
  { label: "Náklad celkem", hodnoty: [13.8, 16.1, 17.4, 18.7], suma: 66.0, souhrn: true },
  { label: "Přehlášení trvalých pobytů (~100 osob)", hodnoty: [1.8, 1.8, 1.8, 1.8], suma: 7.2 },
  { label: "Nové rodiny, které by tu jinak nebyly (~8/rok)", hodnoty: [0.8, 1.6, 2.4, 3.2], suma: 8.0 },
  { label: "Udržené rodiny (~8/rok)", hodnoty: [0.8, 1.6, 2.4, 3.2], suma: 8.0 },
  { label: "Daň z nemovitosti, poplatky", hodnoty: [0.4, 0.4, 0.4, 0.4], suma: 1.6 },
  { label: "Příjem celkem", hodnoty: [3.8, 5.4, 7.0, 8.6], suma: 24.8, souhrn: true },
  { label: "Čistý náklad města", hodnoty: [10.0, 10.7, 10.4, 10.1], suma: 41.2, souhrn: true },
];

export const rozpoctoveRoky = ["2027", "2028", "2029", "2030"] as const;

export const rozpocetPoznamka =
  "Modelový propočet, ne rozpočtová položka. Stojí na odhadu ~130 rodin se dvěma a více dětmi, které dnes splácejí hypotéku — číslo si ověřujeme v datech ČSÚ. Hrubý náklad roste, čistý drží kolem deseti milionů, protože každá rodina, která kvůli programu zůstane nebo se přihlásí k pobytu, platí zpátky do rozpočtu.";

export const prinosy: Karta[] = [
  {
    icon: "lucide:school",
    title: "Plné třídy",
    body:
      "Škola stojí stejné peníze při osmnácti i při dvaceti šesti dětech ve třídě. Budova, teplo, ředitel, od ledna i nepedagogičtí pracovníci. Poloprázdná škola je nejdražší věc, kterou město platí.",
  },
  {
    icon: "lucide:coins",
    title: "Rodina se zaplatí sama",
    body:
      "Za rodinu s dětmi v našich školách pošle stát městu přes sto tisíc ročně přes rozpočtové určení daní. Rodina, která kvůli programu zůstane, ten náklad z velké části vrátí.",
  },
  {
    icon: "lucide:user-check",
    title: "Přehlášené trvalé pobyty",
    body:
      "Spousta lidí tu bydlí a trvalý pobyt má jinde. Přehlásí se a město dostane peníze, které mu už dávno patřily.",
  },
  {
    icon: "lucide:stethoscope",
    title: "Lidé do lázní a nemocnice",
    body:
      "Personál nechybí proto, že by nechtěl. Chybí proto, že nemá kde bydlet. Tohle to řeší, aniž by město muselo postavit jediný dům.",
  },
  {
    icon: "lucide:building-2",
    title: "Levnější než stavět",
    body:
      "Startovací byty znamenají roky povolování, stamiliony a pár desítek bytů. Tohle je provozní výdaj, který se dá spustit v řádu měsíců a dosáhne na stovky rodin.",
  },
  {
    icon: "lucide:home",
    title: "Zbraň proti prázdným bytům",
    body:
      "Podmínka „bydlíte tu, ve svém, deset let“ je nejlepší nástroj proti investičním bytům a krátkodobým pronájmům, jaký město kdy mělo — a nestojí nic navíc.",
  },
];

export const vzory: Vzor[] = [
  {
    misto: "Albinen, Švýcarsko",
    stitek: "Obec, 250 obyvatel",
    body: [
      "Vesnice se zavřenou školou si v referendu v roce 2017 odhlasovala příspěvek na nastěhování: 25 000 franků na dospělého, 10 000 na dítě.",
      "Podmínka: koupíš nemovitost, bydlíš tam, deset let. Jinak vracíš.",
      "Od spuštění v roce 2018 se takhle přistěhovalo 38 dospělých a 11 dětí — zhruba pětina obce. Sousední Zeneggen program převzal.",
    ],
    pouceni:
      "Poučení pro nás: peníze až po několika letech pobytu, ne dopředu. A jasná pravidla hned na webu — do Albinenu chodí stovky dotazů denně od lidí, kteří podmínky nesplňují.",
  },
  {
    misto: "Maďarsko",
    stitek: "Stát, mechanika podle dětí",
    body: [
      "Po prvním dítěti je půjčka bezúročná, po druhém stát smaže část dluhu, po třetím zbytek.",
      "U hypoték mladých manželů maže stát část jistiny podle počtu dětí.",
      "Stupňování podle dětí funguje hlavně v tom, že mu lidé rozumí na první poslech.",
    ],
    pouceni:
      "Poučení pro nás: neslibovat, že podpora zvedne porodnost — v Maďarsku se to navzdory obrovským penězům nestalo. Slibujeme plné školy, protože to se za čtyři roky dá spočítat.",
  },
];

export const prvenstvi =
  "Nevíme o jiném městě v Česku, které by úrok z hypotéky svým rodinám hradilo. Hledali jsme. Pokud o nějakém víte, napište nám — doplníme ho sem a rádi se přiučíme.";

/**
 * Otevřené otázky. Tahle sekce je jádro poctivosti celé stránky —
 * když se bude cokoli škrtat, neškrtá se tohle.
 */
export const dolazujeme = [
  {
    title: "Daňový dopad na vaši peněženku",
    body:
      "Zákon o daních z příjmů osvobozuje dotace od obce hlavně na pořízení majetku. Refundace úroku do téhle škatulky nemusí spadnout — pak by se z ní odváděla daň a rodina by dostala čistého méně, než kolik zaplatila bance. Řešíme s daňovým poradcem, jestli program postavit jinak, nebo částku dorovnat. Než to budeme vědět, neslibujeme, že dostanete úrok zpátky do poslední koruny.",
  },
  {
    title: "Co když bude zájem větší než limit",
    body:
      "Program má mít pevný strop dvacet milionů ročně. Podle našeho propočtu se do něj vejdeme, ale při silnějším zájmu na něj časem narazíme. Pravidlo pro ten případ — pořadí podle podání žádosti, nebo poměrné krácení všem — musí být v pravidlech dřív, než přijde první žádost. Nechceme, aby se někdo dozvěděl u přepážky, že peníze došly.",
  },
  {
    title: "Jména příjemců budou veřejná",
    body:
      "Dotace nad 50 tisíc korun se ze zákona zveřejňuje na úřední desce na tři roky. Říkáme to rovnou, ať to nikdo nezjistí až u podpisu smlouvy. Jsou to veřejné peníze a rozdávají se veřejně — jinak by to ani nešlo dělat poctivě.",
  },
  {
    title: "Právní forma a schvalování",
    body:
      "Počítáme s dotačním programem podle zákona o rozpočtových pravidlech územních rozpočtů; dotace nad 50 tisíc schvaluje zastupitelstvo. Podmínku trvalého pobytu musíme nastavit tak, aby obstála — obce v minulosti narazily na to, že své občany třídily podle délky pobytu bez pořádného důvodu.",
  },
];

export const faq: Faq[] = [
  {
    q: "Není to dotace pro ty, co už mají?",
    a: "Je pro lidi, kteří tady pracují, platí tu daně a vychovávají tu děti. Půlka peněz je na to, aby tu rodiny zůstaly, půlka na to, aby přišly nové. Říct starousedlíkům, že si nic nezaslouží, protože si bydlení už pořídili, nám přijde jako divný způsob, jak se o město starat.",
  },
  {
    q: "Kde na to město vezme?",
    a: "Z poplatku z pobytu. Hosté v Mariánkách přenocují víc než milionkrát ročně a z každé noci jde do rozpočtu padesát korun. Dnes se ty peníze rozpustí v provozu. Chceme, aby z nich část každý rok šla rodinám, které tu bydlí celý rok.",
  },
  {
    q: "Stát to slíbil taky. Proč vám mám věřit?",
    a: "Protože nesliby se dají zkontrolovat. Vláda podporu hypoték odložila na druhou polovinu volebního období — je to dohledatelné. My můžeme program předložit zastupitelstvu do roka od voleb a vy si můžete přečíst, jestli jsme to udělali. Na rozdíl od státu je radnice na dosah.",
  },
  {
    q: "Porodnost tím stejně nezvednete.",
    a: "To ani nechceme. Chceme plné školy. Rozdíl je v tom, že plné školy se za čtyři roky spočítají — stačí se podívat, kolik dětí v mariánských školách přibylo nebo ubylo.",
  },
  {
    q: "Budu z toho platit daň?",
    a: "To je věc, kterou si zatím netroufáme slíbit. Osvobození od daně z příjmů míří hlavně na dotace na pořízení majetku a refundace úroku tam nemusí spadat. Řešíme to s daňovým poradcem a výsledek napíšeme sem — včetně toho, kdyby byl nepříjemný.",
  },
  {
    q: "Co když se přihlásí víc lidí, než na kolik jsou peníze?",
    a: "Program má mít pevný roční strop. Pravidlo pro převis zájmu — pořadí podle data podání, nebo krácení všem stejně — musí být v pravidlech dřív, než se otevřou žádosti. Zatím rozhodnuté není a nebudeme předstírat, že je.",
  },
  {
    q: "Mám hypotéku 4,5 milionu. Co já?",
    a: "Úrok z prvních tří milionů jistiny by hradilo město, zbytek byste platili sami. Kalkulačka výš vám to spočítá dopředu, ať se nedozvíte nic nepříjemného až u přepážky.",
  },
  {
    q: "Proč zrovna dvě děti a proč deset let?",
    a: "Dvě děti proto, že program míří na rodiny, které drží školy plné, a rozpočet města má svůj strop. Deset let proto, že tak dlouho trvá, než se rodina ve městě zabydlí — a přesně tuhle lhůtu používá i Albinen, ze kterého vycházíme.",
  },
];

export const zdroje: Zdroj[] = [
  {
    text: "Vláda odkládá státní podporu hypoték pro mladé rodiny — ČT24, 11. 4. 2026",
    url: "https://ct24.ceskatelevize.cz/clanek/domaci/vlada-odklada-statni-podporu-hypotek-pro-mlade-rodiny-372259",
  },
  {
    text: "Zákon č. 565/1990 Sb., o místních poplatcích — sazba poplatku z pobytu nejvýše 50 Kč za noc",
    url: "https://www.mesec.cz/zakony/zakon-o-mistnich-poplatcich/uplne/",
  },
  {
    text: "Zákon č. 250/2000 Sb., o rozpočtových pravidlech územních rozpočtů — dotační program obce (§ 10c) a zveřejňování smluv (§ 10d)",
    url: "https://www.zakonyprolidi.cz/cs/2000-250",
  },
  {
    text: "Zákon č. 586/1992 Sb., o daních z příjmů — osvobození dotací (§ 4 odst. 1) a odpočet úroků (§ 15 odst. 3)",
    url: "https://www.kurzy.cz/zakony/586-1992-zakon-o-danich-z-prijmu/paragraf-4/",
  },
  {
    text: "Albinen: alpské obce, které platí lidem za nastěhování — Swiss Review",
    url: "https://www.swisscommunity.org/en/news-media/swiss-revue/article/the-alpine-villages-paying-outsiders-to-move-in",
  },
  {
    text: "Příspěvek na bydlení a hypotéka: splátky nejsou uznatelný náklad",
    url: "https://www.finance.cz/546172-hypoteka-naklady-prispevek-na-bydleni/",
  },
];
