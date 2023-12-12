import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import CheckboxIcon from "#/icons/checkbox-mark.svg?react";

type Props = {
  id: string;
  name: string | ReactNode;
  isChecked: boolean;
  className?: string | string[];
  onChange?: (isChecked: boolean) => void;
};

export const Checkbox: FC<Props> = ({ id, name, isChecked, className = "", onChange }) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className={cn(styles.checkboxContainer, className[0])}>
      <input className={cn(styles.checkboxInput, className[1])} type="checkbox" checked={isChecked} id={id} onChange={handleChange} />
      <label className={cn(styles.checkboxLabel, className[2])} htmlFor={id}>
        {isChecked && <CheckboxIcon className={styles.checkboxIcon} />}
        {name}
      </label>
    </div>
  );
};
