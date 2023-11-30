import { Product } from "@/common/types";

type ProductFullDescription = {
  title: Product["title"];
  content: string;
};

export type ProductDescription = {
  short: string;
  long: string;
  full: ProductFullDescription[];
};
