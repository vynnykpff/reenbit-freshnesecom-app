import { FC } from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { Routes } from "@/common/constants";
import { ErrorFallback } from "@/components/UI";
import styles from "./ProductsPage.module.scss";

const MAX_RANGE = 1000;

const ProductsPage: FC = () => {
  const tempProductId = Math.floor(Math.random() * MAX_RANGE);

  return (
    <div className={styles.productsPageContainer}>
      <h2 className={styles.productsPageTitle}>All Products Page</h2>
      <ul className={styles.productsPageList}>
        <li className={styles.productsPageListItem}>
          <Link to={`${Routes.PRODUCTS}/${tempProductId}`}>Current Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
