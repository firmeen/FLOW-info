import type { ReactNode } from "react";
import { Geist_Mono, Noto_Sans_Thai } from "next/font/google";

import "../globals.css";

import { SiteShell } from "@/components/layout/site-shell";
import { createRootMetadata } from "@/lib/metadata";

const notoSansThai = Noto_Sans_Thai({ variable: "--font-sans", subsets: ["thai", "latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata = createRootMetadata("th");

export default function ThaiRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className={`${notoSansThai.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteShell locale="th">{children}</SiteShell>
      </body>
    </html>
  );
}
