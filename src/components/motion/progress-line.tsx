"use client";

import { motion, useReducedMotion } from "motion/react";

import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProgressLine({
  className,
  vertical = false,
  delay = 0,
}: {
  className?: string;
  vertical?: boolean;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block overflow-hidden bg-border",
        vertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
    >
      <motion.span
        className={cn(
          "absolute bg-flow-aqua",
          vertical ? "inset-x-0 top-0 h-full origin-top" : "inset-y-0 left-0 w-full origin-left",
        )}
        initial={reduceMotion ? false : vertical ? { scaleY: 0 } : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : vertical ? { scaleY: 1 } : { scaleX: 1 }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: motionDuration.story, delay, ease: flowEase }}
      />
    </span>
  );
}
