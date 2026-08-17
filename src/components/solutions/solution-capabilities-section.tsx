"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { SolutionDefinition } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SolutionCapabilitiesSection({ solution, copy }: { solution: SolutionDefinition; copy: SiteCopy["solutionDetail"]["capabilities"] }) {
  const [activeStageKey, setActiveStageKey] = useState(solution.workflowStages[0]?.key ?? "");
  const reduceMotion = useReducedMotion();
  const visibleCapabilities = useMemo(
    () => solution.capabilities.filter((capability) => capability.stageKeys.includes(activeStageKey)),
    [activeStageKey, solution.capabilities],
  );
  const activeStage = solution.workflowStages.find((stage) => stage.key === activeStageKey) ?? solution.workflowStages[0];

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={<>{copy.titleLead}<EmphasisText tone="outcome">{copy.titleOutcome}</EmphasisText></>}
          description={copy.description}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.75rem] border border-border bg-muted/35 p-5 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.selectStage}</p>
            <div className="-mx-1 mt-5 flex gap-2 overflow-x-auto overscroll-x-contain px-1 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {solution.workflowStages.map((stage, index) => {
                const selected = stage.key === activeStageKey;
                return (
                  <button
                    key={stage.key}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveStageKey(stage.key)}
                    className={cn(
                      "flex min-h-11 min-w-max shrink-0 items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring lg:min-w-0",
                      selected ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:border-foreground/30",
                    )}
                  >
                    <span>{stage.label}</span>
                    <span className={cn("text-xs tabular-nums", selected ? "text-background/50" : "text-muted-foreground")}>{String(index + 1).padStart(2, "0")}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            {activeStage ? (
              <div className="rounded-[1.75rem] border border-border p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.activeStage} / {activeStage.actor}</p>
                    <h3 className="mt-3 text-3xl font-bold tracking-[-0.05em]">{activeStage.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStage.sharedCore.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {visibleCapabilities.length > 0 ? visibleCapabilities.map((capability, index) => (
                    <motion.article
                      key={`${activeStageKey}-${capability.name}`}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: motionDuration.reveal, delay: reduceMotion ? 0 : index * 0.05, ease: flowEase }}
                      className="rounded-xl border border-border bg-muted/30 p-5"
                    >
                      <p className="text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                      <h4 className="mt-3 text-lg font-semibold tracking-[-0.03em]">{capability.name}</h4>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.description}</p>
                    </motion.article>
                  )) : (
                    <div className="rounded-xl border border-dashed border-border p-5 text-sm leading-6 text-muted-foreground sm:col-span-2">
                      {copy.noSpecificCapability}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
