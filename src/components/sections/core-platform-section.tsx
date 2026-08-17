import Link from "next/link";

import { CorePlatformExperience } from "@/components/home/core-platform-experience";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
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
                One <EmphasisText>shared operational core</EmphasisText>, built to support different business flows.
              </>
            }
            description={
              <p>
                FLOW is not a pile of isolated features. It connects the capabilities that <EmphasisText className="font-semibold">capture, coordinate, complete, and explain the work.</EmphasisText>
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
