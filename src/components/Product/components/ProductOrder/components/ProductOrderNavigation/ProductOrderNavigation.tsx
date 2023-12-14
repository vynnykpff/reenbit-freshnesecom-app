import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import cn from "classnames";
import { useActions } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getProductPrice, getProductUnitsMeasure } from "@/utils";
import { ProductPrice } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure, RESET_PRICE_VALUE } from "@/common/constants";
import styles from "./ProductOrderNavigation.module.scss";

type Props = {
  localInputValue: ProductsAmountOfUnitsMeasure;
  currentOrderPriceVariant: string;
  setCurrentOrderPriceVariant: Dispatch<SetStateAction<string>>;
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
  setLocalInputValue: Dispatch<SetStateAction<ProductsAmountOfUnitsMeasure>>;
  setLocalProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
  className?: string | string[];
} & Omit<ProductPrice, "currency">;

export const ProductOrderNavigation: FC<Props> = ({
  localInputValue,
  unitsMeasure,
  setCurrentOrderPriceVariant,
  currentOrderPriceVariant,
  original,
  discount,
  amount,
  setLocalInputValue,
  setLocalProductPrice,
  className = "",
}) => {
  const { setNotification } = useActions();
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [messageOfAmountUnits, setMessageOfAmountUnits] = useState("");

  const handeChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.floor(+e.target.value);
    setLocalInputValue(value);
    getProductPrice({
      original,
      discount,
      productAmount: amount,
      value,
      currentOrderPriceVariant,
      setLocalProductPrice,
      setLocalInputValue,
      setNotification,
    });
  };

  useChangeEffect(() => {
    const variantTitles = {
      [ProductUnitsMeasure.BOX]: `${ProductsAmountOfUnitsMeasure.BOX} units in ${ProductUnitsMeasure.BOX}`,
      [ProductUnitsMeasure.PACK]: `${ProductsAmountOfUnitsMeasure.PACK} units in ${ProductUnitsMeasure.PACK}`,
    };

    const title = variantTitles[currentOrderPriceVariant as keyof typeof variantTitles];

    if (title) {
      setIsShowMessage(true);
      setMessageOfAmountUnits(title);
      return;
    }

    setIsShowMessage(false);
  }, [currentOrderPriceVariant]);

  return (
    <div className={styles.productOrderNavigationWrapper}>
      {isShowMessage && <span className={cn(styles.productOrderNotification, className[0])}>{messageOfAmountUnits}</span>}
      <div className={cn(styles.productOrderInputContainer, className[1])}>
        <div className={cn(styles.productOrderInputWrapper, className[2])}>
          <Input
            type="number"
            className={cn(styles.productOrderInput, className[3])}
            value={!localInputValue ? "" : localInputValue}
            placeholder={`${RESET_PRICE_VALUE}`}
            onChange={handeChangeInputPrice}
          />
        </div>
        <Select
          className={cn(styles.productOrderSelect, className[4])}
          currentVariant={currentOrderPriceVariant}
          setCurrentVariant={setCurrentOrderPriceVariant}
          isShowSelectedValue
          variants={getProductUnitsMeasure(unitsMeasure)}
        />
      </div>
    </div>
  );
};
