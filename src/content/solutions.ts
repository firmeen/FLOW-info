export type SolutionKey = "foodflow" | "jobflow" | "careflow";

export type SolutionExperience = {
  label: string;
  title: string;
  description: string;
  points: readonly string[];
};

export type SolutionWorkflowStage = {
  key: string;
  label: string;
  actor: string;
  purpose: string;
  operation: string;
  sharedCore: readonly string[];
};

export type SolutionCapability = {
  name: string;
  description: string;
  stageKeys: readonly string[];
};

export type SolutionDefinition = {
  name: string;
  eyebrow: string;
  audience: string;
  title: string;
  description: string;
  workflowStages: readonly SolutionWorkflowStage[];
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
    workflowStages: [
      { key: "entry", label: "Entry", actor: "Customer", purpose: "Enter the service without internal operational friction.", operation: "A QR or direct customer link opens the customer-facing flow.", sharedCore: ["Customer", "Notification"] },
      { key: "menu", label: "Menu", actor: "Customer", purpose: "Make the next selection clear.", operation: "Menu choices stay customer-facing while preparing structured order context.", sharedCore: ["Customer"] },
      { key: "order", label: "Order", actor: "Customer → Operation", purpose: "Turn intent into operational work.", operation: "Selections become a structured order record the team can act on.", sharedCore: ["Order", "Customer", "Staff"] },
      { key: "kitchen", label: "Kitchen", actor: "Staff", purpose: "Route work to preparation.", operation: "The order reaches the operational view responsible for preparation and status.", sharedCore: ["Order", "Staff", "Notification"] },
      { key: "serve", label: "Serve", actor: "Staff", purpose: "Move preparation into service completion.", operation: "Status stays connected as the order leaves preparation and reaches the customer.", sharedCore: ["Order", "Staff", "Customer"] },
      { key: "payment", label: "Payment", actor: "Customer / Cashier", purpose: "Complete the financial state without detaching it from the order.", operation: "Payment state remains part of the same operating record.", sharedCore: ["Payment", "Order", "Customer"] },
      { key: "dashboard", label: "Dashboard", actor: "Owner", purpose: "Turn completed activity into business visibility.", operation: "Order, payment, customer, and service context become part of the owner view.", sharedCore: ["Dashboard", "Reports", "Insights"] },
    ],
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
        description: "Customer-facing actions stay focused on the service journey without exposing internal operational tools.",
        points: ["Enter from a QR or direct customer link", "Browse the menu and place an order", "Continue through service and payment without an admin workflow"],
      },
      {
        label: "STAFF",
        title: "Turn customer intent into coordinated work.",
        description: "Operational views are designed around receiving, preparing, serving, and completing the order clearly.",
        points: ["Receive orders in a shared operational flow", "Route preparation to the right kitchen or staff view", "Update status through service and completion"],
      },
      {
        label: "OWNER",
        title: "See restaurant activity as connected business information.",
        description: "Order, payment, customer, and operational records can remain connected instead of becoming isolated reports.",
        points: ["Review order and payment records", "Understand activity across the service flow", "Use connected records as the basis for reporting and decisions"],
      },
    ],
    capabilities: [
      { name: "Customer Entry", description: "Support direct customer entry patterns such as QR and web links without exposing internal routes.", stageKeys: ["entry"] },
      { name: "Menu & Ordering", description: "Represent the customer menu and turn selections into structured order work.", stageKeys: ["menu", "order"] },
      { name: "Kitchen & Staff Operation", description: "Route orders into the operational views responsible for preparation and service.", stageKeys: ["kitchen", "serve"] },
      { name: "Order Status", description: "Keep progress visible as the order moves through preparation, service, and completion.", stageKeys: ["order", "kitchen", "serve"] },
      { name: "Payment Record", description: "Keep payment state attached to the operational record rather than treating it as a disconnected event.", stageKeys: ["payment"] },
      { name: "Customer & Dashboard", description: "Connect customer context and operating records to later reporting and owner visibility.", stageKeys: ["entry", "dashboard"] },
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
    workflowStages: [
      { key: "request", label: "Request", actor: "Customer", purpose: "Capture service intent clearly.", operation: "A service request enters the system with the customer context needed to create work.", sharedCore: ["Customer", "Notification"] },
      { key: "create-job", label: "Create Job", actor: "Staff", purpose: "Turn the request into traceable work.", operation: "The request becomes a job or ticket record with a clear operational identity.", sharedCore: ["Job / Ticket", "Customer"] },
      { key: "assign", label: "Assign", actor: "Staff", purpose: "Attach responsibility to the work.", operation: "The job is connected to the staff member or team responsible for the next step.", sharedCore: ["Job / Ticket", "Staff"] },
      { key: "work", label: "Work", actor: "Staff", purpose: "Keep execution attached to the job.", operation: "Operational progress stays on the same record while the service is being performed.", sharedCore: ["Job / Ticket", "Staff", "Resource"] },
      { key: "status", label: "Status", actor: "Staff / Customer", purpose: "Make progress understandable.", operation: "Meaningful state changes can be reflected to staff and customers without a separate tracking channel.", sharedCore: ["Job / Ticket", "Notification", "Customer"] },
      { key: "complete", label: "Complete", actor: "Staff", purpose: "Close the operational loop.", operation: "Completion preserves the work history and prepares the job for payment and record keeping.", sharedCore: ["Job / Ticket", "Staff", "Customer"] },
      { key: "payment", label: "Payment", actor: "Customer / Staff", purpose: "Keep payment attached to the completed job.", operation: "Payment state remains connected to the service record and customer history.", sharedCore: ["Payment", "Customer", "Job / Ticket"] },
      { key: "record", label: "Business Record", actor: "Owner", purpose: "Turn job history into business visibility.", operation: "Completed jobs become part of the operating history used for review, reporting, and planning.", sharedCore: ["Dashboard", "Reports", "Insights"] },
    ],
    quote: "Every job has a journey. Keep it visible.",
    businessTypes: ["Repair service", "Car care", "Maintenance & job-based service"],
    problem: {
      title: "Keep responsibility, status, and customer context attached to the job.",
      description: "Job-based service work can pass through intake, assignment, execution, updates, completion, and payment. JobFlow is designed to keep that journey visible as responsibility changes.",
    },
    experiences: [
      {
        label: "CUSTOMER",
        title: "Know what happens after the request.",
        description: "The customer journey is centered on the request, progress, completion, and the information that matters to the service relationship.",
        points: ["Start from a service request", "Receive meaningful status context", "Reach completion and payment with the job history intact"],
      },
      {
        label: "STAFF",
        title: "Keep ownership and work status clear.",
        description: "Staff-facing workflows focus on who owns the job, what state it is in, and what needs to happen next.",
        points: ["Create and structure the job record", "Assign work to the responsible staff member", "Update progress through completion"],
      },
      {
        label: "OWNER",
        title: "See jobs as operating history, not isolated tickets.",
        description: "Connected job, customer, payment, and status records create a clearer operational view of service work.",
        points: ["Review active and completed work", "Keep payment and customer context attached", "Use job history as a basis for operational reporting"],
      },
    ],
    capabilities: [
      { name: "Job Intake", description: "Turn a customer request into a structured operational job record.", stageKeys: ["request", "create-job"] },
      { name: "Job / Ticket Tracking", description: "Keep the service journey visible from creation through completion.", stageKeys: ["create-job", "work", "status", "complete"] },
      { name: "Staff Assignment", description: "Connect responsibility for the work to the job instead of tracking it separately.", stageKeys: ["assign", "work"] },
      { name: "Status Tracking", description: "Represent meaningful operational states so staff and customers can understand progress.", stageKeys: ["status"] },
      { name: "Payment Record", description: "Keep payment context connected to the completed job and customer record.", stageKeys: ["payment"] },
      { name: "Customer & Dashboard", description: "Carry service history into customer context, reporting, and owner visibility.", stageKeys: ["request", "record"] },
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
    workflowStages: [
      { key: "book", label: "Book", actor: "Customer", purpose: "Capture service intent around time.", operation: "The customer chooses the service path and starts a structured booking record.", sharedCore: ["Appointment", "Customer"] },
      { key: "appointment", label: "Appointment", actor: "Customer / Staff", purpose: "Anchor the service around a scheduled context.", operation: "Time, customer, service, and staff requirements stay attached to the appointment.", sharedCore: ["Appointment", "Staff", "Customer"] },
      { key: "queue", label: "Queue", actor: "Staff / Customer", purpose: "Bridge scheduled time and live service progress.", operation: "The appointment can enter a live operational queue without losing its original context.", sharedCore: ["Queue", "Appointment", "Customer"] },
      { key: "resource", label: "Staff / Resource", actor: "Staff", purpose: "Coordinate who and what delivers the service.", operation: "Staff and required resources remain connected to the appointment and queue state.", sharedCore: ["Staff", "Resource", "Appointment"] },
      { key: "service", label: "Service", actor: "Staff", purpose: "Keep delivery attached to the customer journey.", operation: "Service progress stays part of the same record through completion.", sharedCore: ["Staff", "Customer", "Notification"] },
      { key: "payment", label: "Payment", actor: "Customer / Staff", purpose: "Complete the financial state without breaking service context.", operation: "Payment remains connected to the completed service and customer history.", sharedCore: ["Payment", "Customer", "Appointment"] },
      { key: "history", label: "History", actor: "Owner", purpose: "Carry completed service into customer and business context.", operation: "Appointment, service, payment, and customer records become useful history for visibility and planning.", sharedCore: ["Customer", "Dashboard", "Reports"] },
    ],
    quote: "From booking to service — keep every appointment in flow.",
    businessTypes: ["Salon & barber", "Spa & personal service", "Appointment-based service"],
    problem: {
      title: "Coordinate time, people, resources, and customer context as one service flow.",
      description: "An appointment is more than a calendar entry. It can depend on staff availability, resources, queue state, service delivery, payment, and customer history. CareFlow is designed around that connected sequence.",
    },
    experiences: [
      {
        label: "CUSTOMER",
        title: "Move from booking to service with clearer context.",
        description: "Customer-facing steps focus on selecting the service journey and understanding what comes next.",
        points: ["Start with a booking or reservation", "Move into the appointment and queue flow", "Complete service and payment with history preserved"],
      },
      {
        label: "STAFF",
        title: "Coordinate appointments with the resources that deliver them.",
        description: "Operational views connect schedule, staff, resource, queue, and service state rather than treating them as separate lists.",
        points: ["See appointment and queue context", "Coordinate staff and required resources", "Update service progress through completion"],
      },
      {
        label: "OWNER",
        title: "Understand service activity beyond the calendar.",
        description: "Connected appointment, customer, payment, and resource records can support a more useful view of the operation.",
        points: ["Review appointment and service activity", "Keep customer and payment history connected", "Use operational records for reporting and planning"],
      },
    ],
    capabilities: [
      { name: "Booking & Appointment", description: "Represent reservations and appointments as the start of an operational service workflow.", stageKeys: ["book", "appointment"] },
      { name: "Queue", description: "Bridge scheduled time and real service progress when customers enter the live operation.", stageKeys: ["queue"] },
      { name: "Staff Coordination", description: "Connect the responsible staff member to the appointment and service context.", stageKeys: ["appointment", "resource", "service"] },
      { name: "Resource Booking", description: "Coordinate rooms, chairs, equipment, or other required resources where the business model needs them.", stageKeys: ["resource"] },
      { name: "Payment Record", description: "Keep payment state connected to the service and customer history.", stageKeys: ["payment"] },
      { name: "Customer History & Dashboard", description: "Carry completed service records into CRM context, reporting, and owner visibility.", stageKeys: ["history"] },
    ],
    sharedCore: ["Appointment", "Queue", "Resource", "Staff", "Customer", "Payment", "Dashboard"],
  },
};
