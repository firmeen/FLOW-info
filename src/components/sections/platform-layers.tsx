import { PlatformLayersExperience } from "@/components/platform/platform-layers-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SiteCopy } from "@/i18n/copy";
import type { PlatformLayer } from "@/i18n/schema";

export function PlatformLayers({ layers, copy }: { layers: readonly PlatformLayer[]; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              {copy.titleLead}<EmphasisText tone="outcome">{copy.titleOutcome}</EmphasisText>
            </>
          }
          description={copy.description}
        />
        <PlatformLayersExperience layers={layers} copy={copy} />
      </Container>
    </Section>
  );
}
