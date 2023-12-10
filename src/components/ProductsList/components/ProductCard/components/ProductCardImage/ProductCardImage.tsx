import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Routes } from "@/common/constants";
import NoAvailableImageIcon from "#/icons/no-image-available.svg?react";
import styles from "./ProductCardImage.module.scss";

type Props = {
  className?: string | string[];
  images: Product["images"];
  title: Product["title"];
};

export const ProductCardImage: FC<Props> = ({ className = "", images, title }) => {
  const renderProductImage = () => {
    return images.length ? (
      <Link className={cn(styles.productCardImageWrapper, className[2])} to={`${Routes.PRODUCTS}/${getSlugString(title)}`}>
        <img className={cn(styles.productCardImage, className[3])} src={images[0]} alt={getSlugString(title)} />
      </Link>
    ) : (
      <NoAvailableImageIcon className={styles.productCardNoAvailableImage} />
    );
  };

  return (
    <div className={cn(styles.productCardImageContainer, className[0])}>
      <div className={cn(styles.productCardImageWrapper, className[1])}>{renderProductImage()}</div>
    </div>
  );
};
