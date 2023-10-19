import { ROUTES } from "@/common/constants";
import { ProductCategory } from "@/common/types";
import { useCategories } from "@/hooks";
import { FC } from "react";
import { Link } from "react-router-dom";

const MAX_RANGE = 1000;

export const Header: FC = () => {
  const tempProductId = Math.floor(Math.random() * MAX_RANGE);
  const { categories } = useCategories();

  return (
    <header>
      <ul>
        {categories.map((category: ProductCategory) => (
          <>
            <li key={category.id}>{category.name}</li>
            <ul>
              {category.brands.map(brand => (
                <li>{brand.name}</li>
              ))}
            </ul>
            <br />
          </>
        ))}
      </ul>
      <br />
      <br />
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
