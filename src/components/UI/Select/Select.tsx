import SelectArrow from "#/icons/select-chevron.svg?react";
import { animationList, animationSelect } from "@/common/constants";
import { SelectProps } from "@/common/types";
import { useOutsideClick } from "@/hooks";
import commonStyles from "@/styles/Common.module.scss";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import styles from "./Select.module.scss";

export const Select: FC<SelectProps> = ({
  currentVariant,
  setCurrentVariant,
  variants,
  maxWidth,
  minWidth,
  className,
  isShowSelectedValue = false,
  placeholder = "",
  bgColor,
}) => {
  const [variantsVisible, setVariantsVisible] = useState<boolean>(false);
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    setVariantsVisible(false);
  });

  const setValue = (key: string) => {
    setCurrentVariant(key);
    setVariantsVisible(false);
  };

  const renderVariants = () => {
    return Object.keys(variants).map((value, i) => {
      if (value === currentVariant) {
        return null;
      }

      return (
        <motion.span {...animationList} onClick={() => setValue(value)} key={i}>
          {variants[value]}
        </motion.span>
      );
    });
  };

  return (
    <div ref={containerRef} style={{ maxWidth, minWidth }} className={styles.selectContainer}>
      <div style={{ background: bgColor }} onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
        {isShowSelectedValue ? (
          <span className={styles.selectTitle}>{variants[currentVariant]}</span>
        ) : (
          <span className={cn(styles.selectTitle, styles.selectPlaceholder)}>{placeholder}</span>
        )}
        <SelectArrow className={cn(styles.selectArrowIcon, commonStyles.arrowIcon)} data-active={variantsVisible} />
      </div>
      <AnimatePresence>
        {variantsVisible && (
          <motion.div {...animationSelect} className={cn(styles.selectVariantsContainer, className)}>
            {renderVariants()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
