export type Job = {
  title: string;
  type: string;
  location: string;
  description: string;
};

export const jobs: Job[] = [
  {
    title: "Waffle Chef",
    type: "Full-Time · On-site",
    location: "London, UK",
    description:
      "Lead production on the line — precision with the iron, consistency on every plate, and pride in the craft.",
  },
  {
    title: "Front of House",
    type: "Full-Time / Part-Time · On-site",
    location: "London, UK",
    description:
      "The first and last impression of Maison Bloem. Warm, attentive, unhurried — hospitality as we mean it.",
  },
  {
    title: "Boutique Manager",
    type: "Full-Time · On-site",
    location: "London, UK",
    description:
      "Run the day-to-day of our first boutique — team, standards, and the feeling guests leave with.",
  },
  {
    title: "Content & Social Creative",
    type: "Freelance",
    location: "London, UK",
    description:
      "Help translate Maison Bloem's world into photography, video and social storytelling that feels like the brand.",
  },
];
