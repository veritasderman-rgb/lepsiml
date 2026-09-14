import { useMemo, useState } from "react";

type Props = {
  /** Jistina, ze které město hradí úrok. */
  strop: number;
  /** Kolik let město úrok hradí. */
  roky: number;
  /** Minimální počet dětí pro vstup do programu. */
  minDeti: number;
  /** Výchozí hodnoty = modelová rodina z propočtu. */
  vychoziUver: number;
  vychoziSazba: number;
  vychoziSplatnost: number;
};

const czk = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0,
});

/** Měsíční anuitní splátka. */
function splatka(jistina: number, rocniSazba: number, mesicu: number): number {
  const i = rocniSazba / 1200;
  if (i === 0) return jistina / mesicu;
  return (jistina * i) / (1 - Math.pow(1 + i, -mesicu));
}

/** Zůstatek jistiny po `k` měsících splácení. */
function zustatek(
  jistina: number,
  rocniSazba: number,
  mesicu: number,
  k: number,
): number {
  const i = rocniSazba / 1200;
  if (i === 0) return jistina * (1 - k / mesicu);
  const q = Math.pow(1 + i, mesicu);
  return (jistina * (q - Math.pow(1 + i, k))) / (q - 1);
}

/**
 * Úrok zaplacený za prvních `let` let. Počítá se z úbytku jistiny, ne jako
 * konstanta — podíl úroku v anuitě totiž každý měsíc klesá a rovnou
 * vynásobit první splátku by výsledek nadhodnotilo.
 */
function urokZaObdobi(
  jistina: number,
  rocniSazba: number,
  mesicu: number,
  odMesice: number,
  doMesice: number,
): number {
  const m = splatka(jistina, rocniSazba, mesicu);
  const kolikMesicu = Math.min(doMesice, mesicu) - odMesice;
  if (kolikMesicu <= 0) return 0;
  const splaceno =
    zustatek(jistina, rocniSazba, mesicu, odMesice) -
    zustatek(jistina, rocniSazba, mesicu, Math.min(doMesice, mesicu));
  return m * kolikMesicu - splaceno;
}

