import type { Metadata } from "next";

import { brand } from "@/content/brand";

const defaultSiteUrl = "https://firmeen.github.io/FLOW-info";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
);

export function absoluteSiteUrl(path: string) {
  const base = siteUrl.toString().endsWith("/")
    ? siteUrl.toString()
    : `${siteUrl.toString()}/`;

  return new URL(path.replace(/^\//, ""), base).toString();
}

const defaultTitle = `${brand.platform} — ${brand.tagline}`;
const socialImage = absoluteSiteUrl("assets/flow-og.png");

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: defaultTitle,
    template: `%s | ${brand.platform}`,
  },
  description: brand.description,
  applicationName: brand.platform,
  creator: brand.company,
  publisher: brand.company,
  alternates: {
    canonical: absoluteSiteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteSiteUrl("/"),
    siteName: brand.platform,
    title: defaultTitle,
    description: brand.description,
    images: [
      {
        url: socialImage,
        alt: `${brand.platform} — ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: brand.description,
    images: [socialImage],
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
  const socialTitle = `${title} | ${brand.platform}`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteSiteUrl(path),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteSiteUrl(path),
      type: "website",
      siteName: brand.platform,
      images: [
        {
          url: socialImage,
          alt: `${brand.platform} — ${brand.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
