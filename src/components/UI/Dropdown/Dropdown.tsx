import { FC, HTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { NavigationLink } from "@/common/types";
import { animationList, animationVariants } from "@/common/constants";
import styles from "./Dropdown.module.scss";

type DropdownMenuProps = {
  isShowDropList: boolean;
  dropDownData: NavigationLink[];
  className: string | string[];
} & Pick<HTMLAttributes<HTMLDivElement>, "onClick">;

export const Dropdown: FC<DropdownMenuProps> = ({ dropDownData, isShowDropList, className }) => {
  return (
    <div className={styles.dropdownMenuContainer}>
      <AnimatePresence>
        {isShowDropList && (
          <motion.ul {...animationVariants} className={cn(styles.dropdownMenuList, className[0])}>
            {dropDownData.map((listItem: NavigationLink) => (
              <motion.li {...animationList} className={cn(styles.dropDownMenuListItem, className[1])} key={listItem.id}>
                <span className={className[1]}>{listItem.title}</span>
                <span className={className[2]}>{listItem.value}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
