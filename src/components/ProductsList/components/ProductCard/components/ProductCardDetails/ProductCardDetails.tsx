import { Routes } from "@/common/constants";
import { Product } from "@/common/types";
import { Rating } from "@/components/UI";
import { useMatchMedia } from "@/hooks";
import { useActions } from "@/store";
import { generateCharacteristics, getSlugString } from "@/utils";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ProductCardDetailsDesktop, ProductCardDetailsMobile } from "./components";
import styles from "./ProductCardDetails.module.scss";

export const ProductCardDetails: FC<Product> = ({ title, description, rating, originCountry, brand, delivery, stock }) => {
  const isMobile = useMatchMedia("(max-width: 1150px)");
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
