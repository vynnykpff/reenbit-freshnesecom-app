import { Product } from "@/common/types";
import { BaseState } from "../BaseState.ts";
import { SelectVariants } from "../Select.ts";
import { ProductCategory } from "./ProductInfo.ts";

export type ProductsState = {
  products: Product[];
  productsCategoriesWithBrands: ProductCategory[];
  productsCategories: SelectVariants;
  searchValue: string;
} & BaseState;
