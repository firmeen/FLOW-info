export const howFlowWorksSteps = [
  {
    number: "01",
    title: "Customer enters",
    label: "ENTRY",
    description:
      "The experience starts from a practical customer entry point instead of requiring the customer to understand the internal system.",
    examples: ["QR", "NFC", "Direct link", "Website"],
    outcome: "A customer reaches the right business surface.",
  },
  {
    number: "02",
    title: "Customer acts",
    label: "ACTION",
    description:
      "The customer places an order, books, joins a queue, submits a service request, or performs another business-specific action.",
    examples: ["Order", "Book", "Queue", "Request"],
    outcome: "Intent becomes structured operational input.",
  },
  {
    number: "03",
    title: "FLOW routes the work",
    label: "ROUTE",
    description:
      "The shared core maps that input into an order, appointment, job, queue, or resource workflow with the context the business needs.",
    examples: ["Order", "Appointment", "Job", "Resource"],
    outcome: "The right workflow receives the right information.",
  },
  {
    number: "04",
    title: "The team operates",
    label: "OPERATE",
    description:
      "Staff receive work, assign responsibility, update status, coordinate resources, and move the operation toward completion.",
    examples: ["Receive", "Assign", "Progress", "Complete"],
    outcome: "Work stays visible while responsibility moves.",
  },
  {
    number: "05",
    title: "The business completes",
    label: "COMPLETE",
    description:
      "Status, payment confirmation, customer records, and notifications close the loop without disconnecting the completion from the work.",
    examples: ["Status", "Payment", "Customer", "Notification"],
    outcome: "Completion becomes part of the business record.",
  },
  {
    number: "06",
    title: "The owner understands",
    label: "UNDERSTAND",
    description:
      "Operational events can then be summarized into sales, workload, customer activity, and business reporting for clearer decisions.",
    examples: ["Dashboard", "Reports", "Operational data", "Insights"],
    outcome: "Activity becomes usable business information.",
  },
] as const;
