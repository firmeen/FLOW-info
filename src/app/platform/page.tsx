import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.platform;

export const metadata: Metadata = createPageMetadata({
  title: "Platform",
  description: content.description,
  path: "/platform",
});

export default function PlatformPage() {
  return <PageHero {...content} />;
}
