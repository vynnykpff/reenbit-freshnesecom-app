import { useActions, useAppSelector } from "@/store";
import { ModalWindowState } from "@/common/types";

type SetState<T extends keyof ModalWindowState> = (visible: boolean, props?: ModalWindowState[T]["props"]) => void;

export const useModalState = <T extends keyof ModalWindowState>(key: T): [boolean, SetState<T>] => {
  const modalState = useAppSelector(state => state.modalWindow);
  const { setModalState } = useActions();

  const setState = (visible: boolean, props?: ModalWindowState[T]["props"]) => {
    setModalState({ [key]: { visible, props: props ?? {} } });
  };

  return [modalState[key].visible, setState];
};
