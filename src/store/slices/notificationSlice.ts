import { NotificationDelay, NotificationType } from "@/common/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "@/common/types";

const initialState: NotificationState = {
  title: "",
  delay: NotificationDelay.DEFAULT,
  type: NotificationType.INFO,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    setNotificationTitle: (state, action: PayloadAction<NotificationState["title"]>) => {
      state.title = action.payload;
    },
  },
});
export const { actions: notificationActions, reducer: notificationReducer } = notificationSlice;
