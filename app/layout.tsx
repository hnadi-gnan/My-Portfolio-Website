import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { copy } from "@/content/copy.en";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: copy.meta.title,
    template: "%s",
  },
  description: copy.meta.description,
  keywords: [
    "Hanadi Qanan",
    "ERP specialist",
    "Odoo developer",
    "Odoo consultant",
    "business analyst",
    "technical consultant",
    "ERP implementation",
    "systems integration",
  ],
  authors: [{ name: site.name.short }],
  creator: site.name.short,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: copy.meta.title,
    description: copy.meta.description,
    siteName: site.name.short,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: copy.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name.full,
  alternateName: site.name.short,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  knowsAbout: [
    "ERP implementation",
    "Odoo",
    "Business analysis",
    "Systems integration",
    "Python",
    "PostgreSQL",
    "Technical consulting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <noscript>
          {/* Without JS, reveal-on-scroll can't run — show everything. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
