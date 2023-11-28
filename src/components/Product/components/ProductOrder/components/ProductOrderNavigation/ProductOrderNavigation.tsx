import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { useActions } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getProductPrice, getProductUnitsMeasure } from "@/utils";
import { ProductPrice } from "@/common/types";
import { Button, Input, Select } from "@/components/UI";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure, RESET_PRICE_VALUE } from "@/common/constants";
import PlusIcon from "#/icons/plus.svg?react";
import styles from "./ProductOrderNavigation.module.scss";

type Props = {
  localInputValue: ProductsAmountOfUnitsMeasure;
  currentOrderPriceVariant: string;
  setCurrentOrderPriceVariant: Dispatch<SetStateAction<string>>;
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
  setLocalInputValue: Dispatch<SetStateAction<ProductsAmountOfUnitsMeasure>>;
  setLocalProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
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
    <div className={styles.productOrderNavigation}>
      <div className={styles.productOrderNavigationWrapper}>
        {isShowMessage && <span className={styles.productOrderNotification}>{messageOfAmountUnits}</span>}
        <div className={styles.productOrderInputContainer}>
          <div className={styles.productOrderInputWrapper}>
            <Input
              type="number"
              className={styles.productOrderInput}
              value={!localInputValue ? "" : localInputValue}
              placeholder={`${RESET_PRICE_VALUE}`}
              onChange={handeChangeInputPrice}
            />
          </div>
          <Select
            className={styles.productOrderSelect}
            currentVariant={currentOrderPriceVariant}
            setCurrentVariant={setCurrentOrderPriceVariant}
            isShowSelectedValue
            variants={getProductUnitsMeasure(unitsMeasure)}
          />
        </div>
      </div>
      <Button className={styles.productOrderButton}>
        <PlusIcon className={styles.productOrderIcon} /> <span>Add to cart</span>
      </Button>
    </div>
  );
};
