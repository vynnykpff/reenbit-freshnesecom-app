import { FC } from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { Button, ErrorFallback } from "@/components/UI";
import { Routes } from "@/common/constants";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <div className={styles.homePageContainer}>
      <h2 className={styles.homePageTitle}>
        Welcome to <span className={styles.homePageTitleAccentText}>Freshnesecom</span>!
      </h2>
      <h3 className={styles.homePageSubTitle}>Discover a World of Shopping Delights!</h3>
      <Link className={styles.homePageButtonContainer} to={Routes.PRODUCTS}>
        <Button className={styles.homePageButton}>Start Shopping</Button>
      </Link>
    </div>
  );
};

export default withErrorBoundary(HomePage, { FallbackComponent: ErrorFallback });
