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
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);

  return (
    <>
      <HomeHero locale={locale} brand={content.brand} copy={copy.home.hero} />
      <BrandStatement copy={copy.home.brandStatement} />
      <ProblemSection groups={content.home.problemGroups} copy={copy.home.problem} />
      <FlowStory copy={copy.home.flowStory} />
      <CorePlatformSection locale={locale} families={content.home.coreCapabilityFamilies} copy={copy.home.core} />
      <SolutionsSection locale={locale} solutions={content.solutions} copy={copy.home.solutions} workflowCopy={copy.solutionDetail.workflow} />
      <ProductSurfacesSection surfaces={content.home.productSurfaces} copy={copy.home.product} />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.home.workflow.eyebrow}
            title={copy.home.workflow.title}
            description={copy.home.workflow.description}
          />
          <WorkflowTimeline steps={content.home.homeWorkflowSteps} className="mt-16 max-w-5xl" />
        </Container>
      </Section>

      <BusinessValueSection values={content.home.businessValueTransformations} copy={copy.home.businessValue} />
      <QuoteSection lines={copy.home.quote} eyebrow={copy.quoteEyebrow} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
