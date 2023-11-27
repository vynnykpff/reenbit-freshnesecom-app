import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useActions } from "@/store";
import { getProductPrice, getProductUnitsMeasure } from "@/utils";
import { ProductPrice } from "@/common/types";
import { Button, Input, Select } from "@/components/UI";
import { ProductUnitsMeasure, ProductsAmountOfUnitsMeasure } from "@/common/constants";
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

  return (
    <div className={styles.productOrderNavigation}>
      <div className={styles.productOrderInputContainer}>
        <div className={styles.productOrderInputWrapper}>
          <Input type="number" className={styles.productOrderInput} value={localInputValue} onChange={handeChangeInputPrice} />
        </div>
        <Select
          className={styles.productOrderSelect}
          currentVariant={currentOrderPriceVariant}
          setCurrentVariant={setCurrentOrderPriceVariant}
          isShowSelectedValue
          variants={getProductUnitsMeasure(unitsMeasure)}
        />
      </div>
      <Button className={styles.productOrderButton}>
        <PlusIcon className={styles.productOrderIcon} /> <span>Add to cart</span>
      </Button>
    </div>
  );
};
