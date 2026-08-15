import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionComparisonSection } from "@/components/sections/solution-comparison-section";
import { SolutionsCoreSection } from "@/components/sections/solutions-core-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { pageContent } from "@/content/pages";
import { createPageMetadata } from "@/lib/metadata";

const content = pageContent.solutions;

export const metadata: Metadata = createPageMetadata({
  title: "Solutions",
  description: content.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero {...content} />
      <SolutionsCoreSection />
      <SolutionsSection compact />
      <SolutionComparisonSection />
      <CtaSection />
    </>
  );
}
