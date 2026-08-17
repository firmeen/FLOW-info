import { AboutPage } from "@/components/pages/about-page";
import { createLocalizedPageMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedPageMetadata("en", "about", "/about");

export default function Page() {
  return <AboutPage locale="en" />;
}
