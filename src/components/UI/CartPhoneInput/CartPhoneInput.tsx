import { FC, FocusEvent, useEffect, useState } from "react";
import { UseFormClearErrors, UseFormSetValue } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getCountriesCodes } from "@/utils";
import { CartBillingInfoItem, CartInputProps, FormFields, ValidationFields } from "@/common/types";
import { CartFormFields, GlobalDelay } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import "react-phone-input-2/lib/style.css";
import "./CartPhoneInput.scss";

type Props = {
  setValue: UseFormSetValue<FormFields>;
  clearErrors: UseFormClearErrors<FormFields>;
} & CartInputProps &
  ValidationFields &
  CartBillingInfoItem;

const CART_PHONE_INPUT_ID = "frm-control-id";
const CART_PHONE_INPUT_ATTRIBUTE_NAME = "id";

export const CartPhoneInput: FC<Props> = ({ label, id, setValue, fieldName, disabled = false, errors, clearErrors }) => {
  const {
    fields: { phoneNumber, city, state, ...fields },
    countries,
  } = useAppSelector(state => state.cart);
  const [isPhoneInputFocused, setIsPhoneInputFocused] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countries[0].countryCode);
  const [phoneValue, setPhoneValue] = useState(phoneNumber);
  const { setField } = useActions();
  const [debouncedPhoneValue] = useDebounce(phoneValue, GlobalDelay.DEFAULT);

  useEffect(() => {
    setValue(CartFormFields.PHONE_NUMBER, phoneNumber, { shouldValidate: true });
  }, []);

  useChangeEffect(() => {
    if (!city.length && !state.length) {
      setPhoneValue("");
      setSelectedCountryCode("");
    }
  }, [fields.country]);

  const getCountryCode = () => {
    const filteredCountries = countries.filter(country => {
      return country.name.toLowerCase() === fields.country.toLowerCase();
    });

    if (filteredCountries.length) {
      setSelectedCountryCode(filteredCountries[0].countryCode);
    }
  };

  useChangeEffect(() => {
    if (isValidNumber) {
      setField({ key: fieldName, value: debouncedPhoneValue });
      clearErrors(CartFormFields.PHONE_NUMBER);
    }
  }, [debouncedPhoneValue]);

  useEffect(() => {
    getCountryCode();
  }, [city]);

  useEffect(() => {
    if (isPhoneInputFocused) {
      document.querySelector(".form-control")?.setAttribute(CART_PHONE_INPUT_ATTRIBUTE_NAME, CART_PHONE_INPUT_ID);
      const input = document.getElementById(CART_PHONE_INPUT_ID);

      if (input) {
        input.focus();
      }
      setIsPhoneInputFocused(false);
    }
  }, [isPhoneInputFocused]);

  useEffect(() => {
    getCountryCode();
  }, [city]);

  const handleLabelClick = () => {
    setIsPhoneInputFocused(true);
  };

  const handlePhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = isValidPhoneNumber(value);
    setIsValidNumber(isValid);

    if (isValid) {
      setValue(CartFormFields.PHONE_NUMBER, value, { shouldValidate: true });
    }
  };

  return (
    <div className={commonStyles.cartInputContainer} key={id}>
      <label onClick={handleLabelClick} className={commonStyles.cartFieldLabel}>
        <span className={commonStyles.cartFieldLabelRequiredIcon}>*</span> {label}
      </label>
      <PhoneInput
        key={selectedCountryCode}
        disabled={disabled}
        isValid={isValidNumber}
        country={selectedCountryCode}
        onlyCountries={getCountriesCodes(countries)}
        value={phoneValue}
        onChange={setPhoneValue}
        onBlur={handlePhoneBlur}
      />
      {!isValidNumber && <div className={commonStyles.cartFieldErrorMessage}>Invalid phone number</div>}
      {isValidNumber && errors?.phoneNumber?.message && (
        <div className={commonStyles.cartFieldErrorMessage}>{errors?.phoneNumber?.message}</div>
      )}
    </div>
  );
};
