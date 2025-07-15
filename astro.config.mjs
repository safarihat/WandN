import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// No GitHub adapter import!

export default defineConfig({
  site: "https://safarihat.github.io/WandN/",
  base: "/WandN/",
  output: "static",
  // adapter: github(), // REMOVE or COMMENT OUT this line
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
