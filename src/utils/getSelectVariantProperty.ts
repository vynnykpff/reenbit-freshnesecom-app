import { SelectVariantFields, Variant } from "@/common/types";
import { isSelectVariantObject } from "./isSelectVarianObject.ts";

export const getSelectVariantProperty = (variant: Variant, property: keyof SelectVariantFields) => {
  return isSelectVariantObject(variant) ? variant[property] : variant;
};
