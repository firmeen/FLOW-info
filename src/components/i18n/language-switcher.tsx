"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { alternatePath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  copy,
  compact = false,
  inverse = false,
}: {
  locale: Locale;
  copy: SiteCopy["navigation"];
  compact?: boolean;
  inverse?: boolean;
}) {
  const pathname = usePathname() || "/";
  const options: { locale: Locale; label: string; short: string }[] = [
    { locale: "en", label: copy.english, short: copy.englishShort },
    { locale: "th", label: copy.thai, short: copy.thaiShort },
  ];

  return (
    <nav
      aria-label={copy.languageAria}
      className={cn(
        "inline-flex items-center rounded-full border p-1",
        inverse ? "border-background/15 bg-background/[0.04]" : "border-border bg-background/70",
        compact ? "gap-0.5" : "gap-1",
      )}
    >
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <Link
            key={option.locale}
            href={alternatePath(pathname, option.locale)}
            hrefLang={option.locale}
            lang={option.locale}
            aria-current={active ? "page" : undefined}
            title={option.label}
            className={cn(
              "inline-flex min-h-9 min-w-10 items-center justify-center rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2",
              inverse
                ? active
                  ? "bg-background text-foreground focus-visible:ring-background"
                  : "text-background/55 hover:text-background focus-visible:ring-background"
                : active
                  ? "bg-foreground text-background focus-visible:ring-ring"
                  : "text-muted-foreground hover:text-foreground focus-visible:ring-ring",
            )}
          >
            {compact ? option.short : option.label}
          </Link>
        );
      })}
    </nav>
  );
}
