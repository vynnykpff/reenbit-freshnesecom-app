import LikeIcon from "#/icons/like.svg?react";
import ProductDetailsIcon from "#/icons/select-chevron.svg?react";
import { Routes, tempProductId } from "@/common/constants";
import { Button } from "@/components/UI";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCardNavigation.module.scss";

export const ProductCardNavigation: FC = () => {
  return (
    <div className={styles.productCardButtonsContainer}>
      <Link className={styles.productDetailsButtonContainer} to={`${Routes.PRODUCTS}/${tempProductId}`}>
        <Button className={styles.productDetailsButton}>
          <span>Product Details</span> <ProductDetailsIcon className={styles.productDetailsIcon} />
        </Button>
      </Link>
      <Button className={styles.productWishListButton}>
        <LikeIcon className={styles.likeIcon} /> <span>Add to wish list</span>
      </Button>
    </div>
  );
};
