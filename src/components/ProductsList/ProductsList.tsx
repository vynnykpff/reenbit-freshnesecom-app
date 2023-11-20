import { FC } from "react";
import { useAppSelector } from "@/store";
import { useFilteredProducts } from "@/hooks";
import { NoMatches } from "@/components/UI";
import { ProductCard } from "./components";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const { paginationPage, productsPerPage } = useAppSelector(state => state.productsPagination);
  const filteredProducts = useFilteredProducts();

  const startIndex = (paginationPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const slicedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <ul className={styles.productsListContainer}>
      {slicedProducts.length ? slicedProducts.map(product => <ProductCard key={product.id} {...product} />) : <NoMatches />}
    </ul>
  );
};
