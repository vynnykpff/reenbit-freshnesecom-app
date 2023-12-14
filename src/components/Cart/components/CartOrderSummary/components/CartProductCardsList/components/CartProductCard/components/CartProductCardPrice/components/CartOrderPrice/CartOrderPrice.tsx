import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getCartProduct, getMaxAvailableAmount, getProductAmountInSelectedVariant } from "@/utils";
import { CartPayload, ProductPrice, ProductSelectValue, ProductValue } from "@/common/types";
import { ProductAmount } from "@/components/UI";
import { GlobalDelay, GlobalInitialValues, ProductUnitsMeasure } from "@/common/constants";
import styles from "./CartOrderPrice.module.scss";

type Props = {
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
  cartProducts: CartPayload[];
  id: string;
  setProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
} & ProductSelectValue &
  ProductValue &
  Omit<ProductPrice, "currency">;

const PARSED_INT_RADIX = 10;

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
    const rawValue = e.target.value;
    const value = parseInt(rawValue.replace(/^0+/, ""), PARSED_INT_RADIX);

    setInputValue(isNaN(value) ? GlobalInitialValues.MIN_PRODUCT_AMOUNT : value);

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
