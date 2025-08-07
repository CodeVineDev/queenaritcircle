// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false, // ✅ disables the dev toolbar properly
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
