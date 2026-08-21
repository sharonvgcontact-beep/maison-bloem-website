"use client";

import { useEffect, useState } from "react";
import styles from "./V2MenuTabs.module.css";
import { menuCategories } from "@/content/menu";

export default function V2MenuTabs() {
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (menuCategories.some((c) => c.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActive(hash);
    }
  }, []);

  function selectTab(id: string) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  }

  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="Menu categories">
        {menuCategories.map((c) => (
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

      <h2 className={styles.categoryTitle}>{category.title}</h2>
      <p className={styles.categoryDesc}>{category.description}</p>
      <div className={styles.items}>
        {category.items.map((item) => (
          <div className={styles.item} key={item.name}>
            <div className={styles.itemTop}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemPrice}>{item.price}</span>
            </div>
            <p className={styles.itemDesc}>{item.description}</p>
            {item.tag && <span className={styles.itemTag}>{item.tag}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
