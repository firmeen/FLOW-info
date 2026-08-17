import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { solutions } from "@/content/solutions";

export function SolutionComparisonSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="COMPARE THE WORKFLOW"
          title={<>Choose by <EmphasisText tone="outcome">operational pattern</EmphasisText>, not by a long feature checklist.</>}
          description="Each solution starts from a different kind of work. The shared FLOW core stays consistent while the journey, roles, and operational emphasis change."
        />

        <div className="mt-14 border-t border-border">
          {Object.entries(solutions).map(([key, solution], index) => (
            <FadeIn
              key={key}
              delay={index * 0.05}
              className="grid gap-6 border-b border-border py-9 sm:py-11 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{solution.audience}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{solution.name}</h3>
              </div>
              <div className="-mx-5 overflow-x-auto overscroll-x-contain px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 sm:[scrollbar-width:auto] lg:col-span-6 [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
                <ol className="flex min-w-max snap-x snap-mandatory items-center gap-x-2 sm:min-w-0 sm:flex-wrap sm:snap-none sm:gap-y-3">
                  {solution.workflowStages.map((stage, stepIndex) => (
                    <li key={stage.key} className="flex shrink-0 snap-center items-center gap-2 text-xs font-medium sm:text-sm">
                      <span className="min-h-11 rounded-full border border-border px-3 py-3 sm:min-h-0 sm:py-2">{stage.label}</span>
                      {stepIndex < solution.workflowStages.length - 1 ? <span className="text-muted-foreground" aria-hidden="true">→</span> : null}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
                <Link href={`/solutions/${key}`} className="inline-flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Explore →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
