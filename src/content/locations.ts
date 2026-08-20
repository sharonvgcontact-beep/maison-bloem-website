export type Location = {
  city: string;
  country: string;
  status: "opening" | "future";
  statusLabel: string;
  detail: string;
  hours: string;
};

export const locations: Location[] = [
  {
    city: "London",
    country: "United Kingdom",
    status: "opening",
    statusLabel: "Opening 2026",
    detail: "Our first home. Address and neighbourhood details coming soon.",
    hours: "Mon–Sun · 9am – 8pm",
  },
  {
    city: "New York",
    country: "New York, USA",
    status: "future",
    statusLabel: "Future Location",
    detail: "Manhattan. Details to be announced — sign up for updates.",
    hours: "Coming Soon",
  },
  {
    city: "Los Angeles",
    country: "California, USA",
    status: "future",
    statusLabel: "Future Location",
    detail: "Details to be announced — sign up for updates.",
    hours: "Coming Soon",
  },
];
