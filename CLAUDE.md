# CLAUDE.md — Project Rules for Claude Code

## Project Overview

This is an Astro-based lead generation landing page template optimized for traditional SEO and LLM/AI search citations. It deploys to Vercel as a static site. The goal is to rank #1 in both Google and AI search results (ChatGPT, Claude, Perplexity, Gemini) for target phrases within days of launch.

This is a reusable template system. All company-specific data lives in `site.config.ts`. A new site can be deployed by editing only that file, swapping images, and updating content.

## Core Principles

1. **Lightweight first.** Every byte must earn its place. Target: under 100KB total page weight (HTML + CSS + JS, excluding images), sub-1-second load, 95+ Lighthouse scores across all categories.
2. **LLM-citation-optimized.** Content must be structured so AI models extract and cite it. Answer-first paragraphs, self-contained statements, FAQ sections, entity clarity.
3. **SEO-complete.** Full structured data, proper meta tags, clean URL structure, semantic HTML, internal linking.
4. **Zero client-side frameworks.** No React, Vue, or Svelte on the client. Vanilla JS only where essential (mobile menu, cookie consent, TOC observer, form validation). Each JS component under 2KB.
5. **Single config source.** All company-specific data lives in `site.config.ts`. Never hardcode company names, URLs, phone numbers, or brand colors anywhere else.
6. **Professional & polished.** The target audience is high-value B2B clients. The site must look expensive, polished, and trustworthy. Clean typography, generous spacing, professional color palette.
7. **Programmatic but not robotic.** The build is systematic and template-driven, but the output must feel custom and high-end.

## Tech Stack

- **Framework:** Astro 4.x (static site generation)
- **Styling:** Tailwind CSS (utility-first, tree-shakes to only used classes)
- **Deployment:** Vercel (edge, automatic SSL, preview deploys)
- **Content:** Astro Content Collections with Zod validation
- **Images:** Astro built-in image optimization (WebP, responsive srcset)
- **Fonts:** 1 font family max (Inter variable), preloaded, system fallback stack

## File Structure

```
/
├── CLAUDE.md                          # This file — project rules
├── DEPLOY.md                          # Vercel deployment guide
├── NEW_SITE_CHECKLIST.md              # New site launch checklist
├── site.config.ts                     # Single source of truth for all company data
├── astro.config.mjs                   # Astro config with sitemap, tailwind, vercel
├── tailwind.config.mjs                # Design tokens mapped to brand colors
├── vercel.json                        # Security headers, caching, redirects
├── package.json                       # Dependencies
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-default.jpg                 # 1200x630 default OG image
├── src/
│   ├── components/
│   │   ├── seo/
│   │   │   ├── BaseHead.astro         # All meta, OG, Twitter, canonical, analytics, fonts
│   │   │   ├── JsonLd.astro           # All structured data schemas (9 types)
│   │   │   ├── Breadcrumbs.astro      # Nav breadcrumbs + BreadcrumbList schema
│   │   │   └── FAQ.astro              # Accordion FAQ + FAQPage schema
│   │   ├── ui/
│   │   │   ├── CookieConsent.astro    # GDPR banner, vanilla JS
│   │   │   └── ShareButtons.astro     # Social share, zero external scripts
│   │   ├── blog/
│   │   │   ├── PostCard.astro         # Blog post preview card
│   │   │   ├── TOC.astro              # Table of contents
│   │   │   ├── RelatedPosts.astro     # Related articles by category/tags
│   │   │   └── Pagination.astro       # Blog pagination with rel prev/next
│   │   └── layout/
│   │       ├── Header.astro           # Site header + navigation
│   │       └── Footer.astro           # Site footer
│   ├── layouts/
│   │   ├── BaseLayout.astro           # Master layout — semantic HTML shell
│   │   ├── LandingPage.astro          # Landing page layout
│   │   └── BlogPost.astro             # Blog post layout
│   ├── content/
│   │   ├── config.ts                  # Zod content collection schemas
│   │   └── blog/
│   │       └── sample-post.md         # Sample blog post (draft)
│   ├── pages/
│   │   ├── index.astro                # Homepage / landing page
│   │   ├── about.astro                # About page — entity definition
│   │   ├── services.astro             # Services page
│   │   ├── contact.astro              # Contact page
│   │   ├── faq.astro                  # Standalone FAQ page
│   │   ├── privacy.astro              # Privacy policy
│   │   ├── terms.astro                # Terms of service
│   │   ├── thank-you.astro            # Post-form conversion page
│   │   ├── 404.astro                  # Custom error page
│   │   ├── robots.txt.ts              # Dynamic robots.txt with AI crawlers
│   │   ├── llms.txt.ts                # LLM content index
│   │   ├── llms-full.txt.ts           # Expanded LLM content index
│   │   ├── rss.xml.ts                 # Blog RSS feed
│   │   └── blog/
│   │       ├── index.astro            # Blog listing
│   │       ├── [...slug].astro        # Blog post pages
│   │       ├── category/
│   │       │   └── [slug].astro       # Category archives
│   │       └── tag/
│   │           └── [slug].astro       # Tag archives
│   ├── styles/
│   │   └── global.css                 # Design tokens, reset, typography, utilities
│   ├── utils/
│   │   ├── seo.ts                     # URL builder, title builder, date formatters
│   │   └── reading-time.ts            # Reading time calculator
│   └── assets/
│       └── images/
│           └── index.ts               # Centralized image registry
```

