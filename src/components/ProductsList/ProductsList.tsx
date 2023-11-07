import { NoMatches } from "@/components/UI";
import { useProductsFilter } from "@/hooks";
import { useAppSelector } from "@/store";
import { FC } from "react";
import { ProductCard } from "./components";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const { searchValue } = useAppSelector(state => state.productsFilter);
  const filteredProducts = useProductsFilter();

  return (
    <ul className={styles.productsListContainer}>
      {filteredProducts.length ? (
        filteredProducts.map(product => <ProductCard key={product.id} {...product} />)
      ) : (
        <NoMatches message={searchValue} />
      )}
    </ul>
  );
};
