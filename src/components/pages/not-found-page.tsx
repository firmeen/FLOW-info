import Link from "next/link";

import { Container } from "@/components/primitives/container";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";

export function NotFoundPage({ locale, copy }: { locale: Locale; copy: SiteCopy["notFound"] }) {
  return (
    <section className="flex min-h-[70svh] items-center bg-background py-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{copy.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{copy.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={localizedPath(locale, "/")} className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{copy.home}</Link>
          <Link href={localizedPath(locale, "/solutions")} className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{copy.solutions}</Link>
        </div>
      </Container>
    </section>
  );
}
