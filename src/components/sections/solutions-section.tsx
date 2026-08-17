import { SolutionsExperience } from "@/components/home/solutions-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
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
              <EmphasisText tone="product">One core.</EmphasisText> Different business flows.
            </>
          }
          description={
            <p>
              FoodFlow, JobFlow, and CareFlow adapt the same FLOW core around different ways a business <EmphasisText>receives, performs, completes, and understands work.</EmphasisText>
            </p>
          }
        />
        <SolutionsExperience />
      </Container>
    </Section>
  );
}
