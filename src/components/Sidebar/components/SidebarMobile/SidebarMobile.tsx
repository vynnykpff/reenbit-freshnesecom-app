import FiltersLogo from "#/icons/filter.svg?react";
import { animationList, animationSidebarMenu } from "@/common/constants";
import { Sidebar } from "@/components/Sidebar";
import { BurgerMenuButton, Button } from "@/components/UI";
import { useWindowScrollable } from "@/hooks";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, MouseEvent, useState } from "react";
import styles from "./SidebarMobile.module.scss";

export const SidebarMobile: FC = () => {
  const [isShowFilters, setIsShowFilters] = useState(false);

  useWindowScrollable(!isShowFilters);

  const handleShowFiltersMenu = () => {
    setIsShowFilters(prev => !prev);
  };

  return (
    <div className={styles.sidebarMobileContainer}>
      <Button className={styles.sidebarMobileButton} onClick={handleShowFiltersMenu}>
        <FiltersLogo className={styles.sidebarMobileIcon} />
        <span>Filters</span>
      </Button>

      <AnimatePresence>
        {isShowFilters && (
          <motion.aside
            onClick={handleShowFiltersMenu}
            className={cn(styles.sidebarMobileMenuContainer, isShowFilters && styles.sidebarMobileMenuContainerActive)}
            {...animationList}
          >
            <motion.div
              {...animationSidebarMenu}
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              className={styles.sidebarMobileContent}
            >
              <Sidebar className={[styles.sidebarMobile]} setIsShowFilters={setIsShowFilters} />
              <BurgerMenuButton
                isOpen={isShowFilters}
                onClick={handleShowFiltersMenu}
                strokeWidth={2.5}
                color="var(--primary-c1-color-900)"
                transition={{ ease: "easeOut", duration: 0.2 }}
                width={22}
                height={14}
                className={styles.sidebarMobileBurgerButton}
              />
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};
