// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lepsiml.cz",
  // Web zůstává předgenerovaný; serverová je jen cesta /api/dotaznik,
  // která má prerender = false. Adaptér z ní na Vercelu udělá funkci.
  output: "static",
  adapter: vercel(),
  integrations: [
    react(),
    icon({
      include: {
        lucide: ["*"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
