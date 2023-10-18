import { ROUTES } from "@/common/constants/Routes.ts";
import { Layout } from "@/components/Layout";
import { ProductsRouting } from "@/components/Routing/components";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const CartPage = lazy(() => import("@/pages/CartPage/CartPage.tsx"));

const ProductsPage = lazy(() => import("@/pages/Products/Products.tsx"));
export const ProductPage = lazy(() => import("@/pages/Product/Product.tsx"));

export const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage.tsx"));

export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCTS_NESTED} element={<ProductsRouting />} />
          <Route path={ROUTES.CART} element={<CartPage />} />

          <Route path={ROUTES.ALL} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
