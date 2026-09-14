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
    "Stát podporu hypoték pro mladé rodiny slíbil a odložil. Chceme ji poskládat tady u nás, z peněz, které v Mariánkách nechají lázeňští hosté. Berte to jako návrh, se kterým jdeme do voleb, ne jako hotovou vyhlášku.",
  status:
    "Než návrh předložíme zastupitelstvu, musíme s právníky a daňaři doladit několik věcí. Které to jsou, píšeme níž na rovinu.",
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
      "Slib je černý na bílém v programovém prohlášení vlády. V dubnu 2026 k tomu ministryně financí dodala, že parametry zatím nejsou politicky vydiskutované a že se k nim kabinet vrátí až v druhé polovině volebního období. Kdo splácí dnes, ten si počká.",
  },
  {
    icon: "lucide:calculator",
    title: "Superdávka počítá nájem, ne hypotéku",
    body:
      "Kdo bydlí v nájmu, tomu superdávka nájem spočítá. Kdo splácí hypotéku, tomu ne. Vlastníkům se do výpočtu započítá paušál ve výši třiceti procent nájemního normativu a tím to končí. Na úrok, který každý měsíc odchází bance, stát nepřispěje ani korunou.",
  },
  {
    icon: "lucide:map-pin",
    title: "Tak si pomůžeme sami",
    body:
      "Jeden příjem ale máme ve vlastních rukou: poplatek z pobytu. O tom, kam poputuje, nerozhoduje ministerstvo, ale zastupitelstvo. Část z něj chceme každý rok poslat rodinám, které v Mariánkách bydlí natrvalo.",
  },
];

export const podminky: Podminka[] = [
  {
    icon: "lucide:users-round",
    title: "Dvě děti a víc",
    body:
      "Počítáme s rodinami, které drží mariánské školy plné. Na jedno dítě se program zatím vztahovat nebude, protože by to rozpočet neunesl. Radši slíbíme méně a dodržíme to.",
  },
  {
    icon: "lucide:house",
    title: "Trvalý pobyt v Mariánských Lázních",
    body:
      "Hlášená tu musí být celá rodina, ne jeden z rodičů kvůli papíru. Podmínka platí stejně pro občany jiných států Evropské unie, kteří jsou v Mariánských Lázních přihlášení k pobytu.",
  },
  {
    icon: "lucide:key-round",
    title: "Bydlíte ve svém. Tady.",
    body:
      "Byt nebo dům, ve kterém opravdu bydlíte. Nemovitost koupená na investici nebo pronajímaná turistům přes noc do programu nepatří.",
  },
  {
    icon: "lucide:percent",
    title: "Úrok z jistiny do 3 milionů",
    body:
      "Kdo má hypotéku vyšší, doplácí si úrok nad tři miliony sám. Nikoho tím nechceme překvapit až u okénka, a proto si to každý může spočítat v kalkulačce o kus níž.",
  },
  {
    icon: "lucide:calendar-check",
    title: "Deset let, jednou ročně",
    body:
      "Jednou za rok přinesete z banky potvrzení o zaplaceném úroku a město vám ho proplatí. Nic víc se po vás nechce a na radnici kvůli tomu nevznikne nové místo.",
  },
  {
    icon: "lucide:undo-2",
    title: "Odstěhujete se do deseti let? Vracíte.",
    body:
      "Podpora je vázaná na to, že tu zůstanete bydlet. Když se rodina odstěhuje dřív, vyplacené peníze se vracejí. Stejné pravidlo má i švýcarský Albinen, od kterého jsme nápad opsali.",
  },
];

