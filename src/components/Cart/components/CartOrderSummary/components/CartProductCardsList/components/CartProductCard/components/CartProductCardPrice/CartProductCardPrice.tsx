import { FC, useState } from "react";
import { useAppSelector } from "@/store";
import { getCartProduct, getProductPriceDependsOnUnit } from "@/utils";
import { Product } from "@/common/types";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { CartOrderPrice } from "./components";
import { GlobalInitialValues } from "@/common/constants";
import styles from "./CartProductCardPrice.module.scss";

type Props = {
  selectedUnit: string;
} & Product;

export const CartProductCardPrice: FC<Props> = props => {
  const {
    stock: { amount },
    unitsMeasure,
    price: { discount, original },
    id,
    selectedUnit,
  } = props;
  const { cartProductsPayload } = useAppSelector(state => state.cart);
  const cartProduct = getCartProduct({ cartProducts: cartProductsPayload, selectedUnit, id });

  const [inputValue, setInputValue] = useState(cartProduct.amount);
  const [priceVariant, setPriceVariant] = useState(cartProduct.unit);

  return (
    <div className={styles.cartProductCardPriceContainer}>
      <ProductCardPrice
        className={[styles.cartPriceContainer, styles.cartPrice]}
        discount={GlobalInitialValues.DEFAULT}
        original={
          getProductPriceDependsOnUnit({
            unit: cartProduct?.unit,
            price: cartProduct?.price,
            amount: cartProduct?.amount,
          }) ?? GlobalInitialValues.DEFAULT
        }
      />
      <CartOrderPrice
        inputValue={inputValue}
        priceVariant={priceVariant}
        unitsMeasure={unitsMeasure}
        amount={amount}
        original={original}
        discount={discount}
        setInputValue={setInputValue}
        setPriceVariant={setPriceVariant}
        cartProducts={cartProductsPayload}
        id={id}
      />
    </div>
  );
};
