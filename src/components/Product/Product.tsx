import { FC } from "react";
import { ProductWishButton } from "./components/ui";
import { ProductCharacteristics, ProductGallery, ProductInfo, ProductNotification, ProductOrder } from "./components";
import styles from "./Product.module.scss";

export const Product: FC = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productMediaContainer}>
        <ProductNotification />
        <ProductGallery />
      </div>
      <div className={styles.productContentContainer}>
        <ProductInfo />
        <ProductCharacteristics />
        <ProductOrder />
        <ProductWishButton />
      </div>
    </div>
  );
};
