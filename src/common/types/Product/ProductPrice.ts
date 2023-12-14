import { Dispatch, SetStateAction } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { NotificationState, ProductPrice } from "@/common/types";

export type ProductPriceBaseParams = {
  setProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
  setInputValue: Dispatch<SetStateAction<number>>;
  setNotification: ActionCreatorWithPayload<NotificationState>;
};
