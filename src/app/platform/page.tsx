import type { Metadata } from "next";

import { PlatformArchitecture } from "@/components/flow/platform-architecture";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { PlatformLayers } from "@/components/sections/platform-layers";
import { QuoteSection } from "@/components/sections/quote-section";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.platform;

export const metadata: Metadata = createPageMetadata({
  title: "Platform",
  description: content.description,
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <PageHero {...content} />
      <PlatformArchitecture />
      <PlatformLayers />
      <QuoteSection lines={["Your business has a workflow.", "Make it visible."]} />
      <CtaSection />
    </>
  );
}
