import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  inverse = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-5 text-xs font-semibold uppercase tracking-[0.18em]",
            inverse ? "text-background/45" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
            inverse ? "text-background/60" : "text-muted-foreground",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
