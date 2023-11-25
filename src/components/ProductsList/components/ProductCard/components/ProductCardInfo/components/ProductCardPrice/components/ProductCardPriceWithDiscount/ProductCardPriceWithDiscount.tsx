import { FC } from "react";
import cn from "classnames";
import { Props } from "../../ProductCardPrice.tsx";
import commonStyles from "../../ProductCardPrice.module.scss";
import styles from "./ProductCardPriceWithDiscount.module.scss";

export const ProductCardPriceWithDiscount: FC<Props> = ({ discount, currency, original, className = "" }) => {
  return (
    <div className={styles.productCardPriceWithDiscountContainer}>
      <div className={commonStyles.totalPriceContainer}>
        <p className={cn(styles.discountPrice, className)}>
          {discount} {currency}
        </p>
      </div>
      <p className={styles.originalPrice}>{original}</p>
    </div>
  );
};
