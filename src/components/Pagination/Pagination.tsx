import { PaginationPages } from "@/components/Pagination/components";
import { ItemCounter } from "@/components/UI";
import { useFilteredProducts } from "@/hooks";
import { FC } from "react";
import styles from "./Pagination.module.scss";

const ITEM_COUNTER_TITLE = "All Products";

export const Pagination: FC = () => {
  const filteredProducts = useFilteredProducts();

  return (
    <section className={styles.paginationContainer}>
      <PaginationPages />
      <ItemCounter count={filteredProducts.length} counterName={ITEM_COUNTER_TITLE} />
    </section>
  );
};
