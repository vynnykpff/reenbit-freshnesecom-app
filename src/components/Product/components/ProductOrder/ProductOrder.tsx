import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useActions } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getAnimationVariant, getCurrentProductPrice, getProductPrice, getProductUnitsMeasure } from "@/utils";
import { Product, ProductPrice } from "@/common/types";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { Button } from "@/components/UI";
import { ProductOrderNavigation } from "./components";
import {
  AnimationDefaultDuration,
  CartSuccessMessages,
  GlobalDelay,
  NotificationType,
  ProductsAmountOfUnitsMeasure,
  animationDefaultVariants,
} from "@/common/constants";
import PlusIcon from "#/icons/plus.svg?react";
import styles from "./ProductOrder.module.scss";

export const ProductOrder: FC<Product> = props => {
  const {
    price: { discount, original, currency },
    unitsMeasure,
    stock: { amount },
    id,
  } = props;
  const unitsMeasureData = getProductUnitsMeasure(unitsMeasure);
  const [priceVariant, setPriceVariant] = useState(unitsMeasureData.pcs);
  const [productPrice, setProductPrice] = useState<Omit<ProductPrice, "currency">>({ original, discount });
  const [inputValue, setInputValue] = useState(+ProductsAmountOfUnitsMeasure.PCS);
  const { setNotification, setCartProduct, setCartProductPayload } = useActions();
  const [isDisabled, setIsDisabled] = useState(false);

  const similarProductOrderParams = { original, discount, amount, priceVariant, setProductPrice, setInputValue };

  useChangeEffect(() => {
    getProductPrice({
      ...similarProductOrderParams,
      value: ProductsAmountOfUnitsMeasure.PCS,
      setNotification,
    });

    setInputValue(ProductsAmountOfUnitsMeasure.PCS);
  }, [priceVariant]);

  const handleAddProductToCart = () => {
    setCartProduct({ product: props, selectedUnit: priceVariant });
    setInputValue(ProductsAmountOfUnitsMeasure.PCS);
    setProductPrice({ original, discount });
    setPriceVariant(unitsMeasureData.pcs);

    setNotification({ delay: GlobalDelay.PRODUCT_CART, type: NotificationType.SUCCESS, title: CartSuccessMessages.ADDED_TO_CART });
    setCartProductPayload({
      products: {
        price: getCurrentProductPrice(original, discount),
        id,
        amount: inputValue,
        unit: priceVariant,
      },
      isCart: false,
    });
  };

  return (
    <motion.div
      {...getAnimationVariant({ ...animationDefaultVariants, duration: AnimationDefaultDuration.TERTIARY })}
      className={styles.productOrderContainer}
    >
      <ProductCardPrice
        className={[styles.productOrderPriceContainer, styles.productOriginalOrderPrice, styles.productDiscountOrderPrice]}
        currency={currency}
        discount={productPrice.discount}
        original={productPrice.original}
      />
      <div className={styles.productOrderNavigation}>
        <ProductOrderNavigation
          {...similarProductOrderParams}
          inputValue={inputValue}
          setPriceVariant={setPriceVariant}
          unitsMeasure={unitsMeasure}
          setProductPrice={setProductPrice}
          id={id}
          setIsDisabled={setIsDisabled}
          isDisabled={isDisabled}
        />
        <Button onClick={handleAddProductToCart} disabled={isDisabled} className={styles.productOrderButton}>
          <PlusIcon className={styles.productOrderIcon} /> <span>Add to cart</span>
        </Button>
      </div>
    </motion.div>
  );
};
