import { FC } from "react";
import { RenderCategories } from "../RenderCategories";
import styles from "./HeaderCategoriesDesktop.module.scss";

export const HeaderCategoriesDesktop: FC = () => {
  return (
    <section className={styles.headerCategoriesContainer}>
      <RenderCategories className={[styles.headerCategoriesDesktopList, styles.selectCategories]} />
    </section>
  );
};
