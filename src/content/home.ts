export const problemGroups = [
  { label: "CUSTOMER", items: ["Orders", "Bookings", "Requests", "Payments"] },
  { label: "STAFF", items: ["Work", "Queue", "Status", "Assignment"] },
  { label: "OWNER", items: ["Sales", "Operations", "Customers", "Performance"] },
] as const;

export const coreCapabilityFamilies = [
  {
    key: "capture",
    label: "CAPTURE",
    description: "Turn customer intent into structured operational work.",
    items: [
      {
        key: "order",
        label: "Order",
        description: "Convert customer selections into a structured operating record.",
        touches: ["Staff", "Payment", "Customer", "Dashboard"],
        feeds: "Service execution and owner visibility",
        solutions: ["FoodFlow"],
      },
      {
        key: "queue",
        label: "Queue",
        description: "Represent live demand and what should be handled next.",
        touches: ["Staff", "Customer", "Dashboard"],
        feeds: "Operational priority and customer status",
        solutions: ["FoodFlow", "CareFlow", "JobFlow"],
      },
      {
        key: "appointment",
        label: "Appointment",
        description: "Structure scheduled customer intent around time, staff, and resources.",
        touches: ["Staff", "Resource", "Customer", "Dashboard"],
        feeds: "Queue, service delivery, and customer history",
        solutions: ["CareFlow"],
      },
      {
        key: "job",
        label: "Job / Ticket",
        description: "Turn a service request into traceable work with ownership and status.",
        touches: ["Staff", "Notification", "Payment", "Customer", "Reports"],
        feeds: "Execution, completion, and service history",
        solutions: ["JobFlow"],
      },
    ],
  },
  {
    key: "coordinate",
    label: "COORDINATE",
    description: "Keep people, resources, and status connected while work moves.",
    items: [
      {
        key: "resource",
        label: "Resource",
        description: "Attach rooms, tables, bays, equipment, or capacity to the work that needs them.",
        touches: ["Appointment", "Staff", "Dashboard"],
        feeds: "Capacity-aware execution",
        solutions: ["CareFlow", "FoodFlow", "JobFlow"],
      },
      {
        key: "staff",
        label: "Staff",
        description: "Keep responsibility attached to the operating record as work changes hands.",
        touches: ["Order", "Appointment", "Job / Ticket", "Notification", "Dashboard"],
        feeds: "Assignment, progress, and completion",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
      {
        key: "notification",
        label: "Notification",
        description: "Move meaningful status back to the people who need it without separating it from the workflow.",
        touches: ["Staff", "Customer", "Job / Ticket"],
        feeds: "Customer and team awareness",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
    ],
  },
  {
    key: "complete",
    label: "COMPLETE",
    description: "Close the loop without separating payment and customer context.",
    items: [
      {
        key: "payment",
        label: "Payment",
        description: "Keep payment state attached to the work that produced it.",
        touches: ["Order", "Job / Ticket", "Customer", "Dashboard"],
        feeds: "Completion and business records",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
      {
        key: "customer",
        label: "Customer",
        description: "Preserve customer context across action, status, completion, and history.",
        touches: ["Order", "Appointment", "Job / Ticket", "Payment", "Dashboard"],
        feeds: "CRM context and repeat service history",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
    ],
  },
  {
    key: "understand",
    label: "UNDERSTAND",
    description: "Turn operational activity into useful business visibility.",
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        description: "Bring the operating picture together without disconnecting it from the underlying records.",
        touches: ["Order", "Queue", "Appointment", "Job / Ticket", "Staff", "Payment", "Customer"],
        feeds: "Owner visibility and operational attention",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
      {
        key: "reports",
        label: "Reports",
        description: "Organize completed operational history into reviewable business information.",
        touches: ["Dashboard", "Payment", "Customer"],
        feeds: "Review and planning",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
      {
        key: "insights",
        label: "Insights",
        description: "Use connected operational context as the basis for better business questions and decisions.",
        touches: ["Dashboard", "Reports"],
        feeds: "Business decisions",
        solutions: ["FoodFlow", "JobFlow", "CareFlow"],
      },
    ],
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
  {
    key: "customer",
    label: "CUSTOMER EXPERIENCE",
    question: "What do I do next?",
    statement: "Make the next action obvious.",
    description: "The customer lens removes internal complexity and keeps attention on the next useful action.",
    stages: ["Entry", "Action", "Confirmation", "Status"],
    priorities: ["Clear choice", "Fast feedback", "Visible progress"],
  },
  {
    key: "staff",
    label: "STAFF OPERATION",
    question: "What needs attention next?",
    statement: "Keep responsibility visible while work moves.",
    description: "The staff lens keeps incoming work, ownership, status, and the next responsibility in one operational context.",
    stages: ["Receive", "Assign", "Progress", "Complete"],
    priorities: ["Priority", "Ownership", "Next step"],
  },
  {
    key: "owner",
    label: "OWNER VISIBILITY",
    question: "What is happening across the operation?",
    statement: "Turn activity into an operating picture.",
    description: "The owner lens organizes activity, workload, customer context, and completion into information that supports better decisions.",
    stages: ["Activity", "Context", "Pattern", "Decision"],
    priorities: ["Visibility", "Connection", "Useful context"],
  },
] as const;

export const businessValueTransformations = [
  { number: "01", from: "Scattered operational status", to: "CLEARER OPERATIONS", description: "Know what is happening, what is waiting, and what needs attention." },
  { number: "02", from: "Disconnected customer steps", to: "BETTER CUSTOMER EXPERIENCE", description: "Keep the customer journey connected from entry through completion." },
  { number: "03", from: "Isolated operational records", to: "CONNECTED DATA", description: "Keep customer and operational information tied to the work that created it." },
  { number: "04", from: "Activity without enough context", to: "BETTER DECISIONS", description: "Use real operational activity as the basis for clearer business decisions." },
] as const;
