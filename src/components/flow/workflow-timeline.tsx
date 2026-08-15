"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

type WorkflowStep = {
  number: string;
  title: string;
  items?: string;
  description: string;
};

export function WorkflowTimeline({
  steps,
  className,
}: {
  steps: readonly WorkflowStep[];
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 75%", "end 70%"],
  });

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div className="absolute bottom-0 left-[1.05rem] top-0 w-px bg-border sm:left-[1.3rem]" aria-hidden="true">
        <motion.div
          className="h-full w-px origin-top bg-foreground"
          style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
        />
      </div>

      <ol className="space-y-10 sm:space-y-14">
        {steps.map((step, index) => (
          <motion.li
            key={step.number}
            initial={reduceMotion ? false : { opacity: 0.32, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.15) }}
            className="relative grid gap-4 pl-14 sm:pl-16 lg:grid-cols-12 lg:gap-8"
          >
            <span className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border border-border bg-background text-[0.65rem] font-semibold tabular-nums sm:size-11">
              {step.number}
            </span>
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{step.title}</h3>
              {step.items ? (
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{step.items}</p>
              ) : null}
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:col-span-7 lg:col-start-6">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
