import { FC } from "react";
import { ProductCharacteristicsRow } from "../ProductCharacteristicsRow";
import { ProductCharacteristicsListProps, ProductCharacteristicsOptions } from "@/common/constants";

export const ProductCharacteristicsRows: FC<Omit<ProductCharacteristicsListProps, "rowIndex">> = ({
  productCharacteristicsKeys,
  productCharacteristicsList,
}) => {
  const rows = Array.from({ length: Math.ceil(productCharacteristicsKeys.length / ProductCharacteristicsOptions.COLUMNS) });
  return rows.map((_, rowIndex) => (
    <ProductCharacteristicsRow
      rowIndex={rowIndex}
      productCharacteristicsKeys={productCharacteristicsKeys}
      productCharacteristicsList={productCharacteristicsList}
    />
  ));
};
