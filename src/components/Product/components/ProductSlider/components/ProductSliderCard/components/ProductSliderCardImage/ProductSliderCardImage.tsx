import { FC } from "react";
import { Link } from "react-router-dom";
import { getSlugString } from "@/utils";
import { Product, ProductPrice } from "@/common/types";
import { ProductNotification } from "@/components/Product/components";
import { Routes } from "@/common/constants";
import styles from "./ProductSliderCardImage.module.scss";

type Props = {
  images: Product["images"];
  title: Product["title"];
} & Omit<ProductPrice, "currency">;

export const ProductSliderCardImage: FC<Props> = ({ images, title, discount, original }) => {
  return (
    <Link to={`${Routes.PRODUCTS}/${getSlugString(title)}`}>
      <div className={styles.productSliderCardImageContainer}>
        <ProductNotification original={original} discount={discount} cost={1} className={[styles.productSliderNotification]} />
        <img className={styles.productSliderCardImage} src={images[0]} alt={`${title}_card_image`} />
      </div>
    </Link>
  );
};
