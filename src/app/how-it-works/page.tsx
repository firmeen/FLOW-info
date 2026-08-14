import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.howItWorks;

export const metadata: Metadata = createPageMetadata({
  title: "How FLOW Works",
  description: content.description,
  path: "/how-it-works",
});

export default function HowFlowWorksPage() {
  return <PageHero {...content} />;
}
