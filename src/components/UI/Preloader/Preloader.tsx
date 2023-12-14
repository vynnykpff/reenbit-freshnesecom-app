import { FC } from "react";
import * as Loader from "react-loader-spinner";
import styles from "./Preloader.module.scss";

export const Preloader: FC = () => {
  return (
    <Loader.TailSpin
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
