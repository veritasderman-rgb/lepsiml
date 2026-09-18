// Program „Bydlím v Mariánkách" — město platí rodinám úroky z hypotéky.
//
// JEDINÝ ZDROJ PRAVDY jsou parametry níž. Starší verze návrhu pracovala se
// stropem 3 mil., desetiletou dobou a limitem 20 mil. ročně — ta je překonaná
// a nesmí se nikde objevit, stejně jako obraty „splácíte jen jistinu",
// „4 % z jistiny" nebo „690 domácností".
//
// SLOVNÍK: nikdy „dotace", vždy „příspěvek města". Vyhýbáme se slovům
// koncepce, implementace, synergie, systémový, revitalizace, unikátní,
// inovativní a slovu populismus (ani v popření).
//
// FAKTA O VLÁDĚ: v claimu a emočních větách stačí „vláda"; ve faktické větě
// o programovém prohlášení a termínu 2028 vždy „Babišova vláda". Slib byl
// ODLOŽEN nebo POSUNUT, nikdy zrušen nebo porušen.
//
// DAŇ: nikdy netvrdit, že je příspěvek osvobozený od daně.

export type Krok = { cislo: string; text: string };
export type Karta = { icon: string; title: string; body: string };
export type OsaBod = { datum: string; zdroj?: string; text: string };
export type Faq = { q: string; a: string };

export const hypotekaMeta = {
  program: "Bydlím v Mariánkách",
  /** Hlavní claim. Nikdy neměnit. */
  claim: "Vrátíme vám, co vám vláda vzala.",
  podtitulek:
    "Máte dvě děti a splácíte hypotéku na byt, ve kterém bydlíte? Úroky za vás zaplatí město. Až sto tisíc korun ročně, z peněz lázeňských hostů.",
  kandidatka: "Kandidátka číslo 9",
  volby: "9. a 10. října 2026",
  status:
    "Je to návrh. Přesnou výši, délku a podmínky schválí zastupitelstvo, ne plakát.",
  ctaHero: "Spočítejte si, kolik vám město zaplatí",
  metaTitle: "Vrátíme vám, co vám vláda vzala | Bydlím v Mariánkách",
  metaDescription:
    "Město zaplatí rodinám se dvěma a více dětmi úroky z hypotéky, až 100 tisíc korun ročně. Z peněz lázeňských hostů, ne z vašich daní. Spočítejte si, kolik dostanete.",
};

/** Parametry programu i výchozí hodnoty kalkulačky. */
export const model = {
  /** Jistina, ze které se úrok počítá. Nad ni si rodina platí sama. */
  stropJistiny: 2_800_000,
  /** Nejvyšší roční příspěvek na jednu rodinu. */
  rocniStrop: 100_000,
  minDeti: 2,
  vychoziUver: 2_800_000,
  vychoziSazba: 4.9,
  vychoziSplatnost: 30,
  /** Modelový byt, ze kterého vychází příběh rodiny. */
  bytPlocha: 70,
  bytCena: 3_500_000,
  /** Odhad počtu rodin s běžící hypotékou a náklad programu. */
  pocetRodin: 150,
  rocniNaklad: 15_000_000,
};

export const problem = {
  eyebrow: "Proč o tom mluvíme",
  title: "Město stárne a mladí odcházejí",
  vety: [
    "Mariánské Lázně patří k nejstarším městům kraje. K prvnímu lednu 2026 nás tu bylo 13 921.",
    "Karlovarský kraj má nejnižší porodnost v republice.",
    "V celé zemi se loni narodilo 77 636 dětí. Nejméně od roku 1785.",
  ],
  zaver: "Města nestárnou sama od sebe. Stárnou, když mladí nemají kde bydlet.",
};

