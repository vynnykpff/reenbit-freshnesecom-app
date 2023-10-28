import { Routing } from "@/components";
import { useActions } from "@/store";
import { FC, useEffect } from "react";

export const App: FC = () => {
  const { getProducts } = useActions();

  useEffect(() => {
    getProducts();
  }, []);

  return <Routing />;
};
