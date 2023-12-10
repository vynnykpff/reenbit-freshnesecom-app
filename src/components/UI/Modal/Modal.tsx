import { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import cn from "classnames";
import { getAnimationVariant } from "@/utils";
import { AnimationDefaultDuration, animationDefaultList } from "@/common/constants";
import CloseIcon from "#/icons/cancel.svg?react";
import styles from "./Modal.module.scss";

type ModalProps = {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>> | ((value: boolean) => void);
  children: ReactNode;
  title?: string;
  onHide?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const modalsElement = document.querySelector("#modals");

export const Modal: FC<ModalProps> = ({ modalActive, setModalActive, children, title, onHide, className, ...props }) => {
  const handleHideModalClick = () => {
    setModalActive(false);
  };

  useEffect(() => {
    if (!modalActive && onHide) {
      onHide();
    }
  }, [modalActive]);

  if (!modalsElement) {
    return null;
  }

  return createPortal(
    <motion.div
      {...getAnimationVariant({ ...animationDefaultList, duration: AnimationDefaultDuration.SECONDARY })}
      onClick={handleHideModalClick}
      className={cn(styles.modalOverlay, modalActive ? styles.modal && styles.active : styles.modal)}
    >
      <div {...props} onClick={e => e.stopPropagation()} className={cn(styles.modalContainer, className)}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <CloseIcon onClick={handleHideModalClick} className={styles.closeIcon} />
        </div>
        {children}
      </div>
    </motion.div>,
    modalsElement,
  );
};
