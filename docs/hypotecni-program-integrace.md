# Hypoteční program → web: rešerše a plán integrace

> **POZOR — parametry v tomto dokumentu jsou překonané.** Vznikl k první verzi
> návrhu (strop 3 mil. jistiny, deset let, limit 20 mil. ročně, ~130 rodin).
> Program se mezitím jmenuje **„Bydlím v Mariánkách"** a platí jiná čísla:
> strop jistiny **2,8 mil.**, nejvýš **100 tis. Kč ročně** na rodinu, zhruba
> **150 rodin**, náklad **15 mil. Kč ročně**, podpora po dobu splácení.
> Aktuální znění je v `src/lib/hypoteka.ts`.
>
> Rešeršní část (ověření tvrzení proti zdrojům, právní a daňová rizika)
> platí dál — jen čísla a parametry čtěte z aktuálního zdroje.

Podklad k prezentaci *„Vrátíme vám, co vám vláda vzala"* (interní deck pro kandidáty,
11 slidů, září 2026) a k jejímu převedení na `lepsiml.cz`.

Dokument má tři části:

1. **Rešerše** — ověření tvrzení z deku proti veřejným zdrojům, včetně přepočtu modelu.
2. **Právní a daňová rizika** — co musí být rozhodnuté dřív, než stránka půjde ven.
3. **Plán integrace** — informační architektura, datový model, komponenty, texty, postup.

---

## 0. Východisko: na webu bydlení prakticky není

Rychlý audit obsahu (`src/lib/site.ts`, `src/lib/plan1155.ts`):

- **`programTopics`** má šest pilířů (hrdé město, rodiny a mladí, UNESCO, otevřená radnice,
  udržitelnost, zdravotnictví). Bydlení není ani jeden z nich a nevyskytuje se ani jako slib.
