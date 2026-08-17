import { FadeIn } from "@/components/motion/fade-in";
import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Section } from "@/components/primitives/section";
import type { SiteCopy } from "@/i18n/copy";

export function BrandStatement({ copy }: { copy: SiteCopy["home"]["brandStatement"] }) {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="text-balance text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            <RevealText>{copy.line1}</RevealText>
            <RevealText delay={0.06}>
              {copy.line2Lead}<EmphasisText tone="outcome">{copy.line2Emphasis}</EmphasisText>
            </RevealText>
          </h2>
        </div>
        <FadeIn delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-8 text-muted-foreground">
            {copy.descriptionLead}
            <EmphasisText tone="contrast">{copy.order}</EmphasisText>, {" "}
            <EmphasisText tone="contrast">{copy.booking}</EmphasisText>, {" "}
            <EmphasisText tone="contrast">{copy.job}</EmphasisText> {copy.listConjunction} {" "}
            <EmphasisText tone="contrast">{copy.payment}</EmphasisText>{copy.descriptionEnd}
          </p>
          <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.03em]">
            <EmphasisText tone="product">{copy.flowLead}</EmphasisText>{copy.flowText}<EmphasisText tone="outcome">{copy.flowOutcome}</EmphasisText>
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
