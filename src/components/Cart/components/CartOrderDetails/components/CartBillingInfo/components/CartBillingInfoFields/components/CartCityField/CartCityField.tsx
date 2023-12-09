import { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useChangeEffect } from "@/hooks";
import { useActions, useAppSelector } from "@/store";
import { CartValidationFields } from "@/common/types";
import { CartInput } from "@/components/UI";
import { CartErrorMessages, GlobalDelay } from "@/common/constants";

export const CartCityField: FC<CartValidationFields> = props => {
  const { fieldName, fieldValue, setError, setValue } = props;
  const {
    fields: { country, state, city },
    cities,
    error,
  } = useAppSelector(state => state.cart);
  const { getCities, setField } = useActions();
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(fieldValue);
  const [debouncedInputValue] = useDebounce(inputValue, GlobalDelay.DEFAULT);

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  useChangeEffect(() => {
    if (!city.length) {
      setInputValue("");
    }
  }, [city]);

  useChangeEffect(() => {
    handleValidateCountry();
  }, [debouncedInputValue]);

  const handleValidateCountry = () => {
    const value = inputValue.trim();

    if (!value) {
      setField({ key: fieldName, value: "" });
      setIsShowDropdown(false);
      return;
    }

    setField({ key: fieldName, value });
    setValue("city", value, { shouldValidate: true });

    const filteredCities = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
    setFilteredCities(filteredCities);

    if (error === CartErrorMessages.INCORRECT_CITY || !filteredCities.length) {
      setError(fieldName, { type: "validate", message: CartErrorMessages.INCORRECT_CITY });
      setField({ key: fieldName, value: "" });
      setInputValue("");
      setValue(fieldName, "");
      setIsShowDropdown(false);
    }
  };

  const handleFocus = () => {
    if (error) {
      setError("city", { type: "validate", message: CartErrorMessages.INCORRECT_CITY });
      return;
    }

    setFilteredCities(cities);
    setIsShowDropdown(!cities.length || (!inputValue.length && !filteredCities.length));

    getCities({ country, state });
    setIsShowDropdown(true);
  };

  return (
    <CartInput
      inputValue={inputValue}
      setIsShowDropDown={setIsShowDropdown}
      setInputValue={setInputValue}
      disabled={!state.length || !!error}
      isShowDropDown={isShowDropdown}
      filteredCities={filteredCities}
      handleFocus={handleFocus}
      {...props}
    />
  );
};
