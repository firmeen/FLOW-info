import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SiteCopy } from "@/i18n/copy";

export function SolutionsCoreSection({ platformCore, copy }: { platformCore: readonly string[]; copy: SiteCopy["solutionsPage"] }) {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow={copy.coreEyebrow}
          title={copy.coreTitle}
          description={copy.coreDescription}
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
