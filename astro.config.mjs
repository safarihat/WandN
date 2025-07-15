// filepath: c:\Users\safar\OneDrive\Documents\GitHub\WandN\astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://safarihat.github.io/WandN/",
  base: "/WandN/",
  output: "static",
  // No adapter line at all!
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
