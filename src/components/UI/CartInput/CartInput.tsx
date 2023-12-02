import { FC } from "react";
import cn from "classnames";
import { Input } from "@/components/UI";
import { InputProps } from "../Input/";
import commonStyles from "@/styles/CartCommon.module.scss";
import styles from "./CartInput.module.scss";

type Props = {
  label?: string;
  id?: string;
} & InputProps;

export const CartInput: FC<Props> = ({ className, type, label, id, ...props }) => {
  return (
    <div className={styles.productCardInputContainer}>
      <label className={commonStyles.cartFieldLabel} htmlFor={id}>
        {label}
      </label>
      <Input className={cn(styles.productCardInput, className)} id={id} type={type} {...props} />
    </div>
  );
};
