import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type InputAdditionalProps = {
  value?: string;
  disabled?: boolean;
  type?: string;
  checked?: boolean;
};

type InputProps = HTMLAttributes<HTMLInputElement> & InputAdditionalProps;

const INPUT_DEFAULT_TYPE = "text";
const INPUT_DEFAULT_VALUE = "";

export const Input: FC<InputProps> = ({
  placeholder,
  className,
  value = INPUT_DEFAULT_VALUE,
  disabled = false,
  type = INPUT_DEFAULT_TYPE,
  checked,
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      value={value}
      checked={checked}
      disabled={disabled}
      className={cn(styles.input, className)}
      placeholder={placeholder}
    />
  );
};
