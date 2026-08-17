import type { Metadata } from "next";

import { ContactChannels } from "@/components/contact/contact-channels";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { contactContent } from "@/content/contact";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.contact;

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: content.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero {...content} />

      <Section>
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={contactContent.intro.eyebrow}
              title={
                <>
                  Start with <EmphasisText>how the work moves.</EmphasisText>
                </>
              }
              description={contactContent.intro.description}
            />
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {contactContent.prompts.map((prompt, index) => (
                <li key={prompt} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 text-sm font-medium sm:text-base">
                  <span className="tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[1.75rem] border border-border bg-muted/40 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">GOOD FIRST MESSAGE</p>
              <p className="mt-4 text-lg font-semibold tracking-[-0.03em]">
                Business type → customer action → current friction.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                That is enough context to begin a useful FLOW conversation without preparing a formal specification first.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="CONNECT WITH FLOW"
            title={
              <>
                Choose the <EmphasisText>channel that fits the conversation.</EmphasisText>
              </>
            }
            description="Business, product, partnership, collaboration, or public development — use the channel that makes the next step easiest."
          />
          <div className="mt-12">
            <ContactChannels channels={contactContent.channels} />
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-5 text-muted-foreground">{contactContent.note}</p>
        </Container>
      </Section>
    </>
  );
}
