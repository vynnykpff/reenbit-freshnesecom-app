import { Dispatch, SelectHTMLAttributes, SetStateAction } from "react";

export type SelectVariants = Record<string, string>;

export type SelectProps = {
  currentVariant: string;
  setCurrentVariant: Dispatch<SetStateAction<SelectProps["currentVariant"]>> | ((val: SelectProps["currentVariant"]) => void);
  setFieldValue?(key: string): void;
  variants: Record<string, string>;
  maxWidth?: string;
  minWidth?: string;
  isShowSelectedValue?: boolean;
  placeholder?: string;
  bgColor?: string;
  isCart?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;
