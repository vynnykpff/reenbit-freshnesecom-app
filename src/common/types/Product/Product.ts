import { ProductUnitsMeasure } from "@/common/constants";
import { BaseState, ProductDelivery, ProductDescription, ProductPrice, ProductReview, ProductStock } from "@/common/types";

export type Product = {
  id: string;
  category: string;
  brand: string;
  images: string[];
  title: string;
  description: ProductDescription;
  originCountry: string;
  delivery: ProductDelivery;
  stock: ProductStock;
  unitsMeasure: ProductUnitsMeasure;
  price: ProductPrice;
  reviews: ProductReview[];
  questions: Omit<ProductReview, "rating">;
};

export type ProductState = {
  product: Partial<Product>;
} & BaseState;
