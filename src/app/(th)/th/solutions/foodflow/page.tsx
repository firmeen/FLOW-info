import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { createLocalizedSolutionMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedSolutionMetadata("th", "foodflow");

export default function Page() {
  return <SolutionDetailPage locale="th" solutionKey="foodflow" />;
}
