import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";

const architecture = [
  ["ENTRY", "QR · NFC · Link · Website"],
  ["ACTION", "Order · Book · Queue · Request"],
  ["FLOW CORE", "Order · Queue · Appointment · Job · Resource"],
  ["OPERATION", "Staff · Assignment · Status · Completion"],
  ["RECORD", "Payment · Customer · Notification"],
  ["VISIBILITY", "Dashboard · Reports · Insights"],
] as const;

export function PlatformArchitecture() {
  return (
    <Section tone="dark" aria-labelledby="platform-architecture-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/45">PLATFORM ARCHITECTURE</p>
            <h2 id="platform-architecture-title" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              One connected path from entry to visibility.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-background/60">
              The architecture is presented as a business flow: customer intent becomes operational work, completion becomes a record, and the record becomes useful visibility.
            </p>
          </div>

          <ol className="relative lg:col-span-7 lg:col-start-6">
            {architecture.map(([label, detail], index) => (
              <li key={label} className="relative border-t border-background/15 py-6 last:border-b">
                <div className="grid gap-3 sm:grid-cols-[64px_140px_1fr] sm:items-baseline">
                  <span className="text-xs tabular-nums text-background/35">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-background/50">{label}</span>
                  <span className="text-base font-medium tracking-[-0.02em] sm:text-lg">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
