import { Product } from "@/common/types";
import { ProductFilterType } from "@/common/constants";

type Params = {
  products: Product[];
  title: Product["title"];
  selectedCategory: Product["category"];
};

export const getProductFromCategory = ({ products, selectedCategory, title }: Params) => {
  if (selectedCategory !== (ProductFilterType.ALL_CATEGORIES as string)) {
    return products.filter(product => product.category === selectedCategory && product.title !== title);
  }

  return [];
};
