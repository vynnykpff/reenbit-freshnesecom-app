import { FC } from "react";
import { useAppSelector } from "@/store";
import { CartPricingDetails, CartPromo, CartTotalPriceAndDelivery } from "./components";
import styles from "./CartPricingSummary.module.scss";

export const CartPricingSummary: FC = () => {
  const { cartProductsPayload, cartProducts } = useAppSelector(state => state.cart);

  return (
    <div className={styles.cartPricingSummartContainer}>
      <CartPricingDetails cartProductsPayload={cartProductsPayload} />
      <CartPromo />
      <CartTotalPriceAndDelivery cartProductsPayload={cartProductsPayload} cartProducts={cartProducts} />
    </div>
  );
};
