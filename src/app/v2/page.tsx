import Link from "next/link";
import styles from "./Home2.module.css";
import ImageSlot from "@/components/ImageSlot";
import NewsletterForm from "@/components/NewsletterForm";
import FadeInSection from "@/components/FadeInSection";
import { homeContent } from "@/content/home";
import { brand } from "@/content/brand";

export default function HomePageV2() {
  const { hero, storyTeaser, pillars, featured, pullQuote, visit, instagram, newsletter } = homeContent;
  const [pillarLarge, ...pillarsSmall] = pillars;

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroEyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <div className={styles.heroActions}>
            <Link href="/v2/contact" className={styles.btnPrimary}>
              {hero.cta}
            </Link>
            <Link href="/v2/menu" className={styles.textLink}>
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <ImageSlot name={hero.imageSlot} alt="Fresh Belgian waffle at Maison Bloem" variant="warm" priority />
        </div>
      </section>

      {/* MANIFESTO — the brand's origin, stated plainly, no image */}
      <section className={`${styles.manifesto} ${styles.container}`}>
        <FadeInSection>
          <div className={styles.manifestoRule} />
          <p className={styles.manifestoText}>
            {pullQuote.text.map((line, i) => (
              <span key={i}>
                {line}
                {i < pullQuote.text.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <span className={styles.manifestoAttribution}>{pullQuote.attribution}</span>
        </FadeInSection>
      </section>

      {/* STORY — the page's one image-and-text split */}
      <section className={`${styles.section} ${styles.container}`}>
        <FadeInSection>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <ImageSlot name={storyTeaser.imageSlot} alt="Grandmother's kitchen in Brussels" variant="dark" />
            </div>
            <div>
              <span className={styles.sectionLabel}>{storyTeaser.label}</span>
              <h2 className={styles.storyTitle}>
                {storyTeaser.title} <em>{storyTeaser.titleEm}</em>
              </h2>
              <p className={styles.storyBody}>{storyTeaser.body}</p>
              <Link href="/v2/our-story" className={styles.textLink}>
                {storyTeaser.cta}
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PILLARS — bento: one large cell, two stacked, not three equal cards */}
      <section className={`${styles.section} ${styles.container}`}>
        <FadeInSection>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarLarge}>
              <div className={`${styles.pillarCell} ${styles.pillarCellTint1}`}>
                <span className={styles.pillarNum}>{pillarLarge.num}</span>
                <h3 className={styles.pillarTitle}>{pillarLarge.title}</h3>
                <p className={styles.pillarBody}>{pillarLarge.body}</p>
              </div>
            </div>
            <div className={styles.pillarSmallWrap}>
              {pillarsSmall.map((p) => (
                <div className={`${styles.pillarCell} ${styles.pillarCellTint2}`} key={p.num}>
                  <span className={styles.pillarNum}>{p.num}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarBody}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* FEATURED MENU — horizontal scroll-snap, not a three-card row */}
      <section className={`${styles.section}`}>
        <div className={styles.container}>
          <FadeInSection className={styles.menuHeader}>
            <h2 className={styles.menuTitle}>Made to be savoured.</h2>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className={styles.menuScroll}>
            {featured.map((f) => (
              <div className={styles.menuCard} key={f.title}>
                <div className={styles.menuImage}>
                  <ImageSlot name={f.imageSlot} alt={f.title} variant="warm" />
                </div>
                <div className={styles.menuBody}>
                  <span className={styles.menuTag}>{f.tag}</span>
                  <h3 className={styles.menuItemTitle}>{f.title}</h3>
                  <p className={styles.menuDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* VISIT — full-bleed image with an overlaid text card */}
      <section className={styles.visitBanner}>
        <div className={styles.visitImageWrap}>
          <ImageSlot name={visit.imageSlot} alt="Maison Bloem storefront, London" variant="cool" />
        </div>
        <div className={styles.visitOverlay} />
        <div className={styles.visitCard}>
          <FadeInSection className={styles.visitCardInner}>
            <span className={styles.visitLabel}>{visit.label}</span>
            <h2 className={styles.visitTitle}>{visit.title}</h2>
            <p className={styles.visitBody}>{visit.body}</p>
            <Link href="/v2/locations" className={styles.visitTextLink}>
              {visit.cta}
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* INSTAGRAM — asymmetric photo grid */}
      <section className={`${styles.section} ${styles.container}`}>
        <FadeInSection>
          <div className={styles.igHeader}>
            <h2 className={styles.igTitle}>{instagram.label}</h2>
            <Link href={brand.social.instagram.url} target="_blank" rel="noreferrer" className={styles.igHandle}>
              {instagram.title}
            </Link>
          </div>
          <div className={styles.igGrid}>
            {instagram.imageSlots.map((slot) => (
              <div className={styles.igTile} key={slot}>
                <ImageSlot name={slot} alt="Maison Bloem on Instagram" variant="light" />
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* NEWSLETTER — the one deliberate bold color band */}
      <section className={styles.newsletter}>
        <FadeInSection>
          <div className={`${styles.newsletterGrid} ${styles.container}`}>
            <div>
              <h2 className={styles.newsletterTitle}>
                {newsletter.title} <em>{newsletter.titleEm}</em>
              </h2>
              <p className={styles.newsletterBody}>{newsletter.body}</p>
            </div>
            <NewsletterForm />
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
