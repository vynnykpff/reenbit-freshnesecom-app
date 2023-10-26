import { DispatchAction } from "./DispatchAction.ts";
import { Dispatch } from "react";

export type ContextState<State> = {
  state: State;
  dispatch: Dispatch<DispatchAction>;
};
