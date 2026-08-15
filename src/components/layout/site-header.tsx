import Link from "next/link";

import { FlowNavLogo } from "@/components/brand/flow-nav-logo";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/primitives/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[#f5f5f5]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#f5f5f5]/85">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="FLOW home"
          className="inline-flex min-h-11 items-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f5f5]"
        >
          <FlowNavLogo />
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
