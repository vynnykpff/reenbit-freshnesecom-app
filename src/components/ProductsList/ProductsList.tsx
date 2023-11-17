import { FC } from "react";
import { useFilteredProducts } from "@/hooks";
import { NoMatches } from "@/components/UI";
import { ProductCard } from "./components";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const filteredProducts = useFilteredProducts();

  return (
    <ul className={styles.productsListContainer}>
      {filteredProducts.length ? filteredProducts.map(product => <ProductCard key={product.id} {...product} />) : <NoMatches />}
    </ul>
  );
};
