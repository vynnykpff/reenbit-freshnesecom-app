import { FC } from "react";
import { Product } from "@/common/types";
import { ProductSliderCardDescription, ProductSliderCardImage, ProductSliderCardNavigation } from "./components";
import styles from "./ProductSliderCard.module.scss";

export const ProductSliderCard: FC<Product> = ({ images, title, description, price }) => {
  return (
    <div className={styles.productSliderCardContainer}>
      <ProductSliderCardImage images={images} title={title} {...price} />
      <ProductSliderCardDescription title={title} description={description} />
      <ProductSliderCardNavigation {...price} title={title} />
    </div>
  );
};
