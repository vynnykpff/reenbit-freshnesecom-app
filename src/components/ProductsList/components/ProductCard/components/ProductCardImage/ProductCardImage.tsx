import { Link } from "react-router-dom";
import { useActions } from "@/store";
import { getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Routes } from "@/common/constants";
import NoAvailableImageIcon from "#/icons/no-image-available.svg?react";
import styles from "./ProductCardImage.module.scss";

export const ProductCardImage = (props: Product) => {
  const { setProduct } = useActions();

  const renderProductImage = () => {
    return props.images.length ? (
      <Link
        onClick={() => setProduct(props)}
        className={styles.productCardImageWrapper}
        to={`${Routes.PRODUCTS}/${getSlugString(props.title)}`}
      >
        <img className={styles.productCardImage} src={props.images[0]} alt={getSlugString(props.title)} />
      </Link>
    ) : (
      <NoAvailableImageIcon className={styles.productCardNoAvailableImage} />
    );
  };

  return (
    <div className={styles.productCardImageContainer}>
      <div className={styles.productCardImageWrapper}>{renderProductImage()}</div>
    </div>
  );
};
