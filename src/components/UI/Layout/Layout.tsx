import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useChangeEffect } from "@/hooks";
import { Footer, Header } from "@/components";
import styles from "./Layout.module.scss";

export const Layout: FC = () => {
  const location = useLocation();

  useChangeEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
