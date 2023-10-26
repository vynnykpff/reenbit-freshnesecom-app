import { FC } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.scss";

export const Loader: FC = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="var(--secondary-c2-color-500)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={styles.loaderContainer}
      visible={true}
    />
  );
};
