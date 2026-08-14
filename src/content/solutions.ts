export type SolutionKey = "foodflow" | "jobflow" | "careflow";

export type SolutionDefinition = {
  name: string;
  eyebrow: string;
  audience: string;
  title: string;
  description: string;
  workflow: readonly string[];
  quote: string;
};

export const solutions: Record<SolutionKey, SolutionDefinition> = {
  foodflow: {
    name: "FoodFlow",
    eyebrow: "SOLUTION / FOODFLOW",
    audience: "Restaurant · Cafe · F&B",
    title: "Keep the restaurant operation moving from order to insight.",
    description:
      "FoodFlow applies the FLOW platform to restaurant and food-service workflows, connecting customer ordering, kitchen execution, payment, and owner visibility.",
    workflow: ["Entry", "Menu", "Order", "Kitchen", "Serve", "Payment", "Dashboard"],
    quote: "Every order, connected.",
  },
  jobflow: {
    name: "JobFlow",
    eyebrow: "SOLUTION / JOBFLOW",
    audience: "Repair · Car Care · Service Operations",
    title: "Keep every job visible from request to completion.",
    description:
      "JobFlow applies the FLOW platform to job-based services where work must be created, assigned, updated, completed, paid, and recorded clearly.",
    workflow: ["Request", "Create Job", "Assign", "Work", "Status", "Complete", "Payment"],
    quote: "Every job has a journey. Keep it visible.",
  },
  careflow: {
    name: "CareFlow",
    eyebrow: "SOLUTION / CAREFLOW",
    audience: "Salon · Barber · Spa · Appointment Services",
    title: "Connect booking, staff, resources, service, and customer history.",
    description:
      "CareFlow applies the FLOW platform to appointment and resource-based businesses that depend on coordinated time, staff, customer, and service workflows.",
    workflow: ["Book", "Appointment", "Queue", "Staff / Resource", "Service", "Payment", "History"],
    quote: "From booking to service, keep every appointment in flow.",
  },
};
