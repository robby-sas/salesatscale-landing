import type { APIRoute } from "astro";
import { siteConfig } from "../../site.config";

export const GET: APIRoute = () => {
  const sitemapUrl = `${siteConfig.site.url}/sitemap-index.xml`;

  const robotsTxt = `# robots.txt — ${siteConfig.company.name}
# Allow all search engines and AI crawlers

User-agent: *
Allow: /
Disallow: /thank-you/
Disallow: /api/

# Google
User-agent: Googlebot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Google-Extended
Allow: /

# Bing
User-agent: Bingbot
Allow: /

# OpenAI
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Apple
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Meta
User-agent: Meta-ExternalAgent
Allow: /

User-agent: FacebookBot
Allow: /

# Amazon
User-agent: Amazonbot
Allow: /

# Cohere
User-agent: Cohere-ai
Allow: /

# ByteDance
User-agent: Bytespider
Allow: /

# You.com
User-agent: YouBot
Allow: /

# AI2
User-agent: AI2Bot
Allow: /

# Diffbot
User-agent: Diffbot
Allow: /

# Common Crawl
User-agent: CCBot
Allow: /

# DataForSEO
User-agent: DataForSeoBot
Allow: /

# Petal
User-agent: PetalBot
Allow: /

# Omgili
User-agent: Omgilibot
Allow: /

# Imagesift
User-agent: ImagesiftBot
Allow: /

# Timpi
User-agent: Timpibot
Allow: /

# Seekr
User-agent: Seekr
Allow: /

# FriendlyCrawler
User-agent: FriendlyCrawler
Allow: /

# Webz.io
User-agent: Webz.io
Allow: /

# Kangaroo Bot
User-agent: Kangaroo Bot
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(robotsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
