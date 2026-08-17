import { brand } from "@/content/brand";

export type ContactChannel = {
  type: "instagram" | "facebook" | "email" | "line" | "github";
  label: string;
  value: string;
  href: string | null;
  copyValue?: string;
  description: string;
  action: string;
};

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
      type: "instagram",
      label: "Instagram",
      value: "@fim.flow",
      href: "https://www.instagram.com/fim.flow/",
      copyValue: "@fim.flow",
      description: "Follow FLOW product direction, visual identity, and public updates.",
      action: "Open Instagram",
    },
    {
      type: "facebook",
      label: "Facebook",
      value: "FIM FLOW",
      href: null,
      copyValue: "FIM FLOW",
      description: "Official Facebook display name. A page URL is intentionally not guessed.",
      action: "Copy name",
    },
    {
      type: "email",
      label: "Email",
      value: "fimin.flowofficial@gmail.com",
      href: "mailto:fimin.flowofficial@gmail.com",
      copyValue: "fimin.flowofficial@gmail.com",
      description: "Direct email for FLOW business, product, partnership, and collaboration conversations.",
      action: "Send email",
    },
    {
      type: "line",
      label: "LINE",
      value: "@614henux",
      href: null,
      copyValue: "@614henux",
      description: "Official LINE ID. Copy the ID and add it directly in LINE.",
      action: "Copy LINE ID",
    },
    {
      type: "github",
      label: "GitHub",
      value: "firmeen/FLOW-info",
      href: brand.repositoryUrl,
      description: "Public source and development history for the FLOW representation website.",
      action: "Open GitHub",
    },
  ] satisfies readonly ContactChannel[],
  note:
    "Instagram and email use direct verified addresses from the supplied contact details. Facebook and LINE are presented by their exact public identifiers without inventing canonical URLs.",
} as const;