---

## site.config.ts Structure

This is the ONLY file that needs to change per client. It must contain:

```typescript
export const siteConfig = {
  company: {
    name, legalName, tagline, description (under 160 chars),
    foundedYear, phone, phoneDisplay, email,
    address: { street, suite, city, state, zip, country }
  },
  site: {
    url, title, titleSuffix, language, locale
  },
  industry: {
    schemaType, // "FinancialService" | "SoftwareApplication" | "DataCatalog" | "ProfessionalService" | "LocalBusiness" | "Organization"
    category, naicsCode, keywords[]
  },
  services: [{ name, description, url }],
  brand: {
    colors: { primary, primaryLight, primaryDark, secondary, accent, accentHover, background, surface, text, textMuted, border },
    fonts: { heading, body },
    logo: { src, alt, width, height }
  },
  social: { twitter: { handle, url }, linkedin: { url }, facebook: { url } },
  analytics: { gtmId, ga4Id, googleSiteVerification, bingSiteVerification, facebookPixelId, linkedinPartnerId, clarityId },
  blog: { postsPerPage, categories: [{ name, slug, description }], defaultAuthor: { name, slug, bio, avatar, social } },
  cta: { primary: { text, url }, secondary: { text, url }, phone: { text, url } },
  legal: { privacyUrl, termsUrl, cookiePolicy },
  llm: { targetPhrase, entityDescription, keyFacts[] }
} as const;
```

---

## SEO Requirements

### Meta Tags (BaseHead.astro)
- Every page: unique meta title with brand suffix from config
- Every page: meta description under 160 characters (Zod enforced)
- Every page: canonical URL
- Every page: full Open Graph tags (type, url, title, description, image, site_name, locale)
- Every page: Twitter Card tags (card, site, title, description, image)
- Article pages: article-specific OG (published_time, modified_time, author, section, tags)
- Verification meta tags: Google Search Console, Bing Webmaster, Yandex, Pinterest
- Preconnect to analytics/fonts/CDN domains
- Font preloading (Inter variable woff2)
- RSS feed link

### Structured Data (JsonLd.astro) — 9 Schema Types
1. **Organization** — on every page (from config: name, description, logo, address, phone, email, social, founding date)
2. **FinancialService/SoftwareApplication/DataCatalog/ProfessionalService** — industry-specific (configurable via site.config.ts industry.schemaType)
3. **Article** — blog posts (headline, description, image, dates, author, publisher, speakable)
4. **BreadcrumbList** — navigation breadcrumbs
5. **Person** — author pages
6. **FAQPage** — every FAQ section
7. **Blog** — blog index
8. **HowTo** — how-to content
9. **Service** — service pages
10. **ContactPage** — contact page with ContactPoint

### URL Structure
- Blog: `/blog/[slug]/`
- Categories: `/blog/category/[slug]/`
- Tags: `/blog/tag/[slug]/`
- Pages: `/about/`, `/services/`, `/contact/`, `/faq/`, `/privacy/`, `/terms/`
- Always trailing slash, always lowercase

### Heading Hierarchy
- ONE H1 per page
- H1 contains target keyword/phrase
- H2 for main sections, H3 for subsections
- Never skip levels
- Headings should read like answers when possible

---

## LLM Search Optimization Rules

### llms.txt and llms-full.txt
- Generate dynamically from site.config.ts
- llms.txt: company overview, services list, key facts, contact info, content index
- llms-full.txt: everything in llms.txt plus full service descriptions, social links, blog categories, target phrases

