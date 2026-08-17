import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type EmphasisTone =
  | "strong"
  | "product"
  | "outcome"
  | "contrast"
  | "muted"
  | "inverse";

export function EmphasisText({
  children,
  className,
  tone = "strong",
}: {
  children: ReactNode;
  className?: string;
  tone?: EmphasisTone;
}) {
  return (
    <span
      className={cn(
        "inline",
        tone === "strong" && "font-bold text-foreground",
        tone === "product" && "font-bold tracking-[-0.035em] text-foreground",
        tone === "outcome" && "font-bold tracking-[-0.045em] text-foreground underline decoration-foreground/20 decoration-[0.08em] underline-offset-[0.16em]",
        tone === "contrast" && "font-semibold text-foreground/75",
        tone === "muted" && "font-medium text-muted-foreground",
        tone === "inverse" && "font-bold tracking-[-0.035em] text-background",
        className,
      )}
    >
      {children}
    </span>
  );
}
