import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionDefinition } from "@/i18n/schema";

export function SolutionAudienceSection({ solution, copy }: { solution: SolutionDefinition; copy: SiteCopy["solutionDetail"]["audience"] }) {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={<>{copy.titleLead}<EmphasisText tone="outcome">{copy.titleOutcome}</EmphasisText>{copy.titleEnd}</>}
              description={solution.problem.description}
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[1.75rem] border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{solution.name} / {copy.businessPatterns}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {solution.businessTypes.map((businessType) => <Badge key={businessType} variant="outline">{businessType}</Badge>)}
              </div>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.primaryProblem}</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">{solution.problem.title}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
