import { FC } from "react";
import cn from "classnames";
import { Button } from "@/components/UI";
import WishIcon from "#/icons/like.svg?react";
import RemoveIcon from "#/icons/cancel.svg?react";
import styles from "./CartProductCardNavigation.module.scss";

export const CartProductCardNavigation: FC = () => {
  return (
    <div className={styles.cartProductCardNavigationContainer}>
      <Button className={styles.cartNavigationButton}>
        <WishIcon className={cn(styles.cartNavigationIcon, styles.cartNavigationWishIcon)} />{" "}
        <span className={styles.cartNavigationButtonTitle}>Wishlist</span>
      </Button>
      <Button className={styles.cartNavigationButton}>
        <RemoveIcon className={cn(styles.cartNavigationIcon, styles.cartNavigationRemoveIcon)} />
        <span className={styles.cartNavigationButtonTitle}>Remove</span>
      </Button>
    </div>
  );
};
