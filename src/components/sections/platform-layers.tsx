import { PlatformLayersExperience } from "@/components/platform/platform-layers-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function PlatformLayers() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PLATFORM LAYERS"
          title={
            <>
              Separate the responsibilities. <EmphasisText tone="outcome">Keep the context moving.</EmphasisText>
            </>
          }
          description="FLOW gives every layer a clear job without breaking the operational context between customer action, staff execution, completion, and business visibility."
        />
        <PlatformLayersExperience />
      </Container>
    </Section>
  );
}
