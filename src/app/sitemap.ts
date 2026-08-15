import type { MetadataRoute } from "next";

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
  return routes.map((route) => ({
    url: absoluteSiteUrl(route.path),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