export const financovani = {
  eyebrow: "Financování",
  title: "Hosté platí. Rodiny dostanou.",
  veta:
    "Za každou přenocovanou noc odvede host městu padesát korun. Sečteno za rok jsou to desítky milionů, které se dnes rozplynou v rozpočtu, aniž by kdokoli poznal kde. Chceme, aby jejich část každý leden odešla rodinám, které tu nejsou tři noci, ale celý život.",
  polozky: [
    {
      value: "50 Kč",
      label: "za noc",
      note: "Víc než padesát korun za noc vybrat zákon o místních poplatcích nedovolí. Mariánky jsou na tom stropu už dnes.",
    },
    {
      value: "20 mil.",
      label: "ročně strop programu",
      note: "Strop, který si zastupitelstvo schválí v rozpočtu. Přes něj se program nedostane, ať se přihlásí kdokoli.",
    },
    {
      value: "≈ 2,8 %",
      label: "výdajů rozpočtu ve špičce",
      note: "Modelový propočet při plném náběhu programu v roce 2030.",
    },
  ],
  poznamka:
    "Kolik poplatek z pobytu vynese doopravdy, si ověřujeme v závěrečném účtu města. Tabulka níž na tom čísle nestojí, počítá se v ní s počtem rodin.",
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
  "Jde o modelový propočet, ne o schválenou rozpočtovou položku. Celý stojí na odhadu, že v Mariánkách splácí hypotéku zhruba sto třicet rodin se dvěma a více dětmi; to číslo si ověřujeme v datech statistického úřadu. Hrubý náklad rok od roku roste, čistý zůstává kolem deseti milionů. Každá rodina, která tu kvůli programu zůstane nebo se přihlásí k trvalému pobytu, totiž část peněz vrátí zpátky do městské kasy.";

export const prinosy: Karta[] = [
  {
    icon: "lucide:school",
    title: "Plné třídy",
    body:
      "Škola vyjde na stejné peníze, ať ve třídě sedí osmnáct dětí, nebo dvacet šest. Budova, teplo, ředitel a od letošního ledna i kuchařky se školníky se platí tak jako tak. Nejdražší položka, jakou město ve školství má, je poloprázdná třída.",
  },
  {
    icon: "lucide:coins",
    title: "Rodina se zaplatí sama",
    body:
      "Za rodinu, jejíž děti chodí do mariánských škol, pošle stát městu přes rozpočtové určení daní zhruba sto tisíc korun ročně. U rodiny, která tu kvůli programu zůstane, se tedy velká část podpory vrátí rovnou zpátky.",
  },
  {
    icon: "lucide:user-check",
    title: "Přehlášené trvalé pobyty",
    body:
      "Řada lidí v Mariánkách bydlí, ale trvalý pobyt má pořád u rodičů v Praze nebo v Plzni. Jakmile se přehlásí, přiteče do městské kasy zhruba osmnáct tisíc korun ročně za každého z nich.",
  },
  {
    icon: "lucide:stethoscope",
    title: "Lidé do lázní a nemocnice",
    body:
      "Sestrám, lékařům a personálu lázní nechybí chuť sem nastoupit, chybí jim tu bydlení. Program s tím pohne, aniž by město muselo postavit jediný dům.",
  },
  {
    icon: "lucide:building-2",
    title: "Levnější než stavět",
    body:
      "Než město postaví dvacet startovacích bytů, uběhnou roky povolování a utratí se stovky milionů. Příspěvek na úrok je běžný provozní výdaj: dá se spustit během pár měsíců a dosáhnou na něj stovky rodin.",
  },
  {
    icon: "lucide:home",
    title: "Zbraň proti prázdným bytům",
    body:
      "Podmínka „bydlíte tu, ve svém, deset let“ zvýhodňuje lidi, kteří tu mají domov, před investory, co byt koupí a pronajímají ho přes noc. A město to nestojí ani korunu navíc.",
  },
];

export const vzory: Vzor[] = [
  {
    misto: "Albinen, Švýcarsko",
    stitek: "Obec, 250 obyvatel",
    body: [
      "Vesnice se zavřenou školou si v referendu v roce 2017 odhlasovala příspěvek na nastěhování: 25 000 franků na dospělého, 10 000 na dítě.",
      "Podmínka: koupíš nemovitost, bydlíš tam, deset let. Jinak vracíš.",
      "Od spuštění v roce 2018 se takhle přistěhovalo osmatřicet dospělých a jedenáct dětí, tedy zhruba pětina obce. Sousední Zeneggen pak program převzal po nich.",
    ],
    pouceni:
      "Co si z toho bereme: vyplácet až po několika letech pobytu, ne dopředu. A mít podmínky na webu černé na bílém. Do Albinenu chodí stovky dotazů denně a drtivá většina od lidí, kteří na příspěvek nedosáhnou.",
  },
  {
    misto: "Maďarsko",
    stitek: "Stát, mechanika podle dětí",
    body: [
      "Po prvním dítěti je půjčka bezúročná, po druhém stát smaže část dluhu, po třetím zbytek.",
      "U hypoték mladých manželů maže stát část jistiny podle počtu dětí.",
      "Na tomhle stupňování je nejcennější to, že mu člověk rozumí na první poslech.",
    ],
    pouceni:
      "Co si z toho bereme: neslibovat, že podpora zvedne porodnost. Maďaři do rodinné politiky lijí procenta HDP a porodnost se jim stejně nehnula. Plné školy jsou něco jiného, ty se dají za čtyři roky spočítat.",
  },
];

export const prvenstvi =
  "O jiném českém městě, které by svým rodinám hradilo úrok z hypotéky, nevíme. Hledali jsme poctivě. Jestli na nějaké narazíte, napište nám: doplníme ho sem a rádi se od něj přiučíme.";

/**
 * Otevřené otázky. Tahle sekce je jádro poctivosti celé stránky —
 * když se bude cokoli škrtat, neškrtá se tohle.
 */
export const dolazujeme = [
  {
    title: "Daňový dopad na vaši peněženku",
    body:
      "Zákon o daních z příjmů osvobozuje obecní dotace především tehdy, když jdou na pořízení majetku. Příspěvek na úrok do téhle kolonky spadnout nemusí, a pak by se z něj odváděla daň. Rodině by se tak vrátilo míň, než kolik za rok poslala bance. S daňovým poradcem proto hledáme, jestli program postavit jinak, nebo částku rovnou dorovnat. Dokud to nebudeme vědět jistě, neslibujeme vám úrok zpátky do poslední koruny.",
  },
  {
    title: "Co když bude zájem větší než limit",
    body:
      "Strop dvacet milionů ročně je pevný a podle propočtu se do něj vejdeme. Kdyby byl zájem větší, než čekáme, jednou na něj narazíme. Co se stane potom, jestli rozhodne pořadí podaných žádostí, nebo se částka pokrátí všem stejně, musí stát v pravidlech dřív, než dorazí první žádost. Nikdo se nemá dozvídat u okénka, že peníze došly.",
  },
  {
    title: "Jména příjemců budou veřejná",
    body:
      "Smlouvu o dotaci nad padesát tisíc korun musí město vyvěsit na úřední desku a nechat ji tam tři roky. Píšeme to sem rovnou, ať to nikoho nepřekvapí u podpisu. Veřejné peníze se rozdávají veřejně a jinak by to ani poctivě nešlo.",
  },
  {
    title: "Právní forma a schvalování",
    body:
      "Počítáme s dotačním programem podle zákona o rozpočtových pravidlech územních rozpočtů, kde o každé jednotlivé podpoře nad padesát tisíc hlasuje zastupitelstvo. Zbývá doladit podmínku trvalého pobytu tak, aby obstála: jiné obce si už spálily prsty na tom, že své občany třídily podle délky pobytu a neuměly to pořádně zdůvodnit.",
  },
];

export const faq: Faq[] = [
  {
    q: "Není to dotace pro ty, co už mají?",
    a: "Je pro lidi, kteří tu pracují, platí tu daně a vychovávají tu děti. Zhruba polovina peněz má udržet rodiny, které tu už jsou, druhá přivést nové. Říkat starousedlíkům, že si nezaslouží nic, protože si bydlení pořídili včas, nám přijde jako zvláštní způsob, jak se starat o město.",
  },
  {
    q: "Kde na to město vezme?",
    a: "Z poplatku z pobytu. Hosté tu přenocují víc než milionkrát do roka a z každé noci odvedou do rozpočtu padesát korun. Dnes tyhle peníze skončí v běžném provozu města. Část z nich má podle nás patřit lidem, kteří tu bydlí po celý rok.",
  },
  {
    q: "Stát to slíbil taky. Proč vám mám věřit?",
    a: "Protože sliby radnice si zkontrolujete líp než sliby vlády. Že stát podporu hypoték odložil na druhou polovinu volebního období, je dohledatelné. My program předložíme zastupitelstvu do roka od voleb a vy si v zápise přečtete, jestli jsme to udělali, nebo ne.",
  },
  {
    q: "Porodnost tím stejně nezvednete.",
    a: "To ani nezkoušíme. Chceme plné školy, a to je něco jiného. Za čtyři roky se dá jednoduše spočítat, kolik dětí v mariánských školách přibylo nebo ubylo.",
  },
  {
    q: "Budu z toho platit daň?",
    a: "Zatím to nevíme jistě a nebudeme nic předstírat. Zákon osvobozuje hlavně obecní dotace na pořízení nemovitosti a u příspěvku na splácený úrok si tím nikdo jistý není. Sedíme kvůli tomu s daňovým poradcem a odpověď napíšeme sem, i kdyby byla nepříjemná.",
  },
  {
    q: "Co když se přihlásí víc lidí, než na kolik jsou peníze?",
    a: "Program má mít pevný roční strop. Kdyby ho zájem přerostl, musí být předem dané, kdo dostane přednost: jestli ten, kdo přijde dřív, nebo se prostě ubere všem stejně. Chceme to mít v pravidlech od začátku, ne až v okamžiku, kdy bude pozdě. Rozhodnuté to zatím není.",
  },
  {
    q: "Mám hypotéku 4,5 milionu. Co já?",
    a: "Úrok z prvních tří milionů by hradilo město, zbytek byste si platili sami. Kalkulačka výš vám to spočítá dopředu, abyste věděli, do čeho jdete.",
  },
  {
    q: "Proč zrovna dvě děti a proč deset let?",
    a: "Dvě děti proto, že rozpočet města má svůj strop a nám jde především o plné třídy. Deset let proto, že kratší lhůta by z podpory udělala příspěvek na stěhování. Stejnou dobu ostatně používá i Albinen.",
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
