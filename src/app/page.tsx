import { FlowStory } from "@/components/flow/flow-story";
import { WorkflowTimeline } from "@/components/flow/workflow-timeline";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { BrandStatement } from "@/components/sections/brand-statement";
import { BusinessValueSection } from "@/components/sections/business-value-section";
import { CorePlatformSection } from "@/components/sections/core-platform-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HomeHero } from "@/components/sections/home-hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProductSurfacesSection } from "@/components/sections/product-surfaces-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { homeWorkflowSteps } from "@/content/home";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BrandStatement />
      <ProblemSection />
      <FlowStory />
      <CorePlatformSection />
      <SolutionsSection />
      <ProductSurfacesSection />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="HOW FLOW WORKS"
            title="From entry to understanding, keep the work connected."
            description="The customer journey and the internal operation are two views of the same flow. Each step should preserve enough context for the next person or system to act clearly."
          />
          <WorkflowTimeline steps={homeWorkflowSteps} className="mt-16 max-w-5xl" />
        </Container>
      </Section>

      <BusinessValueSection />
      <QuoteSection lines={["Build the workflow.", "Connect the data.", "Understand the business."]} />
      <CtaSection />
    </>
  );
}
