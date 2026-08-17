import { BusinessValueExperience } from "@/components/home/business-value-experience";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function BusinessValueSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="BUSINESS VALUE"
          title={
            <>
              The point is not <EmphasisText tone="muted">more software.</EmphasisText> It is a <EmphasisText>clearer operation.</EmphasisText>
            </>
          }
          description={
            <p>
              Features matter when they reduce uncertainty, keep work connected, and turn daily activity into <EmphasisText className="font-semibold">useful business context.</EmphasisText>
            </p>
          }
        />
        <BusinessValueExperience />
      </Container>
    </Section>
  );
}
