import { PlatformPage } from "@/components/pages/platform-page";
import { createLocalizedPageMetadata } from "@/i18n/page-metadata";

export const metadata = createLocalizedPageMetadata("en", "platform", "/platform");

export default function Page() {
  return <PlatformPage locale="en" />;
}
