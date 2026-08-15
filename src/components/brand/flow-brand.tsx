import type { CSSProperties, ImgHTMLAttributes } from "react";

import {
  flowBrandAssets,
  publicAssetPath,
  type FlowBrandVariant,
} from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

type FlowBrandProps = {
  variant: FlowBrandVariant;
  className?: string;
  decorative?: boolean;
  alt?: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  fetchPriority?: "high" | "low" | "auto";
};

export function FlowBrand({
  variant,
  className,
  decorative = false,
  alt = "FLOW",
  loading = "lazy",
  fetchPriority = "auto",
}: FlowBrandProps) {
  const asset = flowBrandAssets[variant];
  const crop = asset.crop ?? {
    x: 0,
    y: 0,
    width: asset.width,
    height: asset.height,
  };

  const imageStyle: CSSProperties = {
    width: `${(asset.width / crop.width) * 100}%`,
    height: "auto",
    left: `${(-crop.x / crop.width) * 100}%`,
    top: `${(-crop.y / crop.height) * 100}%`,
  };

  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden align-middle leading-none",
        className,
      )}
      style={{ aspectRatio: `${crop.width} / ${crop.height}` }}
      aria-hidden={decorative || undefined}
    >
      <img
        src={publicAssetPath(asset.path)}
        width={asset.width}
        height={asset.height}
        alt={decorative ? "" : alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none"
        style={imageStyle}
      />
    </span>
  );
}
