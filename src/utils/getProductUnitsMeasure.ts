import { ProductUnitsMeasure } from "@/common/constants";

export const getProductUnitsMeasure = (unitsMeasure: ProductUnitsMeasure) => {
  const unitsMeasureArray = unitsMeasure.split(", ");

  const productUnitsMeasure: Record<ProductUnitsMeasure, string> = unitsMeasureArray.reduce(
    (acc, item) => {
      acc[item as ProductUnitsMeasure] = item;
      return acc;
    },
    {} as Record<ProductUnitsMeasure, string>,
  );

  return productUnitsMeasure;
};
