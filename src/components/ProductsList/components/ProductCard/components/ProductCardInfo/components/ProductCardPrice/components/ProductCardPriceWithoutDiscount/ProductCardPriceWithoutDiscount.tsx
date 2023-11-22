import { Products } from "@/common/types";
import { FC } from "react";
import styles from "./ProductCardPriceWithoutDiscount.module.scss";
import commonStyles from "../../ProductCardPrice.module.scss";

export const ProductCardPriceWithoutDiscount: FC<Products["price"]> = ({ original, currency }) => {
  return (
    <div className={commonStyles.totalPriceContainer}>
      <p className={styles.discountPrice}>{original}</p>
      <span className={styles.priceCurrency}>{currency}</span>
    </div>
  );
};
