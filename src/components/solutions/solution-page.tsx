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
        description={solution.description}
        quote={solution.quote}
      />
      <SolutionAudienceSection solution={solution} />
      <SolutionWorkflowStrip audience={solution.audience} workflow={solution.workflow} />
      <SolutionExperienceSection experiences={solution.experiences} />
      <SolutionCapabilitiesSection capabilities={solution.capabilities} />
      <BuiltOnFlowSection sharedCore={solution.sharedCore} />
      <QuoteSection lines={[solution.quote]} />
      <CtaSection />
    </>
  );
}
