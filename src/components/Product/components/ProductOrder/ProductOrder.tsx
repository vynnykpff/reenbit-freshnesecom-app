import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useActions } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getAnimationVariant, getProductPrice, getProductUnitsMeasure } from "@/utils";
import { ProductPrice } from "@/common/types";
import { Button } from "@/components/UI";
import { ProductOrderNavigation } from "./components";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { AnimationDefaultDuration, ProductUnitsMeasure, ProductsAmountOfUnitsMeasure, animationDefaultVariants } from "@/common/constants";
import PlusIcon from "#/icons/plus.svg?react";
import styles from "./ProductOrder.module.scss";

type Props = {
  unitsMeasure: ProductUnitsMeasure;
  amount: number;
} & ProductPrice;

export const ProductOrder: FC<Props> = ({ original, discount, currency, unitsMeasure, amount }) => {
  const [currentOrderPriceVariant, setCurrentOrderPriceVariant] = useState(getProductUnitsMeasure(unitsMeasure).pcs);
  const [localProductPrice, setLocalProductPrice] = useState<Omit<ProductPrice, "currency">>({ original, discount });
  const [localInputValue, setLocalInputValue] = useState(ProductsAmountOfUnitsMeasure.PCS);
  const { setNotification } = useActions();

  useChangeEffect(() => {
    getProductPrice({
      original,
      discount,
      productAmount: amount,
      value: ProductsAmountOfUnitsMeasure.PCS,
      currentOrderPriceVariant,
      setLocalProductPrice,
      setLocalInputValue,
      setNotification,
    });
    setLocalInputValue(ProductsAmountOfUnitsMeasure.PCS);
  }, [currentOrderPriceVariant]);

  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.TERTIARY })}
      className={styles.productOrderContainer}
    >
      <ProductCardPrice
        className={[styles.productOrderPriceContainer, styles.productOriginalOrderPrice, styles.productDiscountOrderPrice]}
        currency={currency}
        discount={localProductPrice.discount}
        original={localProductPrice.original}
      />
      <div className={styles.productOrderNavigation}>
        <ProductOrderNavigation
          localInputValue={localInputValue}
          currentOrderPriceVariant={currentOrderPriceVariant}
          setCurrentOrderPriceVariant={setCurrentOrderPriceVariant}
          unitsMeasure={unitsMeasure}
          amount={amount}
          setLocalInputValue={setLocalInputValue}
          discount={discount}
          original={original}
          setLocalProductPrice={setLocalProductPrice}
        />
        <Button className={styles.productOrderButton}>
          <PlusIcon className={styles.productOrderIcon} /> <span>Add to cart</span>
        </Button>
      </div>
    </motion.div>
  );
};
