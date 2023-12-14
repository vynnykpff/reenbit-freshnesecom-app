import { ProductUnitsMeasure } from "@/common/constants";
import { Product } from "@/common/types";

const initialFullDescription = {
  title: "",
  content: "",
};

const initialDescription = {
  short: "",
  long: "",
  full: [initialFullDescription],
};

const initialPrice = {
  original: 0,
  discount: 0,
  currency: "",
};

const initialDelivery = {
  time: 0,
  cost: 0,
  regions: [""],
};

const initialStock = {
  amount: 0,
  unitMeasure: "",
};

const initialUserFeedback = {
  createdDate: "",
  content: "",
  userData: {
    name: "",
    image: "",
  },
  id: "",
};

export const InitialProduct: Product = {
  id: "",
  title: "",
  description: initialDescription,
  price: initialPrice,
  unitsMeasure: ProductUnitsMeasure.PCS,
  category: "",
  brand: "",
  originCountry: "",
  delivery: initialDelivery,
  stock: initialStock,
  rating: 0,
  images: [""],
  reviews: [{ ...initialUserFeedback, rating: 0 }],
  questions: [initialUserFeedback],
};
