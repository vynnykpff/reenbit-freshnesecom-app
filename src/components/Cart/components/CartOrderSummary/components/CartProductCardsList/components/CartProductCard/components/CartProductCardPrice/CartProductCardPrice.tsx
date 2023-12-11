import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { getCartProduct, getCurrentProductPrice, getProductPriceDependsOnUnit, getProductUnitsMeasure } from "@/utils";
import { Product, ProductPrice } from "@/common/types";
import { ProductOrderNavigation } from "@/components/Product/components";
import { ProductCardPrice } from "@/components/ProductsList/components";
import { GlobalDelay, ProductsAmountOfUnitsMeasure } from "@/common/constants";
import styles from "./CartProductCardPrice.module.scss";

type Props = {
  selectedUnit: string;
} & Product;

const WITHOUT_DISCOUNT = 0;

export const CartProductCardPrice: FC<Props> = props => {
  const {
    stock: { amount },
    unitsMeasure,
    price: { discount, original },
    id,
    selectedUnit,
  } = props;
  const unitsMeasureData = getProductUnitsMeasure(unitsMeasure);

  const [localProductPrice, setLocalProductPrice] = useState<Omit<ProductPrice, "currency">>({ original, discount });
  const { cartProductsPayload } = useAppSelector(state => state.cart);
  const { setCartProductPrice } = useActions();
  const cartProduct = getCartProduct({ cartProducts: cartProductsPayload, selectedUnit, id });

  const selectedUnitMeasure = cartProductsPayload?.length
    ? cartProduct.unit || unitsMeasureData.prs || unitsMeasureData.pcs
    : unitsMeasureData.pcs;

  const selectedProductAmount = cartProductsPayload?.length ? cartProduct.amount : ProductsAmountOfUnitsMeasure.PCS;

  const [localInputValue, setLocalInputValue] = useState(selectedProductAmount);
  const [currentOrderPriceVariant, setCurrentOrderPriceVariant] = useState(selectedUnitMeasure);

  const [debouncedLocalProductPrice] = useDebounce(localProductPrice, GlobalDelay.DEFAULT);
  const [debouncedLocalInputValue] = useDebounce(localInputValue, GlobalDelay.DEFAULT);
  const [debouncedUnitMeasure] = useDebounce(currentOrderPriceVariant, GlobalDelay.DEFAULT);

  useChangeEffect(() => {
    setCartProductPrice({
      products: {
        price: getCurrentProductPrice(original, discount),
        id,
        amount: debouncedLocalInputValue,
        unit: debouncedUnitMeasure,
      },
      isCart: true,
    });
  }, [debouncedLocalProductPrice, debouncedLocalInputValue, debouncedUnitMeasure]);

  return (
    <div className={styles.cartProductCardPriceContainer}>
      <ProductCardPrice
        className={[styles.cartPriceContainer, styles.cartPrice]}
        discount={WITHOUT_DISCOUNT}
        original={
          getProductPriceDependsOnUnit({
            unit: cartProduct?.unit,
            price: cartProduct?.price,
            amount: cartProduct?.amount,
          }) ?? WITHOUT_DISCOUNT
        }
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
