import { SelectVariants } from "@/common/types";

export type ProductCategory = {
  title: string;
  brands: SelectVariants;
  id: string;
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

export type ProductSelectedPrice = number | number[];
