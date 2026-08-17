import Link from "next/link";

import { CorePlatformExperience } from "@/components/home/core-platform-experience";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function CorePlatformSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="FLOW CORE PLATFORM"
            title={
              <>
                <EmphasisText tone="product">One operational core.</EmphasisText> Every workflow stays <EmphasisText tone="outcome">connected.</EmphasisText>
              </>
            }
            description={
              <p>
                Capture intent. Coordinate work. Complete the operation. Turn activity into visibility. The value of FLOW is not feature volume — it is the way <EmphasisText>capabilities work together around the same context.</EmphasisText>
              </p>
            }
          />
          <Link href="/platform" className="text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Explore the platform →
          </Link>
        </div>
        <CorePlatformExperience />
      </Container>
    </Section>
  );
}
