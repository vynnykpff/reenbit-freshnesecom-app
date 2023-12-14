import { FC } from "react";
import cn from "classnames";
import { useModalState } from "@/hooks";
import { Button, Modal } from "@/components/UI";
import modalStyles from "@/styles/Modal.module.scss";
import styles from "./ConfirmModal.module.scss";

type Props = {
  confirmCallback(): void;
  message: string;
};

export const ConfirmModal: FC<Props> = ({ message, confirmCallback }) => {
  const [modalActive, setModalActive] = useModalState("confirmModal");

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const handleSubmit = () => {
    handleCloseModal();
    confirmCallback();
  };

  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive}>
      <form onSubmit={e => e.preventDefault()} className={modalStyles.modalForm}>
        <div className={modalStyles.modalFieldsWrapper}>
          <p className={styles.confirmMessage}>
            Would you like to <span className={styles.highlightConfirmMessage}>{message}</span> ?
          </p>
        </div>
        <div className={modalStyles.footerModal}>
          <Button onClick={handleCloseModal} type="button" className={cn(modalStyles.cancelButton, modalStyles.confirmModalButton)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="button" className={cn(modalStyles.agreeButton, modalStyles.confirmModalButton)}>
            Yes
          </Button>
        </div>
      </form>
    </Modal>
  );
};
