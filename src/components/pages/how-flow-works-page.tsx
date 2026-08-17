import { WorkflowTimeline } from "@/components/flow/workflow-timeline";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function HowFlowWorksPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);
  const timelineSteps = content.howItWorks.map((step) => ({
    number: step.number,
    title: step.title,
    items: step.examples.join(" · "),
    description: `${step.description} ${step.outcome}`,
  }));

  return (
    <>
      <PageHero {...content.pages.howItWorks} />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={copy.howItWorks.journeyEyebrow}
            title={copy.howItWorks.journeyTitle}
            description={copy.howItWorks.journeyDescription}
          />
          <WorkflowTimeline steps={timelineSteps} className="mt-16 max-w-6xl" />
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{copy.howItWorks.continuityEyebrow}</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">{copy.howItWorks.continuityTitle}</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:col-span-4 lg:col-start-9">{copy.howItWorks.continuityDescription}</p>
        </Container>
      </Section>

      <QuoteSection lines={copy.howItWorks.quote} eyebrow={copy.quoteEyebrow} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
