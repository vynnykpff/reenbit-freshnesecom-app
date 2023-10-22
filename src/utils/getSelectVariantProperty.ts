import { SelectVariantFields } from "@/common/types";
import { Variant } from "@/components/UI/Select";
import { isSelectVariantObject } from "./isSelectVarianObject.ts";

export const getSelectVariantProperty = (variant: Variant, property: keyof SelectVariantFields) => {
  return isSelectVariantObject(variant) ? variant[property] : variant;
};
