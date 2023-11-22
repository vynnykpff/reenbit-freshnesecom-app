import { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "@/store";
import { useMatchMedia } from "@/hooks";
import { generateCharacteristics, getSlugString } from "@/utils";
import { Product } from "@/common/types";
import { Rating } from "@/components/UI";
import { ProductCardDetailsDesktop, ProductCardDetailsMobile } from "./components";
import { MediaQueries, Routes } from "@/common/constants";
import styles from "./ProductCardDetails.module.scss";

export const ProductCardDetails: FC<Product> = ({ title, description, rating, originCountry, brand, delivery, stock }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.PRODUCT_CARDS_CONTAINER})`);
  const { setCurrentProduct } = useActions();

  return (
    <div className={styles.productCardDetailsContainer}>
      <div className={styles.productCardContentWrapper}>
        <h3 className={styles.productCardTitle}>
          <Link onClick={() => setCurrentProduct(title)} to={`${Routes.PRODUCTS}/${getSlugString(title)}`}>
            {title}
          </Link>
        </h3>
        <p className={styles.productCardShortDescription}>{description?.short}</p>
        <Rating amountRating={rating} />
      </div>
      {isMobile ? (
        <ProductCardDetailsMobile productCharacteristics={generateCharacteristics({ originCountry, brand, delivery, stock })} />
      ) : (
        <ProductCardDetailsDesktop productCharacteristics={generateCharacteristics({ originCountry, brand, delivery, stock })} />
      )}
    </div>
  );
};