- **Mariánky 10X lépe** řeší bydlení jen nepřímo (Hamrnická kasárna, kde Develop centrum
  „počítá se skateparkem, dalšími sportovišti i bydlením").
- **Jediná zmínka bydlení na celém webu** je položka `"Bydlení a odchod mladých lidí"`
  v dotazníku (`src/lib/survey.ts:45`) — tedy jako otázka, ne jako odpověď.

To je pro integraci dobrá zpráva i varování zároveň: deck **nemá na webu konkurenci**,
ale taky se nemá o co opřít. Nelze ho přilepit jako odrážku k existujícímu pilíři —
potřebuje vlastní vertikálu, stejně jako ji dostal *10X lépe*.

---

## 1. Rešerše — co z deku obstojí

Legenda: ✅ ověřeno · ⚠️ platí s výhradou (na web jen s dovětkem) · ❓ neověřeno (nutno doložit)

### 1.1 Slide „Co vám vláda sebrala"

| Tvrzení v deku | Stav | Co jsem našel |
|---|---|---|
| Hypotéka pro mladé je v programovém prohlášení, ale odložená; duben 2026, ministryně financí: parametry „nejsou politicky vydiskutovány" | ✅ | ČT24, 11. 4. 2026: „Plánovaná státní podpora hypoték pro mladé rodiny a potřebné profese se zatím nekoná. V aktuální hospodářské strategii chybí." Ministryně financí Alena Schillerová (ANO): *„Ty parametry ještě nejsou vydiskutovány politicky."* Kabinet se k tématu chce vrátit **v druhé polovině funkčního období**. Ten poslední detail v deku chybí a je to nejsilnější část argumentu — je to přiznaný odklad, ne spekulace. |
| „Superdávka spočítá nájem. Hypotéku ne. Ani úrok. (…) dostane od státu přesně nulu." | ⚠️ | Jádro sedí: **splátky hypotéky nejsou uznatelný náklad na bydlení**, úrok už vůbec ne. Ale „přesně nula" není přesné — vlastníci mají ve výpočtu tzv. **vlastnický paušál ve výši 30 % nájemního normativu**. Na webu (kde si to čtenář ověří) použít přesnější formulaci: *„Na úrok z hypotéky nedostanete od státu ani korunu."* Na pódiu ať zůstane nula. |
| SFDI 2026: nula pro obce, poprvé od roku 2015; 2027 znovu nula | ❓ | Nepodařilo se doložit z primárního zdroje. Veřejně dohledatelné je jen to, že schvalování příspěvků SFDI pro obce na rok 2026 záviselo na schválení rozpočtu fondu a že SMO ČR upozorňoval na chybějící položky. **Bez doložení to na web nedávejte** — je to jediné tvrzení z celého deku, které si protistrana může vyvrátit jedním odkazem. |
| Od ledna platí město nepedagogy, 25 mil. ročně, „které dřív platil stát" | ⚠️ **riziko** | Převod financování nepedagogické práce na zřizovatele od 1. 1. 2026 je fakt. **Ale je kompenzovaný změnou RUD**: podíl obcí a krajů na sdílených daních roste kvůli tomuto převodu o ~33,5 mld. Kč; podle PAQ Research vzrostou příjmy obcí na vzdělávání z ~25,5 mld. (2024) na ~51,5 mld. (2026). Věta „25 milionů, které dřív platil stát" je bez dovětku **napadnutelná jednou větou z rozpočtu**. Poctivá a pořád silná verze: *„Peníze přišly jednorázově přes rozpočtové určení daní. Riziko, že nebudou stačit na růst platů, nese od ledna město — ne stát."* |
| „Obce sedí na 424 miliardách" | ❓ | Řádově odpovídá veřejné debatě o zůstatcích na účtech obcí, ale konkrétní číslo je potřeba doložit (MF ČR, Zpráva o vývoji rozpočtového hospodaření obcí). V deku je použité jako citace vlády — na webu ho tak i označit, včetně zdroje. |

### 1.2 Financování z poplatku z pobytu

| Tvrzení | Stav | Poznámka |
|---|---|---|
| 50 Kč za noc = zákonné maximum | ✅ | Zákon č. 565/1990 Sb., o místních poplatcích — sazba poplatku z pobytu **nejvýše 50 Kč** za každý započatý den pobytu s výjimkou dne počátku pobytu. |
| 1,37 mil. přenocování → ~60 mil. Kč ročně | ❓ | Dopočet sedí řádově (1,37 mil. × 50 Kč = 68,5 mil.), deck si drží konzervativní rezervu. Ověřit je potřeba obojí: skutečný počet přenocování (ČSÚ / Tourdata za ML) **a** skutečný výnos položky 1345 ze závěrečného účtu. Pozor na strukturu osvobození podle § 3b — hlavně osoby mladší 18 let. |
| „necelá třetina půjde rodinám" | ✅ (aritmeticky) | Limit 20 mil. z ~60 mil. = přesně třetina. Při skutečném výnosu nad 60 mil. „necelá třetina" sedí. |

### 1.3 Zahraniční vzory

| Tvrzení | Stav | Poznámka |
|---|---|---|
| Albinen: referendum 2017, 25 000 CHF na dospělého, 10 000 na dítě, min. nákup 200 000 CHF, 10 let, jinak vratka | ✅ | Odhlasováno v listopadu 2017. Schéma: 25 000 CHF na dospělého, **50 000 na pár**, 10 000 na dítě. |
| Výsledek: 38 dospělých a 11 dětí | ✅ | Od spuštění (2018) podáno 19 žádostí = **38 dospělých a 11 dětí**. Přepočet na velikost Mariánek v deku sedí jako řádová ilustrace. |
| Sousední Zeneggen to opsal | ✅ | Doloženo (alpské obce s obdobnými schématy). |
| Maďarsko: po 1. dítěti bezúročně, po 2. smazáno 30 %, po 3. celý dluh; 1 mil. HUF po 2. dítěti, 4 mil. po 3. | ✅ | Odpovídá mechanice *babaváró* a odpouštění části hypotéky podle počtu dětí. |
| „Orbán do toho sype 5 % HDP a porodnost stojí na místě" | ⚠️ | Řádově odpovídá dlouhodobě uváděnému objemu maďarské rodinné politiky, ale je to číslo, které se v různých zdrojích liší (3–5 % HDP podle toho, co se do něj počítá). Na web dát rozpětí, ne jedno číslo. |

**Bonus, který v deku chybí:** starostka Albinenu uvádí ~100 dotazů denně, drtivá většina od lidí,
kteří nesplňují podmínky. To je přesně argument pro to, aby na webu byla **kalkulačka
s podmínkami hned vedle**, ne jen telefon na radnici.

### 1.4 „První město v Česku"

Nenašel jsem českou obec, která by refundovala **úrok z hypotéky**. Existují ale obecní fondy
rozvoje bydlení se zvýhodněnými půjčkami a řada obcí podporuje bydlení jinak (výstavba nájemních
bytů z programu *Dostupné nájemní bydlení* MMR, příspěvky na výstavbu).

**Doporučení:** nedávat na web absolutní nárok. Formulace, která se nedá vyvrátit a zní stejně silně:
*„Nevíme o jiném městě v Česku, které by to dělalo. Hledali jsme. Když nám nějaké najdete, doplníme ho sem."*
Otevřená výzva navíc generuje interakci a působí sebejistěji než tvrzení, které někdo za týden shodí.

### 1.5 Přepočet modelu — čísla drží

Přepočítal jsem anuitu i tabulku ze slidu „Čtyři roky":

- **Modelová hypotéka** 3 mil. Kč / 30 let / 4,9 % → splátka **15 922 Kč**, z toho úrok
  prvního měsíce **12 250 Kč**, jistina **3 672 Kč**. Deck uvádí 15 900 / 12 250 / 3 700. ✅
- **Úrok prvního roku** ze 3 mil.: **~146 000 Kč**. Řádek „Nově příchozí (~15/rok)" počítá
  pro 2028 s 30 rodinami a 4,4 mil. Kč = 147 tis. na rodinu. ✅ Model je vnitřně konzistentní.
- **Stávající rodiny**: 12,7 mil. / 130 rodin = 97,7 tis. na rodinu, což je úrok ze zůstatku
  2 mil. při 4,9 % (98 tis.). ✅
- **Součty** v tabulce sedí do posledního řádku (66,0 − 24,8 = 41,2; sloupce i řádky souhlasí). ✅
- **Celková refundace za 10 let** u modelové rodiny: **~1,34 mil. Kč**. Tohle číslo v deku není
  a přitom je to nejsilnější věc, kterou rodina uvidí. Na web patří.

**Dvě věci, které přepočet odhalil a deck je neřeší:**

1. **„3 700 Kč měsíčně" platí jen v prvním měsíci.** Úrok v anuitě klesá, jistina roste — po deseti
   letech je „jen jistina" ~6 000 Kč. Sdělení tím nepadá (rodina pořád platí jen jistinu), ale
   **kalkulačka to musí počítat správně**, jinak si toho první bankéř v Mariánkách všimne.
2. **Limit 20 mil. narazí v roce 2031.** Náklad roste 13,8 → 18,7 mil. (2030) a dál. Deck nemá
   pravidlo, co se stane, když poptávka limit překročí — pořadí podání? poměrné krácení? zastropování
   počtu nových žadatelů? **Tohle je otázka číslo jedna, kterou položí každá rodina** („dostanu to,
   nebo mi řeknete, že došly peníze?"). Bez odpovědi stránka slibuje něco, co nemusí být splnitelné.

---

## 2. Právní a daňová rizika — vyřešit před publikací

### 2.1 Daň z příjmu příjemce — největší otevřená díra

§ 4 odst. 1 písm. u) ZDP osvobozuje dotaci z rozpočtu obce, ale **jen na pořízení hmotného majetku,
jeho technické zhodnocení nebo odstranění následků živelní pohromy**. Refundace úroku není pořízení
majetku → hrozí, že půjde o **ostatní příjem podle § 10 ZDP**, tedy zdanitelný.

Dopad na sdělení: při 15 % dani z refundace 146 tis. Kč rodina dostane čistého ~124 tis.
Věta „úrok za vás zaplatí město" se tím nerozbije, ale **„do koruny" už neplatí**.

Tři cesty, mezi kterými musí rozhodnout daňový poradce (deck to správně má v seznamu úkolů):

- **A.** Konstruovat dotaci jako **příspěvek na pořízení bydlení** vypláceny ročně, jehož výše se
  odvíjí od zaplaceného úroku → míří na osvobození podle písm. u).
