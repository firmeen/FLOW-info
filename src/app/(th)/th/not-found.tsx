import { NotFoundPage } from "@/components/pages/not-found-page";
import { getSiteCopy } from "@/i18n/copy";

export default function NotFound() {
  return <NotFoundPage locale="th" copy={getSiteCopy("th").notFound} />;
}
