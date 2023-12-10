import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalWindowState } from "@/common/types";

const initialState: ModalWindowState = {
  confirmModal: {
    visible: false,
    props: {},
  },
};

export const modalWindowSlice = createSlice({
  name: "modal_window_slice",
  initialState,
  reducers: {
    setModalState: (state, action: PayloadAction<Partial<ModalWindowState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { actions: modalWindowActions, reducer: modalWindowReducer } = modalWindowSlice;
