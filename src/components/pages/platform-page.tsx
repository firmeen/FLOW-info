import { PlatformArchitecture } from "@/components/flow/platform-architecture";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { PlatformLayers } from "@/components/sections/platform-layers";
import { QuoteSection } from "@/components/sections/quote-section";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function PlatformPage({ locale }: { locale: Locale }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero {...content.pages.platform} />
      <PlatformArchitecture stages={content.platform.platformArchitectureStages} copy={copy.platform.architecture} />
      <PlatformLayers layers={content.platform.platformLayers} copy={copy.platform.layers} />
      <QuoteSection lines={copy.platform.quote} eyebrow={copy.quoteEyebrow} />
      <CtaSection locale={locale} copy={copy.cta} />
    </>
  );
}
