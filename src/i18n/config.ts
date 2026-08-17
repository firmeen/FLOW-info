export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  th: "ไทย",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path: string) {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;

  if (locale === "en") return normalized;
  if (normalized === "/") return "/th";
  return `/th${normalized}`;
}

export function logicalPathFromPathname(pathname: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  let normalized = pathname || "/";

  if (basePath && normalized.startsWith(basePath)) {
    normalized = normalized.slice(basePath.length) || "/";
  }

  if (normalized === "/th" || normalized === "/th/") return "/";
  if (normalized.startsWith("/th/")) return normalized.slice(3) || "/";
  return normalized;
}

export function localeFromPathname(pathname: string): Locale {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  let normalized = pathname || "/";
  if (basePath && normalized.startsWith(basePath)) normalized = normalized.slice(basePath.length) || "/";
  return normalized === "/th" || normalized.startsWith("/th/") ? "th" : "en";
}

export function alternatePath(pathname: string, targetLocale: Locale) {
  return localizedPath(targetLocale, logicalPathFromPathname(pathname));
}
