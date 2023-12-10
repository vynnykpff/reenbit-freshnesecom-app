export type ComponentsState<P extends object = object> = {
  visible: boolean;
  props: P | object;
};

export type ModalWindowState = {
  confirmModal: ComponentsState;
};
