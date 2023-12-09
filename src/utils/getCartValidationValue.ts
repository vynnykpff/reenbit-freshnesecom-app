import { UseFormSetError } from "react-hook-form";
import { FormFields, State } from "@/common/types";
import { CartErrorMessages } from "@/common/constants";

type ValidationResult = string | true;

type Params = {
  fieldName: keyof FormFields;
  resetFieldValue: () => void;
  error: string | null;
  value: string | boolean;
  setError: UseFormSetError<FormFields>;
  filteredStates?: State[];
};

export const getCartValidationValue = ({
  value,
  setError,
  fieldName,
  error,
  resetFieldValue,
  filteredStates,
}: Params): ValidationResult => {
  const setErrorAndReturnMessage = (message: string) => {
    setError(fieldName, { type: "validate", message });
    return message;
  };

  if (!value) {
    return setErrorAndReturnMessage(CartErrorMessages.EMPTY_FIELD);
  }

  if (error === CartErrorMessages.INCORRECT_COUNTRY) {
    resetFieldValue();
    return setErrorAndReturnMessage(CartErrorMessages.INCORRECT_COUNTRY);
  }

  if (error === CartErrorMessages.INCORRECT_CITY) {
    if (fieldName === "state" && !filteredStates?.length) {
      return setErrorAndReturnMessage(CartErrorMessages.INCORRECT_STATE);
    } else if (fieldName === "city") {
      resetFieldValue();
      return setErrorAndReturnMessage(CartErrorMessages.INCORRECT_CITY);
    }
  }

  return true;
};
