import { FC } from "react";
// import NoAvailableImageIcon from "#/icons/no-image-available.svg?react";
import styles from "./ProductCardImage.module.scss";

export const ProductCardImage: FC = () => {
  return (
    <div className={styles.productCardImageContainer}>
      <img
        className={styles.productCardImage}
        src="https://lookagain.scene7.com/is/image/OttoUK/553w/iphone-14-pro-max-128gb-deep-purple-by-apple~33H509FRSP.jpg"
        alt="#"
      />
      {/*<NoAvailableImageIcon className={styles.productCardNoAvailableImage} />*/}
    </div>
  );
};
