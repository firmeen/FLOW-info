import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { aboutStory } from "@/content/about";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.about;

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: content.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero {...content} />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow={aboutStory.why.eyebrow}
              title={aboutStory.why.title}
              description={aboutStory.why.description}
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              FIMIN FLOW
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Building practical web-based systems around the way small and medium-sized businesses actually operate.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="WHAT WE'RE BUILDING"
            title="One platform direction, expressed through reusable operating patterns."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
            {aboutStory.building.map((item, index) => (
              <article key={item.title} className="min-h-64 bg-background p-7 sm:p-8">
                <p className="text-xs tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <SectionHeading
            eyebrow="HOW WE THINK"
            title="Start with the operation before choosing the interface."
            description="The design and technical decisions should follow the workflow that people need to complete, not force the workflow to fit whatever software pattern happens to be convenient."
            className="lg:col-span-7"
          />
          <ol className="divide-y divide-border border-y border-border lg:col-span-4 lg:col-start-9">
            {aboutStory.principles.map((principle, index) => (
              <li key={principle} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm font-medium">
                <span className="tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <SectionHeading
            inverse
            eyebrow={aboutStory.direction.eyebrow}
            title={aboutStory.direction.title}
            description={aboutStory.direction.description}
          />
        </Container>
      </Section>

      <QuoteSection lines={["Start with the workflow.", "Technology comes after."]} />
      <CtaSection />
    </>
  );
}
