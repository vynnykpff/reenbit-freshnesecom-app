import { Input } from "@/components/UI";
import { FC } from "react";
import styles from "./PriceRange.module.scss";

type Price = {
  minPrice: number;
  maxPrice: number;
};

type PriceRangeProps = {
  price: Price;
};

export const PriceRange: FC<PriceRangeProps> = ({ price }) => {
  return (
    <div className={styles.priceRangeContainer}>
      <div className={styles.priceRangeLabelContainer}>
        <label className={styles.priceRangeLabel} htmlFor="min-price">
          Min
        </label>
        <label className={styles.priceRangeLabel} htmlFor="max-price">
          Max
        </label>
      </div>
      <div className={styles.priceRangeInputContainer}>
        <Input className={styles.priceRangeInput} type="number" id="min-price" value={price.minPrice} />
        <div className={styles.priceRangeDivider}></div>
        <Input className={styles.priceRangeInput} id="max-price" type="number" value={price.maxPrice} />
      </div>
    </div>
  );
};
