import { HowFlowWorksPage } from "@/components/pages/how-flow-works-page";
import { createLocalizedPageMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedPageMetadata("en", "howItWorks", "/how-it-works");

export default function Page() {
  return <HowFlowWorksPage locale="en" />;
}
