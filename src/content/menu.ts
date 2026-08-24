// Placeholder menu, carried over from the design exploration phase.
// Replace with the real list at any time — every page reads straight from here.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  imageSlot: string;
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
        imageSlot: "menu-classic-bloem-simple.jpg",
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
        imageSlot: "menu-signature-bloem-experience.jpg",
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
        imageSlot: "menu-seasonal-bloem-season.jpg",
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
        imageSlot: "menu-icecream-belgian-chocolate.jpg",
      },
      {
        name: "Vanilla Bean",
        description: "Madagascan vanilla bean, cream base.",
        price: "£4.5 / scoop",
        imageSlot: "menu-icecream-vanilla-bean.jpg",
      },
      {
        name: "Speculoos",
        description: "Cookie butter ice cream, biscuit pieces folded through.",
        price: "£5 / scoop",
        imageSlot: "menu-icecream-speculoos.jpg",
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
        imageSlot: "menu-drinks-belgian-hot-chocolate.jpg",
        tag: "Coming Soon",
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
        name: "Bloem Duo",
        description: "Brussels waffle, paired with a Belgian hot chocolate.",
        price: "£14",
        imageSlot: "menu-combo-bloem-duo.jpg",
      },
      {
        name: "Bloem Combo",
        description: "Brussels waffle, one rose-shaped scoop, one topping, and a drink.",
        price: "£18",
        tag: "Best Value",
        imageSlot: "menu-combo-bloem-combo.jpg",
      },
    ],
  },
  {
    id: "toppings",
    label: "Toppings",
    title: "Extra Toppings",
    description: "Make it yours — add any of these to a waffle, a scoop, or both.",
    items: [
      {
        name: "Fresh Fruits",
        description: "Strawberry, blueberry, banana, raspberry.",
        price: "£1.5",
        imageSlot: "menu-toppings-fresh-fruits.jpg",
      },
      {
        name: "Whipped Cream",
        description: "Light, lightly sweetened.",
        price: "£1",
        imageSlot: "menu-toppings-whipped-cream.jpg",
      },
      {
        name: "Chocolate Sauce",
        description: "Callebaut 70%, warm.",
        price: "£1.5",
        imageSlot: "menu-toppings-chocolate-sauce.jpg",
      },
      {
        name: "Hazelnuts",
        description: "Toasted, roughly chopped.",
        price: "£1.5",
        imageSlot: "menu-toppings-hazelnuts.jpg",
      },
      {
        name: "Cuberdon Sauce",
        description: "Raspberry syrup, inspired by the candy of Ghent.",
        price: "£2",
        imageSlot: "menu-toppings-cuberdon-sauce.jpg",
      },
    ],
  },
];
