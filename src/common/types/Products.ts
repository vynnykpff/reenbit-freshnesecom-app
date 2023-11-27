import { BaseState } from "./BaseState.ts";
import { SelectVariants } from "./Select.ts";
import { Product, ProductCategory } from "./Product";

export type ProductsState = {
  products: Product[];
  productsCategoriesWithBrands: ProductCategory[];
  productsCategories: SelectVariants;
  searchValue: string;
} & BaseState;
