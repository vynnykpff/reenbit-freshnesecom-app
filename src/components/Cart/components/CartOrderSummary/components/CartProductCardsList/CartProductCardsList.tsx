import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/store";
import { CartProductCard, EmptyCart } from "./components";
import styles from "./CartProductCardsList.module.scss";

export const CartProductCardsList: FC = () => {
  const { cartProducts } = useAppSelector(state => state.cart);

  return (
    <ul className={styles.productCardsList}>
      {cartProducts.length ? (
        cartProducts.map(({ product, selectedUnit }) => <CartProductCard key={uuidv4()} selectedUnit={selectedUnit} {...product} />)
      ) : (
        <EmptyCart />
      )}
    </ul>
  );
};
