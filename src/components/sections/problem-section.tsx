import { ProblemExperience } from "@/components/home/problem-experience";
import { EmphasisText } from "@/components/primitives/emphasis-text";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { SectionHeading } from "@/components/primitives/section-heading";

export function ProblemSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="THE PROBLEM"
          title={
            <>
              Business operations shouldn’t feel <EmphasisText>disconnected.</EmphasisText>
            </>
          }
          description={
            <p>
              Customers, staff, and owners often experience the same business through different tools and fragments of information. The real cost is the <EmphasisText className="font-semibold">context lost between actions.</EmphasisText>
            </p>
          }
        />
        <ProblemExperience />
      </Container>
    </Section>
  );
}
