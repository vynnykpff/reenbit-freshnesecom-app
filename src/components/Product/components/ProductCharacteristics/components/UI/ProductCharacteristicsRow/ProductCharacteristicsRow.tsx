import { FC } from "react";
import { ProductCharacteristicsListProps, ProductCharacteristicsOptions } from "@/common/constants";
import styles from "./ProductCharacteristicsRow.module.scss";

export const ProductCharacteristicsRow: FC<ProductCharacteristicsListProps> = ({
  productCharacteristicsKeys,
  productCharacteristicsList,
  rowIndex,
}) => {
  const productCharacteristicsData = productCharacteristicsKeys.slice(
    rowIndex * ProductCharacteristicsOptions.COLUMNS,
    (rowIndex + ProductCharacteristicsOptions.NEXT_ITEM) * ProductCharacteristicsOptions.COLUMNS,
  );

  return (
    <div className={styles.productCharacteristicsItemWrapper} key={rowIndex}>
      {productCharacteristicsData.map(key => (
        <li className={styles.productCharacteristicsItem} key={key}>
          <span className={styles.productCharacteristicsItemKey}>{key}:</span>
          <span className={styles.productCharacteristicsItemProperty}>{productCharacteristicsList[key]}</span>
        </li>
      ))}
    </div>
  );
};
