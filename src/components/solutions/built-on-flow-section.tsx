"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Badge } from "@/components/ui/badge";
import type { SolutionDefinition } from "@/content/solutions";
import { flowEase, motionDuration } from "@/lib/motion";

export function BuiltOnFlowSection({ solution }: { solution: SolutionDefinition }) {
  const reduceMotion = useReducedMotion();

  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="BUILT ON FLOW"
          title={<><EmphasisText tone="product">{solution.name}</EmphasisText> changes the operating pattern, not the platform underneath it.</>}
          description="The vertical experience can specialize around the business while shared capabilities remain connected through the FLOW core."
        />

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-background p-5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-muted/35 p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">BUSINESS SOLUTION</p>
                <p className="mt-4 text-4xl font-bold tracking-[-0.06em]">{solution.name}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{solution.audience}</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:col-span-2" aria-hidden="true">
              <motion.span
                className="h-16 w-px origin-top bg-foreground/35"
                initial={reduceMotion ? false : { scaleY: 0 }}
                whileInView={reduceMotion ? undefined : { scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: motionDuration.story, ease: flowEase }}
              />
              <span className="size-2 rounded-full bg-foreground" />
              <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">BUILT ON</p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-foreground p-6 text-background sm:p-7">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">SHARED PLATFORM</p>
                    <p className="mt-3 text-4xl font-bold tracking-[-0.06em]">FLOW CORE</p>
                  </div>
                  <Badge variant="outline" className="border-background/20 bg-transparent text-background/70">REUSED CAPABILITIES</Badge>
                </div>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {solution.sharedCore.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: motionDuration.reveal, delay: reduceMotion ? 0 : index * 0.04, ease: flowEase }}
                      className="rounded-xl border border-background/15 bg-background/[0.04] px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end border-t border-border pt-6">
            <Link href="/platform" className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Explore the FLOW platform →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
