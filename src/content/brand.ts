// Central brand facts. Edit here to update copy site-wide — nothing brand-related
// should be hardcoded inside components or pages.

export const brand = {
  name: "Maison Bloem",
  tagline: "Where sweetness meets soul. Born in Brussels, imagined for the world.",
  shortTagline: "Crafted with tradition, served with style.",
  foundingStory:
    "Founded on a grandmother's kitchen in Brussels. \"Bloem\" carries a triple meaning: flower, flour, and rice powder.",

  launchCity: "London",
  launchCountry: "United Kingdom",
  launchYear: "2026",

  emails: {
    general: "hello@maisonbloem.com",
    press: "press@maisonbloem.com",
    jobs: "careers@maisonbloem.com",
  },

  social: {
    instagram: { handle: "@maisonbloemldn", url: "https://instagram.com/maisonbloemldn" },
    tiktok: { handle: "@maisonbloem", url: "https://tiktok.com/@maisonbloem" },
    pinterest: { handle: "@maisonbloem", url: "https://pinterest.com/maisonbloem" },
  },

  colors: {
    rosewood: "#6B0B0C",
    lemon: "#FFF8CA",
    botticelli: "#CDE3E8",
    coffee: "#2D120D",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    heading: "The Menu",
    links: [
      { label: "Our waffles", href: "/menu" },
      { label: "Signature creations", href: "/menu#signature" },
      { label: "Artisan ice cream", href: "/menu#icecream" },
      { label: "Seasonal specials", href: "/menu#seasonal" },
      { label: "Drinks", href: "/menu#drinks" },
    ],
  },
  {
    heading: "Visit Us",
    links: [
      { label: "Our locations", href: "/locations" },
      { label: "London", href: "/locations" },
    ],
  },
  {
    heading: "The Brand",
    links: [
      { label: "Our story", href: "/our-story" },
      { label: "Our values", href: "/our-story#way" },
      { label: "Careers", href: "/jobs" },
    ],
  },
  {
    heading: "Enquiries",
    links: [
      { label: "Get in touch", href: "/contact" },
      { label: "Press & media", href: "/contact" },
      { label: "Join the team", href: "/jobs" },
      { label: "Partnerships", href: "/contact" },
    ],
  },
] as const;
