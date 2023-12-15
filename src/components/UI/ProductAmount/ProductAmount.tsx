import { ChangeEvent, FC } from "react";
import cn from "classnames";
import { getProductUnitsMeasure } from "@/utils";
import { ProductSelectValue, ProductValue } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { ProductUnitsMeasure, RESET_PRICE_VALUE } from "@/common/constants";
import styles from "./ProductAmount.module.scss";

type Props = {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  className?: string | string[];
  unitsMeasure: ProductUnitsMeasure;
  isCart?: boolean;
  setFieldValue?(key: string): void;
} & ProductSelectValue &
  ProductValue;

export const ProductAmount: FC<Props> = ({
  handleChange,
  priceVariant,
  setPriceVariant,
  setFieldValue,
  inputValue,
  isCart = false,
  className = "",
  unitsMeasure,
}) => {
  const value = inputValue ? inputValue.toString() : "";

  return (
    <div className={cn(styles.productOrderInputContainer, className[0])}>
      <div className={cn(styles.productOrderInputWrapper, className[1])}>
        <Input
          type="number"
          className={cn(styles.productOrderInput, className[2])}
          value={value}
          placeholder={`${RESET_PRICE_VALUE}`}
          onChange={handleChange}
        />
      </div>
      <Select
        className={cn(styles.productOrderSelect, className[3])}
        currentVariant={priceVariant}
        setCurrentVariant={setPriceVariant}
        isShowSelectedValue
        variants={getProductUnitsMeasure(unitsMeasure)}
        isCart={isCart}
        setFieldValue={setFieldValue}
      />
    </div>
  );
};
