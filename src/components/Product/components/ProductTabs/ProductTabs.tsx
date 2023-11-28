import { FC } from "react";
import { useAppSelector } from "@/store";
import {
  // ProductDescriptionTab,
  ProductFeedbackTab,
  ProductHeaderTabs,
} from "./components";
import styles from "./ProductTabs.module.scss";

export const ProductTabs: FC = () => {
  const { product } = useAppSelector(state => state.product);

  return (
    <div className={styles.productTabsContainer}>
      <ProductHeaderTabs />
      <ProductFeedbackTab {...product} />
      {/*<ProductDescriptionTab />*/}
    </div>
  );
};
