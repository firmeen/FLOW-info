import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { solutions } from "@/content/solutions";

export function SolutionComparisonSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="COMPARE THE WORKFLOW"
          title="Choose by operational pattern, not by a long feature checklist."
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
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 lg:col-span-6">
                {solution.workflow.map((step, stepIndex) => (
                  <li key={step} className="flex items-center gap-2 text-xs font-medium sm:text-sm">
                    <span className="rounded-full border border-border px-3 py-2">{step}</span>
                    {stepIndex < solution.workflow.length - 1 ? (
                      <span className="text-muted-foreground" aria-hidden="true">→</span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
                <Link href={`/solutions/${key}`} className="text-sm font-medium underline-offset-4 hover:underline">
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
