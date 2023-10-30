import { SelectVariantFields } from "@/common/types";
import { ProductId } from "./Product.ts";

export type ProductCategory = {
  title: string;
  brand: SelectVariantFields[];
} & ProductId;

export type ProductBrand = {
  text: string;
  value: string;
};

export type ProductDelivery = {
  time: number;
  cost: number;
  regions: string[];
};

export type ProductStock = {
  amount: number;
  unitMeasure: string;
};

export type ProductPrice = {
  original: number;
  discount: number;
  currency: string;
};
