import { FC } from "react";

type Props = {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
};

export const ErrorFallback: FC<Props> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
