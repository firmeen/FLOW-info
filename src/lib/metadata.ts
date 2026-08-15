import type { Metadata } from "next";

import { brand } from "@/content/brand";

const defaultSiteUrl = "https://firmeen.github.io/FLOW-info";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
);

function absoluteSiteUrl(path: string) {
  const base = siteUrl.toString().endsWith("/")
    ? siteUrl.toString()
    : `${siteUrl.toString()}/`;

  return new URL(path.replace(/^\//, ""), base).toString();
}

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${brand.platform} — ${brand.tagline}`,
    template: `%s | ${brand.platform}`,
  },
  description: brand.description,
  applicationName: brand.platform,
  creator: brand.company,
  publisher: brand.company,
  openGraph: {
    type: "website",
    siteName: brand.platform,
    title: `${brand.platform} — ${brand.tagline}`,
    description: brand.description,
  },
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteSiteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteSiteUrl(path),
      type: "website",
      siteName: brand.platform,
    },
  };
}
