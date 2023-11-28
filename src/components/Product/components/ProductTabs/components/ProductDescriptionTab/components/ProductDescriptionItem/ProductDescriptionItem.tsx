import { FC } from "react";
import { ProductDescriptionProps } from "@/common/types";
import styles from "./ProductDescriptionItem.module.scss";

export const ProductDescriptionItem: FC<ProductDescriptionProps> = ({ title, content }) => {
  return (
    <li className={styles.productDescriptionItemContainer}>
      <h4 className={styles.productDescriptionTitle}>{title}</h4>
      <p className={styles.productDescriptionContent}>{content}</p>
    </li>
  );
};
