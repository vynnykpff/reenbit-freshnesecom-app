import SelectArrow from "#/icons/select-chevron.svg?react";
import { SelectProps, SelectVariantFields } from "@/common/types";
import { useOutsideClick } from "@/hooks";
import commonStyles from "@/styles/Common.module.scss";
import { getSelectVariantProperty } from "@/utils";
import cn from "classnames";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Select.module.scss";

export type Variant = string | SelectVariantFields;

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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className={cn(styles.selectVariantsContainer, className)}
          >
            {filteredVariants.map((variant, key) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setValue(variant)}
                key={key}
              >
                {getSelectVariantProperty(variant, "text")}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
