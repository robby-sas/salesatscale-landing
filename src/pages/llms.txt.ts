import type { APIRoute } from "astro";
import { siteConfig } from "../../site.config";

export const GET: APIRoute = () => {
  const { company, site, services, llm } = siteConfig;

  const content = `# ${company.name}

> ${company.tagline}

## About

${llm.entityDescription}

## Description

${company.description}

## Services

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Key Facts

${llm.keyFacts.map((f) => `- ${f}`).join("\n")}

## Contact

- Email: ${company.email}
- Website: ${site.url}

## Content Index

- Homepage: ${site.url}/
- Done-For-You Sales: ${site.url}/services/dfy-sales/
- Careers: ${site.url}/careers/
- Blog: ${site.url}/blog/
- Case Studies: ${site.url}/case-studies/
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
