import { ProductUnitsMeasure } from "@/common/constants";
import { Product } from "@/common/types";

export const InitialProduct: Product = {
  id: "",
  title: "",
  description: {
    short: "",
    long: "",
    full: [
      {
        title: "",
        content: "",
      },
    ],
  },
  price: {
    original: 0,
    discount: 0,
    currency: "",
  },
  unitsMeasure: ProductUnitsMeasure.PCS,
  category: "",
  brand: "",
  originCountry: "",
  delivery: {
    time: 0,
    cost: 0,
    regions: [""],
  },
  stock: {
    amount: 0,
    unitMeasure: "",
  },
  rating: 0,
  images: [""],
  reviews: [
    {
      createdDate: "",
      content: "",
      rating: 0,
      userData: {
        name: "",
        image: "",
      },
      id: "",
    },
  ],
  questions: [
    {
      createdDate: "",
      content: "",
      userData: {
        name: "",
        image: "",
      },
      id: "",
    },
  ],
};
