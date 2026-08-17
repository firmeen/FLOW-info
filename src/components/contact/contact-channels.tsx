"use client";

import { useEffect, useState } from "react";
import {
  RiCheckLine,
  RiExternalLinkLine,
  RiFacebookCircleLine,
  RiFileCopyLine,
  RiGithubLine,
  RiInstagramLine,
  RiMailLine,
  RiMessage2Line,
} from "@remixicon/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { ContactChannel } from "@/content/contact";
import { flowEase, motionDuration } from "@/lib/motion";

export function ContactChannels({ channels }: { channels: readonly ContactChannel[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(null), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = async (channel: ContactChannel) => {
    if (!channel.copyValue) return;
    try {
      await navigator.clipboard.writeText(channel.copyValue);
      setCopied(channel.type);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map((channel, index) => {
        const isGithub = channel.type === "github";
        const isCopied = copied === channel.type;
        return (
          <motion.div
            key={channel.type}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: motionDuration.reveal, delay: index * 0.05, ease: flowEase }}
            className={isGithub ? "sm:col-span-2" : undefined}
          >
            <Card className="h-full py-0">
              <CardHeader className="border-b border-border py-5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ChannelIcon type={channel.type} />
                  {channel.label}
                </div>
              </CardHeader>
              <CardContent className="py-6">
                <p className="break-words text-xl font-bold tracking-[-0.035em] sm:text-2xl">{channel.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{channel.description}</p>
              </CardContent>
              <CardFooter className="flex-wrap gap-2 border-t border-border py-4">
                {channel.href ? (
                  <Button
                    render={<a href={channel.href} target={channel.type === "email" ? undefined : "_blank"} rel={channel.type === "email" ? undefined : "noreferrer"} />}
                    variant="outline"
                    size="sm"
                    className="min-h-11 px-4"
                  >
                    {channel.action}
                    {channel.type !== "email" ? <RiExternalLinkLine data-icon="inline-end" /> : null}
                  </Button>
                ) : null}
                {channel.copyValue ? (
                  <Button type="button" variant="ghost" size="sm" className="min-h-11 px-4" onClick={() => copy(channel)} aria-live="polite">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isCopied ? "copied" : "copy"}
                        initial={reduceMotion ? false : { opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -3 }}
                        transition={{ duration: motionDuration.fast }}
                        className="inline-flex items-center gap-1.5"
                      >
                        {isCopied ? <RiCheckLine /> : <RiFileCopyLine />}
                        {isCopied ? "Copied" : channel.href ? "Copy" : channel.action}
                      </motion.span>
                    </AnimatePresence>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

function ChannelIcon({ type }: { type: ContactChannel["type"] }) {
  const className = "size-4";
  if (type === "instagram") return <RiInstagramLine aria-hidden="true" className={className} />;
  if (type === "facebook") return <RiFacebookCircleLine aria-hidden="true" className={className} />;
  if (type === "email") return <RiMailLine aria-hidden="true" className={className} />;
  if (type === "line") return <RiMessage2Line aria-hidden="true" className={className} />;
  return <RiGithubLine aria-hidden="true" className={className} />;
}
