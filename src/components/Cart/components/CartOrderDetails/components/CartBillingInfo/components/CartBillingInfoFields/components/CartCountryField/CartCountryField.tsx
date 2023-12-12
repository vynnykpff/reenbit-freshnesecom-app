import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { CartValidationFields } from "@/common/types";
import { CartInput } from "@/components/UI";
import { CartErrorMessages, CartFieldsConstants, CartFormFields, GlobalDelay } from "@/common/constants";

export const CartCountryField: FC<CartValidationFields> = props => {
  const { fieldName, fieldValue, clearErrors, setError } = props;
  const {
    fields: { country, city },
    error,
  } = useAppSelector(state => state.cart);
  const { getCountries, setField, resetCountries, getStates } = useActions();
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState(fieldValue);

  const [debouncedInputValue] = useDebounce(inputValue, GlobalDelay.DEFAULT);

  useChangeEffect(() => {
    handleValidateCountry();
  }, [debouncedInputValue]);

  useChangeEffect(() => {
    if (city.length) {
      setField({ key: CartFormFields.STATE, value: "" });
      setError(CartFormFields.STATE, { type: "validate", message: CartErrorMessages.INCORRECT_STATE });
      setField({ key: CartFormFields.CITY, value: "" });
      setError(CartFormFields.CITY, { type: "validate", message: CartErrorMessages.INCORRECT_CITY });
    }

    if (!country.length) {
      setInputValue("");
    }

    getStates(country);
  }, [country]);

  const handleValidateCountry = () => {
    const value = inputValue.trim();

    if (value.length < +CartFieldsConstants.INITIAL_SEARCH_VALUE) {
      resetCountries();
      setField({ key: fieldName, value: "" });
      setIsShowDropdown(false);
      return;
    }

    getCountries(value);

    if (error === CartErrorMessages.INCORRECT_COUNTRY) {
      setError(fieldName, { type: "validate", message: CartErrorMessages.INCORRECT_COUNTRY });
      setIsShowDropdown(false);
      return;
    }

    setField({ key: fieldName, value });

    const isValidInput = inputValue.toLowerCase() !== country.toLowerCase();

    if (isValidInput) {
      setIsShowDropdown(true);
    }

    clearErrors(fieldName);
  };

  return (
    <CartInput
      inputValue={inputValue}
      setIsShowDropDown={setIsShowDropdown}
      setInputValue={setInputValue}
      isShowDropDown={isShowDropdown}
      {...props}
    />
  );
};