export default function HypotekaKalkulacka({
  strop,
  roky,
  minDeti,
  vychoziUver,
  vychoziSazba,
  vychoziSplatnost,
}: Props) {
  const [uver, setUver] = useState(vychoziUver);
  const [sazba, setSazba] = useState(vychoziSazba);
  const [splatnost, setSplatnost] = useState(vychoziSplatnost);
  const [deti, setDeti] = useState(2);

  const v = useMemo(() => {
    const mesicu = splatnost * 12;
    const mesicniSplatka = splatka(uver, sazba, mesicu);
    const kryto = Math.min(uver, strop);

    // Úrok se refunduje z jistiny do stropu. Modelujeme ho jako samostatný
    // úvěr se stejnou sazbou i splatností — poměr úroku a jistiny v anuitě
    // na výši jistiny nezávisí, takže je to poctivý přepočet, ne zkratka.
    const urokRok1Cely = urokZaObdobi(uver, sazba, mesicu, 0, 12);
    const urokRok1Kryty = urokZaObdobi(kryto, sazba, mesicu, 0, 12);
    const urokCelkemKryty = urokZaObdobi(kryto, sazba, mesicu, 0, roky * 12);

    const jistinaRok1 = mesicniSplatka * 12 - urokRok1Cely;

    return {
      mesicniSplatka,
      mesicniUrok: urokRok1Cely / 12,
      mesicniJistina: jistinaRok1 / 12,
      mesicniMestoPlati: urokRok1Kryty / 12,
      rocniMestoPlati: urokRok1Kryty,
      celkemZaObdobi: urokCelkemKryty,
      mesicniVasUrokNavic: (urokRok1Cely - urokRok1Kryty) / 12,
      nadStrop: uver > strop,
    };
  }, [uver, sazba, splatnost, strop, roky]);

  const splnujeDeti = deti >= minDeti;

  return (
    <div className="kalk">
      <div className="kalk-vstupy">
        <div className="kalk-pole">
          <label htmlFor="kalk-uver">
            Výše hypotéky
            <b>{czk.format(uver)}</b>
          </label>
          <input
            id="kalk-uver"
            type="range"
            min={500_000}
            max={6_000_000}
            step={50_000}
            value={uver}
            onChange={(e) => setUver(Number(e.target.value))}
          />
        </div>

        <div className="kalk-pole">
          <label htmlFor="kalk-sazba">
            Úroková sazba
            <b>{sazba.toFixed(1).replace(".", ",")} %</b>
          </label>
          <input
            id="kalk-sazba"
            type="range"
            min={2}
            max={8}
            step={0.1}
            value={sazba}
            onChange={(e) => setSazba(Number(e.target.value))}
          />
        </div>

        <div className="kalk-pole">
          <span className="kalk-legenda" id="kalk-splatnost-popis">
            Splatnost
          </span>
          <div className="kalk-prepinac" role="group" aria-labelledby="kalk-splatnost-popis">
            {[20, 25, 30].map((r) => (
              <button
                key={r}
                type="button"
                aria-pressed={splatnost === r}
                className={splatnost === r ? "je-aktivni" : ""}
                onClick={() => setSplatnost(r)}
              >
                {r} let
              </button>
            ))}
          </div>
        </div>

        <div className="kalk-pole">
          <span className="kalk-legenda" id="kalk-deti-popis">
            Počet dětí
          </span>
          <div className="kalk-prepinac" role="group" aria-labelledby="kalk-deti-popis">
            {[0, 1, 2, 3].map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={deti === d}
                className={deti === d ? "je-aktivni" : ""}
                onClick={() => setDeti(d)}
              >
                {d === 3 ? "3+" : d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="kalk-vystup" aria-live="polite">
        {!splnujeDeti ? (
          <div className="kalk-hlaska">
            <p className="kalk-hlaska-nadpis">
              Program je od {minDeti} dětí
            </p>
            <p>
              {deti === 0 ? "Bez dětí" : "S jedním dítětem"} na něj zatím
              nedosáhnete. Rozpočet města má svůj strop a nám jde především
              o plné třídy. Radši slíbíme méně a dodržíme to.
            </p>
            <p className="kalk-hlaska-splatka">
              Vaše měsíční splátka:{" "}
              <b>{czk.format(Math.round(v.mesicniSplatka))}</b>
            </p>
          </div>
        ) : (
          <>
            <div className="kalk-hlavni">
              <p className="kalk-stitek">Z vaší splátky byste platili jen</p>
              <p className="kalk-cislo">
                {czk.format(Math.round(v.mesicniJistina + v.mesicniVasUrokNavic))}
              </p>
              <p className="kalk-podtitul">
                měsíčně místo {czk.format(Math.round(v.mesicniSplatka))}.{" "}
                {v.nadStrop
                  ? `Jistina a úrok nad ${czk.format(strop)}.`
                  : "Zbývající úrok by platilo město."}
              </p>
            </div>

            <dl className="kalk-radky">
              <div>
                <dt>Měsíční splátka bance</dt>
                <dd>{czk.format(Math.round(v.mesicniSplatka))}</dd>
              </div>
              <div>
                <dt>Z toho úrok (první rok)</dt>
                <dd>{czk.format(Math.round(v.mesicniUrok))}</dd>
              </div>
              <div className="kalk-radek-duraz">
                <dt>Z toho by hradilo město</dt>
                <dd>{czk.format(Math.round(v.mesicniMestoPlati))}</dd>
              </div>
              {v.nadStrop && (
                <div>
                  <dt>Úrok nad {czk.format(strop)} — platíte vy</dt>
                  <dd>{czk.format(Math.round(v.mesicniVasUrokNavic))}</dd>
                </div>
              )}
              <div>
                <dt>Vyplaceno za první rok</dt>
                <dd>{czk.format(Math.round(v.rocniMestoPlati))}</dd>
              </div>
              <div className="kalk-radek-duraz">
                <dt>Celkem za {roky} let</dt>
                <dd>{czk.format(Math.round(v.celkemZaObdobi))}</dd>
              </div>
            </dl>
          </>
        )}
      </div>

      <p className="kalk-disclaimer">
        Orientační propočet z anuitní splátky. Úrok v ní postupně klesá, takže
        částka za první rok je ze všech deseti nejvyšší. Nepočítáme v ní
        s poplatky banky ani s případným zdaněním podpory, které ještě řešíme
        s daňovým poradcem. Rozhodující budou schválená pravidla programu, ne
        tahle kalkulačka.
      </p>
    </div>
  );
}
