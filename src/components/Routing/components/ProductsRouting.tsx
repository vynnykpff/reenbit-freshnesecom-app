import { ROUTES } from "@/common/constants";
import { NotFoundPage, ProductPage } from "@/components/Routing";
import { Route, Routes } from "react-router-dom";

export const ProductsRouting = () => {
  return (
    <Routes>
      <Route path={ROUTES.PRODUCT_CATEGORY}>
        <Route index element={<h2>PRODUCT CATEGORY</h2>} />
        <Route path={ROUTES.PRODUCT_SUB_CATEGORY}>
          <Route index element={<h2>PRODUCT SUB CATEGORY</h2>} />
          <Route path={ROUTES.PRODUCT_BRAND}>
            <Route index element={<h2>PRODUCT BRAND</h2>} />
            <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
            <Route path={ROUTES.ALL} element={<NotFoundPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
