import { SolutionPage } from "@/components/solutions/solution-page";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";
import type { SolutionKey } from "@/i18n/schema";

export function SolutionDetailPage({ locale, solutionKey }: { locale: Locale; solutionKey: SolutionKey }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);
  return <SolutionPage locale={locale} solution={content.solutions[solutionKey]} copy={copy} />;
}
