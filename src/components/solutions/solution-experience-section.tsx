"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Badge } from "@/components/ui/badge";
import type { SolutionExperience } from "@/content/solutions";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SolutionExperienceSection({ experiences }: { experiences: readonly SolutionExperience[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = experiences[activeIndex] ?? experiences[0];

  if (!active) return null;

  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          inverse
          eyebrow="ONE FLOW / THREE VIEWS"
          title={<>One operation. <EmphasisText tone="inverse">The right context for each role.</EmphasisText></>}
          description="Customer, staff, and owner views should not become three disconnected systems. They are different lenses on the same underlying operation."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <div className="grid grid-cols-3 gap-2 lg:col-span-4 lg:grid-cols-1">
            {experiences.map((experience, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={experience.label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative min-h-11 rounded-xl border p-3 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-background/80 sm:rounded-2xl sm:p-5 sm:text-left",
                    selected ? "border-background/45 bg-background text-foreground" : "border-background/15 bg-background/[0.03] text-background hover:border-background/30",
                  )}
                >
                  <p className={cn("text-[0.62rem] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.16em]", selected ? "text-foreground/45" : "text-background/45")}>{experience.label}</p>
                  <p className="mt-3 hidden text-lg font-semibold tracking-[-0.03em] sm:block">{experience.title}</p>
                  {selected && !reduceMotion ? (
                    <motion.span layoutId="solution-role-line" className="absolute inset-x-3 bottom-0 h-0.5 bg-foreground sm:inset-x-5" transition={{ duration: motionDuration.interactive, ease: flowEase }} />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-background/15 bg-background text-foreground lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.label}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: motionDuration.normal, ease: flowEase }}
                className="p-5 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Badge variant="outline">{active.label} LENS</Badge>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-xs sm:tracking-[0.14em]">SAME OPERATION / DIFFERENT PRIORITY</span>
                </div>
                <h3 className="mt-6 max-w-2xl text-3xl font-bold tracking-[-0.05em] sm:text-4xl">{active.title}</h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{active.description}</p>
                <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                  {active.points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: motionDuration.reveal, delay: reduceMotion ? 0 : index * 0.05, ease: flowEase }}
                      className="rounded-xl border border-border bg-muted/40 p-4"
                    >
                      <span className="text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <p className="mt-3 text-sm font-medium leading-6">{point}</p>
                    </motion.li>
                  ))}
                </ol>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
