"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";
import BrandMark from "./BrandMark";

// Replaces the native pointer with the Bloem house-and-waffle mark on
// mouse-driven devices only (pointer: fine) — touch devices are untouched.
// Text inputs keep the native text cursor so users can still see where
// they're typing (see the ":not(input):not(textarea)" carve-out below).
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = cursorRef.current;
    if (!el) return;

    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      el!.style.left = `${e.clientX}px`;
      el!.style.top = `${e.clientY}px`;
      el!.classList.add(styles.visible);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], .clickable");
      el!.classList.toggle(styles.hovering, Boolean(isInteractive));
    }

    function handleDown() {
      el!.classList.add(styles.clicking);
    }
    function handleUp() {
      el!.classList.remove(styles.clicking);
    }
    function handleLeaveWindow() {
      el!.classList.remove(styles.visible);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <BrandMark className={styles.icon} stroke="#000" strokeWidth={2.6} />
    </div>
  );
}
