import { ProductDescription } from "./ProductDescription.ts";
import { ProductReview } from "./ProductUserFeedback.ts";
import { ProductBrand, ProductCategory, ProductDelivery, ProductPrice, ProductStock } from "./ProductInfo.ts";
import { BaseState } from "../BaseState.ts";
import { SelectVariantFields } from "../Select.ts";

export type ProductId = {
  id: string;
};

export type Product = {
  category: string;
  brand: ProductBrand;
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
  productsCategoriesWithBrands: ProductCategory[];
  productsCategories: SelectVariantFields[];
} & BaseState;
