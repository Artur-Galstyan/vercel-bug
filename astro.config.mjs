// @ts-check
import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: "static",
});
