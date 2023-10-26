import { ProductCategory, SelectVariantFields } from "@/common/types";

export const PRODUCT_CATEGORIES_WITH_BRANDS: ProductCategory[] = [
  {
    title: "Electronics",
    id: "electronics_category",
    brands: [
      {
        text: "All brands",
        value: "all_electronics_brands",
      },
      {
        text: "Samsung",
        value: "samsung",
      },
      {
        text: "Apple",
        value: "apple",
      },
      {
        text: "Philips",
        value: "philips",
      },
      {
        text: "Panasonic",
        value: "panasonic",
      },
      {
        text: "LG",
        value: "lg",
      },
    ],
  },
  {
    title: "Food",
    id: "food_category",
    brands: [
      {
        text: "All brands",
        value: "all_food_brands",
      },
      {
        text: "McDonald's",
        value: "mc_donalds",
      },
      {
        text: "KFC",
        value: "kfc",
      },
      {
        text: "Burger King",
        value: "burger king",
      },
      {
        text: "Domino's",
        value: "dominos",
      },
    ],
  },
  {
    title: "Clothes",
    id: "clothes_category",
    brands: [
      {
        text: "All brands",
        value: "all_clothes_brands",
      },
      {
        text: "Nike",
        value: "nike",
      },
      {
        text: "Adidas",
        value: "adidas",
      },
      {
        text: "Zara",
        value: "zara",
      },
      {
        text: "Calvin Klein",
        value: "calvin_klein",
      },
      {
        text: "Gucci",
        value: "gucci",
      },
    ],
  },
  {
    title: "Skin and care",
    id: "skin_and_care_category",
    brands: [
      {
        text: "All brands",
        value: "all_skin_and_care_brands",
      },
      {
        text: "L'Oréal Paris",
        value: "loreal_paris",
      },
      {
        text: "NIVEA",
        value: "nivea",
      },
      {
        text: "Eva Cosmetics",
        value: "eva_cosmetics",
      },
      {
        text: "Always",
        value: "always",
      },
      {
        text: "Enough",
        value: "enough",
      },
    ],
  },
  {
    title: "Toys",
    id: "toys_category",
    brands: [
      {
        text: "All brands",
        value: "all_toys_brands",
      },
      {
        text: "LEGO",
        value: "lego",
      },
      {
        text: "Mattel",
        value: "mattel",
      },
      {
        text: "Disney",
        value: "disney",
      },
      {
        text: "Nerf",
        value: "nerf",
      },
      {
        text: "Paw Patrol",
        value: "paw_patrol",
      },
    ],
  },
  {
    title: "Hand tools",
    id: "hand_tools_category",
    brands: [
      {
        text: "All brands",
        value: "all_hand_tools_brands",
      },
      {
        text: "Intertool",
        value: "intertool",
      },
      {
        text: "Stanley",
        value: "stanley",
      },
      {
        text: "TOPEX",
        value: "topex",
      },
      {
        text: "Makita",
        value: "makita",
      },
      {
        text: "Einhell",
        value: "einhell",
      },
    ],
  },
  {
    title: "Sports and outdoors",
    id: "sports_and_outdoors_category",
    brands: [
      {
        text: "All brands",
        value: "all_sports_and_outdoors_brands",
      },
      {
        text: "The North Face ",
        value: "the_north_face",
      },
      {
        text: "Columbia",
        value: "columbia",
      },
      {
        text: "Salomon",
        value: "salomon",
      },
      {
        text: "Patagonia",
        value: "patagonia",
      },
    ],
  },
  {
    title: "Books",
    id: "books_category",
    brands: [
      {
        text: "All brands",
        value: "all_books_brands",
      },
      {
        text: "Penguin Random House",
        value: "penguin_random_house",
      },
      {
        text: "HarperCollins",
        value: "harper_collins",
      },
      {
        text: "Simon & Schuster",
        value: "simon_and_schuster",
      },
      {
        text: "Hachette Livre",
        value: "hachette_livre",
      },
      {
        text: "Macmillan Publishers",
        value: "macmillan_publishers",
      },
    ],
  },
];

export const PRODUCT_CATEGORIES: SelectVariantFields[] = [
  {
    text: "All categories",
    value: "all_categories",
  },
  {
    text: "Electronic",
    value: "electronic",
  },
  {
    text: "Food",
    value: "food",
  },
  {
    text: "Clothes",
    value: "clothes",
  },
  {
    text: "Skin and care",
    value: "skin_and_care",
  },
  {
    text: "Toys",
    value: "toys",
  },
  {
    text: "Hand Tools",
    value: "hand_tools",
  },
  {
    text: "Sports and outdoors",
    value: "sports_and_outdoors",
  },
  {
    text: "Books",
    value: "books",
  },
];
