"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  flowEase,
  motionDistance,
  motionDuration,
  motionViewport,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
  distance = motionDistance.normal,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{
        duration: motionDuration.reveal,
        delay,
        ease: flowEase,
      }}
    >
      {children}
    </motion.div>
  );
}
