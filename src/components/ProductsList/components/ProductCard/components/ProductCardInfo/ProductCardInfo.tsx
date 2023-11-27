import { Product } from "@/common/types";
import { ProductCardDelivery, ProductCardNavigation, ProductCardPrice } from "./components";
import styles from "./ProductCardInfo.module.scss";

export const ProductCardInfo = (props: Product) => {
  return (
    <div className={styles.productInfoContainer}>
      <ProductCardPrice {...props.price} />
      <ProductCardDelivery {...props.delivery} />
      <ProductCardNavigation {...props} />
    </div>
  );
};
