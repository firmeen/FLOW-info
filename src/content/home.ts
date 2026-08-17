export const problemGroups = [
  { label: "CUSTOMER", items: ["Orders", "Bookings", "Requests", "Payments"] },
  { label: "STAFF", items: ["Work", "Queue", "Status", "Assignment"] },
  { label: "OWNER", items: ["Sales", "Operations", "Customers", "Performance"] },
] as const;

export const coreCapabilities = [
  "Order",
  "Queue",
  "Appointment",
  "Job / Ticket",
  "Resource",
  "Staff",
  "Payment",
  "Customer",
  "Notification",
  "Dashboard",
  "Reports",
  "Insights",
] as const;

export const coreCapabilityFamilies = [
  {
    key: "capture",
    label: "CAPTURE",
    description: "Turn customer intent into structured operational work.",
    items: ["Order", "Queue", "Appointment", "Job / Ticket"],
  },
  {
    key: "coordinate",
    label: "COORDINATE",
    description: "Keep people, resources, and status connected while work moves.",
    items: ["Resource", "Staff", "Notification"],
  },
  {
    key: "complete",
    label: "COMPLETE",
    description: "Close the loop without separating payment and customer context.",
    items: ["Payment", "Customer"],
  },
  {
    key: "understand",
    label: "UNDERSTAND",
    description: "Turn operational activity into useful business visibility.",
    items: ["Dashboard", "Reports", "Insights"],
  },
] as const;

export const homeWorkflowSteps = [
  { number: "01", title: "ENTER", items: "QR · NFC · Link · Website", description: "A customer enters through the channel that fits the business." },
  { number: "02", title: "ACT", items: "Order · Book · Queue · Request", description: "The customer action becomes a clear operational request." },
  { number: "03", title: "ROUTE", items: "FLOW Core", description: "FLOW routes the action into the right workflow and context." },
  { number: "04", title: "OPERATE", items: "Staff · Kitchen · Worker · Resource", description: "The team receives, assigns, progresses, and completes the work." },
  { number: "05", title: "COMPLETE", items: "Status · Payment · Customer Record", description: "Completion stays connected to payment, status, and customer history." },
  { number: "06", title: "UNDERSTAND", items: "Dashboard · Reports · Insights", description: "Operational activity becomes information an owner can actually use." },
] as const;

export const productSurfaces = [
  { label: "CUSTOMER EXPERIENCE", title: "Make the next action obvious.", description: "Customer-facing surfaces are designed around the action the customer needs to take — order, book, queue, request, pay, or follow status." },
  { label: "STAFF OPERATION", title: "Keep work visible while it moves.", description: "Operational views focus on receiving work, assigning responsibility, updating status, and keeping the next step clear for the team." },
  { label: "OWNER VISIBILITY", title: "Turn activity into useful context.", description: "Owner-facing views connect sales, workload, customer activity, and operational status without pretending every metric is equally important." },
] as const;

export const businessValues = [
  { title: "CLEARER OPERATIONS", description: "Know what is happening, what is waiting, and what needs attention." },
  { title: "BETTER CUSTOMER EXPERIENCE", description: "Keep the customer journey connected from entry through completion." },
  { title: "CONNECTED DATA", description: "Keep operational and customer information tied to the work that created it." },
  { title: "BETTER DECISIONS", description: "Use real operational activity as the basis for clearer business decisions." },
] as const;

export const businessValueTransformations = [
  { number: "01", from: "Scattered operational status", to: "CLEARER OPERATIONS", description: "Know what is happening, what is waiting, and what needs attention." },
  { number: "02", from: "Disconnected customer steps", to: "BETTER CUSTOMER EXPERIENCE", description: "Keep the customer journey connected from entry through completion." },
  { number: "03", from: "Isolated operational records", to: "CONNECTED DATA", description: "Keep customer and operational information tied to the work that created it." },
  { number: "04", from: "Activity without enough context", to: "BETTER DECISIONS", description: "Use real operational activity as the basis for clearer business decisions." },
] as const;
