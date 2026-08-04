// Mariánky 10X lépe — 10 strategických projektů pro Mariánské Lázně 2026–2030.
// Obsah přenesený ze samostatné kampaňové stránky, aby žil ve stejném
// designovém systému jako zbytek webu.

export type PlanStat = { label: string; value: string };
export type PlanMilestone = { rok: string; text: string };
export type PlanCritique = { q: string; a: string };
export type PlanSynergy = { title: string; text: string };

export type PlanProject = {
  id: number;
  title: string;
  claim: string;
  /** Text na zamčené kartě — jediné, co je z projektu vidět před odemčením. */
  teaser: string;
  tags: string[];
  investice: string;
  intenzita: string;
  coToJe: string;
  proc: string;
  financovani: string;
  prinos: string;
  harmonogram: PlanMilestone[];
  kritika: PlanCritique[];
  /** Datum odemčení (YYYY-MM-DD, půlnoc lokálního času). */
  unlock: string;
};

export const planMeta = {
  title: "Mariánky 10X lépe",
  subtitle: "10 strategických projektů pro Mariánské Lázně 2026–2030",
  lead: "Z prázdných budov do budoucnosti. Na stole leží 40 miliard Kč z EU pro Karlovarský kraj. Mariánky 10X lépe je nástroj, jak si z nich Mariánky vezmou svůj díl — a otočí demografickou spirálu úpadku.",
  goal: "Cíl: 15 500 obyvatel do roku 2035. Ne údržba úpadku, ale řízený růst.",
  stats: [
    { label: "Celkové investice", value: "1,25–1,8 mld. Kč" },
    { label: "Externí financování", value: "70–85 %" },
    { label: "Spoluúčast města", value: "60–100 mil./rok" },
  ] as PlanStat[],
  election: "Rozhodnou volby 9.–10. října 2026.",
  finale: "Mariánky 10X lépe. Volte. Město nesmí dostávat zbytky, musí vést.",
};

/** Projekty #02–#04 sdílejí jeden argument — ukáže se, jakmile je odemčený aspoň jeden. */
export const sportProjectIds = [2, 3, 4];

export const sportArgument = {
  title: "Proč město platí sport? (#02–#04)",
  claim: "I když trenéra zaplatí město, pořád je to nejlevnější investice do budoucnosti.",
  points: [
    { n: "Přímá úspora rodin", text: "Dnes florbalisté, basketbalisté i bikrosaři jezdí trénovat do Aše, Chebu a Plzně. Náklady nese rodina — čas, benzín, opotřebení. Sportoviště doma = stovky hodin a desetitisíce korun ročně zpět rodinám." },
    { n: "Pozitivní externality", text: "Sportující dítě = nižší náklady zdravotního systému, nižší kriminalita, lepší školní výsledky. Mezinárodní studie (UK Active, WHO HEAT) ukazují návratnost 3–7 Kč na každou korunu investovanou do pohybu dětí a mládeže." },
    { n: "Ekonomika obsazenosti", text: "Vyhřívané hřiště a hala = soustředění, turnaje a kempy mimo hlavní lázeňskou sezónu. Plné penziony v listopadu. Provozní zisk Viktorky z prodloužené sezóny: +1,4 až +2,5 mil. Kč ročně." },
    { n: "Demografie", text: "Rodina s dětmi se nestěhuje do města, kde dítě nemá kde trénovat. Sport je retenční infrastruktura." },
  ],
  closing: "Trenér placený městem není náklad — je to nejlevnější položka celého řetězce, který drží rodiny ve městě.",
};

