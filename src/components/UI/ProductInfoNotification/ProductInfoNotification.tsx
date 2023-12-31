import { FC } from "react";
import cn from "classnames";
import styles from "./ProductInfoNotification.module.scss";

type Props = {
  count: string;
  counterName?: string;
  className?: string | string[];
};

export const ProductInfoNotification: FC<Props> = ({ count, counterName, className = "" }) => {
  return (
    <div className={cn(styles.itemCounterContainer, className[0])}>
      <span className={cn(styles.itemCounter, className[1])}>{count}</span>
      <span className={cn(styles.itemCounterTitle, className[2])}>{counterName}</span>
    </div>
  );
};
