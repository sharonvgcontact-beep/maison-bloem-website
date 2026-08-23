// Placeholder menu, carried over from the design exploration phase.
// Replace with the real list at any time — every page reads straight from here.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "classic",
    label: "Classic",
    title: "Bloem Simple",
    description:
      "The Brussels waffle as it was always meant to be — crisp at the edge, airy within, pearl sugar caramelised into every square.",
    items: [
      {
        name: "Bloem Simple",
        description: "Golden Brussels waffle, light and crisp outside, soft at the centre.",
        price: "£8",
      },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    title: "Bloem Experience",
    description:
      "Our house creations — where the waffle becomes a canvas. Designed to be savoured with the eyes as much as the palate.",
    items: [
      {
        name: "Bloem Experience",
        description: "Golden Brussels waffle with a rose-shaped scoop, strawberry, whipped cream, and chocolate sauce.",
        price: "£14",
      },
    ],
  },
  {
    id: "seasonal",
    label: "Seasonal",
    title: "Bloem Season",
    description: "Short runs, tied to the season. Ask your server what's on right now — it won't stay long.",
    items: [
      {
        name: "Bloem Season",
        description: "Our signature seasonal creation, dressed with curated toppings.",
        price: "£12",
      },
    ],
  },
  {
    id: "icecream",
    label: "Ice Cream",
    title: "Artisan Ice Cream",
    description: "Small-batch, churned in-house. One scoop or three — the waffle underneath is optional.",
    items: [
      {
        name: "Belgian Chocolate",
        description: "Callebaut 70% dark chocolate, churned slow.",
        price: "£4.5 / scoop",
      },
      {
        name: "Vanilla Bean",
        description: "Madagascan vanilla bean, cream base.",
        price: "£4.5 / scoop",
      },
      {
        name: "Speculoos Crumble",
        description: "Cookie butter ice cream, biscuit pieces folded through.",
        price: "£5 / scoop",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    title: "Drinks",
    description: "To sit alongside, or to take with you.",
    items: [
      {
        name: "Belgian Hot Chocolate",
        description: "Callebaut dark chocolate, steamed milk, whipped cream.",
        price: "£5.5",
      },
      {
        name: "Speculoos Iced Latte",
        description: "Cold brew espresso, oat milk, speculoos syrup, biscuit crumble float.",
        price: "£5.5",
      },
      {
        name: "Still or Sparkling Water",
        description: "Premium mineral water, served chilled.",
        price: "£3",
      },
    ],
  },
  {
    id: "combo",
    label: "Combos",
    title: "Combos",
    description: "Curated pairings for the full Maison Bloem experience.",
    items: [
      {
        name: "The Bloem Duo",
        description: "Any classic waffle, one scoop of ice cream, and a hot drink.",
        price: "£18",
        tag: "Best Value",
      },
      {
        name: "Table for Two",
        description: "Two signature waffles, two scoops, two drinks. Share something beautiful.",
        price: "£36",
        tag: "Share",
      },
    ],
  },
];
