import type { Metadata } from "next";

import { SolutionPage } from "@/components/solutions/solution-page";
import { solutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

const solution = solutions.jobflow;

export const metadata: Metadata = createPageMetadata({
  title: solution.name,
  description: solution.description,
  path: "/solutions/jobflow",
});

export default function JobFlowPage() {
  return <SolutionPage solution={solution} />;
}
