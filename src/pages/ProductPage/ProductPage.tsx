import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/UI";

const ProductPage: FC = () => {
  return <h2>Current Product</h2>;
};

export default withErrorBoundary(ProductPage, { FallbackComponent: ErrorFallback });
