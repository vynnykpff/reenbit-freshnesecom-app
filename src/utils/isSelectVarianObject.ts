import { SelectVariantFields } from "@/common/types";
import { Variant } from "@/components/UI/Select";

export const isSelectVariantObject = (arg: Variant): arg is SelectVariantFields => {
  return Boolean(typeof arg === "object" && arg.value && arg.text);
};
