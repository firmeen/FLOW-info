"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionWorkflowStage } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function WorkflowExplorer({
  stages,
  solutionName,
  audience,
  copy,
  compact = false,
}: {
  stages: readonly SolutionWorkflowStage[];
  solutionName: string;
  audience?: string;
  copy: SiteCopy["solutionDetail"]["workflow"];
  compact?: boolean;
}) {
  const [activeKey, setActiveKey] = useState(stages[0]?.key ?? "");
  const stageRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const activeIndex = Math.max(0, stages.findIndex((stage) => stage.key === activeKey));
  const active = stages[activeIndex] ?? stages[0];

  if (!active) return null;

  const selectStage = (index: number) => {
    const stage = stages[index];
    if (!stage) return;
    setActiveKey(stage.key);
    window.requestAnimationFrame(() => {
      stageRefs.current[index]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  };

  return (
    <div className={cn("overflow-hidden rounded-[1.75rem] border border-border bg-background", compact ? "" : "shadow-sm") }>
      <div className="border-b border-border px-5 py-5 sm:px-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{solutionName} / {copy.operatingPattern}</p>
            {audience ? <p className="mt-2 text-sm text-muted-foreground">{audience}</p> : null}
          </div>
          <Badge variant="outline">{activeIndex + 1} / {stages.length}</Badge>
        </div>
      </div>

      <div className="relative border-b border-border">
        <div
          className="overflow-x-auto overscroll-x-contain px-4 py-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
          aria-label={`${solutionName} ${copy.stagesAriaSuffix}`}
        >
          <div className="relative flex min-w-max snap-x snap-mandatory items-center gap-2 scroll-px-4">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" aria-hidden="true" />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-foreground"
              animate={{ width: `${stages.length <= 1 ? 100 : (activeIndex / (stages.length - 1)) * 100}%` }}
              transition={reduceMotion ? { duration: 0 } : { duration: motionDuration.interactive, ease: flowEase }}
            />
            {stages.map((stage, index) => {
              const selected = stage.key === active.key;
              const passed = index <= activeIndex;
              return (
                <button
                  key={stage.key}
                  ref={(node) => { stageRefs.current[index] = node; }}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectStage(index)}
                  className={cn(
                    "relative z-10 min-h-11 min-w-28 shrink-0 snap-center rounded-full border px-4 py-2 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    selected
                      ? "border-foreground bg-foreground text-background"
                      : passed
                        ? "border-foreground/30 bg-background text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-foreground/30",
                  )}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>
        </div>
        <span className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent sm:hidden" aria-hidden="true" />
        <span className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent sm:hidden" aria-hidden="true" />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.key}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: motionDuration.normal, ease: flowEase }}
          className="grid gap-7 p-5 sm:p-7 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.activeStep} / {active.actor}</p>
            <h3 className="mt-4 text-2xl font-bold tracking-[-0.045em] sm:text-3xl">{active.label}</h3>
            <p className="mt-4 text-lg font-semibold tracking-[-0.025em]">{active.purpose}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{active.operation}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.coreInStep}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.sharedCore.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
            </div>
            <div className="mt-6 rounded-xl bg-muted/50 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{copy.next}</p>
              <p className="mt-2 text-sm font-semibold">
                {stages[activeIndex + 1]?.label ?? copy.fallbackNext}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-2 border-t border-border p-4 sm:hidden">
        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={() => selectStage(activeIndex - 1)}
          className="min-h-11 rounded-full border border-border px-4 text-sm font-semibold disabled:opacity-35"
        >
          {copy.previous}
        </button>
        <button
          type="button"
          disabled={activeIndex === stages.length - 1}
          onClick={() => selectStage(activeIndex + 1)}
          className="min-h-11 rounded-full border border-border px-4 text-sm font-semibold disabled:opacity-35"
        >
          {copy.nextButton}
        </button>
      </div>
    </div>
  );
}
