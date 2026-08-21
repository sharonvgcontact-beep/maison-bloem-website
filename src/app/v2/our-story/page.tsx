import type { Metadata } from "next";
import Link from "next/link";
import shared from "../V2Shared.module.css";
import styles from "./OurStory2.module.css";
import V2PageHero from "@/components/v2/V2PageHero";
import ImageSlot from "@/components/ImageSlot";
import FadeInSection from "@/components/FadeInSection";
import { storyContent as s } from "@/content/story";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Maison Bloem began in a grandmother's kitchen in Brussels. Discover the meaning of Bloem and the values behind every waffle.",
};

const slug = (name: string) =>
  `ingredient-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}.jpg`;

export default function OurStoryV2Page() {
  const [wayLarge, ...waySmall] = s.way.pillars;

  return (
    <>
      <V2PageHero
        eyebrow={s.hero.eyebrow}
        title={
          <>
            {s.hero.title}
            <br />
            <em>{s.hero.titleEm}</em>
          </>
        }
      />

      {/* WHO WE ARE — the page's one split-text-image section */}
      <section className={`${shared.section} ${shared.container}`}>
        <FadeInSection>
          <div className={shared.splitGrid}>
            <div className={shared.splitImage}>
              <ImageSlot name="story-brussels-kitchen.jpg" alt="Brussels, Belgium" variant="dark" />
            </div>
            <div>
              <span className={shared.sectionLabel}>{s.whoWeAre.label}</span>
              <h2 className={shared.splitTitle}>
                {s.whoWeAre.title} <em>{s.whoWeAre.titleEm}</em>
              </h2>
              {s.whoWeAre.paragraphs.map((p) => (
                <p className={shared.prose} key={p}>
                  {p}
                </p>
              ))}
              <p className={shared.proseInset}>
                {s.whoWeAre.break.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < s.whoWeAre.break.length - 1 && <br />}
                  </span>
                ))}
              </p>
              {s.whoWeAre.closing.map((p) => (
                <p className={shared.prose} key={p}>
                  {p}
                </p>
              ))}
              <p className={shared.proseStrong}>{s.whoWeAre.bold}</p>
              <p className={shared.prose}>{s.whoWeAre.final}</p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PULL QUOTE — full-width, no image */}
      <section className={`${shared.manifesto} ${shared.container}`}>
        <FadeInSection>
          <div className={shared.manifestoRule} />
          <p className={shared.manifestoText}>
            {s.pullQuote.text.map((line, i) => (
              <span key={i}>
                {line}
                {i < s.pullQuote.text.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <span className={shared.manifestoAttribution}>{s.pullQuote.attribution}</span>
        </FadeInSection>
      </section>

      {/* ORIGIN — full-bleed image with an overlaid text card */}
      <section className={shared.overlayBanner}>
        <div className={shared.overlayImageWrap}>
          <ImageSlot name="story-waffle-iron.jpg" alt="Traditional Belgian waffle iron" variant="warm" />
        </div>
        <div className={shared.overlayScrim} />
        <div className={shared.overlayCard}>
          <FadeInSection className={shared.overlayCardInner}>
            <h2 className={shared.overlayTitle}>
              {s.origin.title} {s.origin.titleEm}
            </h2>
            <p className={shared.overlayProse}>{s.origin.stanza1}</p>
            <p className={shared.overlayProse}>{s.origin.stanza2}</p>
            <p className={shared.overlayStrong}>{s.origin.bold}</p>
            <p className={shared.overlayProse}>{s.origin.closing}</p>
          </FadeInSection>
        </div>
      </section>

      {/* THE NAME — centered typographic centerpiece */}
      <section className={styles.nameSection}>
        <FadeInSection className={styles.nameInner}>
          <p className={styles.nameWord}>{s.name.word}</p>
          <span className={styles.nameSub}>{s.name.sub}</span>
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
        </FadeInSection>
      </section>

      {/* SENSE OF HOME — editorial text column, no image */}
      <section className={`${shared.section} ${shared.container}`}>
        <FadeInSection className={styles.editorial}>
          <h2 className={shared.splitTitle}>
            {s.senseOfHome.title} <em>{s.senseOfHome.titleEm}</em>
          </h2>
          {s.senseOfHome.paragraphs.map((p) => (
            <p className={shared.prose} style={{ margin: "0 auto 1rem" }} key={p}>
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
          <p className={shared.proseInset} style={{ textAlign: "left" }}>
            {s.senseOfHome.tribute}
          </p>
          <p className={shared.prose} style={{ margin: "1rem auto 0" }}>
            {s.senseOfHome.final}
          </p>
        </FadeInSection>
      </section>

      {/* THE BLOEM WAY — bento: one large pillar, three stacked */}
      <section className={`${shared.section} ${shared.container}`}>
        <FadeInSection>
          <span className={shared.sectionLabel}>{s.way.label}</span>
          <h2 className={shared.splitTitle} style={{ maxWidth: "20ch" }}>
            {s.way.title} {s.way.titleLines[0]} <em>{s.way.titleEm}</em>
          </h2>
          <p className={shared.prose} style={{ marginBottom: "2.5rem" }}>
            {s.way.intro}
          </p>
          <div className={shared.bentoGrid}>
            <div className={shared.bentoLarge}>
              <div className={`${shared.bentoCell} ${shared.bentoTint1}`}>
                <span className={shared.bentoNum}>{wayLarge.num}</span>
                <h3 className={shared.bentoTitle}>{wayLarge.title}</h3>
                <p className={shared.bentoBody}>{wayLarge.desc}</p>
              </div>
            </div>
            <div className={shared.bentoSmallWrap}>
              {waySmall.map((p) => (
                <div className={`${shared.bentoCell} ${shared.bentoTint2}`} key={p.num}>
                  <span className={shared.bentoNum}>{p.num}</span>
                  <h3 className={shared.bentoTitle}>{p.title}</h3>
                  <p className={shared.bentoBody}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* INGREDIENTS — horizontal scroll-snap strip */}
      <section className={`${shared.section} ${shared.container}`}>
        <FadeInSection>
          <h2 className={shared.splitTitle} style={{ marginBottom: "2rem" }}>
            What goes <em>into it.</em>
          </h2>
        </FadeInSection>
        <FadeInSection>
          <div className={shared.scrollStrip}>
            {s.ingredients.map((ing) => (
              <div className={shared.scrollCard} key={ing.name}>
                <div className={shared.scrollImage}>
                  <ImageSlot name={slug(ing.name)} alt={ing.name} variant="warm" />
                </div>
                <h3 className={shared.scrollName}>{ing.name}</h3>
                <p className={shared.scrollDesc}>{ing.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* CLOSING CTA — the one deliberate bold color band */}
      <section className={shared.ctaBand}>
        <FadeInSection className={shared.ctaBandInner}>
          <h2 className={shared.ctaBandTitle}>
            {s.closing.title}
            <br />
            {s.closing.titleLine2}
          </h2>
          <p className={shared.ctaBandBody}>{s.closing.body}</p>
          <div className={shared.ctaBandActions}>
            <Link href="/v2/menu" className={shared.ctaBandPrimary}>
              Discover the Menu
            </Link>
            <Link href="/v2/locations" className={shared.ctaBandSecondary}>
              Find Us
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
