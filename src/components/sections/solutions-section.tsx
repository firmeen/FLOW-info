import { SolutionsExperience } from "@/components/home/solutions-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionsContent } from "@/i18n/schema";

export function SolutionsSection({
  locale,
  solutions,
  copy,
  workflowCopy,
  compact = false,
}: {
  locale: Locale;
  solutions: SolutionsContent;
  copy: SiteCopy["home"]["solutions"];
  workflowCopy: SiteCopy["solutionDetail"]["workflow"];
  compact?: boolean;
}) {
  return (
    <Section tone={compact ? "muted" : "light"}>
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              <EmphasisText tone="product">{copy.titleProduct}</EmphasisText>{copy.titleRest}
            </>
          }
          description={
            <p>
              {copy.descriptionLead}<EmphasisText>{copy.descriptionEmphasis}</EmphasisText>
            </p>
          }
        />
        <SolutionsExperience locale={locale} solutions={solutions} copy={copy} workflowCopy={workflowCopy} />
      </Container>
    </Section>
  );
}
