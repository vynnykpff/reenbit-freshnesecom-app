import { FC } from "react";
import { Link } from "react-router-dom";
import { getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Routes } from "@/common/constants";
import styles from "./ProductSliderCardDescription.module.scss";

type Props = {
  title: Product["title"];
  description: Product["description"];
};

export const ProductSliderCardDescription: FC<Props> = ({ title, description: { short } }) => {
  return (
    <div className={styles.productSliderCardDescriptionContainer}>
      <Link to={`${Routes.PRODUCTS}/${getSlugString(title)}`}>
        <h4 className={styles.productSliderCardTitle}>{title}</h4>
      </Link>
      <p className={styles.productSliderCardDescription}>{short}</p>
    </div>
  );
};
