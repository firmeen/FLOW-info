import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { problemGroups } from "@/content/home";

export function ProblemSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="THE PROBLEM"
          title="Business operations shouldn’t feel disconnected."
          description="Customers, staff, and owners often experience the same business through different tools and fragments of information. The problem is not a lack of software — it is a lack of continuity between the work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {problemGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.08} className="bg-background p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="mt-8 space-y-3 text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">FLOW CONNECTS THEM.</p>
        </FadeIn>
      </Container>
    </Section>
  );
}
