import { FC } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { getAnimationVariant, getProductDiscount } from "@/utils";
import { ProductDelivery, ProductPrice } from "@/common/types";
import { ProductInfoNotification } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import styles from "./ProductNotification.module.scss";

type Props = {
  cost: ProductDelivery["cost"];
  className?: string | string[];
} & Omit<ProductPrice, "currency">;

export const ProductNotification: FC<Props> = ({ original, discount, cost, className = "" }) => {
  const productDiscount = getProductDiscount({ original, discount });

  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}
      className={cn(styles.productInfoNotificationContainer, className[0])}
    >
      {!!productDiscount && <ProductInfoNotification className={["", styles.productInfoNotification]} count={`- ${productDiscount} %`} />}
      {!cost && <ProductInfoNotification className={["", styles.productInfoNotification]} count={"Free shipping"} />}
    </motion.div>
  );
};
