import type { Metadata } from "next";

import { SolutionPage } from "@/components/solutions/solution-page";
import { solutions } from "@/content/solutions";
import { createPageMetadata } from "@/lib/metadata";

const solution = solutions.foodflow;

export const metadata: Metadata = createPageMetadata({
  title: solution.name,
  description: solution.description,
  path: "/solutions/foodflow",
});

export default function FoodFlowPage() {
  return <SolutionPage solution={solution} />;
}
