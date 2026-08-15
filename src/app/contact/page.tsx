import type { Metadata } from "next";
import { RiGithubLine } from "@remixicon/react";

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
              title={contactContent.intro.title}
              description={contactContent.intro.description}
            />
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {contactContent.prompts.map((prompt, index) => (
                <li key={prompt} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm font-medium sm:text-base">
                  <span className="tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Verified channel
            </p>
            <div className="mt-5 space-y-4">
              {contactContent.channels.map((channel) => (
                <a
                  key={channel.href}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <RiGithubLine aria-hidden="true" className="size-4" />
                    {channel.label}
                  </div>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">{channel.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{channel.description}</p>
                  <span className="mt-5 inline-block text-sm font-medium transition-transform duration-200 group-hover:translate-x-1">
                    Open channel →
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">{contactContent.note}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
