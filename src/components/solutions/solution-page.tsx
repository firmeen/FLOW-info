import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { SolutionWorkflowStrip } from "@/components/sections/solution-workflow-strip";
import { BuiltOnFlowSection } from "@/components/solutions/built-on-flow-section";
import { SolutionAudienceSection } from "@/components/solutions/solution-audience-section";
import { SolutionCapabilitiesSection } from "@/components/solutions/solution-capabilities-section";
import { SolutionExperienceSection } from "@/components/solutions/solution-experience-section";
import { getSolutionDisplay } from "@/i18n/solution-display";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionDefinition } from "@/i18n/schema";

export function SolutionPage({
  locale,
  solution,
  copy,
}: {
  locale: Locale;
  solution: SolutionDefinition;
  copy: SiteCopy;
}) {
  const display = getSolutionDisplay(locale, solution.name);

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={display.title}
        titleHighlights={[{ text: display.highlight, tone: "outcome" }]}
        description={solution.description}
        descriptionHighlights={[{ text: "FLOW", tone: "strong" }]}
        quote={solution.quote}
      />
      <SolutionAudienceSection solution={solution} copy={copy.solutionDetail.audience} />
      <SolutionWorkflowStrip solution={solution} copy={copy.solutionDetail.workflow} />
      <SolutionExperienceSection experiences={solution.experiences} copy={copy.solutionDetail.experience} />
      <SolutionCapabilitiesSection solution={solution} copy={copy.solutionDetail.capabilities} />
      <BuiltOnFlowSection solution={solution} locale={locale} copy={copy.solutionDetail.builtOn} />
      <QuoteSection lines={[solution.quote]} eyebrow={copy.quoteEyebrow} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
