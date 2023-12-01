import { FC } from "react";
import { Link } from "react-router-dom";
import { getSlugString } from "@/utils";
import { Routes } from "@/common/constants";
import { Product, ProductPrice } from "@/common/types";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { Button } from "@/components/UI";
import styles from "./ProductSliderCardNavigation.module.scss";

type Props = {
  title: Product["title"];
} & ProductPrice;

export const ProductSliderCardNavigation: FC<Props> = props => {
  return (
    <div className={styles.productCardNavigationContainer}>
      <ProductCardPrice className={[styles.productCardPriceContainer, styles.productCardPrice, styles.productCardPrice]} {...props} />
      <Link to={`${Routes.PRODUCTS}/${getSlugString(props.title)}`}>
        <Button className={styles.productCardNavigationButton}>Buy now</Button>
      </Link>
    </div>
  );
};
