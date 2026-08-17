import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import type { PageContentMap, SolutionKey } from "@/i18n/schema";
import { createPageMetadata } from "@/lib/metadata";

const pageTitles: Record<Locale, Record<keyof PageContentMap, string>> = {
  en: {
    platform: "Platform",
    solutions: "Solutions",
    howItWorks: "How FLOW Works",
    about: "About",
    contact: "Contact",
  },
  th: {
    platform: "แพลตฟอร์ม",
    solutions: "โซลูชัน",
    howItWorks: "FLOW ทำงานอย่างไร",
    about: "เกี่ยวกับ FLOW",
    contact: "ติดต่อ",
  },
};

export function createLocalizedPageMetadata(locale: Locale, key: keyof PageContentMap, path: string) {
  const content = getLocalizedContent(locale).pages[key];
  return createPageMetadata({ locale, title: pageTitles[locale][key], description: content.description, path });
}

export function createLocalizedSolutionMetadata(locale: Locale, key: SolutionKey) {
  const solution = getLocalizedContent(locale).solutions[key];
  return createPageMetadata({
    locale,
    title: solution.name,
    description: solution.description,
    path: `/solutions/${key}`,
  });
}
