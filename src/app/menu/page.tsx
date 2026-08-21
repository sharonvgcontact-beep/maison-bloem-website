import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuTabs from "@/components/MenuTabs";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Belgian waffles, artisan ice cream, and drinks — the full Maison Bloem menu of classic, signature, and seasonal creations.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Our Menu" title="Menu." bg="rosewood" />
      <MenuTabs />
    </>
  );
}
