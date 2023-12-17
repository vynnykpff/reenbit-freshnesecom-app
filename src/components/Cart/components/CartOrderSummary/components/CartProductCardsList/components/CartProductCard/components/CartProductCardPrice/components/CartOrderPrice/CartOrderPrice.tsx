import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useActions } from "@/store";
import { useModalState } from "@/hooks";
import {
  checkOnSingleProductType,
  getAmountProduct,
  getCartProduct,
  getCartProductAmount,
  getMaxAvailableAmount,
  getMaxAvailableUnits,
  getProductAmountInSelectedVariant,
  setCartProductValue,
} from "@/utils";
import { CartPayload, ProductPrice, ProductSelectValue, ProductValue } from "@/common/types";
import { ProductAmount } from "@/components/UI";
import { CartConfirmMessages, CartSuccessMessages, GlobalDelay, NotificationType, ProductUnitsMeasure } from "@/common/constants";
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
  discount,
  original,
}) => {
  const { setNotification, mergeCartProductsPayload, removeCartProduct, swapCartProductPayload, setCartProductPayload } = useActions();
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const maxAvailableAmount = getMaxAvailableAmount({ productsInCart: cartProducts, amount, id });
  const cartProduct = getCartProduct({ cartProducts, selectedUnit: priceVariant, id });

  const setFieldValue = (key: string) => {
    const isSingleProductType = checkOnSingleProductType({ cartProducts, id, key });
    const isMaxAvailableAmount =
      getAmountProduct({ value: inputValue, priceVariant: key }) + getCartProductAmount({ priceVariant, cartProducts, id });

    if (isMaxAvailableAmount <= amount) {
      if (isSingleProductType) {
        const cartProduct = getCartProduct({ cartProducts, selectedUnit: key, id });

        setConfirmModalActive(true, {
          confirmCallback: () => {
            setNotification({
              title: CartSuccessMessages.MERGE_PRODUCTS,
              delay: GlobalDelay.PRICE,
              type: NotificationType.SUCCESS,
            });
            mergeCartProductsPayload({ selectedUnit: key, id, prevSelectedUnit: priceVariant });
            removeCartProduct({ id, selectedUnit: priceVariant });
            setPriceVariant(key);
          },
          message: `You already have ${cartProduct.amount} ${key}  ${CartConfirmMessages.MERGE_PRODUCT}`,
        });
        return;
      }

      setPriceVariant(key);
      swapCartProductPayload({ selectedUnit: key, id, prevSelectedUnit: priceVariant });
      return;
    }

    setNotification({
      title: CartSuccessMessages.FAILED_MERGE_PRODUCTS,
      delay: GlobalDelay.PRICE,
      type: NotificationType.WARNING,
    });
  };

  const checkOnValidValue = useDebouncedCallback((value: number) => {
    const selectedProductAmount = value * getProductAmountInSelectedVariant(priceVariant);
    const cartProductParams = {
      isCart: true,
      setInputValue,
      setCartProductPayload,
      id,
      discount,
      original,
      priceVariant,
    };

    if (selectedProductAmount <= maxAvailableAmount || (!maxAvailableAmount && selectedProductAmount <= amount)) {
      setCartProductValue({ ...cartProductParams, cartValue: value, inputValue: value });
      return;
    }

    if (maxAvailableAmount) {
      const cartValue = cartProduct.amount + getMaxAvailableUnits({ maxAvailableAmount, selectedVariant: priceVariant });
      setCartProductValue({ ...cartProductParams, cartValue, inputValue: maxAvailableAmount });
      return;
    }

    const similarProductsParams = {
      cartValue: cartProduct.amount,
      inputValue: cartProduct.amount,
    };

    setCartProductValue({ ...cartProductParams, ...similarProductsParams });
  }, GlobalDelay.INPUT_VALUE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const value = parseInt(rawValue.replace(/^0+/, ""), PARSED_INT_RADIX);

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
        setFieldValue={setFieldValue}
        isCart
      />
    </div>
  );
};
