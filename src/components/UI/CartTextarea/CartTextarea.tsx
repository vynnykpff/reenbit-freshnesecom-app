import { ChangeEvent, FC, TextareaHTMLAttributes, useState } from "react";
import { useDebounce } from "use-debounce";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { CartValidationForm } from "@/common/types";
import { CartErrorMessages, CartFieldsConstants, CartFieldsPlaceholders, CartFormFields, GlobalDelay } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartTextarea.module.scss";

type Props = {
  id: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  CartValidationForm;

const textareaValidationRules = {
  maxLength: { value: CartFieldsConstants.ORDER_NOTES_MAX_LENGTH, message: CartErrorMessages.ORDER_NOTES_MAX_LENGTH },
};

export const CartTextarea: FC<Props> = ({
  className,
  placeholder = CartFieldsPlaceholders.ORDER_NOTES,
  id,
  register,
  errors,
  ...props
}) => {
  const {
    fields: { orderNotes },
  } = useAppSelector(state => state.cart);
  const { setField } = useActions();
  const [textareaValue, setTextareaValue] = useState(orderNotes);

  const [debouncedTextareaValue] = useDebounce(textareaValue, GlobalDelay.DEFAULT);

  useChangeEffect(() => {
    setField({ key: CartFormFields.ORDER_NOTES, value: textareaValue });
  }, [debouncedTextareaValue]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextareaValue(value);
  };

  return (
    <div className={commonStyles.cartInputContainer}>
      <textarea
        id={id}
        className={cn(styles.cartTextArea, className)}
        {...register(CartFormFields.ORDER_NOTES, textareaValidationRules)}
        placeholder={placeholder}
        {...props}
        value={textareaValue}
        onChange={handleChange}
      />
      <div className={commonStyles.cartFieldErrorMessage}>{errors?.orderNotes?.message}</div>
    </div>
  );
};
