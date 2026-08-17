"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
          <Badge variant="outline" className="border-background/20 bg-transparent text-background/65">BUILT ON FLOW</Badge>
          <div className="mt-4 rounded-[1.75rem] border border-background/20 bg-background px-8 py-5 text-foreground">
            <p className="text-3xl font-bold tracking-[-0.06em]">FLOW</p>
            <p className="mt-1 text-xs text-foreground/55">Shared operational core</p>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-3 gap-2" aria-hidden="true">
          {solutionEntries.map(([key]) => (
            <div key={key} className="flex flex-col items-center">
              <motion.span
                className="h-10 w-px origin-top bg-background/65"
                animate={reduceMotion ? undefined : { scaleY: activeKey === key ? 1 : 0.45, opacity: activeKey === key ? 1 : 0.28 }}
                transition={{ duration: motionDuration.interactive, ease: flowEase }}
              />
              <motion.span
                className="size-2 rounded-full bg-background"
                animate={reduceMotion ? undefined : { scale: activeKey === key ? 1.4 : 0.8, opacity: activeKey === key ? 1 : 0.35 }}
                transition={{ duration: motionDuration.interactive, ease: flowEase }}
              />
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-3 lg:grid-cols-3" role="list" aria-label="FLOW business solutions">
          {solutionEntries.map(([key, solution]) => {
            const selected = key === activeKey;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveKey(key)}
                className={cn(
                  "relative rounded-2xl border p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-background/80",
                  selected ? "border-background/45 bg-background text-foreground" : "border-background/15 bg-background/[0.04] text-background hover:border-background/30",
                )}
              >
                {selected && !reduceMotion ? (
                  <motion.span layoutId="solution-active" className="absolute inset-0 -z-10 rounded-2xl" transition={{ duration: motionDuration.interactive, ease: flowEase }} />
                ) : null}
                <p className={cn("text-xs font-semibold uppercase tracking-[0.15em]", selected ? "text-foreground/50" : "text-background/45")}>{solution.audience}</p>
                <p className="mt-4 text-2xl font-bold tracking-[-0.045em]">{solution.name}</p>
                <p className={cn("mt-3 text-sm leading-6", selected ? "text-foreground/65" : "text-background/55")}>{solution.description}</p>
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
          <Card className="py-0">
            <CardHeader className="border-b border-border py-6 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{active.name} WORKFLOW</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">One platform, shaped around this operation.</h3>
              </div>
            </CardHeader>
            <CardContent className="py-7 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                {active.workflow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <Badge variant={index === 0 ? "secondary" : "outline"}>{step}</Badge>
                    {index < active.workflow.length - 1 ? <span className="text-muted-foreground" aria-hidden="true">→</span> : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{active.problem.description}</p>
            </CardContent>
            <CardFooter className="border-t border-border py-5 sm:px-8">
              <Link href={`/solutions/${activeKey}`} className="text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Explore {active.name} →
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
