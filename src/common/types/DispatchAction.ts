export type DispatchAction<T = any> = {
  type: string;
  payload: T;
};
