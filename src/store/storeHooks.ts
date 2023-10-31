import { ActionCreators } from "@/store/slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const useAppDispatch: AppDispatch = useDispatch();
  return bindActionCreators(ActionCreators, useAppDispatch);
};