- **B.** Nechat ji jako refundaci úroku, počítat s daní a **říct to předem** (a v kalkulačce zobrazit
  hrubou i čistou částku).
- **C.** Dotaci „nabrutovat" tak, aby čistá částka odpovídala zaplacenému úroku.

Souvisí i **kolize s odpočtem úroků podle § 15 odst. 3 ZDP** (limit 150 tis. Kč u úvěrů po 2021):
odečíst lze zaplacené úroky — je otázka, jak se na ně dívat, když je refunduje město. V nejhorším
případě rodina získá refundaci a **ztratí odpočet**, což ukrojí z reálného přínosu. Kalkulačka na
webu musí tuhle položku buď korektně zohlednit, nebo ji explicitně vyloučit z výpočtu s poznámkou.

### 2.2 Podmínka trvalého pobytu

Ombudsman i dozor Ministerstva vnitra opakovaně řešily, že **obec nemá kategorizovat vlastní občany
podle délky trvalého pobytu bez racionálního a obhajitelného důvodu** a že zvýhodnění vlastních
občanů musí zahrnout i **občany jiných států EU** s pobytem hlášeným v obci.

Pro pravidla programu to znamená: podmínka „trvalý pobyt v Mariánských Lázních" je v pořádku;
podmínka typu „a minimálně X let zpětně" už ne, pokud ji neodůvodníte. Na web patří formulace,
která to nevylučuje: *„Trvalý pobyt v Mariánských Lázních — platí i pro občany EU hlášené k pobytu tady."*

