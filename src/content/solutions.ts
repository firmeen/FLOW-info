export type SolutionKey = "foodflow" | "jobflow" | "careflow";

export type SolutionExperience = {
  label: string;
  title: string;
  description: string;
  points: readonly string[];
};

export type SolutionCapability = {
  name: string;
  description: string;
};

export type SolutionDefinition = {
  name: string;
  eyebrow: string;
  audience: string;
  title: string;
  description: string;
  workflow: readonly string[];
  quote: string;
  businessTypes: readonly string[];
  problem: {
    title: string;
    description: string;
  };
  experiences: readonly SolutionExperience[];
  capabilities: readonly SolutionCapability[];
  sharedCore: readonly string[];
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
    quote: "From order to kitchen to payment — keep the restaurant in flow.",
    businessTypes: ["Restaurant", "Cafe", "Food & beverage operation"],
    problem: {
      title: "Keep ordering and execution in the same operational context.",
      description:
        "A customer order creates work for the kitchen or service team, affects payment, and becomes part of the owner’s operating picture. FoodFlow is designed so those steps do not have to become separate systems.",
    },
    experiences: [
      {
        label: "CUSTOMER",
        title: "A clearer path from entry to payment.",
        description:
          "Customer-facing actions stay focused on the service journey without exposing internal operational tools.",
        points: [
          "Enter from a QR or direct customer link",
          "Browse the menu and place an order",
          "Continue through service and payment without an admin workflow",
        ],
      },
      {
        label: "STAFF",
        title: "Turn customer intent into coordinated work.",
        description:
          "Operational views are designed around receiving, preparing, serving, and completing the order clearly.",
        points: [
          "Receive orders in a shared operational flow",
          "Route preparation to the right kitchen or staff view",
          "Update status through service and completion",
        ],
      },
      {
        label: "OWNER",
        title: "See restaurant activity as connected business information.",
        description:
          "Order, payment, customer, and operational records can remain connected instead of becoming isolated reports.",
        points: [
          "Review order and payment records",
          "Understand activity across the service flow",
          "Use connected records as the basis for reporting and decisions",
        ],
      },
    ],
    capabilities: [
      {
        name: "Customer Entry",
        description: "Support direct customer entry patterns such as QR and web links without exposing internal routes.",
      },
      {
        name: "Menu & Ordering",
        description: "Represent the customer menu and turn selections into structured order work.",
      },
      {
        name: "Kitchen & Staff Operation",
        description: "Route orders into the operational views responsible for preparation and service.",
      },
      {
        name: "Order Status",
        description: "Keep progress visible as the order moves through preparation, service, and completion.",
      },
      {
        name: "Payment Record",
        description: "Keep payment state attached to the operational record rather than treating it as a disconnected event.",
      },
      {
        name: "Customer & Dashboard",
        description: "Connect customer context and operating records to later reporting and owner visibility.",
      },
    ],
    sharedCore: ["Order", "Queue", "Staff", "Payment", "Customer", "Notification", "Dashboard"],
  },
  jobflow: {
    name: "JobFlow",
    eyebrow: "SOLUTION / JOBFLOW",
    audience: "Repair · Car Care · Service Operations",
    title: "Keep every job visible from request to completion.",
    description:
      "JobFlow applies the FLOW platform to job-based services where work must be created, assigned, updated, completed, paid, and recorded clearly.",
    workflow: ["Request", "Create Job", "Assign", "Work", "Status", "Complete", "Payment", "Business Record"],
    quote: "Every job has a journey. Keep it visible.",
    businessTypes: ["Repair service", "Car care", "Maintenance & job-based service"],
    problem: {
      title: "Keep responsibility, status, and customer context attached to the job.",
      description:
        "Job-based service work can pass through intake, assignment, execution, updates, completion, and payment. JobFlow is designed to keep that journey visible as responsibility changes.",
    },
    experiences: [
      {
        label: "CUSTOMER",
        title: "Know what happens after the request.",
        description:
          "The customer journey is centered on the request, progress, completion, and the information that matters to the service relationship.",
        points: [
          "Start from a service request",
          "Receive meaningful status context",
          "Reach completion and payment with the job history intact",
        ],
      },
      {
        label: "STAFF",
        title: "Keep ownership and work status clear.",
        description:
          "Staff-facing workflows focus on who owns the job, what state it is in, and what needs to happen next.",
        points: [
          "Create and structure the job record",
          "Assign work to the responsible staff member",
          "Update progress through completion",
        ],
      },
      {
        label: "OWNER",
        title: "See jobs as operating history, not isolated tickets.",
        description:
          "Connected job, customer, payment, and status records create a clearer operational view of service work.",
        points: [
          "Review active and completed work",
          "Keep payment and customer context attached",
          "Use job history as a basis for operational reporting",
        ],
      },
    ],
    capabilities: [
      {
        name: "Job Intake",
        description: "Turn a customer request into a structured operational job record.",
      },
      {
        name: "Job / Ticket Tracking",
        description: "Keep the service journey visible from creation through completion.",
      },
      {
        name: "Staff Assignment",
        description: "Connect responsibility for the work to the job instead of tracking it separately.",
      },
      {
        name: "Status Tracking",
        description: "Represent meaningful operational states so staff and customers can understand progress.",
      },
      {
        name: "Payment Record",
        description: "Keep payment context connected to the completed job and customer record.",
      },
      {
        name: "Customer & Dashboard",
        description: "Carry service history into customer context, reporting, and owner visibility.",
      },
    ],
    sharedCore: ["Job / Ticket", "Queue", "Staff", "Customer", "Payment", "Notification", "Dashboard"],
  },
  careflow: {
    name: "CareFlow",
    eyebrow: "SOLUTION / CAREFLOW",
    audience: "Salon · Barber · Spa · Appointment Services",
    title: "Connect booking, staff, resources, service, and customer history.",
    description:
      "CareFlow applies the FLOW platform to appointment and resource-based businesses that depend on coordinated time, staff, customer, and service workflows.",
    workflow: ["Book", "Appointment", "Queue", "Staff / Resource", "Service", "Payment", "History"],
    quote: "From booking to service — keep every appointment in flow.",
    businessTypes: ["Salon & barber", "Spa & personal service", "Appointment-based service"],
    problem: {
      title: "Coordinate time, people, resources, and customer context as one service flow.",
      description:
        "An appointment is more than a calendar entry. It can depend on staff availability, resources, queue state, service delivery, payment, and customer history. CareFlow is designed around that connected sequence.",
    },
    experiences: [
      {
        label: "CUSTOMER",
        title: "Move from booking to service with clearer context.",
        description:
          "Customer-facing steps focus on selecting the service journey and understanding what comes next.",
        points: [
          "Start with a booking or reservation",
          "Move into the appointment and queue flow",
          "Complete service and payment with history preserved",
        ],
      },
      {
        label: "STAFF",
        title: "Coordinate appointments with the resources that deliver them.",
        description:
          "Operational views connect schedule, staff, resource, queue, and service state rather than treating them as separate lists.",
        points: [
          "See appointment and queue context",
          "Coordinate staff and required resources",
          "Update service progress through completion",
        ],
      },
      {
        label: "OWNER",
        title: "Understand service activity beyond the calendar.",
        description:
          "Connected appointment, customer, payment, and resource records can support a more useful view of the operation.",
        points: [
          "Review appointment and service activity",
          "Keep customer and payment history connected",
          "Use operational records for reporting and planning",
        ],
      },
    ],
    capabilities: [
      {
        name: "Booking & Appointment",
        description: "Represent reservations and appointments as the start of an operational service workflow.",
      },
      {
        name: "Queue",
        description: "Bridge scheduled time and real service progress when customers enter the live operation.",
      },
      {
        name: "Staff Coordination",
        description: "Connect the responsible staff member to the appointment and service context.",
      },
      {
        name: "Resource Booking",
        description: "Coordinate rooms, chairs, equipment, or other required resources where the business model needs them.",
      },
      {
        name: "Payment Record",
        description: "Keep payment state connected to the service and customer history.",
      },
      {
        name: "Customer History & Dashboard",
        description: "Carry completed service records into CRM context, reporting, and owner visibility.",
      },
    ],
    sharedCore: ["Appointment", "Queue", "Resource", "Staff", "Customer", "Payment", "Dashboard"],
  },
};
