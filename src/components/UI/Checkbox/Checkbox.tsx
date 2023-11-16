import { FC, ReactNode, useState } from "react";
import CheckboxIcon from "#/icons/checkbox-mark.svg?react";
import styles from "./Checkbox.module.scss";

type Props = {
  id: string;
  name: string | ReactNode;
};

export const Checkbox: FC<Props> = ({ id, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputCheck = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div className={styles.checkboxContainer} onClick={handleInputCheck}>
      <input className={styles.checkboxInput} type="checkbox" checked={isChecked} onChange={handleInputCheck} id={id} />
      <label className={styles.checkboxLabel} htmlFor={id}>
        {isChecked && <CheckboxIcon className={styles.checkboxIcon} />}
        {name}
      </label>
    </div>
  );
};
