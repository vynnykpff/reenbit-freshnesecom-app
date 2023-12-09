import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useOutsideClick } from "@/hooks";
import { getCartValidationValue } from "@/utils";
import { CartFields, CartInputProps, CartValidationForm, State, ValidationFunction } from "@/common/types";
import { CartDropdownMenu } from "@/components/UI";
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
} & CartValidationForm &
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
  const error = useAppSelector(state => state.cart.error);
  const { setField, resetCountries, resetStates } = useActions();
  const containerRef = useOutsideClick<HTMLDivElement>(() => setIsShowDropDown?.(false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSetSelectedValue = (name: string) => {
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
    <div ref={containerRef} className={commonStyles.cartInputContainer}>
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
        <CartDropdownMenu
          handleSetSelectedValue={handleSetSelectedValue}
          fieldName={fieldName}
          filteredStates={filteredStates}
          filteredCities={filteredCities}
        />
      )}

      <div className={commonStyles.cartFieldErrorMessage}>{errors?.[fieldName]?.message}</div>
    </div>
  );
};