### Answer-First Content Structure
- Every page starts with 2-3 sentences that directly state the key information
- NO filler intros: no "In today's fast-paced world...", "Are you looking for...", "Welcome to..."
- First paragraph must be extractable by AI and make complete sense standalone
- GOOD: "ABC Funding provides equipment financing from $10,000 to $5 million for small businesses across all 50 states. Approval takes 24 hours with funding in as fast as 48 hours."
- BAD: "Welcome to ABC Funding! We're passionate about helping businesses grow."

### FAQ Sections
- Every key page has at least one FAQ section
- Answers are self-contained (make sense without reading the question)
- Answers include specific numbers, timeframes, facts
- Always wrapped with FAQPage schema

### Entity Definition Blocks
- About page clearly defines: WHO (company name + founders), WHAT (services), WHERE (location/service area), HOW (process), WHY (differentiators)
- Services page defines each service: what it is, who it's for, how it works, cost range, how to apply

### Citation-Friendly Content
- Specific numbers: dollar amounts, percentages, timeframes, counts
- Dates and time references
- Concrete language, not vague marketing speak
- Every claim verifiable

### Self-Contained Paragraphs
- Each paragraph makes sense extracted in isolation
- No pronouns referencing previous paragraphs ("This service..." → name the service)
- No "as mentioned above" or "see below"
- Each paragraph = potential AI citation

### robots.txt — AI Crawler Access
Allow ALL of these crawlers:
GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, PerplexityBot, Googlebot, GoogleOther, Google-Extended, Bingbot, Applebot, Applebot-Extended, Meta-ExternalAgent, FacebookBot, Amazonbot, Cohere-ai, Bytespider, YouBot, AI2Bot, Diffbot, CCBot, DataForSeoBot, PetalBot, Omgilibot, ImagesiftBot, Timpibot, Seekr, FriendlyCrawler, Webz.io, Kangaroo Bot

---

## Image Optimization
- Centralized registry: `src/assets/images/index.ts`
- Responsive srcset: 300/400/600/800/1200px widths
- WebP primary + JPEG fallback
- Hero images: `loading="eager"`
- All other images: `loading="lazy"`, `decoding="async"`
- Proper `sizes` attributes
- OG images: 1200px JPEG quality 90%
- Alt text enforced via Zod on content collections
- Always specify width and height to prevent CLS

---

## Performance Budget
- Total page weight: <100KB (HTML + CSS + JS, excluding images)
- JavaScript: <50KB total
- CSS: <30KB total
- No individual JS file over 5KB
- Fonts: 1 family (Inter variable), 2 weights max
- Images: WebP, responsive srcset, lazy loaded
- Time to First Byte: <200ms (Vercel edge)
- Largest Contentful Paint: <2.5s
- First Input Delay: <100ms
- Cumulative Layout Shift: <0.1
- Core Web Vitals: all green

---

## Content Collections (Zod Schema)

Blog posts require:
- `title` (string, required)
- `description` (string, max 160 chars, required)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `author` (string, optional — defaults from config)
- `category` (string, optional)
- `tags` (string array, default [])
- `heroImage` (string, optional)
- `heroImageAlt` (string, optional)
- `readingTime` (number, optional — auto-calculated)
- `featured` (boolean, default false)
- `draft` (boolean, default false)
- `excerpt` (string, optional)
- `schemaType` (enum: article, howto, faq — default article)
- `ctaType` (enum: primary, secondary, inline, none — default primary)

---

## Blog Features
- Pagination: 12 posts per page, rel prev/next
- TOC: auto-generated from headings, sticky sidebar, IntersectionObserver highlights
- Related articles: 3 posts matched by category then tags
- Reading time: auto-calculated
- Featured posts flag
- Categories with industry-configurable names
- Tags with dedicated archive pages
- Author pages with Person schema
- RSS feed

---

## Lead Generation Components
- CTA components: primary, secondary, inline, sticky variants
- Lead capture form: native HTML validation, honeypot spam prevention, conversion tracking
- Thank you page: conversion event firing (dataLayer, fbq)
- Click-to-call: tel: links with tracking events
- Social proof: testimonials with AggregateRating schema, trust badges, client logos
- Hero: above-fold value proposition with primary CTA
- UTM preservation: pass-through on all internal links

---

## Analytics Integration
All analytics loaded via slots in BaseHead.astro, configured through site.config.ts:
- Google Tag Manager: async, non-blocking
- Google Analytics 4: via GTM or standalone fallback
- Vercel Analytics: built-in
- Vercel Speed Insights: built-in
- Facebook Pixel: via GTM or standalone fallback
- LinkedIn Insight Tag: via GTM or standalone fallback
- Microsoft Clarity: standalone

