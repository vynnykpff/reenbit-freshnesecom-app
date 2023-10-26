import { useEffect } from "react";

export const useWindowEvent = <K extends keyof WindowEventMap>(type: K, listener: (ev: WindowEventMap[K]) => void) => {
  useEffect(() => {
    window.addEventListener(type, listener);

    return () => {
      window.removeEventListener(type, listener);
    };
  }, []);
};
