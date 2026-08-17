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
      <Container className="py-24 sm:py-32 lg:py-40">
        <FadeIn className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            <StatementText text={title} highlights={titleHighlights} />
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <StatementText text={description} highlights={descriptionHighlights} />
          </p>
          {quote ? (
            <p className="mt-12 max-w-3xl border-l border-foreground/20 pl-5 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
              <StatementText text={quote} highlights={quoteHighlights} />
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
