import { FC } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { useAppSelector } from "@/store";
import { getAnimationVariant, getCartLocation } from "@/utils";
import { CartFields, State } from "@/common/types";
import { AnimationDefaultDuration, animationDefaultSelect } from "@/common/constants";
import styles from "./CartDropdownMenu.module.scss";

type Props = {
  handleSetSelectedValue: (value: string) => void;
  fieldName: CartFields["fieldName"];
  filteredStates?: State[];
  filteredCities?: string[];
  className?: string | string[];
};

export const CartDropdownMenu: FC<Props> = ({
  handleSetSelectedValue,
  fieldName,
  filteredStates = [],
  filteredCities = [],
  className = "",
}) => {
  const { countries } = useAppSelector(state => state.cart);

  return (
    <motion.ul
      {...getAnimationVariant({ ...animationDefaultSelect, duration: AnimationDefaultDuration.TERTIARY })}
      className={cn(styles.cartDropdownMenuList, className[0])}
    >
      {getCartLocation({ fieldName, countries, states: filteredStates, cities: filteredCities }).map((value, index) => (
        <li onClick={() => handleSetSelectedValue(value)} className={cn(styles.cartDropdownMenuItem, className[1])} key={index}>
          {value}
        </li>
      ))}
    </motion.ul>
  );
};
