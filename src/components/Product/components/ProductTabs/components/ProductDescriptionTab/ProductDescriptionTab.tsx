import { FC } from "react";
import { useAppSelector } from "@/store";
import { ProductDescriptionItem } from "./components";
import commonStyles from "@/styles/Common.module.scss";

export const ProductDescriptionTab: FC = () => {
  const { product } = useAppSelector(state => state.product);

  return (
    <ul className={commonStyles.productTabsContentContainer}>
      {product.description.full.map(description => (
        <ProductDescriptionItem title={description.title} content={description.content} />
      ))}
    </ul>
  );
};
