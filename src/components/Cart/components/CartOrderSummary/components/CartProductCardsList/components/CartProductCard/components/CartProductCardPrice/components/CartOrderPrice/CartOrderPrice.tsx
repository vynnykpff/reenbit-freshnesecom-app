import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useActions } from "@/store";
import { useModalState } from "@/hooks";
import {
  checkOnSingleProductType,
  getCartProduct,
  getMaxAvailableAmount,
  getMaxAvailableUnits,
  getProductAmountInSelectedVariant,
} from "@/utils";
import { CartPayload, ProductInputValue, ProductPrice, ProductSelectValue } from "@/common/types";
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
  const { setNotification, mergeCartProductsPayload, removeCartProduct, swapCartProductPayload } = useActions();
  const setConfirmModalActive = useModalState("confirmModal")[1];
  const maxAvailableAmount = getMaxAvailableAmount({ productsInCart: cartProducts, amount, id });
  const cartProduct = getCartProduct({ cartProducts, selectedUnit: priceVariant, id });

  const setFieldValue = (key: string) => {
    const isSingleProductType = checkOnSingleProductType({ cartProducts, id, key });
    const maxAvailableUnits = getMaxAvailableUnits({ maxAvailableAmount, selectedVariant: key });

    if (maxAvailableUnits) {
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
    const isValidValue = value * getProductAmountInSelectedVariant(priceVariant) > maxAvailableAmount;

    if (isValidValue && maxAvailableAmount) {
      setInputValue(cartProduct.amount + getMaxAvailableUnits({ maxAvailableAmount, selectedVariant: priceVariant }));
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
        setFieldValue={setFieldValue}
        isCart
      />
    </div>
  );
};
