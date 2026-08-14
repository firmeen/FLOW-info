import type { Metadata } from "next";
import { RiGithubLine } from "@remixicon/react";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/sections/page-hero";
import { brand } from "@/content/brand";
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
        <Container>
          <div className="max-w-2xl rounded-2xl border border-border p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Verified channel
            </p>
            <a
              href={brand.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <RiGithubLine aria-hidden="true" className="size-4" />
              GitHub / FLOW-info
            </a>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Additional official contact and social channels will only be added after their URLs are confirmed.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
