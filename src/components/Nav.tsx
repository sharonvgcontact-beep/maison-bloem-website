"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import { navLinks } from "@/content/brand";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  // On the homepage the fixed bar starts hidden — the hero has its own
  // lemon-bar nav baked in — and slides in once the hero's been scrolled
  // past. Every other page keeps the fixed bar visible from the start.
  const [fixedNavVisible, setFixedNavVisible] = useState(!isHome);

  useEffect(() => {
    // Reacting to route changes (isHome) and scroll position — both external
    // to React — so syncing state here is the correct pattern, not an
    // avoidable render.
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFixedNavVisible(true);
      return;
    }
    setFixedNavVisible(false);
    function handleScroll() {
      setFixedNavVisible(window.scrollY > window.innerHeight * 0.7);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      <header className={`${styles.nav} ${!fixedNavVisible ? styles.navHidden : ""}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <Logo variant="lemon" width={140} priority />
        </Link>

        <nav aria-label="Primary">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <Link href="/contact" className={`${styles.cta} ${styles.desktopCta}`}>
            Join the Waitlist
          </Link>
          <button
            type="button"
            className={`${styles.menuToggle} ${open ? styles.open : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/*
        Deliberately a sibling of <header>, not a child: <header> has
        backdrop-filter, which establishes a new containing block for
        position:fixed descendants — nesting this panel inside it would
        anchor "top/bottom" to the 68px header box instead of the viewport.
      */}
      <div id="mobile-nav" className={`${styles.mobilePanel} ${open ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
