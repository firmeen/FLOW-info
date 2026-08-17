"use client";

import { motion, useReducedMotion } from "motion/react";

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { Badge } from "@/components/ui/badge";
import { problemGroups } from "@/content/home";
import { flowEase, motionDuration } from "@/lib/motion";

export function ProblemExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-border bg-background p-5 sm:p-8 lg:p-10">
      <StaggerGroup className="relative z-10 grid gap-5 lg:grid-cols-3" stagger={0.1}>
        {problemGroups.map((group) => (
          <StaggerItem key={group.label}>
            <div className="h-full rounded-2xl border border-border bg-background/95 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">{group.label}</Badge>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Separate view
                </span>
              </div>
              <ul className="mt-8 grid gap-3">
                {group.items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: motionDuration.normal, delay: 0.08 + index * 0.04, ease: flowEase }}
                    className="flex items-center justify-between border-b border-border/70 pb-3 text-lg font-medium tracking-[-0.03em] last:border-0 last:pb-0"
                  >
                    <span>{item}</span>
                    <span className="size-1.5 rounded-full bg-foreground/25" aria-hidden="true" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="relative z-10 mt-8 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]" aria-hidden="true">
        <BrokenSignal delay={0.05} />
        <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:block">context stops</span>
        <BrokenSignal delay={0.18} />
        <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:block">context stops</span>
        <BrokenSignal delay={0.31} />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ duration: motionDuration.reveal, delay: 0.24, ease: flowEase }}
        className="relative z-10 mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">THE GAP</p>
        <p className="max-w-2xl text-balance text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
          The problem is not a lack of software. It is the context lost between the work.
        </p>
      </motion.div>
    </div>
  );
}

function BrokenSignal({ delay }: { delay: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-px overflow-hidden bg-[repeating-linear-gradient(to_right,var(--border)_0,var(--border)_10px,transparent_10px,transparent_18px)]">
      {!reduceMotion ? (
        <motion.span
          className="absolute -top-[2px] size-[5px] rounded-full bg-foreground"
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{ left: "68%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.15, delay, ease: flowEase }}
        />
      ) : null}
    </div>
  );
}
