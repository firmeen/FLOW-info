import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { platformCore } from "@/content/platform";

export function SolutionsCoreSection() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow="SHARED FLOW CORE"
          title="Different operations do not need disconnected foundations."
          description="The solution layer changes the workflow emphasis and business experience. Shared capabilities remain part of the FLOW platform underneath."
          inverse
        />
        <div className="mt-14 grid gap-px border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-5">
          {platformCore.map((capability, index) => (
            <div key={capability} className="bg-foreground p-5 sm:p-6">
              <p className="text-[0.65rem] tabular-nums text-background/35">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-sm font-medium leading-6">{capability}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
