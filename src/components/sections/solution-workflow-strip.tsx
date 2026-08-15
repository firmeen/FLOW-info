import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";

export function SolutionWorkflowStrip({
  audience,
  workflow,
}: {
  audience: string;
  workflow: readonly string[];
}) {
  return (
    <Section>
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {audience}
        </p>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-7">
          {workflow.map((step, index) => (
            <li key={step} className="bg-background p-5">
              <span className="text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-medium tracking-[-0.02em]">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
