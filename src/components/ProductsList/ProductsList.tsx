import { ProductCard } from "./components";
import { FC } from "react";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  return (
    <section className={styles.productsListContainer}>
      <ProductCard />
    </section>
  );
};
