import { FC } from "react";
import { getProductFromCategory } from "@/utils";
import { Product } from "@/common/types";
import { ProductSliderCard } from "./components";
import { Slider } from "@/components/UI";
import styles from "./ProductSlider.module.scss";

type Props = {
  product: Product;
  products: Product[];
};

export const ProductSlider: FC<Props> = ({ product, products }) => {
  return (
    <section className={styles.productSliderContainer}>
      <h5 className={styles.productSliderTitle}>You will maybe love</h5>
      <Slider>
        {getProductFromCategory({ products, selectedCategory: product.category, title: product.title }).map((product, index) => (
          <ProductSliderCard key={index} {...product} />
        ))}
      </Slider>
    </section>
  );
};
