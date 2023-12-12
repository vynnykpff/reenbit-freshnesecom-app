import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Cart } from "@/components";
import { ErrorFallback } from "@/components/UI";

const CartPage: FC = () => {
  return (
    <section className={"container"}>
      <Cart />
    </section>
  );
};

export default withErrorBoundary(CartPage, { FallbackComponent: ErrorFallback });
