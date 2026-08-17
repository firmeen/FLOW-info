import type { MetadataRoute } from "next";

import { localizedPath, locales } from "@/i18n/config";
import { absoluteSiteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/platform", priority: 0.9 },
  { path: "/solutions", priority: 0.9 },
  { path: "/solutions/foodflow", priority: 0.8 },
  { path: "/solutions/jobflow", priority: 0.8 },
  { path: "/solutions/careflow", priority: 0.8 },
  { path: "/how-it-works", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const languages = {
      en: absoluteSiteUrl(localizedPath("en", route.path)),
      th: absoluteSiteUrl(localizedPath("th", route.path)),
      "x-default": absoluteSiteUrl(localizedPath("en", route.path)),
    };

    return locales.map((locale) => ({
      url: absoluteSiteUrl(localizedPath(locale, route.path)),
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
