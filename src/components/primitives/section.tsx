import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const tones = {
  light: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  dark: "bg-foreground text-background",
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
