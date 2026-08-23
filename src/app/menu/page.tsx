import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuTabs from "@/components/MenuTabs";
import { menuCategories } from "@/content/menu";
import { imageExists } from "@/lib/imageExists";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Belgian waffles, artisan ice cream, and drinks — the full Maison Bloem menu of classic, signature, and seasonal creations.",
};

export default function MenuPage() {
  // MenuTabs is a Client Component (interactive tabs), so the node:fs-based
  // image check has to happen here and get passed down as plain booleans.
  const categoriesWithImages = menuCategories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      hasImage: imageExists(item.imageSlot),
    })),
  }));

  return (
    <>
      <PageHero eyebrow="Our Menu" title="Menu." bg="rosewood" />
      <MenuTabs categories={categoriesWithImages} />
    </>
  );
}
