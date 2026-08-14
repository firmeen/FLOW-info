import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SolutionWorkflowStrip } from "@/components/sections/solution-workflow-strip";
import { solutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

const solution = solutions.careflow;

export const metadata: Metadata = createPageMetadata({
  title: solution.name,
  description: solution.description,
  path: "/solutions/careflow",
});

export default function CareFlowPage() {
  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        description={solution.description}
        quote={solution.quote}
      />
      <SolutionWorkflowStrip audience={solution.audience} workflow={solution.workflow} />
    </>
  );
}
