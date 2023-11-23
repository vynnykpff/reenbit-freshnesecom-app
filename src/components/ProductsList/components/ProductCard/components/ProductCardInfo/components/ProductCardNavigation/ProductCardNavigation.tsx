import LikeIcon from "#/icons/like.svg?react";
import ProductDetailsIcon from "#/icons/select-chevron.svg?react";
import { Routes } from "@/common/constants";
import { Product } from "@/common/types";
import { Button } from "@/components/UI";
import { useActions } from "@/store";
import { getSlugString } from "@/utils";
import { Link } from "react-router-dom";
import styles from "./ProductCardNavigation.module.scss";

export const ProductCardNavigation = (props: Product) => {
  const { setProduct } = useActions();

  return (
    <div className={styles.productCardButtonsContainer}>
      <Link
        onClick={() => setProduct(props)}
        className={styles.productDetailsButtonContainer}
        to={`${Routes.PRODUCTS}/${getSlugString(props.title)}`}
      >
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
