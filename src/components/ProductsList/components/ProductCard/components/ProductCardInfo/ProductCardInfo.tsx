import { Products } from "@/common/types";
import { ProductCardDelivery, ProductCardNavigation, ProductCardPrice } from "./components";
import styles from "./ProductCardInfo.module.scss";

export const ProductCardInfo = (props: Products) => {
  return (
    <div className={styles.productInfoContainer}>
      <ProductCardPrice {...props.price} />
      <ProductCardDelivery {...props.delivery} />
      <ProductCardNavigation {...props} />
    </div>
  );
};
