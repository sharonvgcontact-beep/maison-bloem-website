import Link from "next/link";
import styles from "./V2Footer.module.css";
import Logo from "@/components/Logo";
import { brand, navLinks } from "@/content/brand";

export default function V2Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link href="/v2" className={styles.wordmark}>
          <Logo variant="lemon" width={170} />
        </Link>
        <p className={styles.tagline}>{brand.tagline}</p>
      </div>

      <nav aria-label="Footer" className={styles.links}>
        {navLinks
          .filter((l) => l.label !== "Home")
          .map((link) => (
            <Link key={link.href} href={`/v2${link.href}`}>
              {link.label}
            </Link>
          ))}
        <a href={brand.social.instagram.url} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={brand.social.tiktok.url} target="_blank" rel="noreferrer">
          TikTok
        </a>
        <a href={brand.social.pinterest.url} target="_blank" rel="noreferrer">
          Pinterest
        </a>
      </nav>

      <div className={styles.bottomBar}>
        <span>
          © {year} {brand.name} · {brand.launchCity}, {brand.launchCountry}
        </span>
        <span>
          Opening {brand.launchYear} · {brand.launchCity}
        </span>
      </div>
    </footer>
  );
}
