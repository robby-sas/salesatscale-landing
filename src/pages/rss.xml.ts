import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteConfig } from "../../site.config";

export async function GET(context: APIContext) {
  return rss({
    title: `${siteConfig.company.name} Blog`,
    description: siteConfig.company.description,
    site: context.site!.toString(),
    items: [
      {
        title: "The Sales Infrastructure Assessment: Is Your Business Ready to Scale?",
        pubDate: new Date("2025-03-15"),
        description: "A diagnostic framework to evaluate whether your sales infrastructure can support 2-10x revenue growth without breaking.",
        link: "/blog/sales-infrastructure-assessment/",
      },
    ],
  });
}
