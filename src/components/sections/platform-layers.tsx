import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";
import { platformLayers } from "@/content/platform";

export function PlatformLayers() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PLATFORM LAYERS"
          title="Each layer has a job. The value comes from keeping them connected."
          description="FLOW separates responsibilities clearly while preserving continuity across the customer, the team, completion, and owner visibility."
        />

        <div className="mt-14 border-t border-border">
          {platformLayers.map((layer, index) => (
            <FadeIn
              key={layer.index}
              delay={(index % 2) * 0.04}
              className="grid gap-6 border-b border-border py-9 sm:py-11 lg:grid-cols-12"
            >
              <div className="lg:col-span-2">
                <p className="text-xs tabular-nums text-muted-foreground">{layer.index}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em]">{layer.label}</p>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{layer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{layer.description}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2 lg:col-span-5 lg:col-start-8">
                {layer.capabilities.map((capability) => (
                  <li key={capability} className="rounded-full border border-border px-3 py-2 text-xs font-medium">
                    {capability}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
