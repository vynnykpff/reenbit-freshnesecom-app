import { FC } from "react";
import { useAppSelector } from "@/store";
import { ProductDescriptionTab, ProductFeedbackTab, ProductHeaderTabs } from "./components";
import { ProductTabsVariants } from "@/common/constants";
import styles from "./ProductTabs.module.scss";

export const ProductTabs: FC = () => {
  const { product, selectedTab } = useAppSelector(state => state.product);

  return (
    <div className={styles.productTabsContainer}>
      <ProductHeaderTabs />
      {selectedTab === ProductTabsVariants.DESCRIPTION ? (
        <ProductDescriptionTab />
      ) : (
        <ProductFeedbackTab selectedTab={selectedTab} {...product} />
      )}
    </div>
  );
};
