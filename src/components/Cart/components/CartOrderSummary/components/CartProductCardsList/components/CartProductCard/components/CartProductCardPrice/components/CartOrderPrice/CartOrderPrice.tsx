import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getCartProduct, getMaxAvailableAmount, getProductAmountInSelectedVariant } from "@/utils";
import { CartPayload, ProductInputValue, ProductPrice, ProductSelectValue } from "@/common/types";
import { ProductAmount } from "@/components/UI";
import { GlobalDelay, ProductUnitsMeasure } from "@/common/constants";
import styles from "./CartOrderPrice.module.scss";

type Props = {
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
  cartProducts: CartPayload[];
  id: string;
  setProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
} & ProductSelectValue &
  ProductInputValue &
  Omit<ProductPrice, "currency">;

export const CartOrderPrice: FC<Props> = ({
  inputValue,
  priceVariant,
  unitsMeasure,
  amount,
  setInputValue,
  setPriceVariant,
  cartProducts,
  id,
}) => {
  const maxAvailableAmount = getMaxAvailableAmount({ productsInCart: cartProducts, amount, id });
  const maxAvailableUnits = Math.floor(maxAvailableAmount / getProductAmountInSelectedVariant(priceVariant));
  const cartProduct = getCartProduct({ cartProducts, selectedUnit: priceVariant, id });

  const checkOnValidValue = useDebouncedCallback((value: number) => {
    const isValidValue = value * getProductAmountInSelectedVariant(priceVariant) > maxAvailableAmount;

    if (isValidValue && maxAvailableAmount) {
      setInputValue(cartProduct.amount + maxAvailableUnits);
    }
  }, GlobalDelay.INPUT_VALUE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    setInputValue(value);
    checkOnValidValue(value);
  };

  return (
    <div className={styles.productOrderNavigationWrapper}>
      <ProductAmount
        handleChange={handleChange}
        unitsMeasure={unitsMeasure}
        priceVariant={priceVariant}
        setPriceVariant={setPriceVariant}
        inputValue={inputValue}
        setInputValue={setInputValue}
        className={[styles.productAmountContainer]}
      />
    </div>
  );
};
