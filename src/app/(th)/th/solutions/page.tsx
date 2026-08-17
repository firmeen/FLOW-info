import { SolutionsPage } from "@/components/pages/solutions-page";
import { createLocalizedPageMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedPageMetadata("th", "solutions", "/solutions");

export default function Page() {
  return <SolutionsPage locale="th" />;
}