### 2.3 Zveřejnění příjemců

Veřejnoprávní smlouva o poskytnutí dotace **nad 50 tis. Kč se zveřejňuje na úřední desce po dobu 3 let**
(§ 10d zákona č. 250/2000 Sb.) a Mariánské Lázně jako ORP mají povinnosti i podle zákona o registru smluv.
Modelová roční refundace (~146 tis.) je vysoko nad limitem → **jméno příjemce a výše podpory budou veřejné**.

To je věc, kterou se nikdo nebude ptát na mítinku, ale **kterou si každá rodina uvědomí v okamžiku
podpisu**. Patří do FAQ, jinak to vypadá jako past. Zároveň je to argument pro transparentnost —
nechte to vyznít jako výhoda, ne jako přiznání.

### 2.4 Schvalování a administrativa

Každá dotace nad 50 tis. Kč schvaluje **zastupitelstvo** (§ 85 zákona o obcích). Při ~130 rodinách to
znamená 130 individuálních dotací ročně přes zastupitelstvo. Praktické řešení (schvalování v balíku
podle pravidel programu, zastupitelstvo schvaluje seznam) patří do pravidel — a na web jako věta
*„Jednou ročně, proti potvrzení banky. Bez úředníka navíc."*, která už v deku je a je dobrá.

### 2.5 Veřejná podpora

U rodin, které v bytě bydlí, o veřejnou podporu nejde. **Pozor na byty používané ke krátkodobému
pronájmu** — tam se z příjemce stává podnikatel. Deck to řeší podmínkou „bydlíte tu, ve svém, deset let"
a správně z ní dělá přednost (protiairbnb pojistka). Na webu to musí být v podmínkách explicitně.

---

## 3. Plán integrace do webu

### 3.1 Informační architektura

Program dostane **vlastní vertikálu** — třetí kampaňovou podstránku vedle `/program` a `/plan-1155/`:

```
/hypoteka            ← nová stránka, hlavní nosič tématu
/program             ← nový (sedmý) pilíř „Bydlení, které si rodina udrží" + odkaz na /hypoteka
/  (homepage)        ← blok mezi countdownem a PillarStrip, ve stylu bloku 10X lépe
/dotaznik            ← beze změny (otázka na bydlení už tam je, poslouží jako důkaz poptávky)
```

**Proč `/hypoteka` a ne podsekce programu:** je to jedno sdělení, které se dá vytisknout na leták
jako `lepsiml.cz/hypoteka`, vyslovit v rádiu a nasdílet na Facebook s vlastním OG obrázkem.
Podsekce programu tohle neumí. SEO bonus: „hypotéka Mariánské Lázně" nemá konkurenci.

**Navigace** (`nav` v `src/lib/site.ts`) má dnes 6 položek a sedmá ji na mobilu rozbije.
Doporučení: přidat `{ label: "Hypotéka", href: "/hypoteka" }` **a přesunout externí „Přehledy"
do patičky** — je to odkaz pryč z webu, v hlavním menu plýtvá nejcennějším místem.

