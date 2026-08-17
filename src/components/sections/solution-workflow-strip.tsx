import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { WorkflowExplorer } from "@/components/solutions/workflow-explorer";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionDefinition } from "@/i18n/schema";

export function SolutionWorkflowStrip({ solution, copy }: { solution: SolutionDefinition; copy: SiteCopy["solutionDetail"]["workflow"] }) {
  return (
    <Section>
      <Container>
        <WorkflowExplorer
          stages={solution.workflowStages}
          solutionName={solution.name}
          audience={solution.audience}
          copy={copy}
        />
      </Container>
    </Section>
  );
}
