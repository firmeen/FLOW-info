"use client";

import Link from "next/link";
import { RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand } from "@/content/brand";
import { primaryNavigation, solutionNavigation } from "@/content/navigation";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation"
              className="rounded-full"
            />
          }
        >
          <RiMenuLine aria-hidden="true" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full max-w-none border-l border-border bg-background p-0 sm:max-w-[30rem]"
        >
          <SheetHeader className="border-b border-border px-6 py-5 pr-16 text-left">
            <SheetTitle className="text-sm font-semibold tracking-[-0.03em]">
              FLOW
            </SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation for the FLOW representation website.
            </SheetDescription>
          </SheetHeader>

          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col px-6 py-8">
            <div className="grid gap-1">
              {primaryNavigation.map((item) => {
                if ("children" in item) {
                  return (
                    <div key={item.href} className="border-b border-border/70 py-4">
                      <SheetClose
                        render={
                          <Link
                            href={item.href}
                            className="block py-2 text-2xl font-medium tracking-[-0.04em]"
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                      <div className="mt-3 grid gap-1 border-l border-border pl-4">
                        {solutionNavigation.map((solution) => (
                          <SheetClose
                            key={solution.href}
                            render={
                              <Link
                                href={solution.href}
                                className="grid gap-0.5 rounded-lg px-3 py-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              />
                            }
                          >
                            <span className="font-medium">{solution.label}</span>
                            <span className="text-xs leading-5 text-muted-foreground">
                              {solution.description}
                            </span>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className="border-b border-border/70 py-6 text-2xl font-medium tracking-[-0.04em] hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                );
              })}

              <SheetClose
                render={
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                }
              >
                Contact
              </SheetClose>
            </div>

            <p className="mt-auto pt-12 text-xs font-medium uppercase leading-5 tracking-[0.16em] text-muted-foreground">
              {brand.tagline}
            </p>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
