import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { PageHero } from "@/components/sections/page-hero";
import { pageContent } from "@/content/pages";
import { solutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.solutions;

export const metadata: Metadata = createPageMetadata({
  title: "Solutions",
  description: content.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero {...content} />
      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
            {Object.entries(solutions).map(([key, solution]) => (
              <Link
                key={key}
                href={`/solutions/${key}`}
                className="group bg-background p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {solution.audience}
                </p>
                <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                  {solution.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {solution.description}
                </p>
                <span className="mt-8 inline-block text-sm font-medium transition-transform duration-200 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
