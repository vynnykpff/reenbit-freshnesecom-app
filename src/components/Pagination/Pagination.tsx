import { FC } from "react";
import { useAppSelector } from "@/store";
import { useFilteredProducts } from "@/hooks";
import { ItemCounter } from "@/components/UI";
import { PaginationPages, ShowMoreButton } from "./components";
import styles from "./Pagination.module.scss";

const ITEM_COUNTER_TITLE = "All Products";

export const Pagination: FC = () => {
  const { paginationEndPage, paginationStartPage } = useAppSelector(state => state.productsPagination);
  const filteredProducts = useFilteredProducts();

  const countProducts = paginationStartPage + paginationEndPage;
  const showMoreButtonVisible = countProducts < filteredProducts.length && paginationEndPage <= filteredProducts.length;

  return (
    <section className={styles.paginationContainer}>
      <PaginationPages />
      {showMoreButtonVisible && <ShowMoreButton />}
      <ItemCounter count={filteredProducts.length} counterName={ITEM_COUNTER_TITLE} />
    </section>
  );
};
