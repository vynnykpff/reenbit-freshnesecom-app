import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/UI";

const CartPage: FC = () => {
  return <h2>Cart Page</h2>;
};

export default withErrorBoundary(CartPage, { FallbackComponent: ErrorFallback });
