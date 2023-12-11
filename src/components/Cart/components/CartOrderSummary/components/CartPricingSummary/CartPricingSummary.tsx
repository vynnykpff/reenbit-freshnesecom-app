import { FC } from "react";
import { useAppSelector } from "@/store";
import { CartPricingDetails, CartPromo, CartTotalPriceAndDelivery } from "./components";
import styles from "./CartPricingSummary.module.scss";

export const CartPricingSummary: FC = () => {
  const { cartProductsPayload, cartProducts, orderPromo } = useAppSelector(state => state.cart);

  return (
    <div className={styles.cartPricingSummartContainer}>
      <CartPricingDetails cartProductsPayload={cartProductsPayload} orderPromo={orderPromo} />
      <CartPromo />
      <CartTotalPriceAndDelivery cartProductsPayload={cartProductsPayload} cartProducts={cartProducts} orderPromo={orderPromo} />
    </div>
  );
};
