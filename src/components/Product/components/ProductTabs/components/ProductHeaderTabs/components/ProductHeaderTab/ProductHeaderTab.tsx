import { FC } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { ProductTabsVariants } from "@/common/constants";
import { ProductInfoNotification } from "@/components/UI";
import styles from "./ProductHeaderTab.module.scss";

type Props = {
  title: ProductTabsVariants;
  amountItems: number;
};

export const ProductHeaderTab: FC<Props> = ({ title, amountItems }) => {
  const { setSelectedTab } = useActions();
  const { selectedTab } = useAppSelector(state => state.product);

  const handeSetSelectedTab = () => {
    setSelectedTab(title);
  };

  return (
    <li onClick={handeSetSelectedTab} className={cn(styles.productHeaderTab, selectedTab === title && styles.productHeaderTabActive)}>
      <span className={styles.productHeaderTabTitle}>{title}</span>
      {!!amountItems && <ProductInfoNotification count={`${amountItems}`} />}
    </li>
  );
};
