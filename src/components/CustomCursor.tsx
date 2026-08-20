"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

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
      <svg
        className={styles.icon}
        viewBox="0 0 120 112"
        fill="none"
        stroke="#000"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* roofline (outer + inset fascia) */}
        <path d="M16 52 L60 16 L104 52" />
        <path d="M30 52 L60 28 L90 52" />

        {/* walls */}
        <line x1="30" y1="52" x2="30" y2="80" />
        <line x1="90" y1="52" x2="90" y2="80" />

        {/* window frame + 3x3 panes */}
        <rect x="38" y="55" width="44" height="30" rx="2" />
        <rect x="41" y="58" width="11.3" height="6.7" rx="1.4" />
        <rect x="54.3" y="58" width="11.3" height="6.7" rx="1.4" />
        <rect x="67.6" y="58" width="11.3" height="6.7" rx="1.4" />
        <rect x="41" y="66.7" width="11.3" height="6.7" rx="1.4" />
        <rect x="54.3" y="66.7" width="11.3" height="6.7" rx="1.4" />
        <rect x="67.6" y="66.7" width="11.3" height="6.7" rx="1.4" />
        <rect x="41" y="75.4" width="11.3" height="6.7" rx="1.4" />
        <rect x="54.3" y="75.4" width="11.3" height="6.7" rx="1.4" />
        <rect x="67.6" y="75.4" width="11.3" height="6.7" rx="1.4" />

        {/* base + foundation */}
        <rect x="24" y="80" width="72" height="7" />
        <rect x="22" y="87" width="76" height="3" />

        {/* doormat */}
        <rect x="48" y="83" width="24" height="5" rx="1" />
        <line x1="52" y1="88" x2="56" y2="83" />
        <line x1="58" y1="88" x2="62" y2="83" />
        <line x1="64" y1="88" x2="68" y2="83" />

        {/* ground line */}
        <line x1="10" y1="95" x2="110" y2="95" />
      </svg>
    </div>
  );
}
