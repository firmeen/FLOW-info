import Link from "next/link";

import { FlowBrand } from "@/components/brand/flow-brand";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";
import { brand } from "@/content/brand";

export function HomeHero() {
  return (
    <section className="min-h-[calc(100svh-72px)] bg-[#050507] text-background">
      <Container className="flex min-h-[calc(100svh-72px)] flex-col justify-between py-12 sm:py-16 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <FadeIn>
            <FlowBrand
              variant="reverse"
              className="w-[8.5rem] sm:w-[9.75rem]"
              alt="FLOW"
              loading="eager"
              fetchPriority="high"
            />
          </FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">
            {brand.company} / SME operations platform
          </p>
        </div>

        <div className="max-w-6xl py-20">
          <h1 className="text-balance text-[clamp(3.5rem,9.5vw,8.6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
            <RevealText>Systems that flow.</RevealText>
            <RevealText delay={0.08}>Businesses that grow.</RevealText>
          </h1>
          <FadeIn delay={0.18} className="mt-10 max-w-2xl">
            <p className="text-base leading-7 text-background/65 sm:text-xl sm:leading-8">
              {brand.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/platform"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                Explore Platform
              </Link>
              <Link
                href="/solutions"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-background/25 px-5 text-sm font-medium text-background transition-colors hover:border-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                View Solutions →
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-background/40">
          <span className="h-px w-8 bg-background/30" aria-hidden="true" />
          Scroll to explore
        </div>
      </Container>
    </section>
  );
}
