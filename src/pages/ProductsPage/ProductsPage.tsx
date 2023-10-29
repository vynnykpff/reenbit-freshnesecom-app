import { ProductsList } from "@/components";
import { ErrorFallback } from "@/components/UI";
import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import styles from "./ProductsPage.module.scss";

// const MAX_RANGE = 1000;

const ProductsPage: FC = () => {
  // const tempProductId = Math.floor(Math.random() * MAX_RANGE);

  return (
    <div className={styles.productsPageContainer}>
      <h2 className={styles.productsPageTitle}>All Products</h2>
      {/*<ul className={styles.productsPageList}>*/}
      {/*  <li className={styles.productsPageListItem}>*/}
      {/*    <Link to={`${Routes.PRODUCTS}/${tempProductId}`}>Current Product</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <ProductsList />
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
