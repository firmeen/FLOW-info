"use client";

import { forwardRef, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { CoreCapability, CoreCapabilityFamily } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FamilyKey = CoreCapabilityFamily["key"];

export function CorePlatformExperience({
  families,
  copy,
}: {
  families: readonly CoreCapabilityFamily[];
  copy: SiteCopy["home"]["core"];
}) {
  const allCapabilities = useMemo(
    () => families.reduce<CoreCapability[]>((items, family) => {
      items.push(...family.items);
      return items;
    }, []),
    [families],
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const captureRef = useRef<HTMLDivElement | null>(null);
  const coordinateRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const completeRef = useRef<HTMLDivElement | null>(null);
  const understandRef = useRef<HTMLDivElement | null>(null);
  const [activeKey, setActiveKey] = useState(allCapabilities[0]?.key ?? "order");
  const reduceMotion = useReducedMotion();

  const active = allCapabilities.find((capability) => capability.key === activeKey) ?? allCapabilities[0];
  const activeFamily = families.find((family) => family.items.some((item) => item.key === activeKey));

  const relatedFamilies = useMemo(() => {
    if (!active) return new Set<FamilyKey>();
    const touches = new Set<string>(active.touches);
    return new Set(
      families
        .filter((family) => family.key === activeFamily?.key || family.items.some((item) => touches.has(item.label)))
        .map((family) => family.key),
    );
  }, [active, activeFamily?.key, families]);

  const beamActive = (key: FamilyKey) => relatedFamilies.has(key);
  const familyByKey = (key: FamilyKey) => families.find((family) => family.key === key);

  return (
    <>
      <div ref={containerRef} className="relative mt-14 hidden overflow-hidden rounded-[2rem] border border-flow-off-white/10 bg-flow-deep p-8 text-flow-off-white lg:block xl:p-10">
        <div className="relative z-10 grid min-h-[650px] grid-cols-12 gap-6">
          <div className="col-span-8 grid grid-cols-3 grid-rows-3 items-center gap-6">
            {familyByKey("capture") ? <FamilyNode family={familyByKey("capture")!} ref={captureRef} className="col-start-2 row-start-1" activeKey={activeKey} related={beamActive("capture")} onSelect={setActiveKey} /> : null}
            {familyByKey("coordinate") ? <FamilyNode family={familyByKey("coordinate")!} ref={coordinateRef} className="col-start-1 row-start-2" activeKey={activeKey} related={beamActive("coordinate")} onSelect={setActiveKey} /> : null}

            <motion.div
              ref={coreRef}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: motionDuration.reveal, ease: flowEase }}
              className="relative col-start-2 row-start-2 mx-auto flex size-48 flex-col items-center justify-center rounded-[2.5rem] border border-flow-aqua/35 bg-flow-off-white text-center text-flow-black shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <Badge variant="outline" className="border-flow-black/15 bg-transparent text-flow-ocean-dark">{copy.sharedCore}</Badge>
              <p className="mt-4 text-5xl font-bold tracking-[-0.07em]">FLOW</p>
              <p className="mt-3 max-w-[10rem] text-xs leading-5 text-flow-black/55">{copy.sharedCoreDesktopDescription}</p>
            </motion.div>

            {familyByKey("complete") ? <FamilyNode family={familyByKey("complete")!} ref={completeRef} className="col-start-3 row-start-2" activeKey={activeKey} related={beamActive("complete")} onSelect={setActiveKey} /> : null}
            {familyByKey("understand") ? <FamilyNode family={familyByKey("understand")!} ref={understandRef} className="col-start-2 row-start-3" activeKey={activeKey} related={beamActive("understand")} onSelect={setActiveKey} /> : null}
          </div>

          <div className="col-span-4 flex items-center">
            {active ? <CapabilityInspector capability={active} familyLabel={activeFamily?.label ?? "FLOW CORE"} copy={copy} /> : null}
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={captureRef} toRef={coreRef} active={beamActive("capture")} delay={0.1} duration={3.2} endYOffset={-45} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={coordinateRef} active={beamActive("coordinate")} reverse delay={0.3} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={completeRef} active={beamActive("complete")} delay={0.5} duration={3.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={coreRef} toRef={understandRef} active={beamActive("understand")} delay={0.7} duration={3.2} startYOffset={45} />
      </div>

      <div className="mt-12 lg:hidden">
        <div className="mb-5 rounded-2xl border border-flow-aqua/20 bg-flow-deep p-6 text-flow-off-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flow-aqua-mist/65">{copy.sharedCore}</p>
          <p className="mt-2 text-3xl font-bold tracking-[-0.05em]">FLOW</p>
          <p className="mt-2 text-sm leading-6 text-flow-off-white/62">{copy.sharedCoreMobileDescription}</p>
        </div>
        <Accordion>
          {families.map((family) => (
            <AccordionItem key={family.key} value={family.key}>
              <AccordionTrigger className="px-5 py-5">
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-flow-ocean-dark">{family.label}</span>
                  <span className="mt-1 block text-lg font-semibold tracking-[-0.03em]">{family.description}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-1 pb-5">
                <div className="grid grid-cols-2 gap-2">
                  {family.items.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={item.key === activeKey}
                      onClick={() => setActiveKey(item.key)}
                      className={cn(
                        "min-h-11 rounded-xl border p-3 text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-flow-aqua sm:p-4",
                        item.key === activeKey ? "border-flow-ocean bg-flow-ocean text-white" : "border-border bg-background hover:border-flow-ocean/35",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                {active && activeFamily?.key === family.key ? (
                  <div className="mt-4">
                    <CapabilityInspector capability={active} familyLabel={family.label} light copy={copy} />
                  </div>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

const FamilyNode = forwardRef<HTMLDivElement, {
  family: CoreCapabilityFamily;
  className?: string;
  activeKey: string;
  related: boolean;
  onSelect: (key: string) => void;
}>(function FamilyNode({ family, className, activeKey, related, onSelect }, ref) {
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: related ? 1 : 0.34, scale: related ? 1 : 0.985 }}
      transition={{ duration: motionDuration.interactive, ease: flowEase }}
      className={cn("relative z-10 mx-auto w-full max-w-[270px] rounded-2xl border border-flow-off-white/12 bg-flow-black p-5", className)}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.17em] text-flow-aqua-mist/55">{family.label}</p>
      <p className="mt-3 text-sm leading-6 text-flow-off-white/65">{family.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {family.items.map((item) => (
          <button
            key={item.key}
            type="button"
            aria-pressed={item.key === activeKey}
            onClick={() => onSelect(item.key)}
            className={cn(
              "rounded-full border px-2.5 py-1.5 text-[0.68rem] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-flow-aqua",
              item.key === activeKey ? "border-flow-aqua bg-flow-ocean text-white" : "border-flow-off-white/15 text-flow-off-white/80 hover:border-flow-aqua/55",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
});

function CapabilityInspector({ capability, familyLabel, copy, light = false }: { capability: CoreCapability; familyLabel: string; copy: SiteCopy["home"]["core"]; light?: boolean }) {
  return (
    <motion.aside
      key={capability.key}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.normal, ease: flowEase }}
      className={cn("w-full rounded-2xl border p-5 sm:p-6", light ? "border-border bg-flow-ivory/70 text-flow-black" : "border-flow-aqua/20 bg-flow-ocean/8 text-flow-off-white")}
    >
      <p className={cn("text-xs font-semibold uppercase tracking-[0.16em]", light ? "text-flow-ocean-dark" : "text-flow-aqua-mist/60")}>{copy.activeCapability} / {familyLabel}</p>
      <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em]">{capability.label}</h3>
      <p className={cn("mt-4 text-sm leading-7", light ? "text-muted-foreground" : "text-flow-off-white/62")}>{capability.description}</p>

      <div className={cn("mt-6 border-t pt-5", light ? "border-border" : "border-flow-off-white/12")}>
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-flow-ocean-dark" : "text-flow-aqua-mist/60")}>{copy.touches}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {capability.touches.map((item) => <Badge key={item} variant="outline" className={light ? undefined : "border-flow-off-white/15 bg-transparent text-flow-off-white/75"}>{item}</Badge>)}
        </div>
      </div>
      <div className="mt-5">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-flow-ocean-dark" : "text-flow-aqua-mist/60")}>{copy.feeds}</p>
        <p className="mt-2 text-sm font-semibold">{capability.feeds}</p>
      </div>
      <div className="mt-5">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", light ? "text-flow-ocean-dark" : "text-flow-aqua-mist/60")}>{copy.usedBy}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {capability.solutions.map((solution) => <Badge key={solution} variant="secondary">{solution}</Badge>)}
        </div>
      </div>
    </motion.aside>
  );
}
