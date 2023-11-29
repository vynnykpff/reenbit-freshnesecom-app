import { FC } from "react";
import cn from "classnames";
import { Props } from "../../ProductCardPrice.tsx";
import styles from "./ProductCardPriceWithoutDiscount.module.scss";
import commonStyles from "../../ProductCardPrice.module.scss";

export const ProductCardPriceWithoutDiscount: FC<Omit<Props, "discount">> = ({ original, currency, className = "" }) => {
  return (
    <div className={cn(commonStyles.totalPriceContainer, className)}>
      <p className={styles.discountPrice}>{original}</p>
      <span className={styles.priceCurrency}>{currency}</span>
    </div>
  );
};
