import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { localizedPath, type Locale } from "@/i18n/config";
import type { NavigationContent } from "@/i18n/schema";

export function DesktopNav({ locale, navigation, viewAllLabel }: { locale: Locale; navigation: NavigationContent; viewAllLabel: string }) {
  return (
    <NavigationMenu className="hidden xl:flex" align="end">
      <NavigationMenuList>
        {navigation.primaryNavigation.map((item) => {
          if (item.children) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger className="rounded-full bg-transparent px-4 text-foreground/70 hover:bg-muted hover:text-foreground">{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[31rem] p-2">
                    <div className="grid gap-1">
                      {navigation.solutionNavigation.map((solution) => (
                        <NavigationMenuLink key={solution.href} render={<Link href={localizedPath(locale, solution.href)} />} className="items-start rounded-xl p-4">
                          <span className="grid gap-1">
                            <span className="font-medium text-foreground">{solution.label}</span>
                            <span className="text-xs leading-5 text-muted-foreground">{solution.description}</span>
                          </span>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-border/70 pt-2">
                      <NavigationMenuLink render={<Link href={localizedPath(locale, "/solutions")} />} className="rounded-xl px-4 py-3 font-medium">{viewAllLabel}</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink render={<Link href={localizedPath(locale, item.href)} />} className="rounded-full px-4 text-foreground/70 hover:text-foreground">{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
