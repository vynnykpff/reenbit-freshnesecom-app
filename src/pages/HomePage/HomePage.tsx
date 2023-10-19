import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/UI";

const HomePage: FC = () => {
  return <h2>Home Page</h2>;
};

export default withErrorBoundary(HomePage, { FallbackComponent: ErrorFallback });
