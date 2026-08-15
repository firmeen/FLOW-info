import { cn } from "@/lib/utils";

export function FlowWordmark({ className }: { className?: string }) {
  return (
    <span
      aria-label="FLOW"
      className={cn(
        "inline-flex items-center text-[0.95rem] font-semibold tracking-[-0.04em]",
        className,
      )}
    >
      FLOW
    </span>
  );
}
