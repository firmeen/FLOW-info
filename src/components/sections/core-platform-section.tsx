import Link from "next/link";

import { CorePlatformExperience } from "@/components/home/core-platform-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { CoreCapabilityFamily } from "@/i18n/schema";

export function CorePlatformSection({
  locale,
  families,
  copy,
}: {
  locale: Locale;
  families: readonly CoreCapabilityFamily[];
  copy: SiteCopy["home"]["core"];
}) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={
              <>
                <EmphasisText tone="product">{copy.titleProduct}</EmphasisText>{copy.titleRest}<EmphasisText tone="outcome">{copy.titleOutcome}</EmphasisText>
              </>
            }
            description={
              <p>
                {copy.descriptionLead}<EmphasisText>{copy.descriptionEmphasis}</EmphasisText>
              </p>
            }
          />
          <Link href={localizedPath(locale, "/platform")} className="text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {copy.explore}
          </Link>
        </div>
        <CorePlatformExperience families={families} copy={copy} />
      </Container>
    </Section>
  );
}
