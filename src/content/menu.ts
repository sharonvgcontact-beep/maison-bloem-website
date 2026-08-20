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
    title: "Classic",
    description:
      "The Brussels waffle as it was always meant to be — crisp at the edge, airy within, pearl sugar caramelised into every square.",
    items: [
      {
        name: "The Original",
        description: "Our base Brussels waffle, Belgian cassonade pearl sugar, dusted with icing sugar.",
        price: "£8",
      },
      {
        name: "Butter & Sugar",
        description: "Warm waffle, Normandy butter, cassonade sugar. Simple, and exactly right.",
        price: "£7",
      },
      {
        name: "Maple & Cream",
        description: "Whipped cream, Canadian maple syrup, toasted pecan.",
        price: "£9.5",
      },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    title: "Signature Creations",
    description:
      "Our house creations — where the waffle becomes a canvas. Designed to be savoured with the eyes as much as the palate.",
    items: [
      {
        name: "The Bloem",
        description: "Callebaut 70% ganache, cuberdon candy, gold leaf, crushed speculoos.",
        price: "£13",
        tag: "Signature",
      },
      {
        name: "Brussels Rose",
        description: "Rosewood berry compote, mascarpone cream, freeze-dried raspberry.",
        price: "£12",
        tag: "Signature",
      },
      {
        name: "Café Bruxellois",
        description: "Espresso mascarpone, cocoa nib, coffee caramel drizzle.",
        price: "£12",
      },
    ],
  },
  {
    id: "seasonal",
    label: "Seasonal",
    title: "Seasonal Specials",
    description: "Short runs, tied to the season. Ask your server what's on right now — it won't stay long.",
    items: [
      {
        name: "Winter Speculoos",
        description: "Speculoos cookie butter, cinnamon cream, biscuit crumble.",
        price: "£12.5",
        tag: "Limited",
      },
      {
        name: "Summer Berry",
        description: "Fresh seasonal berries, lemon curd, torn mint.",
        price: "£12.5",
        tag: "Limited",
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
