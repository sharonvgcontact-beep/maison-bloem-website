import type { Metadata } from "next";
import styles from "./Locations.module.css";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import LocationCard from "@/components/LocationCard";
import NewsletterForm from "@/components/NewsletterForm";
import FadeInSection from "@/components/FadeInSection";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find Maison Bloem — opening in London in 2026, with New York and Los Angeles to follow.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Bloem"
        title={
          <>
            Find
            <br />
            Bloem.
          </>
        }
        subtitle="We're building our first home in London, with more cities to follow. The world deserves a great Belgian waffle."
        bg="botticelli"
      />

      <section className={styles.body}>
        <FadeInSection>
          <div className={styles.inner}>
            <div className={styles.header}>
              <SectionLabel>Our boutiques</SectionLabel>
              <h2 className={styles.title}>
                Where you&apos;ll <em>find us</em>
              </h2>
            </div>

            <div className={styles.grid}>
              {locations.map((loc) => (
                <LocationCard key={loc.city} {...loc} />
              ))}
            </div>

            <div className={styles.signup}>
              <SectionLabel color="lemon">Stay in the loop</SectionLabel>
              <h3 className={styles.signupTitle}>Be the first to know</h3>
              <p className={styles.signupBody}>
                Opening announcements, exclusive previews, and invitations to our first guests — delivered to your
                inbox.
              </p>
              <div className={styles.signupForm}>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
