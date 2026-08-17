"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { flowEase, motionDuration, motionStagger, motionViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = motionStagger.normal,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 16,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: motionDuration.reveal, ease: flowEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
