import type { Metadata } from "next";

import { getLocalizedContent } from "@/i18n/content";
import { localizedPath, type Locale } from "@/i18n/config";
import { flowBrandAssets } from "@/lib/brand-assets";

const defaultSiteUrl = "https://firmeen.github.io/FLOW-info";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl);

export function absoluteSiteUrl(path: string) {
  const base = siteUrl.toString().endsWith("/") ? siteUrl.toString() : `${siteUrl.toString()}/`;
  return new URL(path.replace(/^\//, ""), base).toString();
}

function languageAlternates(path: string) {
  return {
    en: absoluteSiteUrl(localizedPath("en", path)),
    th: absoluteSiteUrl(localizedPath("th", path)),
    "x-default": absoluteSiteUrl(localizedPath("en", path)),
  };
}

export function createRootMetadata(locale: Locale): Metadata {
  const { brand } = getLocalizedContent(locale);
  const defaultTitle = `${brand.platform} — ${brand.tagline}`;
  const socialAsset = flowBrandAssets.og;
  const socialImage = absoluteSiteUrl(socialAsset.path);
  const path = "/";
  const canonical = absoluteSiteUrl(localizedPath(locale, path));

  return {
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
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: brand.platform,
      title: defaultTitle,
      description: brand.description,
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: locale === "th" ? ["en_US"] : ["th_TH"],
      images: [{
        url: socialImage,
        width: socialAsset.width,
        height: socialAsset.height,
        alt: `${brand.platform} — ${brand.tagline}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: brand.description,
      images: [socialImage],
    },
  };
}

export function createPageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { brand } = getLocalizedContent(locale);
  const socialAsset = flowBrandAssets.og;
  const socialImage = absoluteSiteUrl(socialAsset.path);
  const canonical = absoluteSiteUrl(localizedPath(locale, path));
  const socialTitle = `${title} | ${brand.platform}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      type: "website",
      siteName: brand.platform,
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: locale === "th" ? ["en_US"] : ["th_TH"],
      images: [{
        url: socialImage,
        width: socialAsset.width,
        height: socialAsset.height,
        alt: `${brand.platform} — ${brand.tagline}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
