import cn from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "@/store";
import { getSlugString } from "@/utils";
import { Products } from "@/common/types";
import { Button } from "@/components/UI";
import { Routes } from "@/common/constants";
import LikeIcon from "#/icons/like.svg?react";
import ProductDetailsIcon from "#/icons/select-chevron.svg?react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./ProductCardNavigation.module.scss";

export const ProductCardNavigation = (props: Products) => {
  const [isClicked, setIsClicked] = useState(false);
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
      <Button onClick={() => setIsClicked(prev => !prev)} className={styles.productWishListButton}>
        <LikeIcon className={cn(commonStyles.likeIcon, isClicked && commonStyles.likeIconActive)} /> <span>Add to wish list</span>
      </Button>
    </div>
  );
};
