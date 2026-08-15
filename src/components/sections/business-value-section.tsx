import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { businessValues } from "@/content/home";

export function BusinessValueSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="BUSINESS VALUE"
          title="The point is not more software. It is a clearer operation."
          description="Features matter when they reduce uncertainty, keep work connected, and make operational information useful to the people running the business."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {businessValues.map((value, index) => (
            <FadeIn key={value.title} delay={(index % 2) * 0.06} className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold tracking-[0.08em]">{value.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
                {value.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
