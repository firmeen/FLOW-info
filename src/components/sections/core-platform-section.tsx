import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { coreCapabilities } from "@/content/home";

export function CorePlatformSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="FLOW CORE PLATFORM"
            title="Reusable operational building blocks."
            description="FLOW is designed around shared workflow capabilities that can be combined for different business patterns instead of becoming isolated products with duplicated foundations."
          />
          <Link href="/platform" className="text-sm font-medium underline-offset-4 hover:underline">
            Explore the platform →
          </Link>
        </div>

        <div className="mt-14 grid border-x border-t border-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreCapabilities.map((capability, index) => (
            <FadeIn
              key={capability}
              delay={(index % 4) * 0.04}
              className="group border-b border-r border-border p-6 transition-colors hover:bg-muted sm:p-7"
            >
              <p className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-xl font-medium tracking-[-0.035em]">{capability}</h3>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
