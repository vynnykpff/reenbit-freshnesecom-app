import { FC } from "react";
import { Link } from "react-router-dom";
import { useMatchMedia } from "@/hooks";
import { GenerateCharacteristicsParams, generateCharacteristics, getProductRating, getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Rating } from "@/components/UI";
import { ProductCardDetailsDesktop, ProductCardDetailsMobile } from "./components";
import { MediaQueries, Routes } from "@/common/constants";
import styles from "./ProductCardDetails.module.scss";

export const ProductCardDetails: FC<Product> = (props: Product) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.PRODUCT_CARDS_CONTAINER})`);

  const generateCharacteristicsObj: GenerateCharacteristicsParams = {
    originCountry: props.originCountry,
    brand: props.brand,
    delivery: props.delivery,
    stock: props.stock,
  };

  return (
    <div className={styles.productCardDetailsContainer}>
      <div className={styles.productCardContentWrapper}>
        <h3 className={styles.productCardTitle}>
          <Link to={`${Routes.PRODUCTS}/${getSlugString(props.title)}`}>{props.title}</Link>
        </h3>
        <p className={styles.productCardShortDescription}>{props.description?.short}</p>
        <Rating amountRating={getProductRating(props.reviews)} />
      </div>
      {isMobile ? (
        <ProductCardDetailsMobile productCharacteristics={generateCharacteristics(generateCharacteristicsObj)} />
      ) : (
        <ProductCardDetailsDesktop productCharacteristics={generateCharacteristics(generateCharacteristicsObj)} />
      )}
    </div>
  );
};
