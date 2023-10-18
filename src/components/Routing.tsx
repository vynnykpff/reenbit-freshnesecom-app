import { ROUTES } from "@/common/constants/Routes.ts";
import { Layout } from "@/components/UI/Layout";
import { FC, Suspense, lazy } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const CartPage = lazy(() => import("@/pages/CartPage/CartPage.tsx"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage/ProductsPage.tsx"));
const ProductPage = lazy(() => import("@/pages/ProductPage/ProductPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage.tsx"));

const router = createHashRouter([
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
        children: [
          {
            path: ROUTES.PRODUCT_CATEGORY,
            element: <ProductsPage />,
            children: [
              {
                path: ROUTES.PRODUCT_SUB_CATEGORY,
                element: <ProductsPage />,
                children: [
                  {
                    path: ROUTES.PRODUCT_BRAND,
                    element: <ProductsPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: `${ROUTES.PRODUCTS}/${ROUTES.PRODUCT}`,
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
