"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function RevealText({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={reduceMotion ? false : { opacity: 0, y: "105%" }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.hero, delay, ease: flowEase }}
      >
        {children}
      </motion.span>
    </span>
  );
}
