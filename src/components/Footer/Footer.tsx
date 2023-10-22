import { FooterNavbar, ProductTags } from "./components";
import { FC, useEffect, useRef } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (spanRef.current) {
      spanRef.current.textContent = currentYear.toString();
    }
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
