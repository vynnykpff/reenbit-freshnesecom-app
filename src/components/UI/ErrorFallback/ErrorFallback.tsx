import { ErrorMessages } from "@/common/constants";
import { Button } from "@/components/UI";
import { FC } from "react";
import ErrorIcon from "#/icons/error.svg?react";
import styles from "./ErrorFallback.module.scss";

type Props = {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
};
export const ErrorFallback: FC<Props> = ({ error, resetErrorBoundary }) => {
  return (
    <div className={styles.errorFallbackContainer}>
      <ErrorIcon className={styles.errorIcon} />
      <h4 className={styles.errorFallbackTitle}>{ErrorMessages.DEFAULT}</h4>
      <pre className={styles.errorFallbackMessage}>{error.message}</pre>
      <Button className={styles.errorFallbackButton} onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};
