import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Product } from "@/components";
import { ErrorFallback } from "@/components/UI";

const ProductPage: FC = () => {
  return (
    <section className={"container"}>
      <Product />
    </section>
  );
};

export default withErrorBoundary(ProductPage, { FallbackComponent: ErrorFallback });
