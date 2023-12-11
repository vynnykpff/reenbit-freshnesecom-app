import { FC } from "react";
import { useForm } from "react-hook-form";
import { useActions } from "@/store";
import { checkOnValidFormValues } from "@/utils";
import { FormFields } from "@/common/types";
import { CartCompleteOrder, CartOrderDetails, CartOrderSummary } from "./components";
import { CartErrorMessages, CartFormFields, CartSuccessMessages, GlobalDelay, NotificationType } from "@/common/constants";
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
      setError(CartFormFields.PHONE_NUMBER, {
        type: "required",
        message: CartErrorMessages.EMPTY_FIELD,
      });
    }

    if (!formValues.confirmOrder) {
      setError(CartFormFields.CONFIRM_ORDER, { type: "required", message: CartErrorMessages.REQUIRED_CONFIRMATION });
    }
  };

  const onSubmit = () => {
    handleClick();

    if (!Object.keys(errors).length && getValues(CartFormFields.CONFIRM_ORDER)?.length) {
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
