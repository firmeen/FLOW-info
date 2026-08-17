"use client";

import { motion, useReducedMotion } from "motion/react";

import { ProgressLine } from "@/components/motion/progress-line";
import { BlurFade } from "@/components/ui/blur-fade";
import type { SiteCopy } from "@/i18n/copy";
import type { BusinessValueTransformation } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";

export function BusinessValueExperience({
  values,
  copy,
}: {
  values: readonly BusinessValueTransformation[];
  copy: SiteCopy["home"]["businessValue"];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-14 grid gap-4 lg:grid-cols-2">
      {values.map((value, index) => (
        <BlurFade key={value.number} inView delay={index * 0.06} className="h-full">
          <article className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-background p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-muted-foreground">{value.number}</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.fromTo}</span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-5">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.from}</p>
                <motion.p
                  animate={reduceMotion ? undefined : { opacity: [0.7, 0.5] }}
                  transition={{ duration: 1.4, repeat: 0, ease: flowEase }}
                  className="mt-2 text-lg font-medium tracking-[-0.03em] text-muted-foreground"
                >
                  {value.from}
                </motion.p>
              </div>
              <div className="mx-auto h-8 sm:hidden">
                <ProgressLine vertical />
              </div>
              <div className="hidden h-px w-10 sm:block">
                <ProgressLine />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.to}</p>
                <motion.h3
                  initial={reduceMotion ? false : { opacity: 0.45, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: motionDuration.reveal, delay: 0.12, ease: flowEase }}
                  className="mt-2 text-2xl font-bold tracking-[-0.045em] sm:text-3xl"
                >
                  {value.to}
                </motion.h3>
              </div>
            </div>

            <p className="mt-8 max-w-xl border-t border-border pt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              {value.description}
            </p>
          </article>
        </BlurFade>
      ))}
    </div>
  );
}
