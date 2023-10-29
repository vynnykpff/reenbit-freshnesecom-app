import { FC } from "react";
import { Button } from "@/components/UI";
import LikeIcon from "#/icons/like.svg?react";
import styles from "./ProductCardNavigation.module.scss";

export const ProductCardNavigation: FC = () => {
  return (
    <div className={styles.productCardButtonsContainer}>
      <Button className={styles.productDetailsButton}>Product Details</Button>
      <Button className={styles.productWishListButton}>
        <LikeIcon className={styles.likeIcon} /> <span>Add to wish list</span>
      </Button>
    </div>
  );
};
