export const flowEase = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  fast: 0.18,
  interactive: 0.24,
  normal: 0.32,
  reveal: 0.55,
  hero: 0.8,
  story: 1.05,
} as const;

export const motionDistance = {
  small: 8,
  normal: 16,
  large: 28,
} as const;

export const motionStagger = {
  tight: 0.045,
  normal: 0.08,
  relaxed: 0.12,
} as const;

export const motionViewport = {
  once: true,
  amount: 0.2,
} as const;
