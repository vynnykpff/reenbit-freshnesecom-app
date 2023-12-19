import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useOutsideClick } from "@/hooks";
import { getAnimationVariant } from "@/utils";
import { SelectProps } from "@/common/types";
import { AnimationDefaultDuration, animationDefaultSelect, animationDefaultVariants } from "@/common/constants";
import SelectArrow from "#/icons/select-chevron.svg?react";
import commonStyles from "@/styles/Common.module.scss";
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
  isCart = false,
  setFieldValue,
}) => {
  const [variantsVisible, setVariantsVisible] = useState<boolean>(false);
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    setVariantsVisible(false);
  });

  const setValue = (key: string) => {
    if (isCart && setFieldValue) {
      setFieldValue(key);
      setVariantsVisible(false);
      return;
    }

    setCurrentVariant(key);
    setVariantsVisible(false);
  };

  const renderVariants = () => {
    return Object.keys(variants).map((value, i) => {
      if (value === currentVariant) {
        return null;
      }

      return (
        <motion.span
          {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.DEFAULT })}
          onClick={() => setValue(value)}
          key={i}
        >
          {variants[value]}
        </motion.span>
      );
    });
  };

  return (
    <div ref={containerRef} style={{ maxWidth, minWidth }} className={styles.selectContainer}>
      <div style={{ background: bgColor }} onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
        {isShowSelectedValue ? (
          <span className={cn(styles.selectTitle, className)}>{variants[currentVariant]}</span>
        ) : (
          <span className={cn(styles.selectTitle, styles.selectPlaceholder)}>{placeholder}</span>
        )}
        <SelectArrow className={cn(styles.selectArrowIcon, commonStyles.arrowIcon)} data-active={variantsVisible} />
      </div>
      <AnimatePresence>
        {variantsVisible && (
          <motion.div
            {...getAnimationVariant({ ...animationDefaultSelect, duration: AnimationDefaultDuration.DEFAULT })}
            className={cn(styles.selectVariantsContainer, className)}
          >
            {renderVariants()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
