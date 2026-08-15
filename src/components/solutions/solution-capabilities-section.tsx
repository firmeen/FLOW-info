import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SolutionCapability } from "@/content/solutions";

export function SolutionCapabilitiesSection({ capabilities }: { capabilities: readonly SolutionCapability[] }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="CORE CAPABILITIES"
          title="Capabilities organized around the workflow, not around disconnected tools."
          description="Each capability has a specific place in the operating journey. The goal is to keep context attached as the work moves forward."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article key={capability.name} className="min-h-56 bg-background p-7 sm:p-8">
              <p className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em]">
                {capability.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
