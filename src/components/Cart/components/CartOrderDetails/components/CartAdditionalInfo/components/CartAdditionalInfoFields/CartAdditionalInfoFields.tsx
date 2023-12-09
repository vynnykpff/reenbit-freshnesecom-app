import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartValidationForm } from "@/common/types";
import { CartTextarea } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";

const ADDITIONAL_INFO_ID = "orderNotes";

export const CartAdditionalInfoFields: FC<CartValidationForm> = props => {
  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}>
      <label className={commonStyles.cartFieldLabel} htmlFor={ADDITIONAL_INFO_ID}>
        Order notes
      </label>
      <CartTextarea {...props} id={ADDITIONAL_INFO_ID} />
    </motion.div>
  );
};
