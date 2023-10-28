import { BaseState } from "./BaseState.ts";
import { SelectVariantFields } from "./Select.ts";

type ProductId = {
  id: string;
};

export type ProductCategory = {
  title: string;
  brands: SelectVariantFields[];
} & ProductId;

type ProductBrand = {
  text: string;
  value: string;
};

type ProductFullDescription = {
  title: Product["title"];
  subtitle: string;
  content: string;
};

type ProductDescription = {
  short: string;
  long: string;
  full: ProductFullDescription;
};

type ProductDelivery = {
  time: number;
  cost: number;
  regions: string[];
};

type ProductStock = {
  amount: number;
  unitMeasure: string;
};

type ProductPrice = {
  original: number;
  discount: number;
  currency: string;
};

type ProductUserData = {
  name: string;
  image: string;
} & ProductId;

type ProductReview = {
  createdDate: string;
  content: string;
  rating: number;
  userData: ProductUserData;
} & ProductId;

export type Product = {
  category: string;
  brands: ProductBrand[];
  images: string[];
  title: string;
  description: ProductDescription;
  rating: string;
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
