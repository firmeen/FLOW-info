export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export const solutionNavigation: NavigationLink[] = [
  {
    label: "FoodFlow",
    href: "/solutions/foodflow",
    description: "Restaurant, cafe, and F&B operations",
  },
  {
    label: "JobFlow",
    href: "/solutions/jobflow",
    description: "Repair, car care, and job-based services",
  },
  {
    label: "CareFlow",
    href: "/solutions/careflow",
    description: "Appointment, staff, and resource-based services",
  },
];

export const primaryNavigation = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions", children: solutionNavigation },
  { label: "How FLOW Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
] as const;

export const footerNavigation = {
  platform: [
    { label: "Platform", href: "/platform" },
    { label: "How FLOW Works", href: "/how-it-works" },
  ],
  solutions: solutionNavigation,
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
