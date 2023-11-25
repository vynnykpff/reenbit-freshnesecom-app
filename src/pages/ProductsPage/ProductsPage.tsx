import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import cn from "classnames";
import { useAppSelector } from "@/store";
import { useFilteredProducts, useMatchMedia } from "@/hooks";
import { MediaQueries } from "@/common/constants";
import { Pagination, ProductSorting, ProductsList, Sidebar, SidebarMobile } from "@/components";
import { ErrorFallback, ProductInfoNotification } from "@/components/UI";
import styles from "./ProductsPage.module.scss";

const ProductsPage: FC = () => {
  const { error } = useAppSelector(state => state.products);
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.SIDEBAR_MOBILE}px)`);
  const filteredProducts = useFilteredProducts();

  if (error) {
    throw new Error(error);
  }

  return (
    <div className={cn(styles.productsPageContainer, "container")}>
      <div className={styles.productsPageHeaderContainer}>
        <div className={styles.productsPageHeader}>
          <h2 className={styles.productsPageTitle}>All Products</h2>
          <ProductInfoNotification count={`${filteredProducts.length}`} counterName="Products found" />
        </div>
        {!isMobile && <ProductSorting />}
      </div>
      <div className={styles.productsPageContent}>
        {isMobile ? (
          <div className={styles.productsPageContentContainer}>
            <ProductSorting />
            <SidebarMobile />
          </div>
        ) : (
          <Sidebar />
        )}
        <ProductsList />
      </div>
      <Pagination />
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
