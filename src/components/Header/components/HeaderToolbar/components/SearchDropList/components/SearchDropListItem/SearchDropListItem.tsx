import { MediaQueries, Routes } from "@/common/constants";
import { Product } from "@/common/types";
import { useMatchMedia } from "@/hooks";
import { useActions } from "@/store";
import { getSlugString } from "@/utils";
import { Dispatch, FC, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SearchDropListItem.module.scss";

type Props = {
  productTitle: Product["title"];
  productCategory: Product["category"];
  product: Product;
  searchImage: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const SearchDropListItem: FC<Props> = ({ searchImage, setIsVisible, productCategory, productTitle, product }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);
  const { setProduct } = useActions();

  const handleClick = () => {
    setIsVisible(false);
    setProduct(product);
  };

  return (
    <NavLink className={styles.searchDropListItemContainer} onClick={handleClick} to={`${Routes.PRODUCTS}/${getSlugString(productTitle)}`}>
      <div className={styles.searchDropListProductTitleContainer}>
        {!isMobile && <img className={styles.searchDropListImageItem} src={searchImage} alt={`${getSlugString(productTitle)}_image`} />}
        <span className={styles.searchDropListItem}>{productTitle}</span>
      </div>
      <span className={styles.searchDropListItem}>{productCategory}</span>
    </NavLink>
  );
};
