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

- Phone: ${company.phoneDisplay}
- Email: ${company.email}
- Address: ${company.address.street}${company.address.suite ? ", " + company.address.suite : ""}, ${company.address.city}, ${company.address.state} ${company.address.zip}
- Website: ${site.url}

## Content Index

- Homepage: ${site.url}/
- About: ${site.url}/about/
- Services: ${site.url}/services/
- Blog: ${site.url}/blog/
- FAQ: ${site.url}/faq/
- Contact: ${site.url}/contact/
- Privacy Policy: ${site.url}/privacy/
- Terms of Service: ${site.url}/terms/
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
