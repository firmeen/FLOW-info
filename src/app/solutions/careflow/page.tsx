import type { Metadata } from "next";

import { SolutionPage } from "@/components/solutions/solution-page";
import { solutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

const solution = solutions.careflow;

export const metadata: Metadata = createPageMetadata({
  title: solution.name,
  description: solution.description,
  path: "/solutions/careflow",
});

export default function CareFlowPage() {
  return <SolutionPage solution={solution} />;
}
