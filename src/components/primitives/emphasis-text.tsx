import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function EmphasisText({
  children,
  className,
  tone = "strong",
}: {
  children: ReactNode;
  className?: string;
  tone?: "strong" | "muted" | "inverse";
}) {
  return (
    <span
      className={cn(
        "inline",
        tone === "strong" && "font-bold text-foreground",
        tone === "muted" && "font-medium text-muted-foreground",
        tone === "inverse" && "font-bold text-background",
        className,
      )}
    >
      {children}
    </span>
  );
}
