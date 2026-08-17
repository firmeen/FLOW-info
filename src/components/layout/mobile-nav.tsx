"use client";

import Link from "next/link";
import { RiMenuLine } from "@remixicon/react";

import { FlowBrand } from "@/components/brand/flow-brand";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { NavigationContent } from "@/i18n/schema";

export function MobileNav({ locale, navigation, tagline, copy }: { locale: Locale; navigation: NavigationContent; tagline: string; copy: SiteCopy["navigation"] }) {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" aria-label={copy.openNavigation} className="size-11 rounded-full" />}>
          <RiMenuLine aria-hidden="true" />
        </SheetTrigger>
        <SheetContent side="right" className="h-dvh max-h-dvh w-full max-w-none border-l border-border bg-[#f8f8f8] p-0 sm:max-w-[30rem]">
          <SheetHeader className="flex min-h-[72px] shrink-0 justify-center border-b border-border px-5 py-4 pr-16 text-left sm:px-6">
            <FlowBrand variant="compact" decorative loading="eager" className="w-[7.35rem]" />
            <SheetTitle className="sr-only">{copy.mobileTitle}</SheetTitle>
            <SheetDescription className="sr-only">{copy.mobileDescription}</SheetDescription>
          </SheetHeader>
          <nav aria-label={copy.mobileAria} className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 py-6 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8">
            <div className="grid gap-1">
              {navigation.primaryNavigation.map((item) => item.children ? (
                <div key={item.href} className="border-b border-border/70 py-4">
                  <SheetClose render={<Link href={localizedPath(locale, item.href)} className="block py-2 text-2xl font-medium tracking-[-0.04em]" />}>{item.label}</SheetClose>
                  <div className="mt-3 grid gap-1 border-l border-border pl-4">
                    {navigation.solutionNavigation.map((solution) => (
                      <SheetClose key={solution.href} render={<Link href={localizedPath(locale, solution.href)} className="grid min-h-11 gap-0.5 rounded-lg px-3 py-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />}>
                        <span className="font-medium">{solution.label}</span>
                        <span className="text-xs leading-5 text-muted-foreground">{solution.description}</span>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ) : (
                <SheetClose key={item.href} render={<Link href={localizedPath(locale, item.href)} className="border-b border-border/70 py-6 text-2xl font-medium tracking-[-0.04em] hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />}>{item.label}</SheetClose>
              ))}
              <SheetClose render={<Link href={localizedPath(locale, "/contact")} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />}>{copy.contact}</SheetClose>
            </div>
            <div className="mt-auto pt-10">
              <div className="border-t border-border/70 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.language}</p>
                <LanguageSwitcher locale={locale} copy={copy} />
              </div>
              <p className="pt-10 text-xs font-medium uppercase leading-5 tracking-[0.16em] text-muted-foreground">{tagline}</p>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
