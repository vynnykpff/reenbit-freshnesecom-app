import { ROUTES } from "@/common/constants/Routes.ts";
import { Layout } from "@/components/UI";
import { FC, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const CartPage = lazy(() => import("@/pages/CartPage/CartPage.tsx"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/ProductsPage.tsx"));
const ProductPage = lazy(() => import("@/pages/ProductPage/ProductPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage.tsx"));

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.ALL,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Routing: FC = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};
