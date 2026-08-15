import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { solutions } from "@/content/solutions";

export function SolutionsSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section tone={compact ? "muted" : "light"}>
      <Container>
        <SectionHeading
          eyebrow="BUSINESS SOLUTIONS"
          title="One core. Different business flows."
          description="FoodFlow, JobFlow, and CareFlow adapt the shared FLOW foundation around different operational patterns while keeping the underlying system connected."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {Object.entries(solutions).map(([key, solution], index) => (
            <FadeIn key={key} delay={index * 0.07} className="h-full">
              <Link
                href={`/solutions/${key}`}
                className="group flex h-full min-h-[360px] flex-col bg-background p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{solution.audience}</p>
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em]">{solution.name}</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{solution.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {solution.workflow.slice(0, 4).map((step) => (
                    <span key={step} className="rounded-full border border-border px-2.5 py-1.5 text-[0.68rem] font-medium text-muted-foreground">
                      {step}
                    </span>
                  ))}
                </div>
                <span className="mt-auto pt-10 text-sm font-medium transition-transform duration-200 group-hover:translate-x-1">Explore {solution.name} →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
