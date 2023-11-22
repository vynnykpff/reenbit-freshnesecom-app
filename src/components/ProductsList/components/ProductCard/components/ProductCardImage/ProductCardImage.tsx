import { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "@/store";
import { getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Routes } from "@/common/constants";
import NoAvailableImageIcon from "#/icons/no-image-available.svg?react";
import styles from "./ProductCardImage.module.scss";

type Props = {
  images: Product["images"];
  title: Product["title"];
};

export const ProductCardImage: FC<Props> = ({ images, title }) => {
  const { setCurrentProduct } = useActions();

  const renderProductImage = () => {
    return images.length ? (
      <Link
        onClick={() => setCurrentProduct(title)}
        className={styles.productCardImageWrapper}
        to={`${Routes.PRODUCTS}/${getSlugString(title)}`}
      >
        <img className={styles.productCardImage} src={images[0]} alt={getSlugString(title)} />
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
