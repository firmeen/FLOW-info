import { FlowBrand } from "@/components/brand/flow-brand";
import { cn } from "@/lib/utils";

export function FlowWordmark({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <FlowBrand
      variant="wordmark"
      decorative={decorative}
      className={cn("w-28", className)}
    />
  );
}
