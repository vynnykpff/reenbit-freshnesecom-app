import { FC, ReactNode } from "react";
import styles from "./Checkbox.module.scss";
import CheckboxIcon from "#/icons/checkbox-mark.svg?react";

type Props = {
  id: string;
  name: string | ReactNode;
  isChecked: boolean;
};

export const Checkbox: FC<Props> = ({ id, name, isChecked }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input className={styles.checkboxInput} type="checkbox" checked={isChecked} id={id} />
      <label className={styles.checkboxLabel} htmlFor={id}>
        {isChecked && <CheckboxIcon className={styles.checkboxIcon} />}
        {name}
      </label>
    </div>
  );
};
