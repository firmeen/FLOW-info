import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { createLocalizedSolutionMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedSolutionMetadata("th", "jobflow");

export default function Page() {
  return <SolutionDetailPage locale="th" solutionKey="jobflow" />;
}
