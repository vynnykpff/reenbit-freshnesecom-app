import { FC } from "react";
import { useAppSelector } from "@/store";
import { CartProductCard, EmptyCart } from "./components";
import styles from "./CartProductCardsList.module.scss";

export const CartProductCardsList: FC = () => {
  const { cartProducts } = useAppSelector(state => state.cart);

  return (
    <ul className={styles.productCardsList}>
      {cartProducts.length ? cartProducts.map(cartProduct => <CartProductCard key={cartProduct.id} {...cartProduct} />) : <EmptyCart />}
    </ul>
  );
};
