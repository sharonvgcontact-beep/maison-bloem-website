"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./V2Nav.module.css";
import Logo from "@/components/Logo";
import { navLinks } from "@/content/brand";

export default function V2Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.nav}>
        <Link href="/v2" className={styles.logo} onClick={() => setOpen(false)}>
          <Logo variant="rosewood" width={126} priority />
        </Link>

        <nav aria-label="Primary" className={styles.links}>
          {navLinks
            .filter((l) => l.label !== "Home")
            .map((link) => (
              <Link
                key={link.href}
                href={`/v2${link.href}`}
                aria-current={pathname === `/v2${link.href}` ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className={styles.right}>
          <Link href="/v2/contact" className={styles.cta}>
            Join the Waitlist <span aria-hidden="true">&rarr;</span>
          </Link>
          <button
            type="button"
            className={`${styles.menuToggle} ${open ? styles.open : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="v2-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="v2-mobile-nav" className={`${styles.mobilePanel} ${open ? styles.open : ""}`}>
        {navLinks
          .filter((l) => l.label !== "Home")
          .map((link, i) => (
            <Link key={link.href} href={`/v2${link.href}`} onClick={() => setOpen(false)}>
              <span className={styles.mobileNum}>{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
      </div>
    </>
  );
}
