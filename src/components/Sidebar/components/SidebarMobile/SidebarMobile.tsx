import { getAnimationVariant, removeDataAttribute, setDataAttribute } from "@/utils";
import { FC, MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useMatchMedia, useWindowScrollable } from "@/hooks";
import { AnimationDefaultDuration, Attributes, MediaQueries, animationDefaultVariants, animationSidebarMenu } from "@/common/constants";
import { Sidebar } from "@/components/Sidebar";
import { BurgerMenuButton, Button } from "@/components/UI";
import FiltersLogo from "#/icons/filter.svg?react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./SidebarMobile.module.scss";

export const SidebarMobile: FC = () => {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  useWindowScrollable(!isShowFilters);

  const handleShowFiltersMenu = () => {
    setIsShowFilters(prev => !prev);

    if (!isShowFilters) {
      setDataAttribute({ tagName: "body", attributeName: Attributes.FILTERS }, "true");
    } else {
      removeDataAttribute({ tagName: "body", attributeName: Attributes.FILTERS });
    }
  };

  return (
    <div className={styles.sidebarMobileContainer}>
      <Button className={cn(styles.sidebarMobileButton, isMobile && commonStyles.shortButtonIconWrapper)} onClick={handleShowFiltersMenu}>
        <FiltersLogo className={styles.sidebarMobileIcon} />
        {!isMobile && <span>Filters</span>}
      </Button>

      <AnimatePresence>
        {isShowFilters && (
          <motion.aside
            onClick={handleShowFiltersMenu}
            {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.DEFAULT })}
            className={cn(styles.sidebarMobileMenuContainer, isShowFilters && styles.sidebarMobileMenuContainerActive)}
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
