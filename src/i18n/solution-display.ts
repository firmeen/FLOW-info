import type { Locale } from "@/i18n/config";

const compactTitles = {
  en: {
    FoodFlow: { title: "From order to insight.", highlight: "insight" },
    JobFlow: { title: "From request to completion.", highlight: "completion" },
    CareFlow: { title: "Booking to service, connected.", highlight: "connected" },
  },
  th: {
    FoodFlow: { title: "จากคำสั่งซื้อสู่ภาพรวมร้าน", highlight: "ภาพรวมร้าน" },
    JobFlow: { title: "จากรับคำขอจนจบงาน", highlight: "จบงาน" },
    CareFlow: { title: "เชื่อมการจองสู่การบริการ", highlight: "การบริการ" },
  },
} as const;

export function getSolutionDisplay(locale: Locale, solutionName: string) {
  const titles = compactTitles[locale];
  if (solutionName in titles) {
    return titles[solutionName as keyof typeof titles];
  }

  return { title: solutionName, highlight: solutionName };
}
