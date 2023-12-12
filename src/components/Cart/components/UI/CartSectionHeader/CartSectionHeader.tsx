import { FC } from "react";
import { motion } from "framer-motion";
import { getAnimationVariant } from "@/utils";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import commonStyles from "@/styles/CartCommon.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

export const CartSectionHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <motion.legend {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.PRIMARY })}>
      <h5 className={commonStyles.sectionCartTitle}>{title}</h5>
      <p className={commonStyles.sectionCartSubtitle}>{subtitle}</p>
    </motion.legend>
  );
};
