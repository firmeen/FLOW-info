import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.about;

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: content.description,
  path: "/about",
});

export default function AboutPage() {
  return <PageHero {...content} />;
}
