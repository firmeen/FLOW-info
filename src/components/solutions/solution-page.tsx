import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { SolutionWorkflowStrip } from "@/components/sections/solution-workflow-strip";
import { BuiltOnFlowSection } from "@/components/solutions/built-on-flow-section";
import { SolutionAudienceSection } from "@/components/solutions/solution-audience-section";
import { SolutionCapabilitiesSection } from "@/components/solutions/solution-capabilities-section";
import { SolutionExperienceSection } from "@/components/solutions/solution-experience-section";
import type { SolutionDefinition } from "@/content/solutions";

export function SolutionPage({ solution }: { solution: SolutionDefinition }) {
  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        titleHighlights={[{ text: solution.name, tone: "product" }]}
        description={solution.description}
        descriptionHighlights={[{ text: "FLOW platform", tone: "strong" }]}
        quote={solution.quote}
      />
      <SolutionAudienceSection solution={solution} />
      <SolutionWorkflowStrip solution={solution} />
      <SolutionExperienceSection experiences={solution.experiences} />
      <SolutionCapabilitiesSection solution={solution} />
      <BuiltOnFlowSection solution={solution} />
      <QuoteSection lines={[solution.quote]} />
      <CtaSection />
    </>
  );
}
