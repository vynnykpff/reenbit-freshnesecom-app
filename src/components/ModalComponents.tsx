import { FC } from "react";
import { useAppSelector } from "@/store";
import { ModalWindowState } from "@/common/types";
import { ConfirmModal } from "./ConfirmModal";

export const components: Record<keyof ModalWindowState, FC<any>> = {
  confirmModal: ConfirmModal,
};

export const ModalComponents = () => {
  const modalState = useAppSelector(state => state.modalWindow);

  return (
    <>
      {Object.keys(modalState).map(i => {
        const key = i as keyof typeof modalState;
        if (!modalState[key].visible) {
          return null;
        }

        const Component = components[key];

        return <Component key={key} {...modalState[key].props} />;
      })}
    </>
  );
};
