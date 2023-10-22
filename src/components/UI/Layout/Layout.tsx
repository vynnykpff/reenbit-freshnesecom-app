import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components";
import styles from "./Layout.module.scss";

export const Layout: FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
