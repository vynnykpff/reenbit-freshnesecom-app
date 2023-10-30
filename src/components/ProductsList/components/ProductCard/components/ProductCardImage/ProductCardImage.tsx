import NoAvailableImageIcon from "#/icons/no-image-available.svg?react";
import { Routes, tempProductId } from "@/common/constants";
import { Product } from "@/common/types";
import { getSlugString } from "@/utils";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCardImage.module.scss";

type Props = {
  images: Product["images"];
  title: Product["title"];
};

export const ProductCardImage: FC<Props> = ({ images, title }) => {
  const renderProductImage = () => {
    return images.length ? (
      <Link className={styles.productCardImageWrapper} to={`${Routes.PRODUCTS}/${tempProductId}`}>
        <img className={styles.productCardImage} src={images[0]} alt={getSlugString(title)} />
      </Link>
    ) : (
      <NoAvailableImageIcon className={styles.productCardNoAvailableImage} />
    );
  };

  return <div className={styles.productCardImageContainer}>{renderProductImage()}</div>;
};
