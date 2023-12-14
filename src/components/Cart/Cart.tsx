import { FC } from "react";
import { useForm } from "react-hook-form";
import { useActions, useAppSelector } from "@/store";
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
  const { resetFields, setNotification, resetError, resetCartProducts } = useActions();
  const { cartProducts, error } = useAppSelector(state => state.cart);

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
      resetCartProducts();
      resetFields();
      resetError();
      setNotification({ type: NotificationType.SUCCESS, delay: GlobalDelay.PRODUCT_CART, title: CartSuccessMessages.ORDER_SUCCESS });
    }
  };

  return (
    <div>
      <form className={styles.cartContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.cartOrderWrapper}>
          <CartOrderDetails clearErrors={clearErrors} register={register} errors={errors} setValue={setValue} setError={setError} />
          <CartOrderSummary />
        </div>
        <CartCompleteOrder
          isDisabled={checkOnValidFormValues({ cartProducts, error, errors, formValues: getValues() })}
          handleSubmit={onSubmit}
        />
      </form>
    </div>
  );
};
