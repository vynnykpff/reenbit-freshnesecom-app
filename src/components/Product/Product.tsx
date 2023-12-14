import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActions, useAppSelector } from "@/store";
import { useMatchMedia } from "@/hooks";
import { getProductCharacteristics, getProductId } from "@/utils";
import { NoMatches, Preloader } from "@/components/UI";
import {
  ProductCharacteristics,
  ProductGallery,
  ProductInfo,
  ProductNotification,
  ProductOrder,
  ProductSlider,
  ProductTabs,
} from "./components";
import { MOBILE_ORDER_LIST, MediaQueries, ProductTabsVariants, Routes } from "@/common/constants";
import { ProductWishButton } from "./components/ui";
import styles from "./Product.module.scss";

export const Product: FC = () => {
  const { getProduct, setSelectedTab } = useActions();
  const { product, isPending } = useAppSelector(state => state.product);
  const { products } = useAppSelector(state => state.products);
  const { productBrands } = useAppSelector(state => state.productsFilter);
  const location = useLocation();
  const productId = getProductId(products, location.pathname);

  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.PRODUCT_CARDS_CONTAINER}px)`);
  const productCharacteristicsList = isMobile ? MOBILE_ORDER_LIST : Object.keys(getProductCharacteristics(product));

  useEffect(() => {
    if (location.pathname.startsWith(`${Routes.PRODUCTS}/`)) {
      getProduct(getProductId(products, location.pathname));
    }

    setSelectedTab(ProductTabsVariants.DESCRIPTION);
  }, [productBrands, location.pathname]);

  if (isPending) {
    return <Preloader />;
  }

  return (
    <>
      {product.id && productId ? (
        <div>
          <div className={styles.productContainer}>
            <div className={styles.productMediaContainer}>
              <ProductNotification {...product.price} cost={product.delivery.cost} />
              <ProductGallery title={product.title} images={product.images} />
            </div>
            <div className={styles.productContentContainer}>
              <ProductInfo title={product.title} longDescription={product.description.long} />
              <ProductCharacteristics productCharacteristicsList={productCharacteristicsList} {...product} />
              <ProductOrder {...product} />
              <ProductWishButton />
              <ProductTabs />
            </div>
          </div>
          <ProductSlider product={product} products={products} />
        </div>
      ) : (
        <NoMatches />
      )}
    </>
  );
};
