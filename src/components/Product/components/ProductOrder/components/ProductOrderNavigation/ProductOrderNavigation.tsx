import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getMaxAvailableAmount, getProductAmountInSelectedVariant, getProductAmountMessage, getProductPrice } from "@/utils";
import { ProductPrice, ProductSelectValue, ProductValue } from "@/common/types";
import { ProductAmount } from "@/components/UI";
import { GlobalInitialValues, ProductUnitsMeasure } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./ProductOrderNavigation.module.scss";

type Props = {
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
  className?: string | string[];
  id: string;
  isDisabled: boolean;
  setProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
} & ProductSelectValue &
  ProductValue &
  Omit<ProductPrice, "currency">;

export const ProductOrderNavigation: FC<Props> = ({
  inputValue,
  unitsMeasure,
  priceVariant,
  setPriceVariant,
  original,
  discount,
  amount,
  setInputValue,
  setProductPrice,
  className = "",
  id,
  setIsDisabled,
}) => {
  const { setNotification } = useActions();
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [messageOfAmountUnits, setMessageOfAmountUnits] = useState("");

  const { cartProductsPayload } = useAppSelector(state => state.cart);

  const productPriceSimilarParams = {
    original,
    discount,
    amount,
    priceVariant,
    setProductPrice,
    setInputValue,
    setNotification,
  };

  const maxAvailableAmount = getMaxAvailableAmount({ productsInCart: cartProductsPayload, amount, id });
  const maxAvailableUnits = Math.floor(maxAvailableAmount / getProductAmountInSelectedVariant(priceVariant));

  const isShowMessageOfTotalAmountProducts = inputValue > +GlobalInitialValues.MIN_PRODUCT_AMOUNT;
  const isExceededProducts = !!maxAvailableAmount && !maxAvailableUnits;

  const getCurrentProductAmount = () => {
    return inputValue * getProductAmountInSelectedVariant(priceVariant);
  };

  useEffect(() => {
    if (!!maxAvailableAmount && !maxAvailableUnits) {
      setIsDisabled(true);
      setInputValue(+GlobalInitialValues.MIN_PRODUCT_AMOUNT);
      return;
    }

    setIsDisabled(false);
  }, [maxAvailableUnits]);

  const handeChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.floor(+e.target.value);

    setInputValue(value);
    getProductPrice({
      ...productPriceSimilarParams,
      value,
    });

    if (!value) {
      setIsDisabled(true);
      return;
    }

    if (maxAvailableAmount && !maxAvailableUnits) {
      setIsDisabled(true);
      return;
    }

    const isValidValue = value * getProductAmountInSelectedVariant(priceVariant) > maxAvailableAmount;

    if (isValidValue) {
      setInputValue(maxAvailableUnits);

      getProductPrice({
        ...productPriceSimilarParams,
        value: maxAvailableUnits,
      });

      return;
    }

    setIsDisabled(false);
  };

  useEffect(() => {
    if (!maxAvailableAmount) {
      setIsDisabled(true);
      setInputValue(+GlobalInitialValues.MIN_PRODUCT_AMOUNT);
      return;
    }
  }, [maxAvailableAmount]);

  useChangeEffect(() => {
    getProductAmountMessage({ priceVariant, setIsShowMessage, setMessageOfAmountUnits });
  }, [priceVariant]);

  return (
    <div className={styles.productOrderNavigationWrapper}>
      {isShowMessage && (
        <div>
          <span className={cn(styles.productOrderNotification, className[0])}>{messageOfAmountUnits}</span>
          <span className={cn(styles.productOrderNotification, styles.amountProductsNotification, className[0])}>
            {isShowMessageOfTotalAmountProducts && `${getCurrentProductAmount()} ${ProductUnitsMeasure.PCS} total`}
          </span>
          {isExceededProducts && (
            <span
              className={cn(
                styles.productOrderNotification,
                styles.amountProductsNotification,
                commonStyles.cartErrorMessage,
                className[0],
              )}
            >
              Total should not exceed {amount} {ProductUnitsMeasure.PCS}
            </span>
          )}
        </div>
      )}
      {!maxAvailableAmount && (
        <span
          className={cn(styles.productOrderNotification, styles.amountProductsNotification, commonStyles.cartErrorMessage, className[0])}
        >
          Product is sold out
        </span>
      )}
      <ProductAmount
        handleChange={handeChangeInputPrice}
        unitsMeasure={unitsMeasure}
        priceVariant={priceVariant}
        setPriceVariant={setPriceVariant}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};
