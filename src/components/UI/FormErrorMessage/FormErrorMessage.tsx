import { FC } from "react";
import cn from "classnames";
import commonStyles from "@/styles/CartCommon.module.scss";

type Props = {
  error: string;
  className?: string;
};

export const FormErrorMessage: FC<Props> = ({ error = "", className = "" }) => {
  return <div className={cn(commonStyles.cartFieldErrorMessage, className)}>{error}</div>;
};
