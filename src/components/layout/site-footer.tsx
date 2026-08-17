import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

import { FlowBrand } from "@/components/brand/flow-brand";
import { Container } from "@/components/primitives/container";
import { brand } from "@/content/brand";
import { contactContent } from "@/content/contact";
import { footerNavigation } from "@/content/navigation";

const footerGroups = [
  { label: "Platform", links: footerNavigation.platform },
  { label: "Solutions", links: footerNavigation.solutions },
  { label: "Company", links: footerNavigation.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050507] text-background">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr] lg:gap-20">
          <div>
            <FlowBrand variant="reverse" className="w-[9rem] sm:w-[10rem]" alt="FLOW" />
            <p className="mt-6 max-w-xs text-sm leading-6 text-background/60">{brand.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">{group.label}</p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">Connect</p>
              <ul className="mt-4 grid gap-3 text-sm">
                {contactContent.channels.map((channel) => (
                  <li key={channel.type}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.type === "email" ? undefined : "_blank"}
                        rel={channel.type === "email" ? undefined : "noreferrer"}
                        className="inline-flex items-center gap-1.5 text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                      >
                        {channel.label}
                        {channel.type !== "email" ? <RiExternalLinkLine aria-hidden="true" className="size-3" /> : null}
                      </a>
                    ) : (
                      <span className="text-background/55" title={channel.value}>{channel.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.company}. FLOW representation website.</span>
          <span>Instagram @fim.flow · LINE @614henux</span>
        </div>
      </Container>
    </footer>
  );
}
