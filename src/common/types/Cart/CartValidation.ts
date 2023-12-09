import { FieldErrors, UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { CartFields, CartInputProps, FormFields } from "@/common/types";

export type ValidationMethods = {
  setError: UseFormSetError<FormFields>;
  setValue: UseFormSetValue<FormFields>;
  clearErrors: UseFormClearErrors<FormFields>;
};

export type ValidationFields = {
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
};

export type CartValidationForm = ValidationMethods & ValidationFields;
export type CartValidationFields = CartInputProps & CartValidationForm & CartFields;
