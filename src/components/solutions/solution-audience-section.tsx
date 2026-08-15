import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SolutionDefinition } from "@/content/solutions";

export function SolutionAudienceSection({ solution }: { solution: SolutionDefinition }) {
  return (
    <Section tone="muted">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="WHO IT'S FOR"
            title={solution.problem.title}
            description={solution.problem.description}
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Business patterns
          </p>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {solution.businessTypes.map((businessType) => (
              <li key={businessType} className="py-4 text-base font-medium tracking-[-0.02em]">
                {businessType}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
