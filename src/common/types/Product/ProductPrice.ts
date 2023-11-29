import { Dispatch, SetStateAction } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { NotificationState, ProductPrice } from "@/common/types";

export type ProductPriceBaseParams = {
  setLocalProductPrice: Dispatch<SetStateAction<Omit<ProductPrice, "currency">>>;
  setLocalInputValue: Dispatch<SetStateAction<number>>;
  setNotification: ActionCreatorWithPayload<NotificationState>;
};
