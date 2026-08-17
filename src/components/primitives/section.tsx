import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const tones = {
  light: "bg-background text-foreground",
  muted: "bg-flow-ivory text-flow-black",
  dark: "bg-flow-deep text-flow-off-white",
} as const;

export function Section({
  className,
  tone = "light",
  ...props
}: ComponentProps<"section"> & { tone?: keyof typeof tones }) {
  return (
    <section
      className={cn(
        "py-[var(--section-space)] sm:py-[var(--section-space-lg)]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
