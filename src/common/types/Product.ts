import { SelectVariantFields } from "./Select.ts";

export type ProductCategory = {
  title: string;
  id: string;
  brands: SelectVariantFields[];
};
