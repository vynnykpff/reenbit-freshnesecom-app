import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { CartValidationFields } from "@/common/types";
import { CartInput } from "@/components/UI";
import { CartErrorMessages, CartFormFields, GlobalDelay } from "@/common/constants";

export const CartStateField: FC<CartValidationFields> = props => {
  const { fieldName, fieldValue, setError, setValue, clearErrors } = props;
  const {
    fields: { country, state, city },
    states,
    error,
  } = useAppSelector(state => state.cart);
  const { getCities, getStates, setField } = useActions();
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState(states);
  const [inputValue, setInputValue] = useState(fieldValue);
  const [debouncedInputValue] = useDebounce(inputValue, GlobalDelay.DEFAULT);

  useChangeEffect(() => {
    setInputValue("");
  }, [country]);

  useChangeEffect(() => {
    handleValidateCountry();
  }, [debouncedInputValue]);

  useChangeEffect(() => {
    if (city.length) {
      setField({ key: CartFormFields.CITY, value: "" });
      setError(CartFormFields.CITY, { type: "validate", message: CartErrorMessages.INCORRECT_CITY });
    }
  }, [state]);

  const handleValidateCountry = () => {
    const value = inputValue.trim();

    if (!value) {
      setField({ key: fieldName, value: "" });
      setFilteredStates(states);
      return;
    }

    setField({ key: fieldName, value });
    setValue(CartFormFields.STATE, value, { shouldValidate: true });

    const getFilteredStates = states.filter(state => state.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredStates(getFilteredStates);

    getCities({ country, state: value });

    if (error === CartErrorMessages.INCORRECT_CITY && !filteredStates.length) {
      setError(fieldName, { type: "validate", message: CartErrorMessages.INCORRECT_STATE });
      setIsShowDropdown(false);
      return;
    }

    clearErrors(fieldName);
  };

  const handleFocus = () => {
    if (error && inputValue) {
      setError(CartFormFields.STATE, { type: "validate", message: CartErrorMessages.INCORRECT_STATE });
      return;
    }

    if (states.length && states[0].name.length) {
      setIsShowDropdown(true);
      setFilteredStates(states);
      return;
    }

    getStates(country);
    setIsShowDropdown(true);
  };

  return (
    <CartInput
      inputValue={inputValue}
      disabled={!country.length || error === CartErrorMessages.INCORRECT_COUNTRY}
      setIsShowDropDown={setIsShowDropdown}
      setInputValue={setInputValue}
      isShowDropDown={isShowDropdown}
      handleFocus={handleFocus}
      filteredStates={filteredStates}
      {...props}
    />
  );
};
