import { useMemo, useState } from "react";

type Props = {
  /** Jistina, ze které se úrok počítá (2,8 mil.). */
  stropJistiny: number;
  /** Nejvyšší roční příspěvek na rodinu (100 tis.). */
  rocniStrop: number;
  vychoziUver: number;
  vychoziSazba: number;
  vychoziSplatnost: number;
};

const czk = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0,
});

const splatka = (jistina: number, sazba: number, mesicu: number) => {
  const i = sazba / 1200;
  return i === 0 ? jistina / mesicu : (jistina * i) / (1 - Math.pow(1 + i, -mesicu));
};

const zustatek = (jistina: number, sazba: number, mesicu: number, k: number) => {
  const i = sazba / 1200;
  if (i === 0) return jistina * (1 - k / mesicu);
  const q = Math.pow(1 + i, mesicu);
  return (jistina * (q - Math.pow(1 + i, k))) / (q - 1);
};

/**
 * Úrok zaplacený v roce `rok`. Počítá se z úbytku jistiny, protože podíl
 * úroku v anuitní splátce každý měsíc klesá — vynásobit první splátku
 * dvanácti by výsledek nadhodnotilo.
 */
function urokVRoce(jistina: number, sazba: number, mesicu: number, rok: number) {
  const m = splatka(jistina, sazba, mesicu);
  const od = 12 * (rok - 1);
  const doM = Math.min(12 * rok, mesicu);
  if (doM <= od) return 0;
  const splaceno =
    zustatek(jistina, sazba, mesicu, od) - zustatek(jistina, sazba, mesicu, doM);
  return m * (doM - od) - splaceno;
}

export default function HypotekaKalkulacka({
  stropJistiny,
  rocniStrop,
  vychoziUver,
  vychoziSazba,
  vychoziSplatnost,
}: Props) {
  const [uver, setUver] = useState(vychoziUver);
  const [sazba, setSazba] = useState(vychoziSazba);
  const [splatnost, setSplatnost] = useState(vychoziSplatnost);
  const [dveDeti, setDveDeti] = useState(true);

  const v = useMemo(() => {
    const mesicu = splatnost * 12;
    const mesicniSplatka = splatka(uver, sazba, mesicu);

    // Příspěvek se počítá z úroku připadajícího na jistinu do stropu.
    const zapocitatelna = Math.min(uver, stropJistiny);
    const podil = zapocitatelna / uver;

    const prispevekVRoce = (rok: number) =>
      Math.min(urokVRoce(uver, sazba, mesicu, rok) * podil, rocniStrop);

    const rocni = prispevekVRoce(1);
    let zaDeset = 0;
    for (let r = 1; r <= 10; r++) zaDeset += prispevekVRoce(r);

    return {
      mesicniSplatka,
      rocni,
      mesicneVy: mesicniSplatka - rocni / 12,
      zaDeset,
      // Pod stropem příspěvek rok od roku klesá, proto „až".
      klesa: rocni < rocniStrop,
      nadStrop: uver > stropJistiny,
    };
  }, [uver, sazba, splatnost, stropJistiny, rocniStrop]);

  return (
    <div className="kalk">
      <div className="kalk-vstupy">
        <div className="kalk-pole">
          <label htmlFor="kalk-uver">
            Výše hypotéky<b>{czk.format(uver)}</b>
          </label>
          <input
            id="kalk-uver"
            type="range"
            min={1_000_000}
            max={5_000_000}
            step={50_000}
            value={uver}
            onChange={(e) => setUver(Number(e.target.value))}
          />
        </div>

        <div className="kalk-pole">
          <label htmlFor="kalk-sazba">
            Úroková sazba<b>{sazba.toFixed(1).replace(".", ",")} %</b>
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
          <span className="kalk-legenda" id="kalk-doba">Doba splácení</span>
          <div className="kalk-prepinac" role="group" aria-labelledby="kalk-doba">
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
          <span className="kalk-legenda" id="kalk-deti">Počet dětí</span>
          <div className="kalk-prepinac" role="group" aria-labelledby="kalk-deti">
            <button
              type="button"
              aria-pressed={!dveDeti}
              className={!dveDeti ? "je-aktivni" : ""}
              onClick={() => setDveDeti(false)}
            >
              1
            </button>
            <button
              type="button"
              aria-pressed={dveDeti}
              className={dveDeti ? "je-aktivni" : ""}
              onClick={() => setDveDeti(true)}
            >
              2 a více
            </button>
          </div>
        </div>
      </div>

      <div className="kalk-vystup" aria-live="polite">
        {!dveDeti ? (
          <div className="kalk-hlaska">
            <p className="kalk-hlaska-nadpis">Program je pro rodiny se dvěma a více dětmi</p>
            <p>
              Právě u nich je odliv z města nejcitelnější. Až se vám narodí
              druhé dítě, nárok vám vznikne. A do té doby: znáte rodinu, které
              by se to hodilo? Pošlete jí tuhle stránku.
            </p>
            <p className="kalk-hlaska-splatka">
              Vaše měsíční splátka: <b>{czk.format(Math.round(v.mesicniSplatka))}</b>
            </p>
          </div>
        ) : (
          <>
            <p className="kalk-stitek">Město vám zaplatí</p>
            <p className="kalk-cislo">{czk.format(Math.round(v.rocni))}</p>
            <p className="kalk-podtitul">ročně</p>

            <dl className="kalk-radky">
              <div className="kalk-radek-duraz">
                <dt>Byt vás stojí měsíčně v přepočtu</dt>
                <dd>{czk.format(Math.round(v.mesicneVy))}</dd>
              </div>
              <div>
                <dt>místo</dt>
                <dd>{czk.format(Math.round(v.mesicniSplatka))}</dd>
              </div>
              <div className="kalk-radek-duraz">
                <dt>Za 10 let od města{v.klesa ? " až" : ""}</dt>
                <dd>{czk.format(Math.round(v.zaDeset))}</dd>
              </div>
              {v.nadStrop && (
                <div>
                  <dt>Úrok nad {czk.format(stropJistiny)} si platíte sami</dt>
                  <dd aria-hidden="true">—</dd>
                </div>
              )}
            </dl>

            <p className="kalk-tok">
              Bance posíláte {czk.format(Math.round(v.mesicniSplatka))} každý
              měsíc dál. Příspěvek od města přijde jednou za rok proti
              potvrzení z banky, částka nahoře je přepočet na měsíc.
            </p>
          </>
        )}
      </div>

      <p className="kalk-disclaimer">
        Orientační výpočet. Je to návrh; přesnou výši, délku a podmínky
        příspěvku schválí zastupitelstvo města.
      </p>
    </div>
  );
}
