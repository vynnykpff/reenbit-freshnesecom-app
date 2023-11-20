import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect, useFilteredProducts } from "@/hooks";
import { NEXT_PAGE, PaginationVariables } from "@/common/constants";
import NavigationPaginateIcon from "#/icons/select-chevron.svg?react";
import styles from "./PaginationPages.module.scss";

const ELLIPSIS_ICON = "...";

export const PaginationPages: FC = () => {
  const { productCategory, productBrands, productRatings, productPrice } = useAppSelector(state => state.productsFilter);
  const { setPaginationPage } = useActions();
  const { productsPerPage } = useAppSelector(state => state.productsPagination);
  const [remountKey, setRemountKey] = useState(0);
  const filteredProducts = useFilteredProducts();

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPaginationPage(selectedPage.selected + NEXT_PAGE);
  };

  useChangeEffect(() => {
    setPaginationPage(PaginationVariables.INITIAL_PAGE);
    setRemountKey(prevKey => prevKey + NEXT_PAGE);
  }, [productCategory, productBrands, productRatings, productPrice]);

  return (
    <div className={styles.paginationPagesContainer}>
      <p className={styles.paginationPageTitle}>Page:</p>
      <ReactPaginate
        key={remountKey}
        onPageChange={handlePageChange}
        pageRangeDisplayed={PaginationVariables.PAGE_RANGE_DISPLAYED}
        className={styles.paginationList}
        pageClassName={styles.paginationPageItem}
        activeClassName={styles.paginationPageItemActive}
        nextLabel={<NavigationPaginateIcon className={cn(styles.navigationPaginateIcon, styles.navigationRightPaginateIcon)} />}
        previousLabel={<NavigationPaginateIcon className={cn(styles.navigationPaginateIcon, styles.navigationLeftPaginateIcon)} />}
        breakLabel={ELLIPSIS_ICON}
        pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
