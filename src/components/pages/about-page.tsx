import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteSection } from "@/components/sections/quote-section";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function AboutPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);
  const story = content.about;

  return (
    <>
      <PageHero {...content.pages.about} />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <SectionHeading eyebrow={story.why.eyebrow} title={story.why.title} description={story.why.description} />
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">FIMIN FLOW</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{copy.about.companyDescription}</p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading eyebrow={copy.about.buildingEyebrow} title={copy.about.buildingTitle} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
            {story.building.map((item, index) => (
              <article key={item.title} className="min-h-64 bg-background p-7 sm:p-8">
                <p className="text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <SectionHeading
            eyebrow={copy.about.thinkingEyebrow}
            title={copy.about.thinkingTitle}
            description={copy.about.thinkingDescription}
            className="lg:col-span-7"
          />
          <ol className="divide-y divide-border border-y border-border lg:col-span-4 lg:col-start-9">
            {story.principles.map((principle, index) => (
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
          <SectionHeading inverse eyebrow={story.direction.eyebrow} title={story.direction.title} description={story.direction.description} />
        </Container>
      </Section>

      <QuoteSection lines={copy.about.quote} eyebrow={copy.quoteEyebrow} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
