"use client";

import { useEffect, useState } from "react";
import styles from "./MenuTabs.module.css";
import ImageSlotView from "./ImageSlotView";
import type { MenuCategory, MenuItem } from "@/content/menu";

// Purely visual grouping so items don't all use the same placeholder tone.
const variantByCategory: Record<string, "warm" | "cool" | "light"> = {
  drinks: "cool",
  toppings: "light",
};

// Each item's real-image check happens server-side in menu/page.tsx (it
// needs node:fs, which can't run in this Client Component) and arrives here
// as the `hasImage` flag.
export type MenuCategoryWithImages = Omit<MenuCategory, "items"> & {
  items: (MenuItem & { hasImage: boolean })[];
};

type Props = {
  categories: MenuCategoryWithImages[];
};

export default function MenuTabs({ categories }: Props) {
  const [active, setActive] = useState(categories[0].id);

  // Deep-link support: footer links point to /menu#signature etc. This has
  // to run after mount (the hash isn't available during SSR, and using it
  // to seed initial state would cause a hydration mismatch) — so a one-time
  // effect reading an external system (the URL) is the correct pattern here.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (categories.some((c) => c.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive(hash);
    }
  }, [categories]);

  function selectTab(id: string) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  }

  const category = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="Menu categories">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            className={`${styles.tab} ${active === c.id ? styles.active : ""}`}
            onClick={() => selectTab(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className={styles.body}>
        <h2 className={styles.categoryTitle}>{category.title}</h2>
        <p className={styles.categoryDesc}>{category.description}</p>
        <div className={styles.items}>
          {category.items.map((item) => (
            <div className={styles.item} key={item.name}>
              <div className={styles.itemImage}>
                <ImageSlotView
                  name={item.imageSlot}
                  alt={item.name}
                  variant={variantByCategory[category.id] ?? "warm"}
                  hasReal={item.hasImage}
                  fit="contain"
                />
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemTop}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </div>
                <p className={styles.itemDesc}>{item.description}</p>
                {item.tag && <span className={styles.itemTag}>{item.tag}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
