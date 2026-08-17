import { ProductExperience } from "@/components/home/product-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SiteCopy } from "@/i18n/copy";
import type { ProductSurface } from "@/i18n/schema";

export function ProductSurfacesSection({
  surfaces,
  copy,
}: {
  surfaces: readonly ProductSurface[];
  copy: SiteCopy["home"]["product"];
}) {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              <EmphasisText tone="inverse">{copy.titleProduct}</EmphasisText>{copy.titleRest}
            </>
          }
          description={
            <p>
              {copy.descriptionLead}<EmphasisText tone="inverse">{copy.descriptionEmphasis}</EmphasisText>
            </p>
          }
          inverse
        />
        <ProductExperience surfaces={surfaces} copy={copy} />
      </Container>
    </Section>
  );
}
