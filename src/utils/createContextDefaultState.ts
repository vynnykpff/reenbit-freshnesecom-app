import { ContextState } from "@/common/types";

export const createContextDefaultState = <T = any>(state: T): ContextState<T> => ({
  state,
  dispatch: function () {
    return this.state;
  },
});
