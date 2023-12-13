import { FC, Fragment, useEffect, useState } from "react";
import pluralize from "pluralize";
import { useAppSelector } from "@/store";
import { CartPayload } from "@/common/types";
import styles from "./ProductCartAmount.module.scss";

type Props = {
  id: string;
};

export const ProductCartAmount: FC<Props> = ({ id }) => {
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [filteredCartProducts, setFilteredCartProducts] = useState<CartPayload[]>([]);
  const { cartProductsPayload } = useAppSelector(state => state.cart);

  useEffect(() => {
    const filteredProducts = cartProductsPayload.filter(product => product.id === id);
    setFilteredCartProducts(filteredProducts);
    return filteredProducts.length ? setIsShowMessage(true) : setIsShowMessage(false);
  }, [cartProductsPayload]);

  const renderProductAmount = (product: CartPayload) => {
    const unit = pluralize(product.unit, product.amount);
    return `${product.amount} ${unit}`;
  };

  return (
    <>
      {isShowMessage && (
        <span className={styles.productCartAmount}>
          * In the cart:{" "}
          {filteredCartProducts.map((product, index) => (
            <Fragment key={index}>
              {!!index && ", "}
              {renderProductAmount(product)}
            </Fragment>
          ))}
        </span>
      )}
    </>
  );
};
