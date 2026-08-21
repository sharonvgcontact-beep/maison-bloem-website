import type { Metadata } from "next";
import shared from "../V2Shared.module.css";
import styles from "./Locations2.module.css";
import V2PageHero from "@/components/v2/V2PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import FadeInSection from "@/components/FadeInSection";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find Maison Bloem, opening in London in 2026, with New York and Los Angeles to follow.",
};

export default function LocationsV2Page() {
  const [primary, ...rest] = locations;

  return (
    <>
      <V2PageHero
        eyebrow="Find Bloem"
        title={
          <>
            Where you&apos;ll <em>find us.</em>
          </>
        }
        subtitle="We're building our first home in London, with more cities to follow. The world deserves a great Belgian waffle."
      />

      <section className={`${shared.section} ${shared.container}`}>
        <FadeInSection>
          <div className={shared.bentoGrid}>
            <div className={shared.bentoLarge}>
              <div className={`${shared.bentoCell} ${shared.bentoTint1}`}>
                <span className={styles.badge}>{primary.statusLabel}</span>
                <p className={styles.city}>{primary.city}</p>
                <p className={styles.country}>{primary.country}</p>
                <p className={styles.detail}>{primary.detail}</p>
                <p className={styles.hours}>{primary.hours}</p>
              </div>
            </div>
            <div className={shared.bentoSmallWrap}>
              {rest.map((loc) => (
                <div className={`${shared.bentoCell} ${shared.bentoTint2}`} key={loc.city}>
                  <span className={styles.badge}>{loc.statusLabel}</span>
                  <p className={styles.city}>{loc.city}</p>
                  <p className={styles.country}>{loc.country}</p>
                  <p className={styles.detail}>{loc.detail}</p>
                  <p className={styles.hours}>{loc.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className={shared.ctaBand}>
        <FadeInSection className={shared.ctaBandInner}>
          <h2 className={shared.ctaBandTitle}>Be the first to know.</h2>
          <p className={shared.ctaBandBody}>
            Opening announcements, exclusive previews, and invitations to our first guests, delivered to your inbox.
          </p>
          <NewsletterForm />
        </FadeInSection>
      </section>
    </>
  );
}
