import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "./Logo";
import { brand, footerColumns } from "@/content/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.statement}>
        <div>
          <Link href="/" className={styles.wordmark}>
            <Logo variant="lemon" width={220} />
          </Link>
          <p className={styles.tagline}>{brand.shortTagline}</p>
        </div>

        <div className={styles.statementRight}>
          <div className={styles.pill}>
            <span className={styles.dot} />
            <span className={styles.pillText}>
              Opening {brand.launchYear} · {brand.launchCity}
            </span>
          </div>
          <div className={styles.socials}>
            <a href={brand.social.instagram.url} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={brand.social.tiktok.url} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={brand.social.pinterest.url} target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className={styles.navGrid}>
        {footerColumns.map((col) => (
          <div className={styles.navCol} key={col.heading}>
            <span className={styles.navHeading}>{col.heading}</span>
            <ul className={styles.navList}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © {year} {brand.name} · {brand.launchCity}, {brand.launchCountry} · All rights reserved
        </span>
      </div>
    </footer>
  );
}
