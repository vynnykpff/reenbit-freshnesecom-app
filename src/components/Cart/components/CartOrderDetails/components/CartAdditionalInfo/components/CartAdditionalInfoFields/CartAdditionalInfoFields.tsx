import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { CartTextarea } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";

export const CartAdditionalInfoFields: FC = () => {
  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.SECONDARY })}>
      <label className={commonStyles.cartFieldLabel} htmlFor={"additionalInfo"}>
        Order notes
      </label>
      <CartTextarea id={"additionalInfo"} />
    </motion.div>
  );
};
