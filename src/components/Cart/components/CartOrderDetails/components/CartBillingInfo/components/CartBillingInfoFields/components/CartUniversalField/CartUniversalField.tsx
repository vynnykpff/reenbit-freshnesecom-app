import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { CartValidationFields } from "@/common/types";
import { CartInput } from "@/components/UI";
import { GlobalDelay } from "@/common/constants";

type Props = { index: number } & CartValidationFields;

const START_DISABLED_INDEX = 5;

export const CartUniversalField: FC<Props> = props => {
  const { fieldName, fieldValue, index } = props;
  const { setField } = useActions();
  const [inputValue, setInputValue] = useState(fieldValue);
  const {
    fields: { phoneNumber, country },
  } = useAppSelector(state => state.cart);
  const [debouncedInputValue] = useDebounce(inputValue, GlobalDelay.DEFAULT);

  const handleValidateCountry = () => {
    const value = inputValue.trim();
    setField({ key: fieldName, value });
    return;
  };

  useChangeEffect(() => {
    if (!country.length) {
      setInputValue("");
    }
  }, [country]);

  useChangeEffect(() => {
    handleValidateCountry();
  }, [debouncedInputValue]);

  return (
    <CartInput
      disabled={!phoneNumber.length && index > START_DISABLED_INDEX}
      inputValue={inputValue}
      setInputValue={setInputValue}
      {...props}
    />
  );
};
