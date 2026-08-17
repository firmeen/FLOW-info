import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

import { FlowBrand } from "@/components/brand/flow-brand";
import { Container } from "@/components/primitives/container";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteCopy } from "@/i18n/copy";
import type { BrandContent, ContactContent, NavigationContent } from "@/i18n/schema";

export function SiteFooter({
  locale,
  brand,
  navigation,
  contact,
  copy,
}: {
  locale: Locale;
  brand: BrandContent;
  navigation: NavigationContent;
  contact: ContactContent;
  copy: SiteCopy["footer"];
}) {
  const footerGroups = [
    { label: copy.platform, links: navigation.footerNavigation.platform },
    { label: copy.solutions, links: navigation.footerNavigation.solutions },
    { label: copy.company, links: navigation.footerNavigation.company },
  ];

  return (
    <footer className="border-t border-flow-off-white/10 bg-flow-deep text-flow-off-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-20">
          <div>
            <FlowBrand variant="reverse" className="w-[9rem] sm:w-[10rem]" alt="FLOW" />
            <p className="mt-6 max-w-xs text-sm leading-6 text-flow-off-white/60">{brand.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flow-aqua-mist/60">{group.label}</p>
                <ul className="mt-4 grid gap-1 text-sm sm:gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizedPath(locale, link.href)}
                        className="inline-flex min-h-9 items-center py-1.5 text-flow-off-white/72 transition-colors hover:text-flow-aqua-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow-aqua"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flow-aqua-mist/60">{copy.connect}</p>
              <ul className="mt-4 grid gap-1 text-sm sm:gap-3">
                {contact.channels.map((channel) => (
                  <li key={channel.type}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.type === "email" ? undefined : "_blank"}
                        rel={channel.type === "email" ? undefined : "noreferrer"}
                        className="inline-flex min-h-9 items-center gap-1.5 py-1.5 text-flow-off-white/72 transition-colors hover:text-flow-aqua-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow-aqua"
                      >
                        {channel.label}
                        {channel.type !== "email" ? <RiExternalLinkLine aria-hidden="true" className="size-3" /> : null}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-9 items-center py-1.5 text-flow-off-white/55" title={channel.value}>{channel.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-flow-off-white/10 pt-6 text-xs leading-5 text-flow-off-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.company}. {copy.representation}</span>
          <span>Instagram @fim.flow · LINE @614henux</span>
        </div>
      </Container>
    </footer>
  );
}
