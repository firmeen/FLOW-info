"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { WorkflowExplorer } from "@/components/solutions/workflow-explorer";
import { Badge } from "@/components/ui/badge";
import { solutions, type SolutionKey } from "@/content/solutions";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

const solutionEntries = Object.entries(solutions) as [SolutionKey, (typeof solutions)[SolutionKey]][];

export function SolutionsExperience() {
  const [activeKey, setActiveKey] = useState<SolutionKey>("foodflow");
  const reduceMotion = useReducedMotion();
  const active = solutions[activeKey];

  return (
    <div className="mt-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#09090b] p-5 text-background sm:p-8 lg:p-10">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <Badge variant="outline" className="border-background/20 bg-transparent text-background/65">SHARED PLATFORM</Badge>
          <div className="mt-4 rounded-[1.75rem] border border-background/20 bg-background px-8 py-5 text-foreground">
            <p className="text-3xl font-bold tracking-[-0.06em]">FLOW</p>
            <p className="mt-1 text-xs text-foreground/55">One operational core</p>
          </div>
        </div>

        <div className="mx-auto mt-5 flex h-10 w-px items-stretch bg-background/20 lg:hidden" aria-hidden="true">
          <motion.span
            className="w-px origin-top bg-background"
            animate={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
            initial={reduceMotion ? false : { scaleY: 0, opacity: 0.4 }}
            transition={{ duration: motionDuration.reveal, ease: flowEase }}
          />
        </div>

        <div className="mx-auto mt-8 hidden max-w-5xl grid-cols-3 gap-2 lg:grid" aria-hidden="true">
          {solutionEntries.map(([key]) => (
            <div key={key} className="flex flex-col items-center">
              <motion.span
                className="h-10 w-px origin-top bg-background/65"
                animate={reduceMotion ? undefined : { scaleY: activeKey === key ? 1 : 0.4, opacity: activeKey === key ? 1 : 0.24 }}
                transition={{ duration: motionDuration.interactive, ease: flowEase }}
              />
              <motion.span
                className="size-2 rounded-full bg-background"
                animate={reduceMotion ? undefined : { scale: activeKey === key ? 1.45 : 0.75, opacity: activeKey === key ? 1 : 0.3 }}
                transition={{ duration: motionDuration.interactive, ease: flowEase }}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-3 lg:grid-cols-3" role="group" aria-label="FLOW business solutions">
          {solutionEntries.map(([key, solution]) => {
            const selected = key === activeKey;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveKey(key)}
                className={cn(
                  "relative min-h-11 rounded-2xl border p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-background/80",
                  selected ? "border-background/45 bg-background text-foreground" : "border-background/15 bg-background/[0.04] text-background hover:border-background/30",
                )}
              >
                {selected && !reduceMotion ? (
                  <motion.span
                    layoutId="solution-active-outline"
                    className="absolute inset-x-5 bottom-0 h-0.5 bg-foreground"
                    transition={{ duration: motionDuration.interactive, ease: flowEase }}
                  />
                ) : null}
                <p className={cn("text-xs font-semibold uppercase tracking-[0.15em]", selected ? "text-foreground/50" : "text-background/45")}>{solution.audience}</p>
                <p className="mt-3 text-2xl font-bold tracking-[-0.045em] lg:mt-4">{solution.name}</p>
                <p className={cn("mt-3 text-sm leading-6 lg:block", selected ? "block text-foreground/65" : "hidden text-background/55")}>{solution.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeKey}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: motionDuration.normal, ease: flowEase }}
          className="mt-5"
        >
          <WorkflowExplorer stages={active.workflowStages} solutionName={active.name} audience={active.audience} compact />
          <div className="mt-4 flex justify-end">
            <Link href={`/solutions/${activeKey}`} className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Explore {active.name} in depth →
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
