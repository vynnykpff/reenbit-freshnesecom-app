import { BaseState } from "../BaseState.ts";
import { SelectVariants } from "../Select.ts";
import { ProductDescription } from "./ProductDescription.ts";
import { ProductCategory, ProductDelivery, ProductPrice, ProductStock } from "./ProductInfo.ts";
import { ProductReview } from "./ProductUserFeedback.ts";

export type ProductId = {
  id: string;
};

export type Product = {
  category: string;
  brand: string;
  images: string[];
  title: string;
  description: ProductDescription;
  rating: number;
  originCountry: string;
  delivery: ProductDelivery;
  stock: ProductStock;
  unitsMeasure: string[];
  price: ProductPrice;
  reviews: ProductReview;
  questions: Omit<ProductReview, "rating">;
} & ProductId;

export type ProductsState = {
  products: Product[];
  currentProduct: string;
  productsCategoriesWithBrands: ProductCategory[];
  productsCategories: SelectVariants;
  searchValue: string;
} & BaseState;
