import { siteConfig } from "../../site.config";

export function buildUrl(path: string): string {
  const base = siteConfig.site.url.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const withTrailingSlash = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  return `${base}${withTrailingSlash}`;
}

export function buildTitle(title?: string): string {
  if (!title) return siteConfig.site.title;
  return `${title}${siteConfig.site.titleSuffix}`;
}

export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.substring(0, lastSpace)}...`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateISO(date: Date): string {
  return date.toISOString();
}
