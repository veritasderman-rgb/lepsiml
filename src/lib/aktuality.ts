// Společné načítání aktualit pro výpis, detail i homepage.

import { getCollection, type CollectionEntry } from "astro:content";

export type Aktualita = CollectionEntry<"aktuality">;

/** Zveřejněné příspěvky od nejnovějšího. */
export async function nactiAktuality(): Promise<Aktualita[]> {
  const vse = await getCollection("aktuality", ({ data }) => !data.draft);
  return vse.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** 10. října 2026 */
export function datum(d: Date): string {
  return d.toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
}
