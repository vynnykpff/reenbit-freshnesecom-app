import { FC } from "react";
import cn from "classnames";
import { useActions } from "@/store";
import { useModalState } from "@/hooks";
import { Button } from "@/components/UI";
import { CartConfirmMessages, CartSuccessMessages, GlobalDelay, NotificationType } from "@/common/constants";
import WishIcon from "#/icons/like.svg?react";
import RemoveIcon from "#/icons/cancel.svg?react";
import styles from "./CartOrderNavigation.module.scss";

type Props = {
  productId: string;
  selectedUnit: string;
};

export const CartOrderNavigation: FC<Props> = ({ productId, selectedUnit }) => {
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const { setNotification, removeCartProduct, removeCartProductPrice } = useActions();

  const handleRemoveProductFromCart = () => {
    setConfirmModalActive(true, {
      confirmCallback: () => {
        setNotification({ title: CartSuccessMessages.REMOVE_FROM_CART, delay: GlobalDelay.PRICE, type: NotificationType.SUCCESS });
        removeCartProduct({ id: productId, selectedUnit });
        removeCartProductPrice({ id: productId, selectedUnit });
      },
      message: CartConfirmMessages.REMOVE_FROM_CART,
    });
  };

  return (
    <div className={styles.cartProductCardNavigationContainer}>
      <Button type="button" className={styles.cartNavigationButton}>
        <WishIcon className={cn(styles.cartNavigationIcon, styles.cartNavigationWishIcon)} />
        <span className={styles.cartNavigationButtonTitle}>Wishlist</span>
      </Button>
      <Button type="button" onClick={handleRemoveProductFromCart} className={styles.cartNavigationButton}>
        <RemoveIcon className={cn(styles.cartNavigationIcon, styles.cartNavigationRemoveIcon)} />
        <span className={styles.cartNavigationButtonTitle}>Remove</span>
      </Button>
    </div>
  );
};
