import { RevealText } from "@/components/motion/reveal-text";
import { Container } from "@/components/primitives/container";

export function QuoteSection({ lines, eyebrow }: { lines: readonly string[]; eyebrow: string }) {
  return (
    <section className="flex min-h-[68svh] items-center bg-foreground py-24 text-background sm:py-32">
      <Container>
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.18em] text-background/45">{eyebrow}</p>
        <h2 className="max-w-6xl text-balance text-[clamp(2.8rem,7vw,7rem)] font-semibold uppercase leading-[0.92] tracking-[-0.065em]">
          {lines.map((line, index) => (
            <RevealText key={`${line}-${index}`} delay={index * 0.07}>{line}</RevealText>
          ))}
        </h2>
      </Container>
    </section>
  );
}
