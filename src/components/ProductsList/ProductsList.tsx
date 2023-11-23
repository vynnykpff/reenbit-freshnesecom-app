import { FC } from "react";
import { useAppSelector } from "@/store";
import { useChangeEffect, useFilteredProducts } from "@/hooks";
import { NoMatches } from "@/components/UI";
import { ProductCard } from "./components";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const { paginationStartPage, paginationEndPage } = useAppSelector(state => state.productsPagination);
  const filteredProducts = useFilteredProducts();

  const slicedProducts = filteredProducts.slice(paginationStartPage, paginationStartPage + paginationEndPage);

  useChangeEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filteredProducts.length]);

  return (
    <ul className={styles.productsListContainer}>
      {slicedProducts.length ? slicedProducts.map(product => <ProductCard key={product.id} {...product} />) : <NoMatches />}
    </ul>
  );
};
