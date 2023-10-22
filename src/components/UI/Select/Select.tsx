import { SelectVariantFields } from "@/common/types";
import { Dispatch, FC, SelectHTMLAttributes, SetStateAction, useState } from "react";
import cn from "classnames";
import { useOutsideClick } from "@/hooks";
import { getSelectVariantProperty } from "@/utils";
import SelectArrow from "#/icons/select-chevron.svg?react";
import { animated, useSpring } from "react-spring";
import styles from "./Select.module.scss";

const enum SPRING_CONFIG {
  MAX_VISIBLE_HEIGHT = 215,
  MAX_HIDDEN_HEIGHT = 0,
  TENSION = 1600,
  FRICTION = 200,
}

export type Variant = string | SelectVariantFields;

export type SelectProps = {
  currentState: string;
  setCurrentState: Dispatch<SetStateAction<SelectProps["currentState"]>> | ((val: SelectProps["currentState"]) => void);
  variants: Variant[];
  maxWidth?: string;
  minWidth?: string;
  isShowSelectedValue?: boolean;
  placeholder?: string;
  bgColor?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

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
  };

  const springProps = useSpring({
    maxHeight: variantsVisible ? SPRING_CONFIG.MAX_VISIBLE_HEIGHT : SPRING_CONFIG.MAX_HIDDEN_HEIGHT,
    config: { tension: SPRING_CONFIG.TENSION, friction: SPRING_CONFIG.FRICTION },
  });

  const renderVariants = () => {
    if (variantsVisible) {
      return (
        <animated.div
          style={springProps}
          onClick={() => setVariantsVisible(false)}
          className={cn(styles.selectVariantsContainer, className)}
        >
          {filteredVariants.map((variant, key) => (
            <span onClick={() => setValue(variant)} key={key}>
              {getSelectVariantProperty(variant, "text")}
            </span>
          ))}
        </animated.div>
      );
    }
  };

  return (
    <div ref={containerRef} style={{ maxWidth, minWidth }} className={styles.selectContainer}>
      <div style={{ background: bgColor }} onClick={() => setVariantsVisible(!variantsVisible)} className={styles.selectedVariant}>
        {isShowSelectedValue ? (
          <span className={styles.selectTitle}>{getSelectVariantProperty(currentVariant, "text")}</span>
        ) : (
          <span className={cn(styles.selectTitle, styles.selectPlaceholder)}>{placeholder}</span>
        )}
        <SelectArrow className={styles.arrowIcon} data-active={variantsVisible} />
      </div>
      {renderVariants()}
    </div>
  );
};
