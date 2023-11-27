import { BaseState } from "@/common/types";
import { ProductDescription } from "./ProductDescription.ts";
import { ProductDelivery, ProductPrice, ProductStock } from "./ProductInfo.ts";
import { ProductReview } from "./ProductUserFeedback.ts";
import { ProductUnitsMeasure } from "@/common/constants";

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
  product: Product;
} & BaseState;
