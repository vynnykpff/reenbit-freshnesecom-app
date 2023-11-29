import { memo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useActions, useAppSelector } from "@/store";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Notification.module.scss";

export const Notification = memo(() => {
  const { title, delay, type } = useAppSelector(state => state.notification);
  const { setNotificationTitle } = useActions();

  const notify = () =>
    toast[type](title, {
      onClose: () => {
        setNotificationTitle("");
      },
    });

  useEffect(() => {
    if (title) {
      notify();
    }
  }, [title]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={delay}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={styles.notificationContainer}
    />
  );
});
