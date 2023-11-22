import { FC } from "react";
import { useActions, useAppSelector } from "@/store";
import { DEFAULT_AMOUNT_PRODUCT_PER_PAGE, NEXT_PAGE } from "@/common/constants";
import { Button } from "@/components/UI";
import ShowMoreIcon from "#/icons/select-chevron.svg?react";
import styles from "./ShowMoreButton.module.scss";

export const ShowMoreButton: FC = () => {
  const { setEndPaginationPage, setPaginationPage } = useActions();
  const { paginationEndPage, paginationPage } = useAppSelector(state => state.productsPagination);

  const handleShowMoreProducts = () => {
    const newEndPage = paginationEndPage + DEFAULT_AMOUNT_PRODUCT_PER_PAGE;
    setEndPaginationPage(newEndPage);
    setPaginationPage(paginationPage + NEXT_PAGE);
  };

  return (
    <Button onClick={handleShowMoreProducts} className={styles.showMoreButton}>
      <span>Show more products</span> <ShowMoreIcon className={styles.showMoreIcon} />
    </Button>
  );
};
