import { FC, useEffect } from "react";
import ReactPaginate from "react-paginate";
import cn from "classnames";
import { useActions, useAppSelector } from "@/store";
import { useFilteredProducts } from "@/hooks";
import { getCountPages } from "@/utils";
import { PaginationState } from "@/common/types";
import { DEFAULT_AMOUNT_PRODUCT_PER_PAGE, NEXT_PAGE, PaginationVariables } from "@/common/constants";
import NavigationPaginateIcon from "#/icons/select-chevron.svg?react";
import styles from "./PaginationPages.module.scss";

const ELLIPSIS_ICON = "...";

export const PaginationPages: FC = () => {
  const { productCategory, productBrands, productRatings, productPrice } = useAppSelector(state => state.productsFilter);
  const { setPaginationPage, setStartPaginationPage, setEndPaginationPage } = useActions();
  const { paginationPage, paginationStartPage } = useAppSelector(state => state.productsPagination);
  const filteredProducts = useFilteredProducts();
  const totalPages = getCountPages(filteredProducts.length);

  const setMarkersForPage = ({ paginationPage, paginationStartPage, paginationEndPage }: PaginationState) => {
    setPaginationPage(paginationPage);
    setStartPaginationPage(paginationStartPage);
    setEndPaginationPage(paginationEndPage);
  };

  useEffect(() => {
    setPaginationPage(getCountPages(paginationStartPage));
  }, []);

  useEffect(() => {
    setMarkersForPage({
      paginationPage: getCountPages(paginationStartPage),
      paginationStartPage: 0,
      paginationEndPage: DEFAULT_AMOUNT_PRODUCT_PER_PAGE,
    });
  }, [productCategory, productBrands, productRatings, productPrice]);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newStartPage = (selectedPage.selected * DEFAULT_AMOUNT_PRODUCT_PER_PAGE) % filteredProducts.length;
    setMarkersForPage({
      paginationPage: selectedPage.selected,
      paginationStartPage: newStartPage,
      paginationEndPage: DEFAULT_AMOUNT_PRODUCT_PER_PAGE,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.paginationPagesContainer}>
      <p className={styles.paginationPageTitle}>Page:</p>
      <ReactPaginate
        onPageChange={handlePageChange}
        pageRangeDisplayed={PaginationVariables.PAGE_RANGE_DISPLAYED}
        className={styles.paginationList}
        pageClassName={styles.paginationPageItem}
        activeClassName={styles.paginationPageItemActive}
        forcePage={paginationPage}
        nextLabel={
          paginationPage === totalPages - NEXT_PAGE ? (
            ""
          ) : (
            <NavigationPaginateIcon className={cn(styles.navigationPaginateIcon, styles.navigationRightPaginateIcon)} />
          )
        }
        previousLabel={
          !paginationPage ? "" : <NavigationPaginateIcon className={cn(styles.navigationPaginateIcon, styles.navigationLeftPaginateIcon)} />
        }
        breakLabel={ELLIPSIS_ICON}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
