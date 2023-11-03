import { FC } from "react";
import styles from "./ItemCounter.module.scss";

export const ItemCounter: FC<{ count: number; counterName: string }> = ({ count, counterName }) => {
  return (
    <div className={styles.itemCounterContainer}>
      <span className={styles.itemCounter}>{count}</span>
      <span className={styles.itemCounterTitle}>{counterName}</span>
    </div>
  );
};
