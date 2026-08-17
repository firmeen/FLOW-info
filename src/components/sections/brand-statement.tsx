import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";

export function BrandStatement() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            FLOW / PRINCIPLE
          </p>
          <h2 className="text-balance text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            <RevealText>Your business</RevealText>
            <RevealText delay={0.06}>
              has a <EmphasisText tone="outcome">flow.</EmphasisText>
            </RevealText>
          </h2>
        </div>
        <FadeIn delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-8 text-muted-foreground">
            Every customer action starts something — an <EmphasisText tone="contrast">order</EmphasisText>, a <EmphasisText tone="contrast">booking</EmphasisText>, a <EmphasisText tone="contrast">job</EmphasisText>, or a <EmphasisText tone="contrast">payment</EmphasisText>.
          </p>
          <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.03em]">
            <EmphasisText tone="product">FLOW</EmphasisText> connects <EmphasisText tone="outcome">what happens next.</EmphasisText>
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
