import { FC } from "react";
import { getCartDeliveryTime, getPriceWithTax, getSubtotalPrice } from "@/utils";
import { CartPayload, CartProduct } from "@/common/types";
import styles from "./CartTotalPriceAndDelivery.module.scss";

type Props = {
  cartProducts: CartProduct[];
  cartProductsPayload: CartPayload[];
};

export const CartTotalPriceAndDelivery: FC<Props> = ({ cartProductsPayload, cartProducts }) => {
  const getTotalPrice = () => {
    return getSubtotalPrice(cartProductsPayload) + getPriceWithTax(getSubtotalPrice(cartProductsPayload));
  };

  return (
    <div className={styles.cartTotalPriceAndDeliveryContainer}>
      <div className={styles.cartDeliveryContainer}>
        <p className={styles.cartDeliveryTitle}>Total Order</p>
        {!!cartProducts.length && <p className={styles.cartDeliveryInfo}>Guaranteed delivery day: {getCartDeliveryTime(cartProducts)}</p>}
      </div>
      <p className={styles.cartTotalPriceContainer}>
        <span className={styles.cartTotalPrice}>{getTotalPrice()}</span>&nbsp;USD
      </p>
    </div>
  );
};
