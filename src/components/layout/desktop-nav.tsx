import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { primaryNavigation, solutionNavigation } from "@/content/navigation";

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex" align="end">
      <NavigationMenuList>
        {primaryNavigation.map((item) => {
          if ("children" in item) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger className="rounded-full bg-transparent px-4 text-foreground/70 hover:bg-muted hover:text-foreground">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[31rem] p-2">
                    <div className="grid gap-1">
                      {solutionNavigation.map((solution) => (
                        <NavigationMenuLink
                          key={solution.href}
                          render={<Link href={solution.href} />}
                          className="items-start rounded-xl p-4"
                        >
                          <span className="grid gap-1">
                            <span className="font-medium text-foreground">
                              {solution.label}
                            </span>
                            <span className="text-xs leading-5 text-muted-foreground">
                              {solution.description}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-border/70 pt-2">
                      <NavigationMenuLink
                        render={<Link href="/solutions" />}
                        className="rounded-xl px-4 py-3 font-medium"
                      >
                        View all solutions →
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className="rounded-full px-4 text-foreground/70 hover:text-foreground"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
