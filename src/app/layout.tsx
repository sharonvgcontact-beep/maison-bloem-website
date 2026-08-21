import type { Metadata } from "next";
import { Fraunces, Barlow, Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/content/brand";

// Note: these expose raw --font-fraunces-raw/etc variables (not --font-heading
// directly) so tokens.css stays the single source of truth for the semantic
// --font-heading/--font-sub/--font-body names used across every component.
const fraunces = Fraunces({
  variable: "--font-fraunces-raw",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = "https://maisonbloem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.shortTagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.tagline,
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    siteName: brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${barlow.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
