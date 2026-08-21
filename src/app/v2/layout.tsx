import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import styles from "./V2Layout.module.css";
import V2Nav from "@/components/v2/V2Nav";
import V2Footer from "@/components/v2/V2Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair-raw",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${outfit.variable} ${styles.root}`}>
      <V2Nav />
      <main>{children}</main>
      <V2Footer />
    </div>
  );
}
