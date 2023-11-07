import { ProductsList } from "@/components";
import { ErrorFallback, ItemCounter } from "@/components/UI";
import { useProductsFilter } from "@/hooks";
import { useAppSelector } from "@/store";
import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import styles from "./ProductsPage.module.scss";

const ProductsPage: FC = () => {
  const { error, products } = useAppSelector(state => state.products);
  const filteredProducts = useProductsFilter();

  if (error) {
    throw new Error(error);
  }

  return (
    <div className={styles.productsPageContainer}>
      <div className={styles.productsPageHeader}>
        <h2 className={styles.productsPageTitle}>All Products</h2>
        <ItemCounter count={filteredProducts.length} counterName="Products found" />
      </div>
      <ProductsList />
      <div className={styles.paginationContainer}>
        <ItemCounter count={products.length} counterName="All Products" />
      </div>
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
