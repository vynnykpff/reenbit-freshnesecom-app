import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductId } from "@/utils";
import { useActions, useAppSelector } from "@/store";
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
import { ProductTabsVariants, Routes } from "@/common/constants";
import { ProductWishButton } from "./components/ui";
import styles from "./Product.module.scss";

export const Product: FC = () => {
  const { getProduct, setSelectedTab } = useActions();
  const { product, isPending } = useAppSelector(state => state.product);
  const { products } = useAppSelector(state => state.products);
  const { productBrands } = useAppSelector(state => state.productsFilter);
  const location = useLocation();
  const productId = getProductId(products, location.pathname);

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
              <ProductCharacteristics {...product} />
              <ProductOrder {...product.price} amount={product.stock.amount} unitsMeasure={product.unitsMeasure} />
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
