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
];
