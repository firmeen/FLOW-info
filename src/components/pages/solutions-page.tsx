import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionComparisonSection } from "@/components/sections/solution-comparison-section";
import { SolutionsCoreSection } from "@/components/sections/solutions-core-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function SolutionsPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero {...content.pages.solutions} />
      <SolutionsCoreSection platformCore={content.platform.platformCore} copy={copy.solutionsPage} />
      <SolutionsSection locale={locale} solutions={content.solutions} copy={copy.home.solutions} workflowCopy={copy.solutionDetail.workflow} compact />
      <SolutionComparisonSection locale={locale} solutions={content.solutions} copy={copy.solutionsPage} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
