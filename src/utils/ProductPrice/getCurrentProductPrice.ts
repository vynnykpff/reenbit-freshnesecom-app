import { ProductPrice } from "@/common/types";

export const getCurrentProductPrice = (original: ProductPrice["original"], discount: ProductPrice["discount"]) => discount || original;
