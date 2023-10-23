import commonStyles from "@/styles/Common.module.scss";
import cn from "classnames";
import { FC, HTMLAttributes } from "react";
import { animated, useSpring } from "react-spring";
import { SPRING_CONFIG } from "@/common/constants";
import { NavigationLink } from "@/common/types";
import styles from "./Dropdown.module.scss";

type DropdownMenuProps = {
  isShowDropList: boolean;
  dropDownData: NavigationLink[];
} & HTMLAttributes<HTMLDivElement>;

export const Dropdown: FC<DropdownMenuProps> = ({ dropDownData, isShowDropList, className }) => {
  const springProps = useSpring({
    maxHeight: isShowDropList ? SPRING_CONFIG.MAX_VISIBLE_HEIGHT : SPRING_CONFIG.MAX_HIDDEN_HEIGHT,
    config: { tension: SPRING_CONFIG.TENSION, friction: SPRING_CONFIG.FRICTION },
  });

  return (
    <div className={styles.dropdownMenuContainer}>
      {isShowDropList && (
        <ul className={styles.dropdownMenuList}>
          {dropDownData.map((item: NavigationLink) => (
            <animated.li className={cn(commonStyles.footerNavbarNavigationListItem, className)} style={springProps} key={item.id}>
              {item.title}
            </animated.li>
          ))}
        </ul>
      )}
    </div>
  );
};
