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
        <ol className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(8.5rem,1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {workflow.map((step, index) => (
            <li key={step} className="min-h-32 bg-background p-5">
              <span className="text-xs tabular-nums text-muted-foreground">
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
