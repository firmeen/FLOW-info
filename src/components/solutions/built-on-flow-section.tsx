import Link from "next/link";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function BuiltOnFlowSection({ sharedCore }: { sharedCore: readonly string[] }) {
  return (
    <Section tone="muted">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="BUILT ON FLOW"
            title="A vertical solution without fragmenting the platform underneath it."
            description="FoodFlow, JobFlow, and CareFlow adapt the operating pattern while continuing to use a shared FLOW foundation for the capabilities that should remain common across the platform."
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="flex flex-wrap gap-2">
            {sharedCore.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium">
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/platform"
            className="mt-7 inline-flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Explore the FLOW platform →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
