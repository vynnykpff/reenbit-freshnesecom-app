import { FC } from "react";
import styles from "./IconNotification.module.scss";

type Props = {
  count: number;
};

export const IconNotification: FC<Props> = ({ count }) => {
  return <span className={styles.iconNotification}>{count}</span>;
};
