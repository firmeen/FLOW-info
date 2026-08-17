import { SolutionDetailPage } from "@/components/pages/solution-detail-page";
import { createLocalizedSolutionMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedSolutionMetadata("en", "jobflow");

export default function Page() {
  return <SolutionDetailPage locale="en" solutionKey="jobflow" />;
}
