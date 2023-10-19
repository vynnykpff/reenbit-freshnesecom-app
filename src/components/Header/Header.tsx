import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/common/constants";

export const Header: FC = () => {
  const tempProductId = Math.floor(Math.random() * 1000);
  return (
    <header>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.PRODUCTS}>All Products</Link>
        </li>
        <li>
          <Link to={`${ROUTES.PRODUCTS}/${tempProductId}`}>Product</Link>
        </li>
        <li>
          <Link to={ROUTES.CART}>Shopping Cart</Link>
        </li>
      </ul>
    </header>
  );
};
