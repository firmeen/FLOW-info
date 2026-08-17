import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getLocalizedContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const content = getLocalizedContent(locale);
  const copy = getSiteCopy(locale);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-background px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2 focus:ring-ring"
      >
        {copy.navigation.skipToContent}
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader
          locale={locale}
          brand={content.brand}
          navigation={content.navigation}
          copy={copy.navigation}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter
          locale={locale}
          brand={content.brand}
          navigation={content.navigation}
          contact={content.contact}
          copy={copy.footer}
        />
      </div>
    </>
  );
}
