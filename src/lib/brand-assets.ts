export type FlowBrandVariant =
  | "logo"
  | "compact"
  | "icon"
  | "reverse"
  | "wordmark"
  | "iconDark";

type BrandCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type BrandAsset = {
  path: string;
  sourcePath: string;
  width: number;
  height: number;
  crop?: BrandCrop;
};

const asset = (
  fileName: string,
  sourceFileName: string,
  width: number,
  height: number,
  crop?: BrandCrop,
): BrandAsset => ({
  path: `/assets/web/${fileName}`,
  sourcePath: `/assets/${sourceFileName}`,
  width,
  height,
  crop,
});

/**
 * The source uploads are preserved under public/assets/.
 *
 * The current source files are JPEG-encoded images with .png filenames. The
 * /assets/web aliases point at those exact Git blobs with .jpg extensions so
 * production servers can deliver the correct MIME type without changing any
 * artwork. Crop values only remove audited outer canvas whitespace at render
 * time; logo geometry and typography are never modified.
 */
export const flowBrandAssets = {
  logo: asset("flow-logo.jpg", "flow-logo.png", 1536, 1024, {
    x: 136,
    y: 327,
    width: 1272,
    height: 364,
  }),
  compact: asset("flow-compact.jpg", "flow-compact.png", 1774, 887, {
    x: 224,
    y: 289,
    width: 1354,
    height: 345,
  }),
  icon: asset("flow-icon.jpg", "flow-icon.png", 1254, 1254),
  reverse: asset("flow-dark.jpg", "flow-dark.png", 1672, 941, {
    x: 198,
    y: 275,
    width: 1316,
    height: 375,
  }),
  wordmark: asset("flow-wordmark.jpg", "flow-wordmark.png", 1774, 887, {
    x: 316,
    y: 330,
    width: 1171,
    height: 245,
  }),
  iconDark: asset("flow-icon-dark.jpg", "flow-icon-dark.png", 1254, 1254),
  favicon: asset("flow-favicon.jpg", "flow-favicon.png", 1254, 1254),
  og: asset("flow-og.jpg", "flow-og.png", 1536, 1024),
} as const satisfies Record<string, BrandAsset>;

function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") {
    return "";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/$/, "");
}

export const publicBasePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH,
);

export function publicAssetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalizedPath}`;
}
