import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";

export function CtaSection() {
  return (
    <Section>
      <Container>
        <FadeIn className="grid gap-10 border-t border-border pt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              NEXT STEP
            </p>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Let’s talk about a better business flow.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Have a workflow that could be clearer, more connected, or easier to understand? Start with the operation and the problem it needs to solve.
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
