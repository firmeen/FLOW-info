import type { Locale } from "@/i18n/config";

const compactTitles = {
  en: {
    FoodFlow: "From order to insight.",
    JobFlow: "From request to completion.",
    CareFlow: "Booking to service, connected.",
  },
  th: {
    FoodFlow: "จากคำสั่งซื้อสู่ภาพรวมร้าน",
    JobFlow: "จากรับคำขอจนจบงาน",
    CareFlow: "เชื่อมการจองสู่การบริการ",
  },
} as const;

export function getSolutionDisplayTitle(locale: Locale, solutionName: string) {
  const titles = compactTitles[locale];
  if (solutionName in titles) {
    return titles[solutionName as keyof typeof titles];
  }

  return solutionName;
}
