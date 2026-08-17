"use client";

import { forwardRef, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Badge } from "@/components/ui/badge";
import { coreCapabilityFamilies } from "@/content/home";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FamilyKey = (typeof coreCapabilityFamilies)[number]["key"];

export function CorePlatformExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const captureRef = useRef<HTMLDivElement | null>(null);
  const coordinateRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const completeRef = useRef<HTMLDivElement | null>(null);
  const understandRef = useRef<HTMLDivElement | null>(null);
  const [activeFamily, setActiveFamily] = useState<FamilyKey | null>(null);
  const reduceMotion = useReducedMotion();

  const isActive = (key: FamilyKey) => activeFamily == null || activeFamily === key;

  return (
    <>
      <div
        ref={containerRef}
        className="relative mt-14 hidden min-h-[640px] overflow-hidden rounded-[2rem] border border-border bg-[#09090b] p-8 text-background lg:block xl:p-12"
        onMouseLeave={() => setActiveFamily(null)}
      >
        <div className="relative z-10 grid h-full min-h-[540px] grid-cols-3 grid-rows-3 items-center gap-8">
          <FamilyNode familyKey="capture" ref={captureRef} className="col-start-2 row-start-1" active={isActive("capture")} onActivate={setActiveFamily} />
          <FamilyNode familyKey="coordinate" ref={coordinateRef} className="col-start-1 row-start-2" active={isActive("coordinate")} onActivate={setActiveFamily} />

          <motion.div
            ref={coreRef}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: motionDuration.reveal, ease: flowEase }}
            className="relative col-start-2 row-start-2 mx-auto flex size-52 flex-col items-center justify-center rounded-[2.5rem] border border-background/25 bg-background text-center text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          >
            <Badge variant="outline" className="border-foreground/15 bg-transparent text-foreground/60">SHARED CORE</Badge>
            <p className="mt-5 text-5xl font-bold tracking-[-0.07em]">FLOW</p>
            <p className="mt-3 max-w-[10rem] text-xs leading-5 text-foreground/55">One operational core. Multiple business workflows.</p>
          </motion.div>

          <FamilyNode familyKey="complete" ref={completeRef} className="col-start-3 row-start-2" active={isActive("complete")} onActivate={setActiveFamily} />
          <FamilyNode familyKey="understand" ref={understandRef} className="col-start-2 row-start-3" active={isActive("understand")} onActivate={setActiveFamily} />
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={captureRef} toRef={coreRef} active={isActive("capture")} delay={0.1} duration={3.2} endYOffset={-50} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={coordinateRef} active={isActive("coordinate")} reverse delay={0.35} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={completeRef} active={isActive("complete")} delay={0.55} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={understandRef} active={isActive("understand")} delay={0.8} duration={3.2} startYOffset={50} />
      </div>

      <div className="mt-12 lg:hidden">
        <div className="mb-5 rounded-2xl border border-border bg-foreground p-6 text-background">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">SHARED CORE</p>
          <p className="mt-2 text-3xl font-bold tracking-[-0.05em]">FLOW</p>
          <p className="mt-2 text-sm leading-6 text-background/60">A common operational foundation connects the capabilities below.</p>
        </div>
        <Accordion>
          {coreCapabilityFamilies.map((family) => (
            <AccordionItem key={family.key} value={family.key}>
              <AccordionTrigger className="px-5 py-5">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{family.label}</span>
                  <span className="mt-1 block text-lg font-semibold tracking-[-0.03em]">{family.description}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-1 pb-5">
                <div className="flex flex-wrap gap-2">
                  {family.items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

const FamilyNode = forwardRef<HTMLDivElement, {
  familyKey: FamilyKey;
  className?: string;
  active: boolean;
  onActivate: (key: FamilyKey | null) => void;
}>(function FamilyNode({ familyKey, className, active, onActivate }, ref) {
  const family = coreCapabilityFamilies.find((entry) => entry.key === familyKey)!;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => onActivate(familyKey)}
      onFocus={() => onActivate(familyKey)}
      onBlur={() => onActivate(null)}
      tabIndex={0}
      animate={{ opacity: active ? 1 : 0.34, scale: active ? 1 : 0.985 }}
      transition={{ duration: motionDuration.interactive, ease: flowEase }}
      className={cn("relative z-10 mx-auto w-full max-w-[260px] rounded-2xl border border-background/15 bg-[#111114] p-5 outline-none focus-visible:ring-2 focus-visible:ring-background/80", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.17em] text-background/45">{family.label}</p>
      <p className="mt-3 text-sm leading-6 text-background/65">{family.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {family.items.map((item) => (
          <span key={item} className="rounded-full border border-background/15 px-2.5 py-1.5 text-[0.68rem] font-medium text-background/80">{item}</span>
        ))}
      </div>
    </motion.div>
  );
});
