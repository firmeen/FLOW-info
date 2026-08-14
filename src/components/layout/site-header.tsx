import Link from "next/link";

import { FlowWordmark } from "@/components/brand/flow-wordmark";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/primitives/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="FLOW home"
          className="inline-flex min-h-11 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <FlowWordmark />
        </Link>

        <div className="flex items-center gap-2">
          <DesktopNav />
          <Link
            href="/contact"
            className="hidden min-h-10 items-center justify-center rounded-full border border-foreground bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
