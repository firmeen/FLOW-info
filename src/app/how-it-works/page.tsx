import type { Metadata } from "next";

import { WorkflowTimeline } from "@/components/flow/workflow-timeline";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { howFlowWorksSteps } from "@/content/how-it-works";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.howItWorks;

export const metadata: Metadata = createPageMetadata({
  title: "How FLOW Works",
  description: content.description,
  path: "/how-it-works",
});

const timelineSteps = howFlowWorksSteps.map((step) => ({
  number: step.number,
  title: step.title,
  items: step.examples.join(" · "),
  description: `${step.description} ${step.outcome}`,
}));

export default function HowFlowWorksPage() {
  return (
    <>
      <PageHero {...content} />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="THE OPERATIONAL JOURNEY"
            title="One action keeps its context as responsibility changes."
            description="This is the deeper FLOW story: not simply a list of modules, but the movement of intent, work, completion, and information between the people involved."
          />
          <WorkflowTimeline steps={timelineSteps} className="mt-16 max-w-6xl" />
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">WHY CONTINUITY MATTERS</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              The next step should not have to rediscover the previous one.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:col-span-4 lg:col-start-9">
            When status, responsibility, payment, customer context, and business records stay attached to the workflow, the system can support both daily execution and later understanding without creating another disconnected layer.
          </p>
        </Container>
      </Section>

      <QuoteSection lines={["Every action", "moves the business."]} />
      <CtaSection />
    </>
  );
}
