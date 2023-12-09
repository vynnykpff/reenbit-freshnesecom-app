import { FC } from "react";
import { useForm } from "react-hook-form";
import { useActions } from "@/store";
import { checkOnValidFormValues } from "@/utils";
import { FormFields } from "@/common/types";
import { CartCompleteOrder, CartOrderDetails, CartOrderSummary } from "./components";
import { CartErrorMessages, CartSuccessMessages, GlobalDelay, NotificationType } from "@/common/constants";
import styles from "./Cart.module.scss";

export const Cart: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<FormFields>({ mode: "onBlur" });
  const { resetFields, setNotification } = useActions();

  const handleClick = () => {
    const formValues = getValues();
    if (!formValues.phoneNumber) {
      setError("phoneNumber", {
        type: "required",
        message: CartErrorMessages.EMPTY_FIELD,
      });
    }

    if (!formValues.confirmOrder) {
      setError("confirmOrder", { type: "required", message: CartErrorMessages.REQUIRED_CONFIRMATION });
    }
  };

  const onSubmit = () => {
    handleClick();

    if (!Object.keys(errors).length && getValues("confirmOrder")?.length) {
      reset();
      resetFields();
      setNotification({ type: NotificationType.SUCCESS, delay: GlobalDelay.PRICE, title: CartSuccessMessages.ORDER_SUCCESS });
    }
  };

  return (
    <div>
      <form className={styles.cartContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.cartOrderWrapper}>
          <CartOrderDetails clearErrors={clearErrors} register={register} errors={errors} setValue={setValue} setError={setError} />
          <CartOrderSummary />
        </div>
        <CartCompleteOrder isDisabled={checkOnValidFormValues(getValues(), errors)} handleSubmit={onSubmit} />
      </form>
    </div>
  );
};
