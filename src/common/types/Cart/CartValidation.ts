import { FieldErrors, UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { CartFields, CartInputProps } from "@/common/types";

export type FormFields = {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  postalCode: string;
  orderNotes: string;
  confirmOrder: string;
};

export type FieldData = {
  key: keyof FormFields;
  value: string;
};

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
