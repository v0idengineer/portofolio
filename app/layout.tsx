import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/projects";
import SmoothScroll from "@/components/SmoothScroll";
import IntroGate from "@/components/IntroGate";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: `Portofolio ${siteConfig.name} — Fullstack Developer, Video Editor, dan Photographer based di ${siteConfig.location}.`,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: `Portofolio ${siteConfig.name}`,
    url: `https://${siteConfig.vercelUrl}`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <SmoothScroll>
          <IntroGate />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
