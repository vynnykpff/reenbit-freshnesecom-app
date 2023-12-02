import { FC, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./CartTextarea.module.scss";

type Props = {
  id: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const DEFAULT_PLACEHOLDER = "Need a specific delivery day? Sending a gitf? Let’s say ...";

export const CartTextarea: FC<Props> = ({ className, placeholder = DEFAULT_PLACEHOLDER, id, ...props }) => {
  return <textarea id={id} className={cn(styles.cartTextArea, className)} placeholder={placeholder} {...props} />;
};
