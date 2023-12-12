import { FC } from "react";
import { CartConfirmationItem } from "@/common/types";
import { Checkbox } from "@/components/UI";
import styles from "./CartAgreementListItem.module.scss";

type Props = CartConfirmationItem & {
  isChecked: boolean;
  onToggleChecked: () => void;
};

export const CartAgreementListItem: FC<Props> = props => {
  return (
    <li className={styles.cartConfirmationAgreementItem} onClick={props.onToggleChecked}>
      <Checkbox
        className={[styles.cartConfirmationAgreementCheckbox, "", styles.cartConfirmationAgreementLabel]}
        isChecked={props.isChecked}
        id={props.id}
        name={props.name}
        onChange={props.onToggleChecked}
      />
    </li>
  );
};
