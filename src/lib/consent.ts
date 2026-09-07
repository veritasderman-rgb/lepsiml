// Souhlas s cookies (GDPR / Google Consent Mode v2)
//
// Sdílený klíč pro localStorage. Čte ho inline skript v <head> (nastaví
// výchozí stav souhlasu ještě před načtením GA) i banner CookieConsent,
// který volbu ukládá a aktualizuje gtag.
export const CONSENT_KEY = "plml.cookieConsent.v1";

export type ConsentChoice = "granted" | "denied";

/** Měřicí kód GA4. Bez proměnné prostředí se analytika vůbec nenačte. */
export const GA_ID = import.meta.env.PUBLIC_GA_ID ?? "";
