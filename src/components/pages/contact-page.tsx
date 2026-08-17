import { ContactChannels } from "@/components/contact/contact-channels";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function ContactPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);
  const contact = content.contact;

  return (
    <>
      <PageHero {...content.pages.contact} />

      <Section>
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={contact.intro.eyebrow}
              title={<>{copy.contact.startTitleLead}<EmphasisText>{copy.contact.startTitleOutcome}</EmphasisText></>}
              description={contact.intro.description}
            />
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {contact.prompts.map((prompt, index) => (
                <li key={prompt} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 text-sm font-medium sm:text-base">
                  <span className="tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[1.75rem] border border-border bg-muted/40 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.contact.goodFirstMessage}</p>
              <p className="mt-4 text-lg font-semibold tracking-[-0.03em]">{copy.contact.goodFirstPattern}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.contact.goodFirstDescription}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={copy.contact.connectEyebrow}
            title={<>{copy.contact.connectTitleLead}<EmphasisText>{copy.contact.connectTitleOutcome}</EmphasisText></>}
            description={copy.contact.connectDescription}
          />
          <div className="mt-12">
            <ContactChannels channels={contact.channels} copy={copy.contact} />
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-5 text-muted-foreground">{contact.note}</p>
        </Container>
      </Section>
    </>
  );
}
