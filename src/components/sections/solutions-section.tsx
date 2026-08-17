import { SolutionsExperience } from "@/components/home/solutions-experience";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function SolutionsSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section tone={compact ? "muted" : "light"}>
      <Container>
        <SectionHeading
          eyebrow="BUSINESS SOLUTIONS"
          title={
            <>
              <EmphasisText>One core.</EmphasisText> Different business flows.
            </>
          }
          description={
            <p>
              FoodFlow, JobFlow, and CareFlow are not disconnected products. Each one expresses the <EmphasisText className="font-semibold">same FLOW foundation</EmphasisText> around a different operational pattern.
            </p>
          }
        />
        <SolutionsExperience />
      </Container>
    </Section>
  );
}
