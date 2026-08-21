import type { Metadata } from "next";
import shared from "../V2Shared.module.css";
import V2PageHero from "@/components/v2/V2PageHero";
import V2MenuTabs from "@/components/v2/V2MenuTabs";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Belgian waffles, artisan ice cream, and drinks: the full Maison Bloem menu of classic, signature, and seasonal creations.",
};

export default function MenuV2Page() {
  return (
    <>
      <V2PageHero eyebrow="Our Menu" title="Menu." />
      <section className={`${shared.section} ${shared.container}`} style={{ borderBottom: "none" }}>
        <V2MenuTabs />
      </section>
    </>
  );
}
