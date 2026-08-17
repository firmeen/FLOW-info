import { ProblemExperience } from "@/components/home/problem-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SiteCopy } from "@/i18n/copy";
import type { ProblemGroup } from "@/i18n/schema";

export function ProblemSection({
  groups,
  copy,
}: {
  groups: readonly ProblemGroup[];
  copy: SiteCopy["home"]["problem"];
}) {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              {copy.titleLead}<EmphasisText>{copy.titleEmphasis}</EmphasisText>
            </>
          }
          description={
            <p>
              {copy.descriptionLead}<EmphasisText className="font-semibold">{copy.descriptionEmphasis}</EmphasisText>
            </p>
          }
        />
        <ProblemExperience groups={groups} copy={copy} />
      </Container>
    </Section>
  );
}
