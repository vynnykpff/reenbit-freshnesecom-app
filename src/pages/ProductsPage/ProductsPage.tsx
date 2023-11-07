import { MediaQueries } from "@/common/constants";
import { ProductsList } from "@/components";
import { Sidebar } from "@/components/Sidebar";
import { SidebarMobile } from "@/components/Sidebar/components";
import { ErrorFallback, ItemCounter } from "@/components/UI";
import { useMatchMedia, useProductsFilter } from "@/hooks";
import { useAppSelector } from "@/store";
import cn from "classnames";
import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import styles from "./ProductsPage.module.scss";

const ProductsPage: FC = () => {
  const { error, products } = useAppSelector(state => state.products);
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.SIDEBAR_MOBILE}px)`);
  const filteredProducts = useProductsFilter();

  if (error) {
    throw new Error(error);
  }

  return (
    <div className={cn(styles.productsPageContainer, "container")}>
      <div className={styles.productsPageHeader}>
        <h2 className={styles.productsPageTitle}>All Products</h2>
        <ItemCounter count={filteredProducts.length} counterName="Products found" />
      </div>
      <div className={styles.productsPageContent}>
        {isMobile ? <SidebarMobile /> : <Sidebar />}
        <ProductsList />
      </div>
      <div className={styles.paginationContainer}>
        <ItemCounter count={products.length} counterName="All Products" />
      </div>
    </div>
  );
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