### 3.2 Datový model

Nový modul `src/lib/hypoteka.ts` — stejný vzor jako `plan1155.ts` (obsah odděleně od šablony,
aby texty mohl upravovat kdokoli z týmu bez sahání do `.astro`):

```ts
export type Podminka = { icon: string; title: string; body: string };
export type Faq = { q: string; a: string };
export type NakladovyRok = { rok: string; naklad: number; prijem: number };

export const hypotekaMeta = {
  title: "Úrok z hypotéky za vás zaplatí město",
  claim: "Máte dvě děti? V Mariánkách splácíte jen jistinu.",
  lead: "…",
  start: "leden 2027",
  limit: "20 mil. Kč ročně",
  strop: 3_000_000,   // jistina, ze které se úrok refunduje
  roky: 10,
};

export const podminky: Podminka[] = [ /* 6 podmínek ze slidu „Co vrátíme" */ ];
export const model = { cena: 3_750_000, uver: 3_000_000, sazba: 4.9, splatnost: 30 };
export const rozpocet: NakladovyRok[] = [ /* tabulka 2027–2030 */ ];
export const faq: Faq[] = [ /* viz 3.5 */ ];
export const zdroje = [ /* odkazy na ověřená tvrzení — viz 3.6 */ ];
```

### 3.3 Mapování slidů na sekce stránky

| Slide | Sekce na `/hypoteka` | Poznámka k převodu |
|---|---|---|
| 1 Titul | **Hero** — tmavý, ve stylu `/plan-1155/` (`linear-gradient(135deg,#000,#0a1f1d)` + `hero-shape`) | H1 = „Úrok z hypotéky za vás zaplatí město". Podtitul se startem programu. Dvě CTA: *Spočítat moji úsporu* (kotva na kalkulačku) a *Podmínky*. |
| 2 Co vám vláda sebrala | **Proč to děláme** — 3 karty | Přeformulovat podle §1.1: superdávku zpřesnit, nepedagogy doplnit o RUD, SFDI vynechat do doby doložení. |
| 3 Co vrátíme | **Podmínky** — 6 dlaždic s Lucide ikonami | 1:1 z deku. Přidat řádek o občanech EU (§2.2). |
| 4 Co to udělá se splátkou | **Kalkulačka** (React island) | Nahradit statické „dnes / s programem" interaktivním výpočtem — viz 3.4. |
| 5 Hosti platí | **Financování** — jedna velká věta + rozpad čísla | Nejsilnější slide v deku. Na webu si zaslouží samostatnou tmavou sekci, ne kartu. |
| 6 Čtyři roky (tabulka) | **Co to stojí** — responzivní tabulka v `overflow-x: auto` | Tabulka jde na web **beze změny čísel** (sedí, viz §1.5). Přidat větu o limitu 20 mil. a **pravidlo pro převis poptávky**, až bude rozhodnuté. |
| 7 Co z toho má město | **Co za to město získá** — 6 karet | Beze změny, jen zkrátit. |
| 8 Není to experiment | **Vzory** — Albinen + Maďarsko, 2 sloupce | Doplnit o poučení („peníze až po pěti letech", „neslibujte děti, slibujte plné školy") — ukazuje, že jsme si to nastudovali. |
| 9 Proč Hurajčík mlčí | **NEPŘEVÁDĚT jako útok** → přetavit do FAQ | Viz 3.5. Web není mítink; útok na jméno v FAQ odrazuje víc lidí, než získá. |
| 10 Jazyk | **Nikam** — je to interní messaging guide | Věty použít napříč stránkou jako mezinadpisy. |
| 11 Do 14 dnů | **Nikam** — interní checklist | Zůstává v tomto dokumentu jako §4. |

### 3.4 Kalkulačka (`src/components/HypotekaKalkulacka.tsx`)

React island, `client:visible` — stejný vzor jako `ContactForm.tsx` / `MobileMenu.tsx`.

**Vstupy:** výše úvěru (slider 1–6 mil.), úroková sazba (3–7 %), splatnost (20/25/30 let),
počet dětí (0/1/2/3+).

