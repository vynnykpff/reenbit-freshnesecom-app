import { Routing } from "@/components";
import { Preloader } from "@/components/UI";
import { useActions, useAppSelector } from "@/store";
import { FC, useEffect } from "react";

export const App: FC = () => {
  const { getProducts } = useActions();
  const { isPending } = useAppSelector(state => state.products);

  useEffect(() => {
    getProducts();
  }, []);

  if (isPending) {
    return <Preloader />;
  }

  return <Routing />;
};
