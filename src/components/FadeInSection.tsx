"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
};

// Scroll-triggered fade-up, used to give sections a quiet, editorial entrance
// instead of everything appearing at once. Respects prefers-reduced-motion
// via the CSS in globals.css. Always renders a div — wrap it in a semantic
// <section> from the caller when needed.
export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fadeIn ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
