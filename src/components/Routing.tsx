import { FC, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "@/common/constants/Routes.ts";
import { Layout, Loader } from "@/components/UI";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const CartPage = lazy(() => import("@/pages/CartPage/CartPage.tsx"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/ProductsPage.tsx"));
const ProductPage = lazy(() => import("@/pages/ProductPage/ProductPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage.tsx"));

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Layout />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: Routes.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: Routes.CART,
        element: <CartPage />,
      },
      {
        path: Routes.ALL,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Routing: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
