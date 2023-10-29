import { StaticProductCardKeys } from "@/common/constants";
import { Rating } from "@/components/UI";
import cn from "classnames";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ProductCardDetails.module.scss";

export const ProductCardDetails: FC = () => {
  // const isTablet = useMatchMedia(`(max-width: ${MediaQueries.TABLET}px)`);

  return (
    <div className={styles.productCardDetailsContainer}>
      <div className={styles.productCardContentWrapper}>
        <h3 className={styles.productCardTitle}>Product Title</h3>
        <p className={styles.productCardShortDescription}>Space for a small product description</p>
        <Rating amountRating={4} />
      </div>
      <div className={styles.productCardDescriptionContainer}>
        <ul className={styles.productCardCharacteristics}>
          {StaticProductCardKeys.map(item => (
            <li key={uuidv4()} className={styles.productCardCharacteristicsItem}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.productCardCharacteristics}>
          <li className={styles.productCardCharacteristicsItem}>USA</li>
          <li className={styles.productCardCharacteristicsItem}>Apple</li>
          <li className={styles.productCardCharacteristicsItem}>Europe</li>
          <li className={cn(styles.productCardCharacteristicsItem, styles.productCardCharacteristicsAccentItem)}>320 pcs</li>
        </ul>
      </div>
      {/*<Dropdown dropDownData={[]} isShowDropList={true} />*/}
    </div>
  );
};
