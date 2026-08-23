export const homeContent = {
  hero: {
    eyebrow: "Opening 2026 · London",
    title: "Maison Bloem",
    subtitle:
      "Where sweetness meets soul. Born in Brussels, imagined for the world.",
    cta: "Join the Waitlist",
    secondaryCta: "Explore the Menu",
    imageSlot: "hero-waffle.jpg",
  },

  storyTeaser: {
    label: "Our story",
    title: "A memory",
    titleEm: "you can step into.",
    body: "Maison Bloem was not created to sell waffles. It was created to recreate a feeling — of a home filled with warmth, of something simple done with care, of time slowing down, just for a moment.",
    cta: "Read our story",
    imageSlot: "grandmother-kitchen.jpg",
  },

  pillars: [
    {
      num: "01",
      title: "Belgian ingredients",
      body: "Cassonade sugar, Callebaut chocolate, speculoos from source. Provenance is flavour.",
    },
    {
      num: "02",
      title: "Design as ritual",
      body: "Every Bloem space is built to be worth returning to — warm light, considered materials.",
    },
    {
      num: "03",
      title: "Premium, not precious",
      body: "Excellence without exclusion. Refined, but never cold.",
    },
  ],

  featured: [
    {
      tag: "Signature",
      title: "Bloem Experience",
      desc: "Callebaut 70% ganache, cuberdon candy, gold leaf, crushed speculoos.",
      imageSlot: "menu-signature-bloem.jpg",
    },
    {
      tag: "Seasonal",
      title: "Christmas Bloem",
      desc: "Speculoos cookie butter, cinnamon cream, biscuit crumble.",
      imageSlot: "menu-seasonal-speculoos.jpg",
    },
    {
      tag: "Drinks",
      title: "ChocoBloem",
      desc: "Hot Belgian chocolate.",
      imageSlot: "menu-drinks-chocobloem.jpg",
    },
  ],

  pullQuote: {
    text: [
      "Before the brand, before the boutique —",
      "there was a table, a waffle iron,",
      "and someone who loved to share.",
    ],
    attribution: "Maison Bloem — Our Origin",
  },

  visit: {
    label: "Visit us",
    title: "London",
    body: "We're building our first home in London, with more cities to follow. The world deserves a great Belgian waffle.",
    cta: "Find Bloem",
    imageSlot: "storefront-london.jpg",
  },

  instagram: {
    label: "Follow along",
    title: "@maisonbloemldn",
    imageSlots: [
      "instagram-1.jpg",
      "instagram-2.jpg",
      "instagram-3.jpg",
      "instagram-4.jpg",
      "instagram-5.jpg",
      "instagram-6.jpg",
    ],
  },

  newsletter: {
    title: "Be the first",
    titleEm: "to know.",
    body: "Opening announcements, exclusive previews, and invitations to our first guests — delivered to your inbox.",
  },
} as const;
