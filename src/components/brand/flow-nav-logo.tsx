import { flowBrandAssets, publicAssetPath } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

export function FlowNavLogo({ className }: { className?: string }) {
  const compact = flowBrandAssets.compact;
  const logo = flowBrandAssets.logo;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-block w-[7.35rem] shrink-0 overflow-hidden leading-none [aspect-ratio:1354/345] xl:w-[9.5rem] xl:[aspect-ratio:1272/364]",
        className,
      )}
    >
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={publicAssetPath(logo.path)}
        />
        <img
          src={publicAssetPath(compact.path)}
          width={compact.width}
          height={compact.height}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable={false}
          className="pointer-events-none absolute left-[-16.54%] top-[-83.77%] w-[131.02%] max-w-none select-none xl:left-[-10.69%] xl:top-[-89.84%] xl:w-[120.75%]"
        />
      </picture>
    </span>
  );
}
