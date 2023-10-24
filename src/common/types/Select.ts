import { Variant } from "@/components/UI/Select";
import { Dispatch, SelectHTMLAttributes, SetStateAction } from "react";

export type SelectVariantFields = {
  text: string;
  value: string;
};

export type SelectProps = {
  currentState: string;
  setCurrentState: Dispatch<SetStateAction<SelectProps["currentState"]>> | ((val: SelectProps["currentState"]) => void);
  variants: Variant[];
  maxWidth?: string;
  minWidth?: string;
  isShowSelectedValue?: boolean;
  placeholder?: string;
  bgColor?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;
