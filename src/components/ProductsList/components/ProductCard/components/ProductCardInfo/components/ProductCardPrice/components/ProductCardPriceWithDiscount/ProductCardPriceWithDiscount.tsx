import { Product } from "@/common/types";
import { FC } from "react";
import commonStyles from "../../ProductCardPrice.module.scss";
import styles from "./ProductCardPriceWithDiscount.module.scss";

export const ProductCardPriceWithDiscount: FC<Product["price"]> = ({ discount, currency, original }) => {
  return (
    <div className={styles.productCardPriceWithDiscountContainer}>
      <div className={commonStyles.totalPriceContainer}>
        <p className={styles.discountPrice}>
          {discount} {currency}
        </p>
      </div>
      <p className={styles.originalPrice}>{original}</p>
    </div>
  );
};
