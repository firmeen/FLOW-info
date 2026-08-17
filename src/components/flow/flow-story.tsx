"use client";

import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Container } from "@/components/primitives/container";
import type { SiteCopy } from "@/i18n/copy";
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
  opacity: number | MotionValue<number>;
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

export function FlowStory({ copy }: { copy: SiteCopy["home"]["flowStory"] }) {
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

  const visible = (value: MotionValue<number>): number | MotionValue<number> =>
    reduceMotion ? 1 : value;

  const operationNodes = [
    [copy.operate, copy.staff],
    [copy.complete, copy.payment],
    [copy.record, copy.customerRecord],
  ] as const;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="flow-story-title"
      className={cn(
        "relative bg-foreground text-background",
        reduceMotion ? "py-24 sm:py-32" : "py-24 sm:py-28 lg:min-h-[180svh] lg:py-0",
      )}
    >
      <div
        className={cn(
          "flex items-center overflow-hidden",
          reduceMotion
            ? "min-h-0"
            : "lg:sticky lg:top-[72px] lg:min-h-[calc(100svh-72px)] lg:py-14",
        )}
      >
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">
                {copy.eyebrow}
              </p>
              <h2
                id="flow-story-title"
                className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
              >
                {copy.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-background/50">
              {copy.description}
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl px-1 sm:px-10">
            <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-background/12" aria-hidden="true">
              <motion.div
                className="h-full w-px origin-top bg-background/65"
                style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
              />
            </div>

            <div className="relative grid gap-4 sm:gap-5">
              <StoryNode eyebrow={copy.customer} title={copy.customerTitle} opacity={visible(customer)} className="mx-auto w-full max-w-[260px]" />
              <StoryNode eyebrow={copy.customerAction} title={copy.customerActionTitle} opacity={visible(action)} className="mx-auto w-full max-w-[360px]" />
              <motion.div
                style={{ opacity: visible(core) }}
                className="relative z-10 mx-auto w-full max-w-[430px] rounded-[1.75rem] border border-background/45 bg-background px-6 py-6 text-center text-foreground sm:py-8"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground/45">{copy.core}</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">FLOW</p>
                <p className="mt-2 text-xs text-foreground/55 sm:text-sm">{copy.coreDescription}</p>
              </motion.div>

              <motion.div
                style={{ opacity: visible(operation) }}
                className="relative z-10 mx-auto grid w-full max-w-[430px] gap-3 sm:max-w-none sm:grid-cols-3 sm:gap-4"
              >
                {operationNodes.map(([eyebrow, title], index) => (
                  <div key={`${eyebrow}-${title}`} className="relative rounded-2xl border border-background/20 bg-foreground px-4 py-4 text-center sm:px-4 sm:py-5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-background/35 sm:text-[0.65rem]">{eyebrow}</p>
                    <p className="mt-2 text-sm font-medium sm:text-base">{title}</p>
                    {index < 2 ? (
                      <span className="absolute left-1/2 top-full h-3 w-px -translate-x-1/2 bg-background/20 sm:hidden" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </motion.div>

              <StoryNode eyebrow={copy.businessData} title={copy.businessDataTitle} opacity={visible(data)} className="mx-auto w-full max-w-[360px]" />
              <StoryNode eyebrow={copy.businessVisibility} title={copy.businessVisibilityTitle} opacity={visible(dashboard)} className="mx-auto w-full max-w-[400px]" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
