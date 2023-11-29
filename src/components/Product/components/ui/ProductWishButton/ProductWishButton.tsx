import { FC, useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { getAnimationVariant } from "@/utils";
import { Button } from "@/components/UI";
import { AnimationDefaultDuration, animationDefaultVariants } from "@/common/constants";
import LikeIcon from "#/icons/like.svg?react";
import commonStyles from "@/styles/Common.module.scss";
import styles from "./ProductWishButton.module.scss";

export const ProductWishButton: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.TERTIARY })}>
      <Button onClick={() => setIsClicked(prev => !prev)} className={styles.productWishListButton}>
        <LikeIcon className={cn(commonStyles.likeIcon, styles.productLikeIcon, isClicked && commonStyles.likeIconActive)} />
        <span>Add to my wish list</span>
      </Button>
    </motion.div>
  );
};
