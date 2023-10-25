import { SelectVariantFields, Variant } from "@/common/types";

export const isSelectVariantObject = (arg: Variant): arg is SelectVariantFields => {
  return Boolean(typeof arg === "object" && arg.value && arg.text);
};
