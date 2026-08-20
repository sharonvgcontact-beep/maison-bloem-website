import Link from "next/link";
import styles from "./Home.module.css";
import Button from "@/components/Button";
import ImageSlot from "@/components/ImageSlot";
import SectionLabel from "@/components/SectionLabel";
import PillarsRow from "@/components/PillarsRow";
import QuoteBlock from "@/components/QuoteBlock";
import NewsletterForm from "@/components/NewsletterForm";
import FadeInSection from "@/components/FadeInSection";
import { homeContent } from "@/content/home";
import { brand } from "@/content/brand";

export default function HomePage() {
  const { hero, storyTeaser, pillars, featured, pullQuote, visit, instagram, newsletter } = homeContent;

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <ImageSlot name={hero.imageSlot} alt="Fresh Belgian waffle at Maison Bloem" variant="warm" priority />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <SectionLabel color="lemon">{hero.eyebrow}</SectionLabel>
          <h1 className={styles.heroTitle}>{hero.subtitle}</h1>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="solidLemon">
              {hero.cta}
            </Button>
            <Button href="/menu" variant="outlineLemon">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className={`${styles.section} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={`${styles.sectionInner} ${styles.split}`}>
            <div className={styles.storyImage}>
              <ImageSlot name={storyTeaser.imageSlot} alt="Grandmother's kitchen in Brussels" variant="dark" />
            </div>
            <div>
              <SectionLabel>{storyTeaser.label}</SectionLabel>
              <h2 className={styles.storyTitle}>
                {storyTeaser.title} <em>{storyTeaser.titleEm}</em>
              </h2>
              <p className={styles.storyBody}>{storyTeaser.body}</p>
              <Button href="/our-story" variant="outlineDark">
                {storyTeaser.cta}
              </Button>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PILLARS */}
      <section className={`${styles.section} ${styles.bgLemon}`} style={{ paddingTop: 0 }}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <PillarsRow pillars={pillars} cols={3} />
          </div>
        </FadeInSection>
      </section>

      {/* FEATURED MENU */}
      <section className={`${styles.section} ${styles.bgRosewood}`}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <SectionLabel color="lemon">From the menu</SectionLabel>
              <h2 className={`${styles.sectionTitle} ${styles.onDark}`}>
                Made to be <em>savoured.</em>
              </h2>
            </div>
            <div className={styles.featuredGrid}>
              {featured.map((f) => (
                <div className={styles.featuredCard} key={f.title}>
                  <div className={styles.featuredImage}>
                    <ImageSlot name={f.imageSlot} alt={f.title} variant="warm" />
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.featuredTag}>{f.tag}</span>
                    <h3 className={styles.featuredTitle}>{f.title}</h3>
                    <p className={styles.featuredDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PULL QUOTE */}
      <section className={styles.bgLemon}>
        <FadeInSection>
          <QuoteBlock lines={pullQuote.text} attribution={pullQuote.attribution} />
        </FadeInSection>
      </section>

      {/* VISIT / LOCATION TEASER */}
      <section className={`${styles.section} ${styles.bgLemon}`} style={{ paddingTop: 0 }}>
        <FadeInSection>
          <div className={`${styles.sectionInner} ${styles.split}`}>
            <div className={styles.visitImage}>
              <ImageSlot name={visit.imageSlot} alt="Maison Bloem storefront, London" variant="cool" />
            </div>
            <div>
              <SectionLabel>{visit.label}</SectionLabel>
              <h2 className={styles.visitTitle}>{visit.title}</h2>
              <p className={styles.visitBody}>{visit.body}</p>
              <Button href="/locations" variant="outlineDark">
                {visit.cta}
              </Button>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className={`${styles.section} ${styles.bgBotticelli}`}>
        <FadeInSection>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <SectionLabel>{instagram.label}</SectionLabel>
              <h2 className={styles.sectionTitle}>
                Follow{" "}
                <Link href={brand.social.instagram.url} target="_blank" rel="noreferrer">
                  <em>{instagram.title}</em>
                </Link>
              </h2>
            </div>
            <div className={styles.igGrid}>
              {instagram.imageSlots.map((slot) => (
                <div className={styles.igTile} key={slot}>
                  <ImageSlot name={slot} alt="Maison Bloem on Instagram" variant="light" />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* NEWSLETTER */}
      <section className={`${styles.section} ${styles.bgCoffee}`}>
        <FadeInSection>
          <div className={`${styles.sectionInner} ${styles.newsletterSplit}`}>
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
