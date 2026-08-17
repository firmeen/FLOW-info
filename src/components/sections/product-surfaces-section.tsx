import { ProductExperience } from "@/components/home/product-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function ProductSurfacesSection() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow="PRODUCT EXPERIENCE"
          title={
            <>
              <EmphasisText tone="inverse">One operation.</EmphasisText> Three working views.
            </>
          }
          description={
            <p>
              Customers need the next action. Teams need the next responsibility. Owners need the operating picture. <EmphasisText tone="inverse">FLOW keeps each view connected to the same underlying work.</EmphasisText>
            </p>
          }
          inverse
        />
        <ProductExperience />
      </Container>
    </Section>
  );
}
