import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { brand } from "@/content/brand";

const foundationLinks = [
  {
    title: "Platform",
    href: "/platform",
    description: "Understand the shared operational foundation behind FLOW.",
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "See how FoodFlow, JobFlow, and CareFlow adapt the core platform.",
  },
  {
    title: "How FLOW Works",
    href: "/how-it-works",
    description: "Follow the movement from customer action to useful business data.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100svh-72px)] bg-foreground text-background">
        <Container className="flex min-h-[calc(100svh-72px)] flex-col justify-between py-12 sm:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">
            {brand.company} / {brand.platform} platform
          </p>

          <div className="max-w-5xl py-20">
            <h1 className="text-balance text-[clamp(3.4rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              <RevealText>Systems that flow.</RevealText>
              <RevealText delay={0.08}>Businesses that grow.</RevealText>
            </h1>
            <FadeIn delay={0.18} className="mt-10 max-w-2xl">
              <p className="text-base leading-7 text-background/65 sm:text-xl sm:leading-8">
                {brand.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/platform"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                >
                  Explore Platform
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-background/25 px-5 text-sm font-medium text-background transition-colors hover:border-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                >
                  View Solutions →
                </Link>
              </div>
            </FadeIn>
          </div>

          <p className="text-xs uppercase tracking-[0.16em] text-background/40">
            Scroll to explore
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="FLOW FOUNDATION"
            title="Your business has a flow."
            description="Every customer action starts something — an order, a booking, a job, or a payment. FLOW is designed to connect what happens next through one operational foundation."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
            {foundationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-background p-7 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-8"
              >
                <h2 className="text-xl font-medium tracking-[-0.035em]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-8 inline-block text-sm font-medium transition-transform duration-200 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
