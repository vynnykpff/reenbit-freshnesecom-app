import { FieldErrors } from "react-hook-form";
import { CartProduct, FormFields } from "@/common/types";
import { CartFormFields } from "@/common/constants";

type Params = {
  formValues: FormFields;
  errors: FieldErrors<FormFields>;
  error: null | string;
  cartProducts: CartProduct[];
};

export const checkOnValidFormValues = ({ formValues, errors, error, cartProducts }: Params): boolean => {
  if (!formValues) {
    return false;
  }

  const isValidFormValues = Object.entries(formValues).every(
    ([key, value]) => key === (CartFormFields.ORDER_NOTES as string) || Boolean(value),
  );
  const hasNoErrors = !Object.keys(errors).length;
  const hasConfirmOrder = formValues.confirmOrder?.length;

  const hasNoError = !error;
  const hasCartProducts = cartProducts.length;

  return !(isValidFormValues && hasNoErrors && hasConfirmOrder && hasNoError && hasCartProducts);
};
