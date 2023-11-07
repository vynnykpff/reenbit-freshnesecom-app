import { Attributes } from "@/common/constants";
import { removeDataAttribute, setDataAttribute } from "@/utils";
import { useEffect } from "react";

export const useWindowScrollable = (isScrollable: boolean) => {
  useEffect(() => {
    if (!isScrollable) {
      setDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE }, "true");
    } else {
      removeDataAttribute({ tagName: "body", attributeName: Attributes.SCROLLABLE });
    }
  }, [isScrollable]);
};
