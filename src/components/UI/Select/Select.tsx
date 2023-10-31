import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { useOutsideClick } from "@/hooks";
import { getSelectVariantProperty } from "@/utils";
import { animationList, animationSelect } from "@/common/constants";
import { SelectProps, Variant } from "@/common/types";
import SelectArrow from "#/icons/select-chevron.svg?react";
import styles from "./Select.module.scss";
import commonStyles from "@/styles/Common.module.scss";

export const Select: FC<SelectProps> = ({
  currentState,
  setCurrentState,
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

  const filteredVariants = variants.filter(v => getSelectVariantProperty(v, "value") !== currentState);

  const [currentVariant, setCurrentVariant] = useState<Variant>(variants[0]);

  const setValue = (val: Variant) => {
    setCurrentVariant(val);
    if (setCurrentState !== undefined) {
      setCurrentState(getSelectVariantProperty(val, "value"));
    }
    setVariantsVisible(false);
  };

  return (
    <div ref={containerRef} style={{ maxWidth, minWidth }} className={styles.selectContainer}>
      <div style={{ background: bgColor }} onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
        {isShowSelectedValue ? (
          <span className={styles.selectTitle}>{getSelectVariantProperty(currentVariant, "text")}</span>
        ) : (
          <span className={cn(styles.selectTitle, styles.selectPlaceholder)}>{placeholder}</span>
        )}
        <SelectArrow className={cn(styles.selectArrowIcon, commonStyles.arrowIcon)} data-active={variantsVisible} />
      </div>
      <AnimatePresence>
        {variantsVisible && (
          <motion.div {...animationSelect} className={cn(styles.selectVariantsContainer, className)}>
            {filteredVariants.map((variant, key) => (
              <motion.span {...animationList} onClick={() => setValue(variant)} key={key}>
                {getSelectVariantProperty(variant, "text")}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
