import Link from "next/link";

import { FlowBrand } from "@/components/brand/flow-brand";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { BrandContent } from "@/i18n/schema";

export function HomeHero({
  locale,
  brand,
  copy,
}: {
  locale: Locale;
  brand: BrandContent;
  copy: SiteCopy["home"]["hero"];
}) {
  return (
    <section className="min-h-[calc(100svh-72px)] bg-[#050507] text-background">
      <Container className="flex min-h-[calc(100svh-72px)] flex-col justify-between py-10 sm:py-16 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-5">
          <FadeIn>
            <FlowBrand
              variant="reverse"
              className="w-[8.25rem] sm:w-[9.75rem]"
              alt="FLOW"
              loading="eager"
              fetchPriority="high"
            />
          </FadeIn>
          <p className="max-w-[14rem] text-right text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.16em] text-background/45 sm:max-w-none sm:text-xs sm:tracking-[0.18em]">
            {brand.company} / {copy.platformLabel}
          </p>
        </div>

        <div className="max-w-6xl py-14 sm:py-20">
          <h1 className="text-balance text-[clamp(3rem,14vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] sm:text-[clamp(4rem,9.5vw,8.6rem)] sm:leading-[0.88] sm:tracking-[-0.075em]">
            <RevealText>{copy.line1}</RevealText>
            <RevealText delay={0.08}>{copy.line2}</RevealText>
          </h1>
          <FadeIn delay={0.18} className="mt-8 max-w-2xl sm:mt-10">
            <p className="text-base leading-7 text-background/65 sm:text-xl sm:leading-8">
              {brand.description}
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href={localizedPath(locale, "/platform")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:min-h-11 sm:w-auto"
              >
                {copy.explorePlatform}
              </Link>
              <Link
                href={localizedPath(locale, "/solutions")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-background/25 px-5 text-sm font-medium text-background transition-colors hover:border-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:min-h-11 sm:w-auto"
              >
                {copy.viewSolutions}
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.14em] text-background/40 sm:text-xs sm:tracking-[0.16em]">
          <span className="h-px w-8 bg-background/30" aria-hidden="true" />
          {copy.scroll}
        </div>
      </Container>
    </section>
  );
}
