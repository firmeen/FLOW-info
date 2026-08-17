"use client";

import { motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/i18n/copy";
import type { PlatformLayer } from "@/i18n/schema";
import { flowEase, motionDuration } from "@/lib/motion";

export function PlatformLayersExperience({
  layers,
  copy,
}: {
  layers: readonly PlatformLayer[];
  copy: SiteCopy["platform"]["layers"];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12">
      <aside className="hidden lg:col-span-3 lg:block">
        <div className="sticky top-28 rounded-[1.75rem] border border-border bg-muted/35 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.howToRead}</p>
          <p className="mt-4 text-xl font-bold tracking-[-0.035em]">{copy.howToReadTitle}</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy.howToReadDescription}</p>
          <div className="mt-6 space-y-2 border-t border-border pt-5">
            {layers.map((layer) => (
              <div key={layer.key} className="flex items-center justify-between gap-4 text-xs">
                <span className="font-semibold">{layer.index}</span>
                <span className="text-right text-muted-foreground">{layer.motionVerb}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-6 lg:col-span-9">
        {layers.map((layer, index) => (
          <motion.article
            key={layer.key}
            initial={reduceMotion ? false : { opacity: 0.35, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: motionDuration.reveal, ease: flowEase }}
            className="overflow-hidden rounded-[2rem] border border-border bg-background"
          >
            <div className="grid gap-7 border-b border-border p-5 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tabular-nums text-muted-foreground">{layer.index}</span>
                  <Badge variant="outline">{layer.motionVerb}</Badge>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{layer.label}</p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h3 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">{layer.statement}</h3>
                <p className="mt-4 max-w-2xl text-lg font-semibold tracking-[-0.025em]">{layer.title}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{layer.description}</p>
              </div>
            </div>

            <div className="bg-muted/25 p-5 sm:p-7">
              <LayerScene type={layer.key} capabilities={layer.capabilities} reduced={Boolean(reduceMotion)} index={index} copy={copy} />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function LayerScene({ type, capabilities, reduced, index, copy }: { type: PlatformLayer["key"]; capabilities: readonly string[]; reduced: boolean; index: number; copy: SiteCopy["platform"]["layers"] }) {
  if (type === "entry") return <EntryScene items={capabilities} reduced={reduced} copy={copy} />;
  if (type === "action") return <ActionScene items={capabilities} reduced={reduced} copy={copy} />;
  if (type === "core") return <CoreScene items={capabilities} reduced={reduced} copy={copy} />;
  if (type === "operation") return <OperationScene items={capabilities} reduced={reduced} />;
  if (type === "completion") return <CompletionScene items={capabilities} reduced={reduced} copy={copy} />;
  return <VisibilityScene items={capabilities} reduced={reduced} index={index} copy={copy} />;
}

function ResponsiveConnector({ reduced }: { reduced: boolean }) {
  return (
    <div className="flex items-center justify-center text-muted-foreground" aria-hidden="true">
      <div className="flex h-12 flex-col items-center justify-center lg:hidden">
        <motion.span
          className="h-8 w-px origin-top bg-foreground"
          initial={reduced ? false : { scaleY: 0 }}
          whileInView={reduced ? undefined : { scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: motionDuration.story, ease: flowEase }}
        />
        <span className="text-sm">↓</span>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <motion.span
          className="h-px w-12 origin-left bg-foreground"
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={reduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: motionDuration.story, ease: flowEase }}
        />
        <span>→</span>
      </div>
    </div>
  );
}

function EntryScene({ items, reduced, copy }: { items: readonly string[]; reduced: boolean; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <div className="grid gap-1 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-5">
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item, index) => (
          <motion.div key={item} initial={reduced ? false : { opacity: 0, x: -12 }} whileInView={reduced ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold">{item}</motion.div>
        ))}
      </div>
      <ResponsiveConnector reduced={reduced} />
      <div className="rounded-2xl bg-foreground p-6 text-background">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">{copy.entryContext}</p>
        <p className="mt-3 text-3xl font-bold tracking-[-0.05em]">{copy.flowEntry}</p>
        <p className="mt-3 text-sm leading-6 text-background/60">{copy.entryDescription}</p>
      </div>
    </div>
  );
}

function ActionScene({ items, reduced, copy }: { items: readonly string[]; reduced: boolean; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <div className="grid gap-1 lg:grid-cols-12 lg:items-center lg:gap-5">
      <div className="flex flex-wrap gap-2 lg:col-span-5">
        {items.map((item, index) => (
          <motion.span key={item} layout className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold" initial={reduced ? false : { opacity: 0, y: 8 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: motionDuration.reveal, ease: flowEase }}>{item}</motion.span>
        ))}
      </div>
      <div className="lg:col-span-2"><ResponsiveConnector reduced={reduced} /></div>
      <div className="rounded-2xl border border-border bg-background p-5 lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.structuredWork}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {copy.structuredFields.map((field, index) => (
            <motion.div key={field} initial={reduced ? false : { opacity: 0, scale: 0.97 }} whileInView={reduced ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 + index * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl bg-muted/50 p-4">
              <span className="text-xs text-muted-foreground">{field}</span>
              <p className="mt-2 text-sm font-semibold">{copy.connectedToFlow}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoreScene({ items, reduced, copy }: { items: readonly string[]; reduced: boolean; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <div className="grid gap-1 lg:grid-cols-[1fr_220px_1fr] lg:items-center lg:gap-4">
      <div className="grid gap-2">
        {items.slice(0, 3).map((item, index) => <motion.div key={item} initial={reduced ? false : { opacity: 0, x: -10 }} whileInView={reduced ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl border border-border bg-background p-4 text-sm font-semibold">{item}</motion.div>)}
      </div>
      <div className="lg:hidden"><ResponsiveConnector reduced={reduced} /></div>
      <div className="rounded-[1.75rem] bg-foreground p-6 text-center text-background">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/45">{copy.route}</p>
        <p className="mt-3 text-4xl font-bold tracking-[-0.06em]">FLOW</p>
      </div>
      <div className="lg:hidden"><ResponsiveConnector reduced={reduced} /></div>
      <div className="grid gap-2">
        {items.slice(3).map((item, index) => <motion.div key={item} initial={reduced ? false : { opacity: 0, x: 10 }} whileInView={reduced ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + index * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl border border-border bg-background p-4 text-sm font-semibold">{item}</motion.div>)}
      </div>
    </div>
  );
}

function OperationScene({ items, reduced }: { items: readonly string[]; reduced: boolean }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-5 sm:gap-3">
      {items.map((item, index) => (
        <motion.li key={item} initial={reduced ? false : { opacity: 0, y: 10 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: motionDuration.reveal, ease: flowEase }} className="relative rounded-xl border border-border bg-background p-4">
          <span className="text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <p className="mt-3 text-sm font-semibold">{item}</p>
          {index < items.length - 1 ? (
            <>
              <span className="absolute left-1/2 top-full h-4 w-px -translate-x-1/2 bg-border sm:hidden" aria-hidden="true" />
              <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-muted-foreground sm:block" aria-hidden="true">→</span>
            </>
          ) : null}
        </motion.li>
      ))}
    </ol>
  );
}

function CompletionScene({ items, reduced, copy }: { items: readonly string[]; reduced: boolean; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <div className="grid gap-1 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-5">
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, index) => <motion.div key={item} initial={reduced ? false : { opacity: 0, scale: 0.96 }} whileInView={reduced ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl border border-border bg-background p-4 text-sm font-semibold">{item}</motion.div>)}
      </div>
      <ResponsiveConnector reduced={reduced} />
      <div className="rounded-2xl bg-foreground p-6 text-background">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">{copy.mergedContext}</p>
        <p className="mt-3 text-3xl font-bold tracking-[-0.05em]">{copy.customerRecord}</p>
        <p className="mt-3 text-sm leading-6 text-background/60">{copy.completionDescription}</p>
      </div>
    </div>
  );
}

function VisibilityScene({ items, reduced, index, copy }: { items: readonly string[]; reduced: boolean; index: number; copy: SiteCopy["platform"]["layers"] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
      <div className="grid grid-cols-2 gap-3 lg:col-span-7">
        {items.map((item, itemIndex) => (
          <motion.div key={item} initial={reduced ? false : { opacity: 0, y: 8 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: itemIndex * 0.05, duration: motionDuration.reveal, ease: flowEase }} className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold">{item}</span>
              <span className="hidden text-xs text-muted-foreground sm:inline">{copy.context}</span>
            </div>
            <motion.div className="mt-4 h-1.5 rounded-full bg-foreground/70" initial={reduced ? false : { scaleX: 0 }} whileInView={reduced ? undefined : { scaleX: 1 }} style={{ transformOrigin: "left" }} viewport={{ once: true }} transition={{ delay: 0.1 + itemIndex * 0.04, duration: motionDuration.story, ease: flowEase }} />
          </motion.div>
        ))}
      </div>
      <div className="rounded-2xl bg-foreground p-6 text-background lg:col-span-4 lg:col-start-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">{copy.operatingPicture} / {String(index + 1).padStart(2, "0")}</p>
        <p className="mt-3 text-3xl font-bold tracking-[-0.05em]">{copy.businessVisibility}</p>
        <p className="mt-3 text-sm leading-6 text-background/60">{copy.visibilityDescription}</p>
      </div>
    </div>
  );
}