Never add analytics scripts directly to pages. Always use config + BaseHead pattern.

---

## Legal & Compliance
- Privacy policy: auto-populated from site.config.ts
- Terms of service: auto-populated from site.config.ts
- Cookie consent banner: vanilla JS, localStorage, accept/decline
- CAN-SPAM compliance on any email capture

---

## Social Sharing
- Share buttons in 2 locations: hero area + end of content
- Platforms: Twitter/X, LinkedIn, Facebook, copy-to-clipboard
- Pure intent URLs — zero external scripts
- Copy-to-clipboard with visual feedback

---

## Technical SEO
- Clean URLs with trailing slashes
- One H1 + proper heading hierarchy per page
- Internal linking: related posts, breadcrumbs, category/tag navigation
- Custom 404 with CTAs back to key pages
- Breadcrumb navigation with BreadcrumbList schema
- Sitemap auto-generated via @astrojs/sitemap

---

## Accessibility (WCAG AA)
- Semantic HTML: article, nav, main, aside, footer, header, section
- aria-labels on interactive elements
- aria-current on active navigation
- aria-hidden on decorative elements
- rel="noopener noreferrer" on external links
- Descriptive alt text on all images
- Skip-to-content link
- Focus ring styles (:focus-visible)
- Reduced motion support (@media prefers-reduced-motion)
- WCAG AA color contrast ratios

---

## Design System
- Color tokens: configurable via site.config.ts, mapped to CSS custom properties and Tailwind
- Spacing scale: 4px base (0.25rem increments)
- Breakpoints: 768px (md), 1024px (lg), 1200px (xl)
- Max-width: 1200px site, 768px content
- Responsive grids: 3-col homepage, 2-col articles with sidebar
- Mobile-first approach
- Typography: Inter variable font, system fallback stack

---

## Deployment — Vercel
- vercel.json with security headers: X-Frame-Options DENY, X-Content-Type-Options nosniff, X-XSS-Protection, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (no camera/mic/geo), HSTS 2 years with preload
- Cache: immutable for fonts and _astro assets, 24h for images
- Environment variables for API keys/analytics IDs
- Preview deployments on every push
- Production deploy on merge to main
- Custom domain + automatic SSL

---

## Pages Required

### 1. Homepage / Landing Page (`/`)
The money page. Must include:
- Hero section with value proposition and primary CTA
- Services overview section
- Social proof (testimonials, trust badges)
- FAQ section with FAQPage schema
- Secondary CTA
- Entity definition block (for LLM extraction)

### 2. About (`/about/`)
Entity definition page for E-E-A-T:
- WHO: company name, founders, team
- WHAT: services, mission
- WHERE: location, service area
- HOW: process, methodology
- WHY: differentiators, values

### 3. Services (`/services/`)
- Individual service descriptions with Service schema
- What it is, who it's for, how it works, pricing range, how to apply
- FAQ section per service

### 4. Contact (`/contact/`)
- Lead capture form
- Phone number (click-to-call)
- Email
- Address
- ContactPoint schema

### 5. FAQ (`/faq/`)
- Standalone FAQ page, LLM citation magnet
- FAQPage schema
- Industry-specific questions

### 6. Privacy Policy (`/privacy/`)
- Auto-populated from site.config.ts

### 7. Terms of Service (`/terms/`)
- Auto-populated from site.config.ts

### 8. Thank You (`/thank-you/`)
- Conversion tracking (dataLayer push, fbq Lead event)
- noindex

### 9. 404 (`/404/`)
- CTAs to homepage, blog, contact
- noindex

### 10. Blog (`/blog/`)
- Blog index with pagination
- Content collection powered
- Category and tag archive pages
- Individual post pages with Article schema

---

## Component Rules

### All Components
- No external JS dependencies
- No CSS-in-JS
- Use Tailwind utility classes
- Accessible (aria labels, keyboard nav, screen reader support)
- Works without JavaScript (progressive enhancement)

### Forms
- Native HTML validation first
- Minimal vanilla JS for enhanced UX
- Honeypot field for spam prevention
- Track submission events for analytics

### Images
- Use Astro `<Image>` component when possible
- Descriptive alt text always
- Width and height specified to prevent CLS
- Hero: loading="eager", everything else: loading="lazy"
- All: decoding="async"

---

## Git Workflow
- Commit after every meaningful change
- Descriptive commit messages
- Branch for major features
- Main branch is always deployable
