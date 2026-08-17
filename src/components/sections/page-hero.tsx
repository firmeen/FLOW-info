import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { StatementText, type StatementHighlight } from "@/components/primitives/statement-text";

export function PageHero({
  eyebrow,
  title,
  titleHighlights,
  description,
  descriptionHighlights,
  quote,
  quoteHighlights,
}: {
  eyebrow: string;
  title: string;
  titleHighlights?: readonly StatementHighlight[];
  description: string;
  descriptionHighlights?: readonly StatementHighlight[];
  quote?: string;
  quoteHighlights?: readonly StatementHighlight[];
}) {
  return (
    <section className="border-b border-border bg-background">
      <Container className="py-20 sm:py-32 lg:py-40">
        <FadeIn className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flow-ocean-dark">
            {eyebrow}
          </p>
          <h1 className="flow-display mt-6 max-w-4xl text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl sm:leading-[1] sm:tracking-[-0.055em] lg:text-7xl">
            <StatementText text={title} highlights={titleHighlights} />
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
            <StatementText text={description} highlights={descriptionHighlights} />
          </p>
          {quote ? (
            <p className="mt-10 max-w-3xl border-l border-flow-aqua/70 pl-4 text-lg font-medium tracking-[-0.03em] sm:mt-12 sm:pl-5 sm:text-2xl">
              <StatementText text={quote} highlights={quoteHighlights} />
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
