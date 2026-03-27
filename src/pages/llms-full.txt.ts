import type { APIRoute } from "astro";
import { siteConfig } from "../../site.config";

export const GET: APIRoute = () => {
  const { company, site, services, llm, social, blog, industry } = siteConfig;

  const content = `# ${company.name} — Complete Information

> ${company.tagline}

## About

${llm.entityDescription}

## Description

${company.description}

## Industry

- Category: ${industry.category}
- Schema Type: ${industry.schemaType}
- NAICS Code: ${industry.naicsCode}
- Keywords: ${industry.keywords.join(", ")}

## Services (Full Descriptions)

${services.map((s) => `### ${s.name}\n${s.description}\nURL: ${site.url}${s.url}`).join("\n\n")}

## Key Facts

${llm.keyFacts.map((f) => `- ${f}`).join("\n")}

## Target Phrases

- Primary: ${llm.targetPhrase}
- Keywords: ${industry.keywords.join(", ")}

## Contact Information

- Company: ${company.name}
- Legal Name: ${company.legalName}
- Email: ${company.email}
- Website: ${site.url}
- Founded: ${company.foundedYear}

## Social Links

- Twitter/X: ${social.twitter.url}
- LinkedIn: ${social.linkedin.url}
- Facebook: ${social.facebook.url}

## Blog Categories

${blog.categories.map((c) => `- ${c.name}: ${c.description} (${site.url}/blog/category/${c.slug}/)`).join("\n")}

## Content Index

### Main Pages
- Homepage: ${site.url}/
- Done-For-You Sales: ${site.url}/services/dfy-sales/
- Careers: ${site.url}/careers/
- Blog: ${site.url}/blog/
- Case Studies: ${site.url}/case-studies/

### Feeds
- RSS: ${site.url}/rss.xml
- LLM Summary: ${site.url}/llms.txt
- LLM Full: ${site.url}/llms-full.txt

### Machine-Readable
- Robots.txt: ${site.url}/robots.txt
- Sitemap: ${site.url}/sitemap-index.xml
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
