import { BusinessValueExperience } from "@/components/home/business-value-experience";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SiteCopy } from "@/i18n/copy";
import type { BusinessValueTransformation } from "@/i18n/schema";

export function BusinessValueSection({ values, copy }: { values: readonly BusinessValueTransformation[]; copy: SiteCopy["home"]["businessValue"] }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              {copy.titleLead}<EmphasisText tone="muted">{copy.titleMuted}</EmphasisText>{copy.titleMiddle}<EmphasisText>{copy.titleOutcome}</EmphasisText>
            </>
          }
          description={
            <p>
              {copy.descriptionLead}<EmphasisText className="font-semibold">{copy.descriptionEmphasis}</EmphasisText>
            </p>
          }
        />
        <BusinessValueExperience values={values} copy={copy} />
      </Container>
    </Section>
  );
}
