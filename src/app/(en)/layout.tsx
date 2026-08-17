import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";

import { SiteShell } from "@/components/layout/site-shell";
import { createRootMetadata } from "@/lib/metadata";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata = createRootMetadata("en");

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
