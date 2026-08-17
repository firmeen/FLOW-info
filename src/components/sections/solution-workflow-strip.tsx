import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { WorkflowExplorer } from "@/components/solutions/workflow-explorer";
import type { SolutionDefinition } from "@/content/solutions";

export function SolutionWorkflowStrip({ solution }: { solution: SolutionDefinition }) {
  return (
    <Section>
      <Container>
        <WorkflowExplorer
          stages={solution.workflowStages}
          solutionName={solution.name}
          audience={solution.audience}
        />
      </Container>
    </Section>
  );
}
