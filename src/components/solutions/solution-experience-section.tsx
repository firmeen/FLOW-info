import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import type { SolutionExperience } from "@/content/solutions";

export function SolutionExperienceSection({ experiences }: { experiences: readonly SolutionExperience[] }) {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          inverse
          eyebrow="ONE FLOW / THREE VIEWS"
          title="The same operation looks different to each person involved."
          description="The product experience should preserve one connected workflow while giving customers, staff, and owners the context appropriate to their role."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/15 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article key={experience.label} className="bg-foreground p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">
                {experience.label}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-background">
                {experience.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-background/60">
                {experience.description}
              </p>
              <ul className="mt-7 space-y-3 border-t border-background/15 pt-6 text-sm leading-6 text-background/75">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-background/45" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
