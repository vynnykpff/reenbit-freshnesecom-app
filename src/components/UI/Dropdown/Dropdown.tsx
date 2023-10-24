import { FC, HTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { NavigationLink } from "@/common/types";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./Dropdown.module.scss";

type DropdownMenuProps = {
  isShowDropList: boolean;
  dropDownData: NavigationLink[];
} & HTMLAttributes<HTMLDivElement>;

export const Dropdown: FC<DropdownMenuProps> = ({ dropDownData, isShowDropList, className }) => {
  return (
    <div className={styles.dropdownMenuContainer}>
      <AnimatePresence>
        {isShowDropList && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween", duration: 0.2 }}
            className={styles.dropdownMenuList}
          >
            {dropDownData.map((item: NavigationLink) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(commonStyles.footerNavbarNavigationListItem, className)}
                key={item.id}
              >
                {item.title}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