export const jakToFunguje = {
  eyebrow: "Jak to funguje",
  title: "Tři kroky, nic víc",
  kroky: [
    {
      cislo: "1",
      text: "Máte dvě a více nezaopatřených dětí a splácíte hypotéku na byt nebo dům, ve kterém bydlíte.",
    },
    {
      cislo: "2",
      text: "Jednou za rok přinesete potvrzení z banky o zaplacených úrocích.",
    },
    {
      cislo: "3",
      text: "Město vám je proplatí. Až sto tisíc korun ročně.",
    },
  ],
  zaver: "Vy splácíte byt, my splácíme banku.",
};

export const pribeh = {
  eyebrow: "Jedna rodina",
  title: "Jak to vypadá v praxi",
  odstavce: [
    "Vezměte si rodinu, jakých tu žijí stovky. Dvě děti, jedno ve školce, druhé na prvním stupni. Před pár lety koupili sedmdesátimetrový byt za tři a půl milionu a vzali si na něj hypotéku dva miliony osm set tisíc.",
    "Bance posílají každý měsíc 14 860 korun. Z toho jde první rok na úroky přes jedenáct tisíc měsíčně. To jsou peníze, které nezaplatí byt. Ty prostě zmizí.",
    "S naším programem jim město jednou za rok pošle sto tisíc korun. Bance posílají svou splátku dál, ale v přepočtu na měsíc je byt stojí zhruba šest a půl tisíce místo necelých patnácti. Za deset let dostanou od města milion korun.",
  ],
  zaver: "Milion korun, který zůstane v Mariánkách. Ne v bance.",
};

export const vyuctovani = {
  eyebrow: "Vyúčtování, ne dárek",
  title: "Město na rodiny s dětmi dostává. Teď jim to vrátí.",
  lead:
    "Za každé dítě posílá stát městu peníze ze sdílených daní. Rodiny z nich zatím neviděly nic.",
  karty: [
    {
      icon: "lucide:baby",
      title: "44 tisíc za dítě ve školce",
      body: "Tolik pošle stát městu ročně ze sdílených daní za jedno dítě v mateřské škole.",
    },
    {
      icon: "lucide:backpack",
      title: "37 tisíc za školáka",
      body: "Za žáka základní školy dostane město ročně zhruba sedmatřicet tisíc korun.",
    },
    {
      icon: "lucide:users-round",
      title: "S rodiči přes sto tisíc",
      body: "Rodina se dvěma dětmi přinese městu do rozpočtu přes sto tisíc korun ročně. Program jí vrátí nejvýš sto tisíc.",
    },
  ],
  zaver: "Není to dárek, je to vyúčtování.",
};

/** Judo argument: námitka „bude to drahé" popisuje přesně cíl programu. */
export const judo = {
  title: "„A co když se sem nastěhuje moc rodin?“",
  odstavce: [
    "Pak program splnil přesně to, k čemu je. Cílem není ušetřit. Cílem je, aby Mariánky rostly.",
    "Každá nová rodina se dvěma dětmi přinese městu přes sto tisíc ročně ze sdílených daní. To je víc, než kolik od města dostane. A utrácí tady, u místních obchodníků a řemeslníků, ne v Plzni.",
    "Program roste jen tam, kde roste i příjem města. Patnáct milionů je strop při dnešních zhruba stopadesáti rodinách. Když rodin přibude, přibude úměrně i to, co město od státu za ně dostává.",
  ],
  zaver: "Program, který nic nestojí, je program, který nikdo nepotřebuje.",
};

export const osa = {
  eyebrow: "Stát slibuje, Mariánky dělají",
  title: "Devět měsíců jednoho slibu",
  body: [
    {
      datum: "5. ledna 2026",
      text: "Babišova vláda si do programového prohlášení napíše, že zajistí státní podporu na úroky z hypotéky při pořízení prvního bytu pro mladé rodiny pečující o dítě do šesti let a pro klíčové profese.",
    },
    {
      datum: "11. dubna 2026",
      zdroj: "ČT24",
      text: "V hospodářské strategii vlády podpora hypoték chybí.",
    },
    {
      datum: "14. června 2026",
      zdroj: "ČT24",
      text: "Z podpory rodin s dětmi se mezitím stal odpočet pro lidi do šestatřiceti let.",
    },
    {
      datum: "1. srpna 2026",
      zdroj: "Aktuálně.cz",
      text: "Babišova vláda připouští účinnost možná až od roku 2028.",
    },
  ] as OsaBod[],
  nase: {
    datum: "Do půl roku po volbách",
    text: "Předložíme zásady programu zastupitelstvu. První rodiny dostanou příspěvek v roce 2027.",
  },
  zaver: "Stát slibuje do roku 2028. Mariánky spustí do půl roku.",
};

