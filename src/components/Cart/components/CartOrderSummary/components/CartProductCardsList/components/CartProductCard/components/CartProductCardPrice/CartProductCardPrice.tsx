import { FC, useState } from "react";
import { getCurrentProductPrice, getProductUnitsMeasure } from "@/utils";
import { Product, ProductPrice } from "@/common/types";
import { ProductOrderNavigation } from "@/components/Product/components";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { ProductsAmountOfUnitsMeasure } from "@/common/constants";
import styles from "./CartProductCardPrice.module.scss";

export const CartProductCardPrice: FC<Product> = ({ stock: { amount }, unitsMeasure, price: { discount, original } }) => {
  const [currentOrderPriceVariant, setCurrentOrderPriceVariant] = useState(getProductUnitsMeasure(unitsMeasure).pcs);
  const [localInputValue, setLocalInputValue] = useState(ProductsAmountOfUnitsMeasure.PCS);
  const setLocalProductPrice = useState<Omit<ProductPrice, "currency">>({ original, discount })[1];

  return (
    <div className={styles.cartProductCardPriceContainer}>
      <ProductCardPrice
        className={[styles.cartPriceContainer, styles.cartPrice]}
        discount={0}
        original={getCurrentProductPrice(original, discount)}
      />
      <ProductOrderNavigation
        localInputValue={localInputValue}
        setLocalInputValue={setLocalInputValue}
        setLocalProductPrice={setLocalProductPrice}
        discount={discount}
        original={original}
        amount={amount}
        unitsMeasure={unitsMeasure}
        currentOrderPriceVariant={currentOrderPriceVariant}
        setCurrentOrderPriceVariant={setCurrentOrderPriceVariant}
        className={[styles.cartOrderNotification, styles.cartOrderInputContainer]}
      />
    </div>
  );
};
