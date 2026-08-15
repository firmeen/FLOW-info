import { brand } from "@/content/brand";

export const contactContent = {
  intro: {
    eyebrow: "START WITH THE WORKFLOW",
    title: "The most useful first conversation is about how the work currently moves.",
    description:
      "A useful discussion does not need a polished specification. Start with the business type, the customer action that begins the work, the people involved, and the point where the current process becomes unclear or unnecessarily difficult.",
  },
  prompts: [
    "What kind of business or service is involved?",
    "What customer action starts the workflow?",
    "Where does the current operation lose time, context, or visibility?",
  ],
  channels: [
    {
      label: "GitHub",
      value: "firmeen/FLOW-info",
      href: brand.repositoryUrl,
      description: "Verified public project channel for the FLOW representation website and its development history.",
    },
  ],
  note:
    "Additional official email and social channels are intentionally not published here until their exact addresses are confirmed.",
} as const;
