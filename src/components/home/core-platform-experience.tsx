"use client";

import { forwardRef, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Badge } from "@/components/ui/badge";
import { coreCapabilityFamilies } from "@/content/home";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FamilyKey = (typeof coreCapabilityFamilies)[number]["key"];
type Capability = {
  key: string;
  label: string;
  description: string;
  touches: readonly string[];
  feeds: string;
  solutions: readonly string[];
};

const allCapabilities = coreCapabilityFamilies.reduce<Capability[]>((items, family) => {
  items.push(...(family.items as readonly Capability[]));
  return items;
}, []);

export function CorePlatformExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const captureRef = useRef<HTMLDivElement | null>(null);
  const coordinateRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const completeRef = useRef<HTMLDivElement | null>(null);
  const understandRef = useRef<HTMLDivElement | null>(null);
  const [activeKey, setActiveKey] = useState(allCapabilities[0]?.key ?? "order");
  const reduceMotion = useReducedMotion();

  const active = allCapabilities.find((capability) => capability.key === activeKey) ?? allCapabilities[0];
  const activeFamily = coreCapabilityFamilies.find((family) => family.items.some((item) => item.key === activeKey));

  const relatedFamilies = useMemo(() => {
    if (!active) return new Set<FamilyKey>();
    const touches = new Set<string>(active.touches);
    return new Set(
      coreCapabilityFamilies
        .filter((family) => family.key === activeFamily?.key || family.items.some((item) => touches.has(item.label)))
        .map((family) => family.key),
    );
  }, [active, activeFamily?.key]);

  const beamActive = (key: FamilyKey) => relatedFamilies.has(key);

  return (
    <>
      <div ref={containerRef} className="relative mt-14 hidden overflow-hidden rounded-[2rem] border border-border bg-[#09090b] p-8 text-background lg:block xl:p-10">
        <div className="relative z-10 grid min-h-[650px] grid-cols-12 gap-6">
          <div className="col-span-8 grid grid-cols-3 grid-rows-3 items-center gap-6">
            <FamilyNode familyKey="capture" ref={captureRef} className="col-start-2 row-start-1" activeKey={activeKey} related={beamActive("capture")} onSelect={setActiveKey} />
            <FamilyNode familyKey="coordinate" ref={coordinateRef} className="col-start-1 row-start-2" activeKey={activeKey} related={beamActive("coordinate")} onSelect={setActiveKey} />

            <motion.div
              ref={coreRef}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: motionDuration.reveal, ease: flowEase }}
              className="relative col-start-2 row-start-2 mx-auto flex size-48 flex-col items-center justify-center rounded-[2.5rem] border border-background/25 bg-background text-center text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <Badge variant="outline" className="border-foreground/15 bg-transparent text-foreground/60">SHARED CORE</Badge>
              <p className="mt-4 text-5xl font-bold tracking-[-0.07em]">FLOW</p>
              <p className="mt-3 max-w-[10rem] text-xs leading-5 text-foreground/55">Capabilities become more useful when their context stays connected.</p>
            </motion.div>

            <FamilyNode familyKey="complete" ref={completeRef} className="col-start-3 row-start-2" activeKey={activeKey} related={beamActive("complete")} onSelect={setActiveKey} />
            <FamilyNode familyKey="understand" ref={understandRef} className="col-start-2 row-start-3" activeKey={activeKey} related={beamActive("understand")} onSelect={setActiveKey} />
          </div>

          <div className="col-span-4 flex items-center">
            {active ? <CapabilityInspector capability={active} familyLabel={activeFamily?.label ?? "FLOW CORE"} /> : null}
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={captureRef} toRef={coreRef} active={beamActive("capture")} delay={0.1} duration={3.2} endYOffset={-45} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={coordinateRef} active={beamActive("coordinate")} reverse delay={0.3} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={completeRef} active={beamActive("complete")} delay={0.5} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={understandRef} active={beamActive("understand")} delay={0.7} duration={3.2} startYOffset={45} />
      </div>

      <div className="mt-12 lg:hidden">
        <div className="mb-5 rounded-2xl border border-border bg-foreground p-6 text-background">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">SHARED CORE</p>
          <p className="mt-2 text-3xl font-bold tracking-[-0.05em]">FLOW</p>
          <p className="mt-2 text-sm leading-6 text-background/60">Select a capability to see what it touches, what it feeds, and which business solutions depend on it.</p>
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
                <div className="grid gap-2 sm:grid-cols-2">
                  {family.items.map((item) => (
                    <button key={item.key} type="button" aria-pressed={item.key === activeKey} onClick={() => setActiveKey(item.key)} className={cn("rounded-xl border p-4 text-left text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring", item.key === activeKey ? "border-foreground bg-foreground text-background" : "border-border bg-background")}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {active ? <div className="mt-5"><CapabilityInspector capability={active} familyLabel={activeFamily?.label ?? "FLOW CORE"} light /></div> : null}
      </div>
    </>
  );
}

const FamilyNode = forwardRef<HTMLDivElement, {
  familyKey: FamilyKey;
  className?: string;
  activeKey: string;
  related: boolean;
  onSelect: (key: string) => void;
}>(function FamilyNode({ familyKey, className, activeKey, related, onSelect }, ref) {
  const family = coreCapabilityFamilies.find((entry) => entry.key === familyKey)!;

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: related ? 1 : 0.34, scale: related ? 1 : 0.985 }}
      transition={{ duration: motionDuration.interactive, ease: flowEase }}
      className={cn("relative z-10 mx-auto w-full max-w-[270px] rounded-2xl border border-background/15 bg-[#111114] p-5", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.17em] text-background/45">{family.label}</p>
      <p className="mt-3 text-sm leading-6 text-background/65">{family.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {family.items.map((item) => (
          <button
            key={item.key}
            type="button"
            aria-pressed={item.key === activeKey}
            onClick={() => onSelect(item.key)}
            className={cn(
              "rounded-full border px-2.5 py-1.5 text-[0.68rem] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-background/80",
              item.key === activeKey ? "border-background bg-background text-foreground" : "border-background/15 text-background/80 hover:border-background/35",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
});

function CapabilityInspector({ capability, familyLabel, light = false }: { capability: Capability; familyLabel: string; light?: boolean }) {
  return (
    <motion.aside
      key={capability.key}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.normal, ease: flowEase }}
      className={cn("w-full rounded-2xl border p-6", light ? "border-border bg-muted/35 text-foreground" : "border-background/15 bg-background/[0.05] text-background")}
    >
      <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", light ? "text-muted-foreground" : "text-background/40")}>ACTIVE CAPABILITY / {familyLabel}</p>
      <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em]">{capability.label}</h3>
      <p className={cn("mt-4 text-sm leading-7", light ? "text-muted-foreground" : "text-background/60")}>{capability.description}</p>

      <div className={cn("mt-6 border-t pt-5", light ? "border-border" : "border-background/15")}>
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-muted-foreground" : "text-background/40")}>TOUCHES</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {capability.touches.map((item) => <Badge key={item} variant="outline" className={light ? undefined : "border-background/15 bg-transparent text-background/75"}>{item}</Badge>)}
        </div>
      </div>
      <div className="mt-5">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-muted-foreground" : "text-background/40")}>FEEDS</p>
        <p className="mt-2 text-sm font-semibold">{capability.feeds}</p>
      </div>
      <div className="mt-5">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-muted-foreground" : "text-background/40")}>USED BY</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {capability.solutions.map((solution) => <Badge key={solution} variant="secondary">{solution}</Badge>)}
        </div>
      </div>
    </motion.aside>
  );
}
