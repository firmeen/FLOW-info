import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { productSurfaces } from "@/content/home";

export function ProductSurfacesSection() {
  return (
    <Section tone="dark">
      <Container>
        <SectionHeading
          eyebrow="PRODUCT EXPERIENCE"
          title="Built around the people moving the work."
          description="The representation site does not invent product screenshots or fake operational metrics. Until verified product captures are selected, this section explains the three product surfaces FLOW is designed to connect."
          inverse
        />

        <div className="mt-14 border-t border-background/15">
          {productSurfaces.map((surface, index) => (
            <FadeIn
              key={surface.label}
              delay={index * 0.06}
              className="grid gap-6 border-b border-background/15 py-8 sm:py-10 lg:grid-cols-12 lg:items-start"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45 lg:col-span-3">
                {surface.label}
              </p>
              <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl lg:col-span-4">
                {surface.title}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-background/60 sm:text-base lg:col-span-5">
                {surface.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
