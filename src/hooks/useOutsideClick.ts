import { useWindowEvent } from "./useWindowEvent.ts";
import { RefObject, useCallback, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  then: () => void,
  event: "mousedown" | "mouseup" | "click" = "mousedown",
  except?: RefObject<HTMLElement>,
) => {
  const ref = useRef<T>(null);

  const handler = useCallback((e: MouseEvent) => {
    const { target } = e as MouseEvent & { target: HTMLElement };
    if (ref.current === null) {
      return;
    }

    if (!ref.current?.contains(target) && !except?.current?.contains(target)) {
      then();
    }
  }, []);

  useWindowEvent(event, handler);

  return ref;
};
