import { ProductsList } from "@/components";
import { ErrorFallback } from "@/components/UI";
import { useAppSelector } from "@/store";
import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import styles from "./ProductsPage.module.scss";

const ProductsPage: FC = () => {
  const { error } = useAppSelector(state => state.products);

  if (error) {
    throw new Error(error);
  }

  return (
    <div className={styles.productsPageContainer}>
      <h2 className={styles.productsPageTitle}>All Products</h2>
      <ProductsList />
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
