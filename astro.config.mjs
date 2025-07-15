import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import github from "@astrojs/github-pages";

// https://astro.build/config
export default defineConfig({
  site: "https://safarihat.github.io/WandN/",
  base: "/WandN/",
  output: "static",
  adapter: github(),
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
