import { Product } from "@/common/types";
import { getSlugString } from "./getSlugString.ts";

export const getProductId = (products: Product[], pathname: string) => {
  const pathnameArray = pathname.split("/");
  const LAST_PATHNAME = pathnameArray.length - 1;

  const productSlugTitle = pathnameArray[LAST_PATHNAME];
  const singleProduct = products.find(product => getSlugString(product.title) === productSlugTitle);

  if (singleProduct) {
    return singleProduct.id;
  }

  return "";
};