**Výstupy:**
- měsíční splátka celkem a z toho úrok / jistina **v prvním roce**,
- kolik pošle město **letos**,
- **kolik celkem za 10 let** (u modelové rodiny ~1,34 mil. Kč — nejsilnější číslo na stránce),
- u úvěru nad 3 mil. jasně: „nad 3 miliony si úrok platíte sami, to je X Kč měsíčně",
- při méně než 2 dětech: „program je od dvou dětí" místo nuly bez vysvětlení.

**Vzorce** (anuita, měsíční sazba `i = p/1200`, `n` měsíců):

```
splatka   = P * i / (1 - (1+i)^-n)
zustatek(k) = P * ((1+i)^n - (1+i)^k) / ((1+i)^n - 1)
urok(rok r) = 12*splatka - (zustatek(12*(r-1)) - zustatek(12*r))
refundace   = min(urok, urok_ze_stropu_3mil)
```

**Nepodkročitelné:** kalkulačka počítá klesající úrok (viz §1.5, bod 1), nikoli konstantních
3 700 Kč. Pod výsledkem povinná poznámka: *orientační výpočet, nezahrnuje daňové dopady
(viz FAQ), rozhoduje schválený dotační program.*

### 3.5 FAQ — převod útočného slidu do obranyschopné podoby

Osm otázek, které stránka musí unést. První čtyři jsou přepis slidu 9 bez jména protikandidáta,
zbylé čtyři vycházejí z rešerše a v deku chybí:

1. **„Není to dotace pro ty, co už mají?"** → Je to pro ty, kdo tady pracují, platí daně a vychovávají děti. Kdo dluží městu, nedostane nic. Kdo se odstěhuje, vrací.
2. **„Kde na to město vezme?"** → Z poplatku z pobytu. Hosté tu nechají desítky milionů ročně; část z nich půjde lidem, kteří tu žijí celý rok.
3. **„Porodnost tím nevyřešíte."** → Nechceme řešit porodnost. Chceme plné školy. To se za čtyři roky spočítá.
4. **„Stát to slíbil taky."** → Slíbil. A odložil na druhou polovinu volebního období (ČT24, 4/2026). My začínáme v lednu.
5. **„Budu z toho platit daň?"** ← *odpověď doplnit po stanovisku daňového poradce, §2.1* — bez ní stránku nepouštět ven.
6. **„Co když se přihlásí víc lidí, než je limit?"** ← *doplnit pravidlo, §1.5 bod 2.*
7. **„Bude moje jméno veřejné?"** → Ano, dotace nad 50 tis. Kč se zveřejňuje na úřední desce. Je to zákon a je to správně — veřejné peníze se rozdávají veřejně.
8. **„Mám hypotéku 4,5 milionu. Co já?"** → Úrok do 3 milionů jistiny platí město, zbytek vy. Kalkulačka to spočítá na korunu dopředu.

Technicky: `<details>`/`<summary>` accordion ve stylu `ProgramTopic.astro`, žádný další JS.

### 3.6 Zdroje pod čarou

Sekce „Odkud čerpáme" s odkazy na ČT24, zákon o místních poplatcích, § 10c zákona 250/2000 Sb.,
zdroje k Albinenu a k maďarskému schématu. Náklad: dvacet minut práce.
Přínos: každý novinář i odpůrce vidí, že čísla nejsou vymyšlená — a hlavně, že se nebojíme,
aby si je ověřil. Na stránce, která slibuje rozdávat peníze, je tohle ta nejlevnější důvěra.

### 3.7 Sběr zájemců (volitelné, 2. vlna)

Na webu už běží funkční pipeline: `src/pages/api/dotaznik.ts` → Neon (`DATABASE_URL`),
honeypot proti robotům, `ochrana-udaju.astro` pro GDPR. Formulář *„Dejte mi vědět, až to spustíme"*
je kopie téhle cesty s novou tabulkou `zajem_hypoteka` (e-mail, počet dětí, souhlas, vytvořeno).

**Kampaňová hodnota:** počet registrací je měřitelná poptávka po programu — data, která se dají
ukázat na zastupitelstvu. *„Přihlásilo se 180 rodin"* je silnější argument než jakákoli tabulka.

### 3.8 Vizuál a technika

