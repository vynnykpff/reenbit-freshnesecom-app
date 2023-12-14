import { FC } from "react";
import { Link } from "react-router-dom";
import { getSlugString } from "@/utils";
import { Routes } from "@/common/constants";
import styles from "./CartProductCardHeader.module.scss";

type Props = {
  title: string;
};

export const CartProductCardHeader: FC<Props> = ({ title }) => {
  return (
    <div className={styles.productCardHeaderContainer}>
      <Link to={`${Routes.PRODUCTS}/${getSlugString(title)}`}>
        <h5 className={styles.productCardHeaderTitle}>{title}</h5>
      </Link>
    </div>
  );
};
