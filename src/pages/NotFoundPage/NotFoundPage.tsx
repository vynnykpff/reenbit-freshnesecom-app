import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/UI";

const NotFoundPage: FC = () => {
  return <h2>Not Found Page: 404</h2>;
};

export default withErrorBoundary(NotFoundPage, { FallbackComponent: ErrorFallback });
