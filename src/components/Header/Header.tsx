import { ROUTES } from "@/common/constants/Routes.ts";
import { FC } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

export const Header: FC = () => {
  const tempSlug = slugify("Iphone 15 Pro Max").toLowerCase();
  const tempUrl = `/electronics/smartphones/apple/${tempSlug}`;
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
          <Link to={`${ROUTES.PRODUCTS}${tempUrl}`}>Product</Link>
        </li>
        <li>
          <Link to={ROUTES.CART}>Shopping Cart</Link>
        </li>
      </ul>
    </header>
  );
};
