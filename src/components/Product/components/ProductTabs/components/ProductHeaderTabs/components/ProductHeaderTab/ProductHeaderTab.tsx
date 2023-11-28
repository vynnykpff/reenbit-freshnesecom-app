import { FC } from "react";
import cn from "classnames";
import { ProductInfoNotification } from "@/components/UI";
import styles from "./ProductHeaderTab.module.scss";

type Props = {
  title: string;
  amountItems: number;
};

export const ProductHeaderTab: FC<Props> = ({ title, amountItems }) => {
  return (
    <li className={cn(styles.productHeaderTab, styles.productHeaderTabActive)}>
      <span className={styles.productHeaderTabTitle}>{title}</span>
      {!!amountItems && <ProductInfoNotification count={`${amountItems}`} />}
    </li>
  );
};
