// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.salesatscale.io",
  trailingSlash: "always",
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), sitemap({
    customPages: [
      'https://www.salesatscale.io/',
      'https://www.salesatscale.io/careers/',
      'https://www.salesatscale.io/blog/',
      'https://www.salesatscale.io/blog/sales-infrastructure-assessment/',
      'https://www.salesatscale.io/services/dfy-sales/',
      'https://www.salesatscale.io/case-studies/',
      'https://www.salesatscale.io/case-studies/college-financial-aid-258-growth/',
      'https://www.salesatscale.io/case-studies/tax-strategy-10x-revenue/',
      'https://www.salesatscale.io/case-studies/real-estate-consistent-sales-operation/',
    ]
  })],
});
