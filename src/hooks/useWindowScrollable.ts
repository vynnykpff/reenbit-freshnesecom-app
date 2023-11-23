import { useEffect } from "react";
import { removeDataAttribute, setDataAttribute } from "@/utils";
import { Attributes } from "@/common/constants";

export const useWindowScrollable = (isScrollable: boolean) => {
  useEffect(() => {
    if (!isScrollable) {
      setDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE }, "true");
    } else {
      removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
    }
  }, [isScrollable]);
};
