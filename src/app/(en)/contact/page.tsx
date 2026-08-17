import { ContactPage } from "@/components/pages/contact-page";
import { createLocalizedPageMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedPageMetadata("en", "contact", "/contact");

export default function Page() {
  return <ContactPage locale="en" />;
}