export const pilot = {
  eyebrow: "Nabídka státu",
  title: "Začněte u nás",
  odstavce: [
    "Věříme, že stát dodrží, co slíbil. Do té doby si to platíme sami z poplatku od lázeňských hostů.",
    "A nabízíme vládě něco, co zatím nikdo nemá: místo, kde si může ověřit, jestli jistota bydlení opravdu drží rodiny ve městě, přitahuje nové a ovlivňuje rozhodování o dalším dítěti. Stopadesát rodin, dva roky, měřitelný výsledek.",
    "Je to levnější než plošný program, který se po roce ruší. A když to funguje, má stát hotový model pro každé město, kterému utíkají mladí.",
  ],
  zaver: "Chceme být důkaz, že i město na periferii dokáže rodiny udržet a přitáhnout.",
};

export const zaver = {
  title: "Ne někdo za nás. My. Tady. Teď.",
  body: "Devátého a desátého října rozhodnete vy. Dáte-li důvěru kandidátce číslo 9, předložíme zásady programu zastupitelstvu do půl roku po volbách.",
  cta: "Kandidátka číslo 9 · 9. a 10. října",
};

export const faq: Faq[] = [
  {
    q: "Kdo na příspěvek má nárok?",
    a: "Rodiny se dvěma a více nezaopatřenými dětmi, které splácejí hypotéku na byt nebo dům v Mariánských Lázních, ve kterém bydlí. Stačí trvalý pobyt nebo prokázané bydliště v tomto bytě. Nezáleží na tom, jestli tu žijete deset let, nebo se přistěhujete příští rok.",
  },
  {
    q: "Kolik město zaplatí?",
    a: "Úroky z vaší hypotéky do výše jistiny 2,8 milionu korun, nejvíc 100 tisíc korun ročně. Máte-li hypotéku dva miliony, město zaplatí prakticky celý úrok. Máte-li hypotéku 2,8 milionu, dostanete sto tisíc ročně, takže v přepočtu na měsíc platíte za byt zhruba šest a půl tisíce místo necelých patnácti. Bance přitom posíláte celou splátku dál každý měsíc, příspěvek od města přijde jednou za rok.",
  },
  {
    q: "Proč zrovna 2,8 milionu?",
    a: "Protože tolik je hypotéka na rodinný byt v Mariánkách. Byt 70 m² tu podle prodaných bytů stojí kolem 3,5 milionu, hypotéka na něj při osmdesáti procentech vyjde na 2,7 až 2,9 milionu. Strop je nastavený přesně na to. Kdo kupuje větší, doplácí si sám. Ne víc, ne míň.",
  },
  {
    q: "Jak dlouho příspěvek poběží?",
    a: "Návrh počítá s podporou po dobu splácení. Přesnou délku a start stanoví zastupitelstvo, které program schválí. Nechceme vám slibovat parametr, o kterém rozhoduje jednadvacet lidí, ne my sami.",
  },
  {
    q: "Odkud na to město vezme peníze?",
    a: "Z poplatku z pobytu, který platí lázeňští hosté. Město ho loni vybralo přes 60 milionů korun. Třináct milionů šlo na rekonstrukci Zpívající fontány, jedenáct na propagaci. Program stojí maximálně 15 milionů ročně. Fontána je hotová. Teď jsou na řadě rodiny.",
  },
  {
    q: "Vyhazuje město peníze?",
    a: "Naopak. Za každé dítě ve školce posílá stát městu ze sdílených daní zhruba 44 tisíc korun ročně, za školáka 37 tisíc, s rodiči přinese rodina se dvěma dětmi do rozpočtu přes sto tisíc. Zatím z těch peněz neviděla nic. Program jí je vrátí. Není to dárek, je to vyúčtování.",
  },
  {
    q: "Nezruší se kvůli tomu propagace města?",
    a: "Ne. Program stojí čtvrtinu výběru poplatku z pobytu. Propagace, destinační agentura i rezerva zůstávají. Peníze bereme z toho, co po fontáně zůstalo volné.",
  },
  {
    q: "Kolik rodin se to týká?",
    a: "Podle sčítání lidu 2021 žije v Mariánských Lázních 498 rodin se dvěma a více dětmi, 270 z nich ve vlastním bytě nebo domě. Reálně jde o zhruba 150 rodin, které splácejí hypotéku. Ne o stovky, ne o tisíce. Přesně o ty, které tu drží školy a školky.",
  },
  {
    q: "Co když se přihlásí všichni? Nezkrachuje rozpočet?",
    a: "Ne. Sto padesát rodin krát nejvíc sto tisíc je 15 milionů, a tolik tedy program stojí při dnešním počtu rodin. Víc než sto tisíc ročně nedostane žádná z nich, to je strop, který platí vždycky. Kolik na program v daném roce půjde celkem, schvaluje zastupitelstvo v rozpočtu. A jak rodiny splácejí, úroky klesají, takže náklad na každou z nich rok od roku klesá.",
  },
  {
    q: "A co když se sem kvůli tomu nastěhuje moc rodin a bude to strašně drahé?",
    a: "Pak program splnil přesně to, k čemu je. Cíl není ušetřit. Cíl je, aby Mariánky rostly. Každá nová rodina se dvěma dětmi přinese městu přes sto tisíc ročně ze sdílených daní, tedy víc, než dostane od města, a utrácí tady, ne v Plzni. Program roste jen tam, kde roste i příjem města. Když bude drahý, znamená to, že se sem stěhují lidi. To není problém. To je cíl. Program, který nic nestojí, je program, který nikdo nepotřebuje.",
  },
  {
    q: "Mám jedno dítě. Dostanu něco?",
    a: "Tento program je pro rodiny se dvěma a více dětmi, protože právě u nich je odliv z města nejcitelnější a právě ony přinášejí městu nejvíc přes sdílené daně. Pokud se vám narodí druhé dítě, nárok vám vznikne.",
  },
  {
    q: "Bydlíme v nájmu. Na nás jste zapomněli?",
    a: "Nezapomněli. Tenhle program je pro ty, kdo už do vlastního bydlení v Mariánkách investovali. Pro rodiny v nájmu je tu nový zákon o podpoře v bydlení a městské byty, které chceme stavět chytře, za státní úvěr kolem dvou procent, ne za komerční kolem pěti.",
  },
  {
    q: "Chci si koupit byt na pronájem. Mám nárok?",
    a: "Ne. Příspěvek je na byt, ve kterém rodina sama bydlí. Investiční byty program nepodporuje.",
  },
  {
    q: "Máme družstevní byt s úvěrem. Platí to i pro nás?",
    a: "Program je navržený pro hypotéky na byt ve vlastnictví. Jak posoudit úvěry na družstevní podíl, necháme na zastupitelstvu při schvalování zásad. Nechceme slibovat, co ještě není rozhodnuté.",
  },
  {
    q: "Budu příspěvek danit?",
    a: "Přesnou formu příspěvku a daňové nastavení doladíme se zastupitelstvem a daňovým poradcem tak, aby vám zůstalo maximum. Úrok bance dál platíte vy, takže si ho dál odečítáte z daní jako dnes. Neslibujeme, že je příspěvek bez daně, dokud to nebude černé na bílém. Ale i kdybyste z něj odvedli patnáct procent, pořád platíte za byt zhruba polovinu dnešní splátky.",
  },
  {
    q: "Co když byt prodáme nebo se odstěhujeme?",
    a: "Příspěvek je vázaný na to, že v bytě bydlíte. Když se odstěhujete, příspěvek končí. Zda a jak se bude část vracet, stanoví zásady programu. U podobných programů bývá závazek setrvat několik let a počítáme s tím i my.",
  },
  {
    q: "Je to vůbec legální? Může město něco takového dělat?",
    a: "Může. Zákon o obcích svěřuje zastupitelstvu rozhodování o příspěvcích fyzickým osobám (§ 85), zákon o rozpočtových pravidlech územních rozpočtů říká jak (§ 10a a násl.). Města podobné programy na bydlení provozují, Uherské Hradiště má fond na bydlení od roku 2009. Chce to jednu vyhlášku a jeden program. A politickou vůli.",
  },
  {
    q: "Kdo o příspěvku rozhodne a jak se o něj požádá?",
    a: "Zastupitelstvo schválí zásady programu, městský úřad přijímá žádosti a uzavírá s rodinou smlouvu. Počítáme s jednoduchým formulářem: potvrzení od banky o výši hypotéky a úroků, doklad o bydlišti, rodné listy dětí. Žádné běhání po úřadech.",
  },
  {
    q: "Budou jména příjemců veřejná?",
    a: "Příspěvky nad 50 tisíc korun zveřejňují obce ze zákona: jméno, příjmení, rok narození a obec. Ano, bude to veřejné, protože veřejné peníze mají být vidět. Stejně jako je vidět, kolik dostal Boheminium nebo za kolik se stavěla fontána.",
  },
  {
    q: "Stát to přece taky slíbil. Proč to má dělat město?",
    a: "Babišova vláda má podporu hypoték pro rodiny s dětmi v programovém prohlášení od ledna 2026. Od té doby ji posunula, přepsala na lidi do šestatřiceti let a poslední termín zní možná 2028. My na Prahu nečekáme. Platíme si to sami a věříme, že stát dodrží, co slíbil, a přidá se.",
  },
  {
    q: "Co znamená, že nabízíte program státu jako pilot?",
    a: "Stát devět měsíců hledá, jak podpořit rodiny a bydlení plošně pro celou zemi. My říkáme: začněte u nás. Sto padesát rodin, dva roky, měřitelný výsledek, tedy jestli lidé zůstávají, jestli se stěhují a jestli si troufnou na další dítě. Je to levnější než plošný program, který se po roce ruší. Když to funguje, má stát model pro každé město, kterému utíkají mladí.",
  },
  {
    q: "Nezvedne to ceny bytů?",
    a: "Nepomáháme kupovat, pomáháme splácet těm, kdo už koupili. Nikdo s příspěvkem nepřijde na prohlídku s vyšší nabídkou. A v Mariánkách není přehřátý trh, tady lidí ubývá. Program poptávku nezvedá, brzdí odliv.",
  },
  {
    q: "Proč nestavíte raději městské byty?",
    a: "Chceme obojí. Městské byty jsou potřeba a mají se stavět chytře, za státní úvěr kolem dvou procent, ne za komerční kolem pěti. Ale byt se staví roky. Rodině s hypotékou pomůžeme za pár měsíců, a ten byt je pak její, ne městský.",
  },
  {
    q: "Není to jen předvolební slib?",
    a: "Slib je něco, co nespočítáte. My máme počet rodin ze sčítání lidu, částku ze závěrečného účtu města, strop podle cen prodaných bytů a paragrafy ze zákona o obcích. A říkáme otevřeně, co ještě rozhodne zastupitelstvo. To není slib. To je návrh s čísly.",
  },
  {
    q: "Co se stane 9. a 10. října?",
    a: "Rozhodnete vy. Pokud dáte důvěru kandidátce číslo 9, předložíme zásady programu zastupitelstvu do půl roku po volbách a první rodiny dostanou příspěvek v roce 2027. Pokud ne, zůstane to návrh, který si někdo jiný jednou přečte a řekne: to jsme mohli udělat už tehdy.",
  },
];