export const planProjects: PlanProject[] = [
  {
    id: 1,
    unlock: "2026-07-21",
    title: "Radnice 21. století",
    claim: "Z prázdné budovy moderní úřad, srdce komunity a dílny pro všechny.",
    teaser: "Budova, která 4 roky chátrá s dřevomorkou, se stane srdcem města.",
    tags: ["Enabler", "Udržet profese"],
    investice: "550–650 mil. Kč",
    intenzita: "až 85 %",
    coToJe: "Komplexní rekonstrukce budovy 6 500 m² (kolaudace 1919, dnes havarijní stav s dřevomorkou): moderní úřad + sál zastupitelstva (přízemí a 1. patro); komunitní hub — coworking, zázemí spolků, komunitní sál; dílny / makerspace — dřevodílna, kovodílna, 3D tisk, šicí dílna, otevřené veřejnosti (kutilové, senioři, řemeslníci, víkendové kurzy; tech-kroužky dětí z projektu #08 je hostí odpoledne); sanace havarijního stavu + energetická renovace.",
    proc: "Město nemá jediný strategický projekt připravený pro fondy OP ST. Radnice na Ruské 155/3 chátrá roky — je symbolem nečinnosti koalice. Jedna rekonstrukce vyřeší tři problémy: důstojný úřad, chybějící komunitní prostor, chybějící velký projekt pro OP ST 2028+.",
    financovani: "550–650 mil. Kč · OP ST: 470–550 mil. (strategický projekt) · ŽP/NZÚ (energetika): 35–55 mil. · Město: 5–15 mil./rok po dobu realizace",
    prinos: "Úspora nájmů roztroušených pracovišť, energetické úspory, příjmy z coworkingu a kurzovného dílen. A hlavně: budova přestane ztrácet hodnotu — prázdná budova je záporný výnos.",
    harmonogram: [
      { rok: "2026", text: "Strategický status v OP ST" },
      { rok: "2027", text: "Projektová dokumentace" },
      { rok: "2028–30", text: "Stavba" },
      { rok: "2031", text: "Otevření" },
    ],
    kritika: [
      { q: "Půl miliardy za úřad?!", a: "Ne za úřad. Za úřad, komunitní centrum a dílny v jednom, z toho 85 % zaplatí EU. Alternativa: budova spadne a demolici zaplatí město ze svého." },
      { q: "Proč dílny?", a: "Protože komunita potřebuje místo, kde se potkává jinak než u piva. Makerspace je nejlevnější sociální prevence a podpora řemesel." },
    ],
  },
  {
    id: 2,
    unlock: "2026-07-28",
    title: "FC Viktoria Sportovní Hub",
    claim: "Vyhřívané hřiště 24/7. Soustředění ze 3 zemí. Gastro pro veřejnost.",
    teaser: "Proč jezdí bavorské kluby na soustředění do Polska? Brzy nebudou muset.",
    tags: ["Přilákat nové"],
    investice: "170–220 mil. Kč",
    intenzita: "70 % NSA",
    coToJe: "Vyhřívané hřiště s celoročním provozem, ubytování pro 60 sportovců, gastro zóna pro veřejnost. Napojeno na energetickou komunitu (#10). Vzor: Cracovia Training Center, Krakov. Generuje 15–28 nových pracovních míst = nové rodiny.",
    proc: "Město buduje ziskovou infrastrukturu k externímu pronájmu — kluby z Německa, Bavorska a ČR hledají zimní soustředění a nemají kam jezdit. Mariánky mají lázeňské zázemí, regeneraci a ubytování. Chybí jen hřiště, které nezamrzá.",
    financovani: "170–220 mil. Kč · NSA: 70 % (hlavní zdroj) · OP ST + IROP doplňkově · Město: 6–10 mil. spoluúčast",
    prinos: "Provozní zisk z prodloužené sezóny +1,4 až +2,5 mil. Kč/rok. Návratnost spoluúčasti města: 4–7 let. Plus obsazenost ubytování a gastronomie ve městě mimo sezónu.",
    harmonogram: [
      { rok: "2026", text: "Dokumentace + žádost NSA" },
      { rok: "2027–28", text: "Stavba" },
      { rok: "2029", text: "První zimní soustředění" },
    ],
    kritika: [
      { q: "Fotbal pro pár kluků?", a: "Ne. Byznys plán stojí na externím pronájmu klubům ze 3 zemí. Hřiště je produkt, který se prodává. Viz společný argument pro sport." },
    ],
  },
  {
    id: 3,
    unlock: "2026-08-04",
    title: "Bikros + Skatepark",
    claim: "Konec nudy. Mariánky jako magnet pro mladé a kreativní třídu.",
    teaser: "Olympijský sport, mezinárodní závody a studio, o kterém sní každý tvůrce obsahu.",
    tags: ["Udržet mladé"],
    investice: "90–180 mil. Kč",
    intenzita: "70 % NSA",
    coToJe: "Sdružený areál: olympijský skatepark s parametry pro mezinárodní závody (World Skate) + modernizovaná bikrosová dráha + ubytování pro 80 závodníků + AV studio pro tvůrce obsahu (Red Bull, YouTube formáty).",
    proc: "Skateboarding i BMX jsou olympijské sporty s explozivním růstem. Areál přitahuje kreativní třídu 20–35 let — přesně demografii, která městu chybí. AV studio dělá z každého závodu marketing města zdarma.",
    financovani: "90–180 mil. Kč · NSA: 70 % · Město: spoluúčast, návratnost přes pronájmy a závody",
    prinos: "Mezinárodní závody = obsazená lůžka, gastro tržby, mediální dosah. Mladí mají důvod zůstat — a důvod se přistěhovat.",
    harmonogram: [
      { rok: "2026", text: "Územní studie + žádost NSA" },
      { rok: "2027–28", text: "Stavba" },
      { rok: "2029", text: "První mezinárodní závod" },
    ],
    kritika: [
      { q: "Skatepark za sto milionů?", a: "Skatepark + bikros + ubytování + AV studio. Jedna investice, čtyři výnosové zdroje. NSA platí 70 %." },
    ],
  },
  {
    id: 4,
    unlock: "2026-08-11",
    title: "Sportovní hala",
    claim: "Konečně krytá hala pro Mariánky. Doma, ne v Aši.",
    teaser: "Naše děti dojíždějí za sportem do Aše. To brzy skončí.",
    tags: ["Udržet mladé"],
    investice: "150–200 mil. Kč",
    intenzita: "až 80 %",
    coToJe: "Moderní krytá hala: hrací plocha 45×24 m, výška min. 7 m, tribuna pro 200+ diváků, 4 týmové šatny. Vzor: Hala Lipník nad Bečvou (postavena za 83 mil. Kč v roce 2017).",
    proc: "Florbal a basketbal dnes jezdí trénovat mimo město. Krytá hala je základní vybavenost města s 12 tisíci obyvateli — Mariánky ji nemají.",
    financovani: "150–200 mil. Kč · NSA (70 %): 100–140 mil. · IROP: 15–25 mil. · Město: 20–30 mil.",
    prinos: "Konec dojíždění rodin, pronájmy klubům a školám, turnaje = návštěvnost. Viz společný sportovní argument.",
    harmonogram: [
      { rok: "2026", text: "Výběr lokality (ZŠ Jih / Viktoria / Vrchlického) + územní studie" },
      { rok: "2027", text: "Dokumentace + žádost NSA" },
      { rok: "2028–29", text: "Stavba" },
    ],
    kritika: [
      { q: "Provoz haly město zruinuje.", a: "Lipník nad Bečvou provozuje srovnatelnou halu od roku 2017 bez problémů. Pronájmy pokryjí většinu provozu; zbytek je nejlevnější prevence, jakou město může koupit." },
    ],
  },
  {
    id: 5,
    unlock: "2026-08-18",
    title: "Vila LIL — Ready to Build & JV",
    claim: "Město připraví, prestižní řetězec postaví. 25 let ostudy končí.",
    teaser: "25 let prázdná. 4 neúspěšné pokusy o prodej. My máme mechanismus.",
    tags: ["Přilákat nové"],
    investice: "80–150 mil. Kč",
    intenzita: "výstavba 100 % partner",
    coToJe: "Město NEbude hoteliérem. Město dovede projekt do fáze Ready to Build: architektonická studie, projektová dokumentace, stavební povolení, dohoda s památkáři (moderní přístavba + historické jádro). Takto zhodnocenou nemovitost vloží do joint venture s operátorem top hotelů (model Augustine/Marriott) — město drží podíl, partner přináší kapitál a know-how.",
    proc: "2001–2025: čtyři neúspěšné pokusy o prodej. Prázdná ruina se prodat nedá — projekt s povolením ano. RTB fáze násobí hodnotu nemovitosti a přenáší stavební riziko na partnera. Starosta sám přiznal bezradnost — my předkládáme mechanismus.",
    financovani: "80–150 mil. Kč celkem · Město investuje jen do přípravy: 10–25 mil. (dokumentace, povolení) — kryto z Norských fondů/EHP (kulturní dědictví) · Výstavba 60–100+ mil.: soukromý kapitál partnera v JV · Město: podíl v JV místo jednorázového výprodeje",
    prinos: "Podíl na zisku hotelu dlouhodobě, pětihvězdičková vlajka zvedá celou destinaci, žádné stavební riziko. A hlavně: konec „Achillovy paty“ v centru města.",
    harmonogram: [
      { rok: "2026", text: "Architektonická soutěž + památková dohoda" },
      { rok: "2027", text: "Dokumentace + povolení" },
      { rok: "2028", text: "Mezinárodní RFP na JV partnera" },
      { rok: "2030", text: "Otevření" },
    ],
    kritika: [
      { q: "Prodáváte rodinné stříbro!", a: "Neprodáváme. JV znamená, že město zůstává spoluvlastníkem a bere podíl ze zisku. Rodinné stříbro je dnes ruina — my z něj děláme aktivum." },
      { q: "Památkáři to nedovolí.", a: "Augustine Praha ukazuje, že jde skloubit památku a top hotel. Živá budova s moderním křídlem je lepší než romantická ruina." },
    ],
  },
  {
    id: 6,
    unlock: "2026-08-25",
    title: "Citya 2.0 — doprava na zavolání",
    claim: "Mikrobus přes aplikaci do 15 minut. V létě na Lido, v zimě na běžky. A senior taxi v ceně.",
    teaser: "Tři drahé dopravní systémy nahradí jeden chytrý. A na Kladskou se dostanete bez auta.",
    tags: ["Udržet seniory"],
    investice: "8–20 mil. Kč / 3 roky",
    intenzita: "až 70 % (pilot)",
    coToJe: "AI řízená poptávková doprava (ověřeno v Libereckém kraji: 1 700 cestujících za 4 měsíce) ve třech vrstvách: okrajové části — Úšovice, Hamrníky ↔ centrum/nemocnice, do 15 minut; sezónní obslužnost — léto: Lido, Mýťák, Kladská, zima: svozy na běžecké okruhy a lyže; integrace senior taxi — dnešní samostatná služba (výdaje 546 tis. Kč/rok, data 2024) se rozpustí do jedné flotily s jedním dispečinkem. Senioři dostanou víc vozů a delší provozní dobu, město ušetří duplicitní režii.",
    proc: "Prázdné linkové autobusy do okrajových částí stojí 3–5× víc než poptávková doprava. Tři oddělené systémy (MHD okraje + senior taxi + nic pro rekreaci) nahradí jeden chytrý.",
    financovani: "8–20 mil. Kč na 3 roky · Pilot (rok 1): OP Doprava + kraj hradí až 70 % · Provoz: 3–6 mil./rok, minus ~0,5 mil./rok úspora z integrace senior taxi a minus úspora ze zrušených prázdných spojů",
    prinos: "Levnější obslužnost než linkové autobusy, senioři u lékaře bez prosby o odvoz, turisté bez aut na Kladské, mladí večer bezpečně domů.",
    harmonogram: [
      { rok: "2026", text: "Analýza s Citya" },
      { rok: "2027 Q1", text: "3 měsíce pilot zdarma pro občany" },
      { rok: "2027+", text: "Plný provoz včetně sezónních linek" },
    ],
    kritika: [
      { q: "Zrušíte seniorům taxi!", a: "Naopak. Stejná služba, víc vozů, delší doba, jeden telefon/aplikace + dispečink pro ty, kdo aplikaci nechtějí. A město ušetří půl milionu ročně na režii." },
    ],
  },
  {
    id: 7,
    unlock: "2026-09-01",
    title: "AI úřad pro občany",
    claim: "Vyřízeno do 10 minut z mobilu. V neděli večer. A nikdo nepřijde o práci.",
    teaser: "Žádost podaná v neděli večer z gauče. Rozhodnutí ve dnech, ne týdnech.",
    tags: ["Enabler", "Udržet mladé"],
    investice: "10–20 mil. Kč",
    intenzita: "80–90 %",
    coToJe: "AI chatbot ve 4 jazycích, smart formuláře předvyplněné z registrů, aplikace Moje Mariánky. Konec úředních hodin, papírů a 30 dní čekání.",
    proc: "Dva klíčové akcenty: 1) Rychlost rozhodování a méně byrokracie na straně občana — žádost podaná v neděli večer z gauče, stav online, rozhodnutí ve dnech místo týdnů; byrokratickou zátěž nese systém, ne občan. 2) Nikoho nepropouštíme — nenahrazujeme odchody do důchodu. Úřad se zeštíhlí přirozeně: kolegyně odejde do penze a její agendu převezme systém + stávající tým. Sociálně bezkonfliktní digitalizace.",
    financovani: "10–20 mil. Kč · Národní plán obnovy (DigiVoucher) + OP TAK pokryjí drtivou většinu · Návratnost do 2 let v ušetřených úředních hodinách a nezvyšovaných stavech",
    prinos: "Trvale nižší provozní náklady úřadu, spokojenější občané, image města, které funguje. Mladí lidé úřad s frontou nikdy nepochopí — a nemusí.",
    harmonogram: [
      { rok: "2026", text: "Výběr platformy + žádost DigiVoucher" },
      { rok: "2027", text: "Pilot: 3 nejčastější agendy" },
      { rok: "2028", text: "Plný provoz" },
    ],
    kritika: [
      { q: "AI vezme lidem práci.", a: "Ne. Nikoho nepropouštíme, jen nenahrazujeme přirozené odchody. Úředníci se posunou od razítkování k reálné pomoci občanům." },
      { q: "Babička aplikaci neovládá.", a: "Přepážka zůstává. AI jen ubere frontu těm, kdo na ni nechtějí stát — babička na přepážce čeká kratší dobu." },
    ],
  },
  {
    id: 8,
    unlock: "2026-09-08",
    title: "Perfektní vzdělávání",
    claim: "Školy, za kterými se rodiny stěhují. Od školky po maturitu.",
    teaser: "Angličtina a němčina od 3 let. AI od první třídy. Školy, za kterými se stěhuje.",
    tags: ["Přilákat nové", "Udržet mladé"],
    investice: "50–90 mil. Kč setup",
    intenzita: "70–75 %",
    coToJe: "Integrovaný vzdělávací ekosystém — bilingvní školky, ZŠ, ZUŠ a DDM pod jednou strategií: jazyky (rodilí mluvčí od 3 let v MŠ, CLIL metoda na ZŠ — cíl: angličtina a němčina jako od rodilých mluvčích); AI kompetence (informatické myšlení a práce s AI nástroji od 1. stupně, tech-kroužky robotika/3D tisk v DDM 2.0); entrepreneurship fostering (projektová výuka, dětské minipodniky, napojení na studentskou firmu Kolonády #09 jako vrchol pyramidy); dětský psycholog na školách — duševní zdraví jako standard, ne luxus; kvalitní ZUŠ — umělecké vzdělávání jako plnohodnotná větev. DDM jde organizačně pod školy — jeden vzdělávací ekosystém, žádné resortní bariéry.",
    proc: "Město se 40% zahraniční klientelou nesmí produkovat žáky s A2 angličtinou. Rodiny se dnes stěhují za školami — Mariánky můžou být město, kam se rodiny stěhují kvůli školám, nebo kam posílají děti na internát. Vzdělávání je nejsilnější dlouhodobý magnet.",
    financovani: "Setup 50–90 mil. Kč · OP JAK (70–75 %) + Erasmus+ K2 (jazyky) + modernizace DDM (OP JAK 75 %) · Provoz: 4–8 mil. Kč/rok z rozpočtu města (rodilí mluvčí, psycholog, lektoři)",
    prinos: "Každá přistěhovaná rodina = cca 100–200 tis. Kč/rok v rozpočtovém určení daní. 20 rodin ročně = roční provoz se zaplatí sám. Plus retence rodin, které kvůli školám neodejdou.",
    harmonogram: [
      { rok: "2026/27", text: "Pilot ve 2 MŠ se 4 rodilými mluvčími + psycholog na ZŠ" },
      { rok: "2027/28", text: "CLIL na 1. stupni + DDM 2.0" },
      { rok: "2029", text: "Plný ekosystém" },
    ],
    kritika: [
      { q: "Elitářství.", a: "Naopak: veřejné školy zdarma s kvalitou soukromých. Elitářství je stav, kdy si kvalitní vzdělání může dovolit jen ten, kdo dítě vozí do Plzně." },
      { q: "Nenajdete rodilé mluvčí.", a: "Lázeňské město s UNESCO statusem a nízkými životními náklady je pro lektory atraktivní; Erasmus+ síť pomáhá s náborem." },
    ],
  },
  {
    id: 9,
    unlock: "2026-09-15",
    title: "Kolonády — studentská firma",
    claim: "Maturanti dostanou firmu. Kolonády dostanou život. Město dostane polovinu zisku.",
    teaser: "Svatba na kolonádě. Catering, hudba, ubytování naproti. A celé to řídí maturanti.",
    tags: ["Udržet mladé", "Přilákat nové"],
    investice: "80–150 mil. Kč",
    intenzita: "70–80 %",
    coToJe: "Revitalizace kolonád Lesního a Ferdinandova pramene (Karolina bez stavebních zásahů) na event-ready prostory: svatby, kulturní akce, gastro — s mokrou variantou pro svatby za každého počasí. Součástí je krátkodobé ubytování přímo naproti Lesnímu prameni (svatebčané, účinkující, hosté akcí). Provoz dostane do rukou studentská firma: v Mariánkách je ročně 100–150 maturantů. Ti nejmotivovanější projdou výběrem, dostanou mentora a jeden rok reálného podnikání. Board firmy tvoří studenti — reálná odpovědnost, reálná rozhodnutí. Garantovaná symbolická základní mzda + podíl na zisku. Dělení zisku 50/50: polovina městu na reinvestice do kolonád, polovina studentům. Každý rok nový ročník — kontinuita přes mentora a předávací protokoly.",
    proc: "UNESCO není diplom na zeď — kolonády mají žít. A město má 100–150 maturantů ročně, kteří odcházejí a nevracejí se. Tento projekt je zaměstná, naučí podnikat a vytvoří jim citový i profesní vztah k městu. Je to praktická nadstavba Perfektního vzdělávání (#08): podnikavost ve školce → minipodniky na ZŠ → reálná firma v maturitním ročníku.",
    financovani: "80–150 mil. Kč · Revitalizace: Norské fondy (kulturní dědictví) + IROP · Provoz studentské firmy: samofinancovatelný z tržeb (eventy, svatby, gastro, ubytování) · Start: 2027",
    prinos: "50 % zisku na reinvestice, živé kolonády místo kulis, svatební turismus (svatba s mokrou variantou = celoroční produkt), a generace mladých, kteří mají důvod se vrátit. Ubytování naproti = přidaná tržba i vyšší cena svatebního balíčku.",
    harmonogram: [
      { rok: "2026", text: "Koncept + právní forma firmy + žádost Norské fondy" },
      { rok: "2027", text: "Revitalizace Lesní pramen + první studentský ročník (pilot na eventech)" },
      { rok: "2028", text: "Ferdinandův pramen + plný provoz včetně ubytování" },
    ],
    kritika: [
      { q: "Svěříte památky UNESCO puberťákům?", a: "Studenti provozují eventy a gastro pod mentorem a se supervizí města; stavební a památkovou stránku drží město. Junior Achievement model funguje po celém světě — my mu jen dáváme nejkrásnější kanceláře v republice." },
      { q: "Co když firma prodělá?", a: "Základní mzda je symbolická, fixní náklady nízké, prostory vlastní město. Nejhorší scénář: studenti se zadarmo naučili, že podnikání je těžké. I to je vzdělávací výsledek." },
    ],
  },
  {
    id: 10,
    unlock: "2026-09-22",
    title: "Komunitní energetika & Smart Mariánky",
    claim: "Levná energie pro občany. ROI pro město. Chytré řízení všeho.",
    teaser: "Střecha školy vyrábí elektřinu i v sobotu. Kam ta energie poteče? K vám domů. Levněji.",
    tags: ["Enabler"],
    investice: "60–130 mil. Kč",
    intenzita: "až 75 % (FVE)",
    coToJe: "Komunitní energetika: FVE na střechách městských budov — školy, sportoviště, úřad. Klíčový mechanismus: škola spotřebovává ve všední dny, o víkendech a prázdninách se přebytky sdílejí občanům za nižší cenu než od dodavatele. Město = výrobce, občané = členové energetické komunity. Smart Mariánky: LED osvětlení s chytrým řízením (úspora až 3 mil. Kč/rok), chytré odpady (Sensoneo — svoz podle naplněnosti, ne podle kalendáře), datová platforma města.",
    proc: "Energetická komunita je enabler celého plánu: napájí vyhřívané hřiště Viktorky (#02), halu (#04) i radnici (#01). Účty městských budov klesnou o 20–40 %. A občan poprvé dostane od města něco hmatatelného na složence.",
    financovani: "60–130 mil. Kč · FVE / energetická komunita: 30–80 mil. — Modernizační fond · Smart city + odpady: 30–50 mil. — návratnost 4–7 let díky úsporám za elektřinu a provoz",
    prinos: "Trvalé snížení provozních výdajů (energie, osvětlení, svoz), příjem ze sdílení elektřiny, energetická nezávislost sportovní infrastruktury. Občané: levnější elektřina = nejsrozumitelnější benefit celého plánu Mariánky 10X lépe.",
    harmonogram: [
      { rok: "2026", text: "Energetický audit + založení komunity + žádost Modernizační fond" },
      { rok: "2027", text: "První FVE (školy) + LED pilot" },
      { rok: "2028", text: "Sdílení občanům + chytré odpady plošně" },
    ],
    kritika: [
      { q: "Fotovoltaika se nevyplácí.", a: "Městu s vlastní spotřebou a sdílením se vyplácí vždy: neplatí marži dodavatele. Návratnost 4–7 let, životnost panelů 25+ let." },
      { q: "Smart city jsou hračky.", a: "3 miliony ročně za osvětlení nejsou hračka. Svoz poloprázdných popelnic taky ne." },
    ],
  },
];

export const planSynergies: PlanSynergy[] = [
  { title: "Vzdělávací pipeline", text: "Perfektní vzdělávání (#08) → studentská firma Kolonády (#09) → mladí zůstávají a vracejí se." },
  { title: "Energetická páteř", text: "Komunitní energetika (#10) napájí Viktorku (#02), halu (#04) i radnici (#01) → provozní udržitelnost sportu i úřadu." },
  { title: "Magnet pro rodiny", text: "Školy (#08) + sport (#02–04) + AI úřad (#07) → příchod nových profesionálů a rodin." },
  { title: "Celoroční destinace", text: "Viktoria soustředění (zima) + kolonádové svatby a eventy (celoročně) + Vila LIL (prémiová klientela) + Citya (mobilita bez auta) → obsazenost léto/zima." },
  { title: "Nikoho nenecháváme pozadu", text: "Citya se senior taxi (#06), dílny na radnici (#01), přepážka na úřadě zůstává (#07)." },
];
