import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { getCartLocation, getCartValidationValue } from "@/utils";
import { CartFields, CartInputProps, State, ValidationFields, ValidationFunction, ValidationMethods } from "@/common/types";
import commonStyles from "@/styles/CartCommon.module.scss";

type Props = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isShowDropDown?: boolean;
  setIsShowDropDown?: Dispatch<SetStateAction<boolean>>;
  handleFocus?: () => void;
  filteredStates?: State[];
  filteredCities?: string[];
  disabled?: boolean;
} & ValidationFields &
  ValidationMethods &
  CartFields &
  CartInputProps;

export const CartInput: FC<Props> = ({
  inputValue,
  setInputValue,
  setIsShowDropDown,
  label,
  id,
  className,
  type,
  fieldName,
  isShowDropDown,
  register,
  setError,
  clearErrors,
  errors,
  fieldRules,
  filteredStates = [],
  filteredCities = [],
  handleFocus,
  ...props
}) => {
  const { countries, error } = useAppSelector(state => state.cart);
  const { setField, resetCountries, resetStates } = useActions();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSetSelectedCountry = (name: string) => {
    const value = name.trim();

    setInputValue(value);
    setField({ key: fieldName, value });
    clearErrors(fieldName);

    if (setIsShowDropDown) {
      setIsShowDropDown(false);
    }
  };

  const validateFields: ValidationFunction = (value: string | boolean) => {
    const resetFunctions: Record<string, () => void> = {
      country: resetCountries,
      state: resetStates,
    };

    const resetFieldValue = resetFunctions[fieldName];

    return getCartValidationValue({ value, error, setError, fieldName, resetFieldValue, filteredStates });
  };

  return (
    <div className={commonStyles.cartInputContainer}>
      <label className={commonStyles.cartFieldLabel} htmlFor={id}>
        <span className={commonStyles.cartFieldLabelRequiredIcon}>*</span> {label}
      </label>
      <input
        className={cn(commonStyles.cartInput, !!errors?.[fieldName] && commonStyles.cartErrorInput, className)}
        id={id}
        type={type}
        {...register(fieldName, {
          ...fieldRules,
          validate: validateFields,
        })}
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
        {...props}
      />

      {isShowDropDown && (
        <ul>
          {getCartLocation({ fieldName, countries, states: filteredStates, cities: filteredCities }).map((country, index) => (
            <li onClick={() => handleSetSelectedCountry(country)} key={index}>
              {country}
            </li>
          ))}
        </ul>
      )}
      <div className={commonStyles.cartFieldErrorMessage}>{errors?.[fieldName]?.message}</div>
    </div>
  );
};
