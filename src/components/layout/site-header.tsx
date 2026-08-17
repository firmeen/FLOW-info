import Link from "next/link";

import { FlowNavLogo } from "@/components/brand/flow-nav-logo";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/primitives/container";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { BrandContent, NavigationContent } from "@/i18n/schema";

export function SiteHeader({ locale, brand, navigation, copy }: { locale: Locale; brand: BrandContent; navigation: NavigationContent; copy: SiteCopy["navigation"] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[#f5f5f5]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#f5f5f5]/85">
      <Container className="flex h-[72px] items-center justify-between gap-4 sm:gap-6">
        <Link href={localizedPath(locale, "/")} aria-label={copy.homeAria} className="inline-flex min-h-11 items-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f5f5]">
          <FlowNavLogo />
          <span className="sr-only">{brand.platform}</span>
        </Link>
        <div className="flex items-center gap-2">
          <DesktopNav locale={locale} navigation={navigation} viewAllLabel={copy.viewAllSolutions} />
          <div className="hidden xl:block"><LanguageSwitcher locale={locale} copy={copy} compact /></div>
          <Link href={localizedPath(locale, "/contact")} className="hidden min-h-10 items-center justify-center rounded-full border border-foreground bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:inline-flex">{copy.contact}</Link>
          <MobileNav locale={locale} navigation={navigation} tagline={brand.tagline} copy={copy} />
        </div>
      </Container>
    </header>
  );
}
