import { Button } from "@/components/UI";
import { FC } from "react";
import ShowMoreIcon from "#/icons/select-chevron.svg?react";
import styles from "./ShowMoreButton.module.scss";

export const ShowMoreButton: FC = () => {
  return (
    <Button className={styles.showMoreButton}>
      <span>Show more products</span> <ShowMoreIcon className={styles.showMoreIcon} />
    </Button>
  );
};
