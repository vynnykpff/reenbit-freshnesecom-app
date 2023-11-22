import { Products } from "@/common/types";

type ProductFullDescription = {
  title: Products["title"];
  subtitle: string;
  content: string;
};

export type ProductDescription = {
  short: string;
  long: string;
  full: ProductFullDescription;
};
