"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { ProductSurface } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProductExperience({
  surfaces,
  copy,
}: {
  surfaces: readonly ProductSurface[];
  copy: SiteCopy["home"]["product"];
}) {
  const [activeKey, setActiveKey] = useState<ProductSurface["key"]>("customer");
  const reduceMotion = useReducedMotion();
  const active = surfaces.find((surface) => surface.key === activeKey) ?? surfaces[0];

  if (!active) return null;

  return (
    <div className="mt-14 rounded-[2rem] border border-flow-off-white/12 bg-flow-ocean/[0.05] p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-3 gap-2 md:gap-3" role="group" aria-label={copy.viewsAria}>
        {surfaces.map((surface) => {
          const selected = surface.key === activeKey;
          return (
            <button
              key={surface.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveKey(surface.key)}
              className={cn(
                "relative min-h-11 overflow-hidden rounded-xl border px-3 py-3 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-flow-aqua md:rounded-2xl md:px-5 md:py-5 md:text-left",
                selected
                  ? "border-flow-aqua/55 bg-flow-off-white text-flow-black"
                  : "border-flow-off-white/15 bg-flow-off-white/[0.03] text-flow-off-white hover:border-flow-aqua/40",
              )}
            >
              {selected && !reduceMotion ? (
                <motion.span
                  layoutId="product-role-active"
                  className="absolute inset-x-3 bottom-0 h-0.5 bg-flow-aqua md:inset-x-5"
                  transition={{ duration: motionDuration.interactive, ease: flowEase }}
                />
              ) : null}
              <span className={cn("text-[0.62rem] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.16em]", selected ? "text-flow-ocean-dark" : "text-flow-aqua-mist/55")}>{surface.label}</span>
              <span className="mt-3 hidden text-lg font-semibold tracking-[-0.03em] md:block">{surface.question}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <div className="rounded-2xl border border-flow-off-white/12 bg-flow-black p-5 sm:p-6 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flow-aqua-mist/60">{copy.liveContext}</p>
          <div className="mt-5 rounded-2xl border border-flow-off-white/12 bg-flow-off-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold">{copy.flowRecord}</span>
              <Badge variant="outline" className="border-flow-aqua/30 bg-transparent text-flow-aqua-mist">{copy.connected}</Badge>
            </div>
            <div className="mt-6 space-y-4">
              {copy.recordRows.map((item, index) => (
                <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-flow-off-white/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-sm text-flow-off-white/60">{item}</span>
                  <motion.span
                    className="h-1.5 rounded-full bg-flow-aqua"
                    animate={reduceMotion ? undefined : { width: index === 0 ? 42 : index === 1 ? 62 : index === 2 ? 50 : 72, opacity: 0.4 + index * 0.15 }}
                    transition={{ duration: motionDuration.normal, ease: flowEase }}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-flow-off-white/52">{copy.recordDescription}</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-flow-aqua/20 bg-flow-off-white text-flow-black lg:col-span-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.995 }}
              transition={{ duration: motionDuration.normal, ease: flowEase }}
              className="p-5 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flow-ocean-dark">{active.label}</p>
              <p className="mt-3 text-sm font-semibold text-muted-foreground md:hidden">{active.question}</p>
              <h3 className="flow-display mt-4 max-w-2xl text-3xl font-bold tracking-[-0.05em] sm:text-4xl">{active.statement}</h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{active.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {active.stages.map((stage, index) => (
                  <motion.div
                    key={stage}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: motionDuration.reveal, delay: reduceMotion ? 0 : index * 0.05, ease: flowEase }}
                    className="relative rounded-xl border border-border bg-flow-ivory p-4"
                  >
                    <span className="text-[0.68rem] tabular-nums text-flow-ocean-dark">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm font-semibold">{stage}</p>
                    {index < active.stages.length - 1 ? <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-flow-ocean sm:block" aria-hidden="true">→</span> : null}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-flow-ocean-dark">{copy.priority}</p>
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
