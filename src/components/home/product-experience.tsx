"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { productSurfaces } from "@/content/home";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SurfaceKey = (typeof productSurfaces)[number]["key"];

export function ProductExperience() {
  const [activeKey, setActiveKey] = useState<SurfaceKey>("customer");
  const reduceMotion = useReducedMotion();
  const active = productSurfaces.find((surface) => surface.key === activeKey) ?? productSurfaces[0];

  return (
    <div className="mt-14 rounded-[2rem] border border-background/15 bg-background/[0.04] p-4 sm:p-6 lg:p-8">
      <div className="grid gap-3 md:grid-cols-3" role="group" aria-label="Product experience views">
        {productSurfaces.map((surface) => {
          const selected = surface.key === activeKey;
          return (
            <button
              key={surface.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveKey(surface.key)}
              className={cn(
                "relative overflow-hidden rounded-2xl border px-5 py-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-background/80",
                selected
                  ? "border-background/45 bg-background text-foreground"
                  : "border-background/15 bg-background/[0.03] text-background hover:border-background/30",
              )}
            >
              {selected && !reduceMotion ? (
                <motion.span
                  layoutId="product-role-active"
                  className="absolute inset-x-5 bottom-0 h-0.5 bg-foreground"
                  transition={{ duration: motionDuration.interactive, ease: flowEase }}
                />
              ) : null}
              <span className={cn("text-xs font-semibold uppercase tracking-[0.16em]", selected ? "text-foreground/45" : "text-background/45")}>{surface.label}</span>
              <span className="mt-3 block text-lg font-semibold tracking-[-0.03em]">{surface.question}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <div className="rounded-2xl border border-background/15 bg-[#111114] p-6 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/40">ONE OPERATION / LIVE CONTEXT</p>
          <div className="mt-5 rounded-2xl border border-background/15 bg-background/[0.04] p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold">FLOW RECORD</span>
              <Badge variant="outline" className="border-background/15 bg-transparent text-background/65">CONNECTED</Badge>
            </div>
            <div className="mt-6 space-y-4">
              {["Customer action", "Operational status", "Completion context", "Business visibility"].map((item, index) => (
                <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-background/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-sm text-background/60">{item}</span>
                  <motion.span
                    className="h-1.5 rounded-full bg-background"
                    animate={reduceMotion ? undefined : { width: index === 0 ? 42 : index === 1 ? 62 : index === 2 ? 50 : 72, opacity: 0.35 + index * 0.15 }}
                    transition={{ duration: motionDuration.normal, ease: flowEase }}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-background/50">The underlying work stays connected while each role sees a different priority.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-background/15 bg-background text-foreground lg:col-span-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.995 }}
              transition={{ duration: motionDuration.normal, ease: flowEase }}
              className="p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{active.label}</p>
              <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.05em] sm:text-4xl">{active.statement}</h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{active.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {active.stages.map((stage, index) => (
                  <motion.div
                    key={stage}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: motionDuration.reveal, delay: reduceMotion ? 0 : index * 0.05, ease: flowEase }}
                    className="relative rounded-xl border border-border bg-muted/40 p-4"
                  >
                    <span className="text-[0.68rem] tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm font-semibold">{stage}</p>
                    {index < active.stages.length - 1 ? <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-muted-foreground sm:block" aria-hidden="true">→</span> : null}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">PRIORITY</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.priorities.map((priority) => <Badge key={priority} variant="outline">{priority}</Badge>)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
