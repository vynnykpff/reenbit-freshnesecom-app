import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartValidationForm } from "@/common/types";
import { CartTextarea } from "@/components/UI";
import { AnimationDefaultDuration, CartFormFields, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";

export const CartAdditionalInfoFields: FC<CartValidationForm> = props => {
  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}>
      <label className={commonStyles.cartFieldLabel} htmlFor={CartFormFields.ORDER_NOTES}>
        Order notes
      </label>
      <CartTextarea {...props} id={CartFormFields.ORDER_NOTES} />
    </motion.div>
  );
};
