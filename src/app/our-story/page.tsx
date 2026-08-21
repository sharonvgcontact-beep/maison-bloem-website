import type { Metadata } from "next";
import styles from "./OurStory.module.css";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import SectionLabel from "@/components/SectionLabel";
import QuoteBlock from "@/components/QuoteBlock";
import PillarsRow from "@/components/PillarsRow";
import Button from "@/components/Button";
import FadeInSection from "@/components/FadeInSection";
import BrandDivider from "@/components/BrandDivider";
import { storyContent as s } from "@/content/story";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Maison Bloem began in a grandmother's kitchen in Brussels. Discover the meaning of Bloem and the values behind every waffle.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        bg="coffee"
        title={
          <>
            {s.hero.title}
            <br />
            <em>{s.hero.titleEm}</em>
          </>
        }
      />

      <BrandDivider bg="var(--lemon)" color="var(--rosewood)" />

      {/* WHO WE ARE */}
      <section id="who" className={`${styles.section} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={`${styles.inner} ${styles.split}`}>
            <div className={styles.image}>
              <ImageSlot name="story-brussels-kitchen.jpg" alt="Brussels, Belgium" variant="dark" />
            </div>
            <div>
              <SectionLabel>{s.whoWeAre.label}</SectionLabel>
              <h2 className={styles.bigTitle}>
                {s.whoWeAre.title} <em>{s.whoWeAre.titleEm}</em>
              </h2>
              {s.whoWeAre.paragraphs.map((p) => (
                <p className={styles.prose} key={p}>
                  {p}
                </p>
              ))}
              <div className={styles.break}>
                {s.whoWeAre.break.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < s.whoWeAre.break.length - 1 && <br />}
                  </span>
                ))}
              </div>
              {s.whoWeAre.closing.map((p) => (
                <p className={styles.prose} key={p}>
                  {p}
                </p>
              ))}
              <p className={styles.bold}>{s.whoWeAre.bold}</p>
              <p className={styles.prose}>{s.whoWeAre.final}</p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* DARK QUOTE */}
      <section className={styles.bgCoffee}>
        <FadeInSection>
          <QuoteBlock lines={s.pullQuote.text} attribution={s.pullQuote.attribution} dark />
        </FadeInSection>
      </section>

      {/* ORIGIN */}
      <section className={`${styles.section} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={`${styles.inner} ${styles.split} ${styles.splitReverse}`}>
            <div className={styles.image}>
              <ImageSlot name="story-waffle-iron.jpg" alt="Traditional Belgian waffle iron" variant="warm" />
            </div>
            <div>
              <SectionLabel>{s.origin.label}</SectionLabel>
              <h2 className={styles.bigTitle}>
                {s.origin.title} <em>{s.origin.titleEm}</em>
              </h2>
              <p className={styles.prose}>{s.origin.stanza1}</p>
              <p className={styles.prose}>{s.origin.stanza2}</p>
              <p className={styles.bold}>{s.origin.bold}</p>
              <p className={styles.prose}>{s.origin.stanza3}</p>
              <p className={styles.prose}>{s.origin.closing}</p>
              <div className={styles.break}>
                {s.origin.break.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < s.origin.break.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* THE NAME */}
      <section className={`${styles.section} ${styles.bgLemon} ${styles.nameSection}`}>
        <FadeInSection>
          <div className={styles.nameInner}>
            <SectionLabel>{s.name.label}</SectionLabel>
            <p className={styles.nameWord}>{s.name.word}</p>
            <p style={{ fontFamily: "var(--font-sub)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rosewood)", opacity: 0.7 }}>
              {s.name.sub}
            </p>
            <div className={styles.nameRule} />
            <div className={styles.trio}>
              {s.name.trio.map((t) => (
                <div className={styles.trioItem} key={t.word}>
                  <p className={styles.trioWord}>{t.word}</p>
                  <p className={styles.trioDef}>{t.def}</p>
                </div>
              ))}
            </div>
            <p className={styles.nameProse}>{s.name.closing}</p>
          </div>
        </FadeInSection>
      </section>

      {/* SENSE OF HOME */}
      <section className={`${styles.section} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={`${styles.inner} ${styles.split}`}>
            <div className={styles.image}>
              <ImageSlot name="story-founder-home.jpg" alt="A sense of home" variant="cool" />
            </div>
            <div>
              <SectionLabel>{s.senseOfHome.label}</SectionLabel>
              <h2 className={styles.bigTitle}>
                {s.senseOfHome.title} <em>{s.senseOfHome.titleEm}</em>
              </h2>
              {s.senseOfHome.paragraphs.map((p) => (
                <p className={styles.prose} key={p}>
                  {p}
                </p>
              ))}
              <div className={styles.bridgeList}>
                {s.senseOfHome.bridges.map((b) => (
                  <div className={styles.bridgeItem} key={b}>
                    {b}
                  </div>
                ))}
              </div>
              <p className={styles.tribute}>{s.senseOfHome.tribute}</p>
              <p className={styles.prose} style={{ marginTop: "1.4rem" }}>
                {s.senseOfHome.final}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* THE BLOEM WAY */}
      <section id="way" className={`${styles.section} ${styles.bgRosewood}`}>
        <FadeInSection>
          <div className={styles.inner}>
            <div className={styles.wayHeader}>
              <div>
                <SectionLabel color="lemon">{s.way.label}</SectionLabel>
                <h2 className={styles.wayTitle}>
                  {s.way.title}
                  <br />
                  {s.way.titleLines[0]}
                  <br />
                  <em>{s.way.titleEm}</em>
                </h2>
              </div>
              <p className={styles.wayIntro}>{s.way.intro}</p>
            </div>
            <PillarsRow pillars={s.way.pillars} dark cols={4} />
            <div className={styles.wayClosing}>
              <p className={styles.wayClosingSerif}>
                {s.way.closing[0]}
                <br />
                {s.way.closing[1]}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* INGREDIENTS */}
      <section className={`${styles.section} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={styles.inner}>
            <div style={{ marginBottom: "2.5rem" }}>
              <SectionLabel>Our ingredients</SectionLabel>
              <h2 className={styles.bigTitle} style={{ marginBottom: 0 }}>
                What goes <em>into it.</em>
              </h2>
            </div>
            <div className={styles.ingredientsGrid}>
              {s.ingredients.map((ing) => (
                <div className={styles.ingredientCard} key={ing.name}>
                  <div className={styles.ingredientImage}>
                    <ImageSlot
                      name={`ingredient-${ing.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}.jpg`}
                      alt={ing.name}
                      variant="warm"
                    />
                  </div>
                  <h3 className={styles.ingredientName}>{ing.name}</h3>
                  <p className={styles.ingredientDesc}>{ing.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CLOSING CTA */}
      <section className={`${styles.closing} ${styles.bgLemon}`}>
        <FadeInSection>
          <div className={styles.closingInner}>
            <SectionLabel>{s.closing.eyebrow}</SectionLabel>
            <h2 className={styles.closingTitle}>
              {s.closing.title}
              <br />
              {s.closing.titleLine2}
            </h2>
            <p className={styles.closingBody}>{s.closing.body}</p>
            <div className={styles.ctaRow}>
              <Button href="/menu" variant="solidRosewood">
                Discover the Menu
              </Button>
              <Button href="/locations" variant="textLinkDark">
                Our Locations
              </Button>
              <Button href="/contact" variant="textLinkDark">
                Visit Us
              </Button>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
