import type { StatementHighlight } from "@/components/primitives/statement-text";

export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationContent = {
  primaryNavigation: readonly (NavigationLink & { children?: readonly NavigationLink[] })[];
  solutionNavigation: readonly NavigationLink[];
  footerNavigation: {
    platform: readonly NavigationLink[];
    solutions: readonly NavigationLink[];
    company: readonly NavigationLink[];
  };
};

export type BrandContent = {
  company: string;
  platform: string;
  tagline: string;
  description: string;
  repositoryUrl: string;
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  titleHighlights?: readonly StatementHighlight[];
  description: string;
  descriptionHighlights?: readonly StatementHighlight[];
  quote?: string;
  quoteHighlights?: readonly StatementHighlight[];
};

export type PageContentMap = {
  platform: PageHeroContent;
  solutions: PageHeroContent;
  howItWorks: PageHeroContent;
  about: PageHeroContent;
  contact: PageHeroContent;
};

export type ProblemGroup = {
  label: string;
  items: readonly string[];
};

export type CoreCapability = {
  key: string;
  label: string;
  description: string;
  touches: readonly string[];
  feeds: string;
  solutions: readonly string[];
};

export type CoreCapabilityFamily = {
  key: "capture" | "coordinate" | "complete" | "understand";
  label: string;
  description: string;
  items: readonly CoreCapability[];
};

export type WorkflowStep = {
  number: string;
  title: string;
  items?: string;
  description: string;
};

export type ProductSurface = {
  key: "customer" | "staff" | "owner";
  label: string;
  question: string;
  statement: string;
  description: string;
  stages: readonly string[];
  priorities: readonly string[];
};

export type BusinessValueTransformation = {
  number: string;
  from: string;
  to: string;
  description: string;
};

export type HomeContent = {
  problemGroups: readonly ProblemGroup[];
  coreCapabilityFamilies: readonly CoreCapabilityFamily[];
  homeWorkflowSteps: readonly WorkflowStep[];
  productSurfaces: readonly ProductSurface[];
  businessValueTransformations: readonly BusinessValueTransformation[];
};

export type PlatformLayer = {
  index: string;
  key: "entry" | "action" | "core" | "operation" | "completion" | "visibility";
  label: string;
  title: string;
  statement: string;
  description: string;
  capabilities: readonly string[];
  motionVerb: string;
};

export type PlatformArchitectureStage = {
  index: string;
  label: string;
  detail: string;
  statement: string;
};

export type PlatformContent = {
  platformLayers: readonly PlatformLayer[];
  platformArchitectureStages: readonly PlatformArchitectureStage[];
  platformCore: readonly string[];
};

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

export type SolutionsContent = Record<SolutionKey, SolutionDefinition>;

export type HowFlowWorksStep = {
  number: string;
  title: string;
  label: string;
  description: string;
  examples: readonly string[];
  outcome: string;
};

export type AboutStory = {
  why: {
    eyebrow: string;
    title: string;
    description: string;
  };
  building: readonly { title: string; description: string }[];
  principles: readonly string[];
  direction: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export type ContactChannel = {
  type: "instagram" | "facebook" | "email" | "line" | "github";
  label: string;
  value: string;
  href: string | null;
  copyValue?: string;
  description: string;
  action: string;
};

export type ContactContent = {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  prompts: readonly string[];
  channels: readonly ContactChannel[];
  note: string;
};
