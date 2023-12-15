import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getCartProduct, getCurrentProductPrice, getProductPriceDependsOnUnit } from "@/utils";
import { Product, ProductPrice } from "@/common/types";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { CartOrderPrice } from "./components";
import { GlobalDelay, GlobalInitialValues } from "@/common/constants";
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

  const [productPrice, setProductPrice] = useState<Omit<ProductPrice, "currency">>({ original, discount });
  const [inputValue, setInputValue] = useState(cartProduct.amount);
  const [priceVariant, setPriceVariant] = useState(cartProduct.unit);

  const { setCartProductPayload } = useActions();

  const [debouncedLocalProductPrice] = useDebounce(productPrice, GlobalDelay.DEFAULT);
  const [debouncedLocalInputValue] = useDebounce(inputValue, GlobalDelay.DEFAULT);
  const [debouncedUnitMeasure] = useDebounce(priceVariant, GlobalDelay.DEFAULT);

  useChangeEffect(() => {
    if (!inputValue || inputValue < +GlobalInitialValues.DEFAULT) {
      setInputValue(GlobalInitialValues.MIN_PRODUCT_AMOUNT);
      return;
    }

    setCartProductPayload({
      products: {
        price: getCurrentProductPrice(original, discount),
        id,
        amount: debouncedLocalInputValue,
        unit: debouncedUnitMeasure,
      },
      isCart: true,
    });
  }, [debouncedLocalProductPrice, debouncedLocalInputValue]);

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
        setProductPrice={setProductPrice}
        setPriceVariant={setPriceVariant}
        cartProducts={cartProductsPayload}
        id={id}
      />
    </div>
  );
};
