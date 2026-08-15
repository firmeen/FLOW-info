export const platformLayers = [
  {
    index: "01",
    label: "CUSTOMER ENTRY",
    title: "Start where the customer already is.",
    description:
      "FLOW can begin from practical entry points such as QR, NFC, direct links, websites, or storefront surfaces.",
    capabilities: ["QR", "NFC", "Link", "Website", "Storefront"],
  },
  {
    index: "02",
    label: "CUSTOMER ACTION",
    title: "Turn intent into a structured action.",
    description:
      "Ordering, booking, queueing, and service requests enter the system as explicit actions instead of disconnected messages.",
    capabilities: ["Order", "Book", "Queue", "Request", "Track"],
  },
  {
    index: "03",
    label: "CORE WORKFLOW ENGINE",
    title: "Route work through the right operational model.",
    description:
      "The shared FLOW core supports reusable workflow patterns instead of rebuilding the same operational logic for each business type.",
    capabilities: ["Order", "Queue", "Appointment", "Job / Ticket", "Resource"],
  },
  {
    index: "04",
    label: "STAFF OPERATIONS",
    title: "Give the team a clear next step.",
    description:
      "Staff views support receiving, assigning, progressing, updating, and completing work while keeping operational state visible.",
    capabilities: ["Receive", "Assign", "Prepare", "Update", "Complete"],
  },
  {
    index: "05",
    label: "COMPLETION & CUSTOMER RECORD",
    title: "Keep completion connected to the customer.",
    description:
      "Payment confirmation, status, notification, and customer history remain connected to the operational workflow that produced them.",
    capabilities: ["POS", "Payment", "Status", "Customer", "Notification"],
  },
  {
    index: "06",
    label: "BUSINESS VISIBILITY",
    title: "Make operational activity understandable.",
    description:
      "Dashboard, reporting, and business views turn day-to-day activity into a clearer picture of what is happening across the business.",
    capabilities: ["Dashboard", "Sales", "Operations", "Reports", "Insights"],
  },
] as const;

export const platformCore = [
  "Order System",
  "Queue / Appointment",
  "Job / Ticket Tracking",
  "Resource Booking",
  "Staff Operations",
  "POS / Payment Record",
  "Customer / CRM",
  "Notification",
  "Dashboard",
  "Reports / Insights",
] as const;
