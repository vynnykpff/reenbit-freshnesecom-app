import { ChangeEvent, FC } from "react";
import cn from "classnames";
import { getProductUnitsMeasure } from "@/utils";
import { ProductInputValue, ProductSelectValue } from "@/common/types";
import { Input, Select } from "@/components/UI";
import { ProductUnitsMeasure, RESET_PRICE_VALUE } from "@/common/constants";
import styles from "./ProductAmount.module.scss";

type Props = {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  className?: string | string[];
  unitsMeasure: ProductUnitsMeasure;
} & ProductSelectValue &
  ProductInputValue;

export const ProductAmount: FC<Props> = ({ handleChange, priceVariant, setPriceVariant, inputValue, className = "", unitsMeasure }) => {
  const getPriceValue = () => inputValue || "";

  return (
    <div className={cn(styles.productOrderInputContainer, className[0])}>
      <div className={cn(styles.productOrderInputWrapper, className[1])}>
        <Input
          type="number"
          className={cn(styles.productOrderInput, className[2])}
          value={getPriceValue()}
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
      />
    </div>
  );
};