- **Barvy:** zlatá `--color-spa-gold` jako vedoucí akcent (peníze, hodnota), pirátská tyrkysová
  na CTA. Tmavé sekce `--color-ink` pro hero a financování — stejná gramatika jako `/plan-1155/`.
- **Typografie:** čísla v `--font-display` (Bebas Neue) jako `plan-stat-value`; 15 900 → 3 700 Kč
  musí fungovat jako plakát i bez textu okolo.
- **OG obrázek:** `public/social/og-hypoteka.svg` → PNG. Podklad je v `public/social/og-facebook.svg`.
  Na obrázku má být ta jediná věta: *„Máte dvě děti? Úrok z hypotéky za vás zaplatí město."*
- **Přístupnost:** tabulka do `overflow-x: auto`, slidery kalkulačky s `aria-label` a číselným
  inputem jako alternativou, `prefers-reduced-motion` respektovat (už je v `global.css`).
- **Build:** stránka zůstává statická, žádný adaptér navíc. Kalkulačka je jediný nový JS na stránce.

---

## 4. Co musí být hotové, než to půjde ven

Deck má vlastní seznam („Do 14 dnů"). Tenhle je odvozený, ale řazený podle toho,
**co blokuje publikaci webu** — ne podle toho, co blokuje rozhodnutí týmu.

**Blokující (bez toho stránku nepublikovat):**

1. **Daňové stanovisko** — zdaňuje se refundace? Kolize s odpočtem podle § 15 odst. 3 ZDP? (§2.1)
   Rozhoduje o tom, jestli stránka smí říct „úrok za vás platí město" bez hvězdičky.
2. **Pravidlo pro převis poptávky** — pořadí podání, nebo krácení? (§1.5) Bez toho FAQ #6 nejde napsat.
3. **Doložení nebo vypuštění tvrzení o SFDI** a o 424 miliardách. (§1.1)
4. **Přeformulování nepedagogů** o dovětek k RUD. (§1.1)

**Silně doporučené:**

5. Skutečný výnos poplatku z pobytu (položka 1345, závěrečný účet 2025 / žádost dle zákona 106).
6. Počet rodin se 2+ dětmi v ML (ČSÚ, SLDB 2021) — celý model stojí na čísle 130.
7. Právní posouzení podmínky trvalého pobytu včetně občanů EU. (§2.2)

**Nebrání publikaci:**

8. Cenová mapa m² v Mariánkách — ovlivní jen modelový příklad v kalkulačce.
9. Rozhodnutí, jestli program jde do volebního programu — ovlivní umístění v navigaci, ne obsah.

---

## 5. Návrh postupu

| Krok | Obsah | Závislost |
|---|---|---|
| **1** | `src/lib/hypoteka.ts` + `/hypoteka` (hero, proč, podmínky, financování, vzory, zdroje) — bez tabulky a bez kalkulačky | žádná, jde udělat hned |
| **2** | Tabulka nákladů + FAQ | body 1–4 z §4 |
| **3** | Kalkulačka (React island) | daňové stanovisko (kvůli hrubá/čistá) |
| **4** | Napojení: pilíř v `/program`, blok na homepage, položka v navigaci, OG obrázek | krok 1 |
| **5** | Formulář „dejte mi vědět" + tabulka v Neonu | krok 1, rozhodnutí o GDPR textu |

Kroky 1 a 4 se dají nasadit samostatně a dávají smysl i bez zbytku — stránka bude fungovat
jako vysvětlení záměru. Čísla a kalkulačka jsou to, co potřebuje ověření.

---

## 6. Jedna poznámka k tónu

Deck je psaný jako interní podklad pro kandidáty: útočí na jméno, počítá s tím, že mluvčí je
v sále a umí reagovat. **Web je opačná situace** — čtenář je sám, skeptický, a první, co udělá
u slibu „dostanete od města 1,3 milionu", je hledání háčku.

Praktické pravidlo pro převod: **každé velké tvrzení musí mít své omezení do jednoho scrollu.**
„Hypotéka za nula procent" je pravda pro deset let a pro jistinu do 3 milionů — když to
stránka řekne sama a dřív než návštěvník, je to důkaz poctivosti. Když to řekne až FAQ na konci,
je to přiznání. Rozdíl je jen v pořadí a rozhoduje o důvěryhodnosti celé kandidátky.
