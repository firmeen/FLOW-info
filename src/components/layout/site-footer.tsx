import Link from "next/link";
import { RiGithubLine } from "@remixicon/react";

import { FlowWordmark } from "@/components/brand/flow-wordmark";
import { Container } from "@/components/primitives/container";
import { brand } from "@/content/brand";
import { footerNavigation } from "@/content/navigation";

const footerGroups = [
  { label: "Platform", links: footerNavigation.platform },
  { label: "Solutions", links: footerNavigation.solutions },
  { label: "Company", links: footerNavigation.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-foreground text-background">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          <div>
            <FlowWordmark className="text-background" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-background/60">
              {brand.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">
                  {group.label}
                </p>
                <ul className="mt-4 grid gap-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/45">
                Connect
              </p>
              <a
                href={brand.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
              >
                <RiGithubLine aria-hidden="true" className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-background/45">
          © {new Date().getFullYear()} {brand.company}. FLOW representation website.
        </div>
      </Container>
    </footer>
  );
}
