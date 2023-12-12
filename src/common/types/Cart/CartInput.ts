import { FormFields, ValidationRule } from "@/common/types";
import { InputProps } from "@/components/UI/Input";

export type CartInputProps = {
  label?: string;
  id?: string;
} & InputProps;

export type CartFields = {
  fieldName: keyof FormFields;
  fieldValue: string;
  fieldRules?: ValidationRule;
};
