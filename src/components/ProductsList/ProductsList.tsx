import { useAppSelector } from "@/store";
import { ProductCard } from "./components";
import { FC } from "react";
import styles from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const { products } = useAppSelector(state => state.products);

  return (
    <section className={styles.productsListContainer}>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};
