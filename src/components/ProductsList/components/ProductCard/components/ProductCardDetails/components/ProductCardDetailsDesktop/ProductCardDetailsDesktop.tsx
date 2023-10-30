import { FC } from "react";
import { NavigationLink } from "@/common/types";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./ProductCardDetailsDesktop.module.scss";

export const ProductCardDetailsDesktop: FC<{
  productCharacteristics: NavigationLink[];
}> = ({ productCharacteristics }) => {
  return (
    <div className={styles.productCardDetailsDesktopContainer}>
      <ul className={commonStyles.productCardCharacteristics}>
        {productCharacteristics.map(item => (
          <li key={item.id} className={commonStyles.productCardCharacteristicsItem}>
            <span className={commonStyles.productCardCharacteristicsItem}>{item.title}</span>
            <span className={commonStyles.productCardCharacteristicsAccentItem}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
