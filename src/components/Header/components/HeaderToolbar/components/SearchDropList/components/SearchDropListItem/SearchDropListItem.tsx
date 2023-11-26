import { Dispatch, FC, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { useMatchMedia } from "@/hooks";
import { getSlugString } from "@/utils";
import { Products } from "@/common/types";
import { MediaQueries, Routes } from "@/common/constants";
import styles from "./SearchDropListItem.module.scss";

type Props = {
  productTitle: Products["title"];
  productCategory: Products["category"];
  searchImage: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const SearchDropListItem: FC<Props> = ({ searchImage, setIsVisible, productCategory, productTitle }) => {
  const isMobile = useMatchMedia(`(max-width: ${MediaQueries.LARGE_MOBILE}px)`);

  const handleClick = () => {
    setIsVisible(false);
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
