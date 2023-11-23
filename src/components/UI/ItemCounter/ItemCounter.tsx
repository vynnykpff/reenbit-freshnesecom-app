import { FC } from "react";
import cn from "classnames";
import styles from "./ItemCounter.module.scss";

type Props = {
  count: number;
  counterName?: string;
  className?: string | string[];
};

export const ItemCounter: FC<Props> = ({ count, counterName, className = "" }) => {
  return (
    <div className={cn(styles.itemCounterContainer, className[0])}>
      <span className={cn(styles.itemCounter, className[1])}>{count}</span>
      <span className={cn(styles.itemCounterTitle, className[2])}>{counterName}</span>
    </div>
  );
};
