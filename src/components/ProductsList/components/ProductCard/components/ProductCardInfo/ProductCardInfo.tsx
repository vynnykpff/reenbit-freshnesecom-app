import { Product } from "@/common/types";
import { FC } from "react";
import { ProductCardDelivery, ProductCardNavigation, ProductCardPrice } from "./components";
import styles from "./ProductCardInfo.module.scss";

type Props = {
  price: Product["price"];
  delivery: Product["delivery"];
};

export const ProductCardInfo: FC<Props> = ({ price, delivery }) => {
  return (
    <div className={styles.productInfoContainer}>
      <ProductCardPrice {...price} />
      <ProductCardDelivery {...delivery} />
      <ProductCardNavigation />
    </div>
  );
};
