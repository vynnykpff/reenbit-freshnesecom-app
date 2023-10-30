import { ProductId } from "./Product.ts";

export type ProductUserData = {
  name: string;
  image: string;
} & ProductId;

export type ProductReview = {
  createdDate: string;
  content: string;
  rating: number;
  userData: ProductUserData;
} & ProductId;
