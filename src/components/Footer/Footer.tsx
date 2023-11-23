import { FC, useCallback, useEffect, useRef } from "react";
import { FooterNavbar, ProductTags } from "./components";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const getCurrentYear = useCallback(() => {
    const currentYear = new Date().getFullYear();
    if (spanRef.current) {
      spanRef.current.textContent = currentYear.toString();
    }
  }, []);

  useEffect(() => {
    getCurrentYear();
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <FooterNavbar />
      <ProductTags />
      <p className={styles.footerCopyright}>
        © Reenbit - trainee camp <span ref={spanRef}></span>
      </p>
    </footer>
  );
};
