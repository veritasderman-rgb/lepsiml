// Aktuality — zprávy po volbách (jednání o koalici, práce v zastupitelstvu).
// Nový příspěvek = nový soubor v src/content/aktuality/, viz README.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const aktuality = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/aktuality" }),
  schema: z.object({
    title: z.string(),
    /** Datum zveřejnění, YYYY-MM-DD. */
    date: z.coerce.date(),
    /** Jedna dvě věty do výpisu a do meta description. */
    perex: z.string(),
    /** Štítek nad nadpisem, např. „Koalice“, „Zastupitelstvo“. */
    tag: z.string().default("Aktuálně"),
    /** Rozepsaný příspěvek, který ještě nemá být vidět. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { aktuality };
