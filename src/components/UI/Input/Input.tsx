import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ className, type, ...props }) => {
  return <input {...props} type={type ?? "text"} className={cn(styles.input, className)} />;
};
