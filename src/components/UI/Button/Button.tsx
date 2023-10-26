import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonAdditionalProps = {
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonAdditionalProps;

export const Button: FC<ButtonProps> = ({ children, className, type, disabled, ...props }) => {
  return (
    <button type={type} disabled={disabled} {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
