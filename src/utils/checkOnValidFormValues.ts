import { FieldErrors } from "react-hook-form";
import { FormFields } from "@/common/types";

export const checkOnValidFormValues = (formValues: FormFields, errors: FieldErrors<FormFields>): boolean => {
  const isValid = Object.entries(formValues).every(([key, value]) => key === "orderNotes" || Boolean(value));
  return !(isValid && !Object.keys(errors).length && formValues.confirmOrder?.length);
};
