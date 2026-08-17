"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { platformArchitectureStages } from "@/content/platform";
import { flowEase, motionDuration } from "@/lib/motion";

export function PlatformArchitecture() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section tone="dark" aria-labelledby="platform-architecture-title">
      <Container>
        <div ref={ref} className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">PLATFORM ARCHITECTURE</p>
            <h2 id="platform-architecture-title" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              One connected path from <span className="font-bold text-background">entry</span> to <span className="font-bold text-background underline decoration-background/20 decoration-[0.08em] underline-offset-[0.16em]">visibility.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-background/60">
              Customer intent becomes operational work, completion becomes a record, and the record becomes useful business visibility without breaking the context between those steps.
            </p>
          </div>

          <div className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden="true" className="absolute bottom-8 left-[1.05rem] top-8 w-px bg-background/15 sm:left-[1.55rem]" />
            <motion.span
              aria-hidden="true"
              className="absolute bottom-8 left-[1.05rem] top-8 w-px origin-top bg-background sm:left-[1.55rem]"
              style={reduceMotion ? undefined : { scaleY }}
            />
            <ol>
              {platformArchitectureStages.map((stage, index) => (
                <motion.li
                  key={stage.label}
                  initial={reduceMotion ? false : { opacity: 0.35, x: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ amount: 0.55, once: false }}
                  transition={{ duration: motionDuration.normal, ease: flowEase }}
                  className="relative grid gap-4 border-b border-background/15 py-8 pl-12 sm:grid-cols-[72px_150px_1fr] sm:items-start sm:pl-16"
                >
                  <span className="absolute left-3 top-9 size-2.5 rounded-full border border-background/40 bg-foreground sm:left-5" aria-hidden="true" />
                  <span className="text-xs tabular-nums text-background/35">{stage.index}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">{stage.label}</span>
                    <p className="mt-2 text-sm leading-6 text-background/55">{stage.statement}</p>
                  </div>
                  <span className="text-base font-medium tracking-[-0.02em] sm:text-lg">{stage.detail}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
