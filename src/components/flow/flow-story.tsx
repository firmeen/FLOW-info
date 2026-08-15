"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Container } from "@/components/primitives/container";
import { cn } from "@/lib/utils";

function StoryNode({
  eyebrow,
  title,
  className,
  opacity,
}: {
  eyebrow: string;
  title: string;
  className?: string;
  opacity: number | ReturnType<typeof useTransform>;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className={cn(
        "relative z-10 rounded-2xl border border-background/20 bg-foreground px-4 py-4 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-5 sm:py-5",
        className,
      )}
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-background/40">
        {eyebrow}
      </p>
      <p className="mt-2 text-sm font-medium tracking-[-0.02em] sm:text-base">{title}</p>
    </motion.div>
  );
}

export function FlowStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const customer = useTransform(scrollYProgress, [0, 0.12], [0.28, 1]);
  const action = useTransform(scrollYProgress, [0.12, 0.28], [0.24, 1]);
  const core = useTransform(scrollYProgress, [0.28, 0.48], [0.2, 1]);
  const operation = useTransform(scrollYProgress, [0.48, 0.68], [0.18, 1]);
  const data = useTransform(scrollYProgress, [0.68, 0.84], [0.18, 1]);
  const dashboard = useTransform(scrollYProgress, [0.84, 1], [0.18, 1]);

  const visible = (value: ReturnType<typeof useTransform>) =>
    reduceMotion ? 1 : value;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="flow-story-title"
      className="relative min-h-[180svh] bg-foreground text-background"
    >
      <div className="sticky top-[72px] flex min-h-[calc(100svh-72px)] items-center overflow-hidden py-10 sm:py-14">
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">
                SIGNATURE FLOW STORY
              </p>
              <h2
                id="flow-story-title"
                className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
              >
                See the work move through the system.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-background/50">
              Scroll to follow one action from customer intent to operational visibility.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl px-2 sm:px-10">
            <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-background/12" aria-hidden="true">
              <motion.div
                className="h-full w-px origin-top bg-background/65"
                style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
              />
            </div>

            <div className="relative grid gap-4 sm:gap-5">
              <StoryNode eyebrow="CUSTOMER" title="A customer enters" opacity={visible(customer)} className="mx-auto w-full max-w-[260px]" />
              <StoryNode eyebrow="CUSTOMER ACTION" title="Order · Book · Queue · Request" opacity={visible(action)} className="mx-auto w-full max-w-[360px]" />
              <motion.div
                style={{ opacity: visible(core) }}
                className="relative z-10 mx-auto w-full max-w-[430px] rounded-[1.75rem] border border-background/45 bg-background px-6 py-6 text-center text-foreground sm:py-8"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground/45">CORE</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">FLOW</p>
                <p className="mt-2 text-xs text-foreground/55 sm:text-sm">Route the action into the right workflow.</p>
              </motion.div>

              <motion.div style={{ opacity: visible(operation) }} className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  ["OPERATE", "Staff"],
                  ["COMPLETE", "Payment"],
                  ["RECORD", "Customer"],
                ].map(([eyebrow, title]) => (
                  <div key={title} className="rounded-2xl border border-background/20 bg-foreground px-2 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-background/35 sm:text-[0.65rem]">{eyebrow}</p>
                    <p className="mt-2 text-xs font-medium sm:text-base">{title}</p>
                  </div>
                ))}
              </motion.div>

              <StoryNode eyebrow="BUSINESS DATA" title="Operational activity stays connected" opacity={visible(data)} className="mx-auto w-full max-w-[360px]" />
              <StoryNode eyebrow="BUSINESS VISIBILITY" title="Dashboard · Reports · Decisions" opacity={visible(dashboard)} className="mx-auto w-full max-w-[400px]" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
