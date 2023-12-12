import { FieldErrors } from "react-hook-form";
import { FormFields } from "@/common/types";
import { CartFormFields } from "@/common/constants";

export const checkOnValidFormValues = (formValues: FormFields, errors: FieldErrors<FormFields>): boolean => {
  const isValid = Object.entries(formValues).every(([key, value]) => key === (CartFormFields.ORDER_NOTES as string) || Boolean(value));
  return !(isValid && !Object.keys(errors).length && formValues.confirmOrder?.length);
};
