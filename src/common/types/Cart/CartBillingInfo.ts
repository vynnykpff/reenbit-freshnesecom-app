import { FormFields } from "@/common/types";

export type ValidationFunction = (value: string | boolean) => true | string;

type ValidationLength = {
  message: string;
  value: number;
};

type ValidationEmailPattern = {
  value: RegExp;
  message: string;
};

export type ValidationRule = {
  required: string | boolean;
  minLength?: number | ValidationLength;
  maxLength?: number | ValidationLength;
  pattern?: ValidationEmailPattern;
};

export type CartBillingInfoItem = {
  id: string;
  label: string;
  placeholder?: string;
  fieldName: keyof FormFields;
  fieldRules?: ValidationRule;
};
