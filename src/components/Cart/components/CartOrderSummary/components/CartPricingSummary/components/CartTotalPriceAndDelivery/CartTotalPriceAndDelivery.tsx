import { FC } from "react";
import { getCartDeliveryTime, getPriceWithPromo, getPriceWithTax, getSubtotalPrice } from "@/utils";
import { CartPayload, CartProduct, CartPromocode } from "@/common/types";
import styles from "./CartTotalPriceAndDelivery.module.scss";

type Props = {
  cartProducts: CartProduct[];
  cartProductsPayload: CartPayload[];
  orderPromo: CartPromocode;
};

export const CartTotalPriceAndDelivery: FC<Props> = ({ cartProductsPayload, cartProducts, orderPromo }) => {
  const getTotalPrice = () => {
    const subtotalPrice = getSubtotalPrice(cartProductsPayload);
    const taxIncludedPrice = getPriceWithTax(subtotalPrice);
    const priceWithPromo = getPriceWithPromo(subtotalPrice, orderPromo.discount);

    return priceWithPromo ? subtotalPrice + taxIncludedPrice - priceWithPromo : subtotalPrice + taxIncludedPrice;
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
