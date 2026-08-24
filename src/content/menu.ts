// Real pricing, provided by the client. Everything below is a straight
// mirror of the official price list — edit here to update, every page
// reads straight from this file.

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
    title: "Brussels Waffle",
    description:
      "The Brussels waffle as it was always meant to be — crisp at the edge, airy within, pearl sugar caramelised into every square.",
    items: [
      {
        name: "Brussels Waffle",
        description: "Golden Brussels waffle, light and crisp outside, soft at the centre.",
        price: "£7.15",
        imageSlot: "menu-classic-brussels-waffle.jpg",
      },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    title: "The Bloem Experience",
    description:
      "Our house creation — where the waffle becomes a canvas. Designed to be savoured with the eyes as much as the palate.",
    items: [
      {
        name: "The Bloem Experience",
        description:
          "Brussels waffle, one scoop of ice cream, chocolate sauce, whipped cream, strawberry, and a topping of your choice.",
        price: "£11.15",
        imageSlot: "menu-signature-bloem-experience.jpg",
      },
    ],
  },
  {
    id: "seasonal",
    label: "Seasonal",
    title: "Seasonal Bloem Special",
    description: "Short runs, tied to the season. Ask your server what's on right now — it won't stay long.",
    items: [
      {
        name: "Seasonal Bloem Special",
        description: "Our signature seasonal creation, dressed with curated toppings.",
        price: "From £11.50",
        imageSlot: "menu-seasonal-bloem-special.jpg",
      },
    ],
  },
  {
    id: "icecream",
    label: "Ice Cream",
    title: "Extra Scoop of Ice Cream",
    description: "Small-batch, churned in-house. Add a scoop to any waffle — £2.85, any flavour.",
    items: [
      {
        name: "Belgian Chocolate",
        description: "Callebaut 70% dark chocolate, churned slow.",
        price: "£2.85",
        imageSlot: "menu-icecream-belgian-chocolate.jpg",
      },
      {
        name: "Vanilla Bean",
        description: "Madagascan vanilla bean, cream base.",
        price: "£2.85",
        imageSlot: "menu-icecream-vanilla-bean.jpg",
      },
      {
        name: "Speculoos",
        description: "Cookie butter ice cream, biscuit pieces folded through.",
        price: "£2.85",
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
        price: "£3.50",
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
        name: "Coffee Break",
        description: "Plain Brussels waffle, with a tea or hot chocolate (up to £0.70 for select options).",
        price: "£9.95",
        imageSlot: "menu-combo-coffee-break.jpg",
      },
      {
        name: "Sweet Moment",
        description: "The Bloem Experience, with a tea or hot chocolate (up to £0.70 for select options).",
        price: "£13.95",
        imageSlot: "menu-combo-sweet-moment.jpg",
      },
    ],
  },
  {
    id: "toppings",
    label: "Toppings",
    title: "Extra Toppings",
    description: "Make it yours — add any of these to a waffle, a scoop, or both. £0.50 each.",
    items: [
      {
        name: "Fresh Fruits",
        description: "Strawberry, blueberry, banana, raspberry.",
        price: "£0.50",
        imageSlot: "menu-toppings-fresh-fruits.jpg",
      },
      {
        name: "Whipped Cream",
        description: "Light, lightly sweetened.",
        price: "£0.50",
        imageSlot: "menu-toppings-whipped-cream.jpg",
      },
      {
        name: "Chocolate Sauce",
        description: "Callebaut 70%, warm.",
        price: "£0.50",
        imageSlot: "menu-toppings-chocolate-sauce.jpg",
      },
      {
        name: "Hazelnuts",
        description: "Toasted, roughly chopped.",
        price: "£0.50",
        imageSlot: "menu-toppings-hazelnuts.jpg",
      },
      {
        name: "Cuberdon Sauce",
        description: "Raspberry syrup, inspired by the candy of Ghent.",
        price: "£0.50",
        imageSlot: "menu-toppings-cuberdon-sauce.jpg",
      },
    ],
  },
];
