import { FC, useState } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { Button, Input, Select } from "@/components/UI";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import PlusIcon from "#/icons/plus.svg?react";
import styles from "./ProductOrder.module.scss";

const tempOrderData = {
  Pcs: "Pcs",
  Kgs: "Kgs",
  Box: "Box",
  Pack: "Pack",
};

type Props = {
  original: number;
  discount: number;
};

export const ProductOrder: FC<Props> = ({ original, discount }) => {
  const [currentOrderPriceVariant, setCurrentOrderPriceVariant] = useState(tempOrderData.Pcs);

  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.TERTIARY })}
      className={styles.productOrderContainer}
    >
      <ProductCardPrice
        className={[styles.productOrderPriceContainer, styles.productOriginalOrderPrice, styles.productDiscountOrderPrice]}
        currency="USD"
        discount={discount}
        original={original}
      />
      <div className={styles.productOrderNavigation}>
        <div className={styles.productOrderInputContainer}>
          <div className={styles.productOrderInputWrapper}>
            <Input className={styles.productOrderInput} defaultValue="1" />
          </div>
          <Select
            className={styles.productOrderSelect}
            currentVariant={currentOrderPriceVariant}
            setCurrentVariant={setCurrentOrderPriceVariant}
            isShowSelectedValue
            variants={tempOrderData}
          />
        </div>
        <Button className={styles.productOrderButton}>
          <PlusIcon className={styles.productOrderIcon} /> <span>Add to cart</span>
        </Button>
      </div>
    </motion.div>
  );
};
