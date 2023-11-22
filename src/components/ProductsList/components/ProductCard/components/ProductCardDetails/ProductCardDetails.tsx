import { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "@/store";
import { useMatchMedia } from "@/hooks";
import { GenerateCharacteristicsParams, generateCharacteristics, getSlugString } from "@/utils";
import { Products } from "@/common/types";
import { Rating } from "@/components/UI";
import { ProductCardDetailsDesktop, ProductCardDetailsMobile } from "./components";
import { MediaQueries, Routes } from "@/common/constants";
import styles from "./ProductCardDetails.module.scss";

export const ProductCardDetails: FC<Products> = (props: Products) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.PRODUCT_CARDS_CONTAINER})`);
  const { setProduct } = useActions();

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
          <Link onClick={() => setProduct(props)} to={`${Routes.PRODUCTS}/${getSlugString(props.title)}`}>
            {props.title}
          </Link>
        </h3>
        <p className={styles.productCardShortDescription}>{props.description?.short}</p>
        <Rating amountRating={props.rating} />
      </div>
      {isMobile ? (
        <ProductCardDetailsMobile productCharacteristics={generateCharacteristics(generateCharacteristicsObj)} />
      ) : (
        <ProductCardDetailsDesktop productCharacteristics={generateCharacteristics(generateCharacteristicsObj)} />
      )}
    </div>
  );
};
