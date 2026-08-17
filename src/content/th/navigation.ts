import type { NavigationContent } from "@/i18n/schema";

export const solutionNavigationTh = [
  {
    label: "FoodFlow",
    href: "/solutions/foodflow",
    description: "ร้านอาหาร · คาเฟ่ · ธุรกิจ F&B",
  },
  {
    label: "JobFlow",
    href: "/solutions/jobflow",
    description: "งานซ่อม · Car Care · ธุรกิจบริการแบบเป็นงาน",
  },
  {
    label: "CareFlow",
    href: "/solutions/careflow",
    description: "ร้านทำผม · Barber · Spa · ธุรกิจแบบนัดหมาย",
  },
] as const;

export const primaryNavigationTh = [
  { label: "แพลตฟอร์ม", href: "/platform" },
  { label: "โซลูชัน", href: "/solutions", children: solutionNavigationTh },
  { label: "FLOW ทำงานอย่างไร", href: "/how-it-works" },
  { label: "เกี่ยวกับ FLOW", href: "/about" },
] as const;

export const footerNavigationTh = {
  platform: [
    { label: "แพลตฟอร์ม", href: "/platform" },
    { label: "FLOW ทำงานอย่างไร", href: "/how-it-works" },
  ],
  solutions: solutionNavigationTh,
  company: [
    { label: "เกี่ยวกับ FLOW", href: "/about" },
    { label: "ติดต่อ", href: "/contact" },
  ],
} as const;

export const navigationTh: NavigationContent = {
  primaryNavigation: primaryNavigationTh,
  solutionNavigation: solutionNavigationTh,
  footerNavigation: footerNavigationTh,
};
