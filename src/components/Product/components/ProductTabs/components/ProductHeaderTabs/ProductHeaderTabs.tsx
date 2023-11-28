import { FC } from "react";
import { useAppSelector } from "@/store";
import { ProductHeaderTab } from "./components";
import { ProductTabsKeys } from "@/common/constants";
import styles from "./ProductHeaderTabs.module.scss";

export const ProductHeaderTabs: FC = () => {
  const { product } = useAppSelector(state => state.product);

  const productTabsData = [0, product.reviews.length, product.questions.length];

  return (
    <div className={styles.productTabsHeaderContainer}>
      <ul className={styles.productTabsHeaderList}>
        {ProductTabsKeys.map((productTab, index) => (
          <ProductHeaderTab key={index} amountItems={productTabsData[index]} title={productTab} />
        ))}
      </ul>
    </div>
  );
};
