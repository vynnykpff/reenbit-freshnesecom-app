import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActions, useAppSelector } from "@/store";
import { getProductId } from "@/utils";
import { Loader, NoMatches } from "@/components/UI";
import { ProductWishButton } from "./components/ui";
import { ProductCharacteristics, ProductGallery, ProductInfo, ProductNotification, ProductOrder } from "./components";
import { Routes } from "@/common/constants";
import styles from "./Product.module.scss";

export const Product: FC = () => {
  const { getProduct } = useActions();
  const { product, isPending } = useAppSelector(state => state.product);
  const { products } = useAppSelector(state => state.products);
  const { productBrands } = useAppSelector(state => state.productsFilter);
  const location = useLocation();
  const productId = getProductId(products, location.pathname);

  useEffect(() => {
    if (location.pathname.startsWith(`${Routes.PRODUCTS}/`)) {
      getProduct(getProductId(products, location.pathname));
    }
  }, [productBrands]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      {product.id && productId ? (
        <div className={styles.productContainer}>
          <div className={styles.productMediaContainer}>
            <ProductNotification original={product.price.original} discount={product.price.discount} cost={product.delivery.cost} />
            <ProductGallery title={product.title} images={product.images} />
          </div>
          <div className={styles.productContentContainer}>
            <ProductInfo title={product.title} longDescription={product.description.long} />
            <ProductCharacteristics {...product} />
            <ProductOrder original={product.price.original} discount={product.price.discount} />
            <ProductWishButton />
          </div>
        </div>
      ) : (
        <NoMatches />
      )}
    </>
  );
};
