import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/UI";

const ProductsPage: FC = () => {
  return <h2>All Products Page</h2>;
};

export default withErrorBoundary(ProductsPage, { FallbackComponent: ErrorFallback });
