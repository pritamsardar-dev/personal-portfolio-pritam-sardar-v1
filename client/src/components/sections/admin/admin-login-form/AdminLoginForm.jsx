import React from "react";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePopupMessage } from "../../../../hooks/usePopupMessage";
import { adminLoginSchema } from "../../../../validation/adminLoginSchema";

import FormField from "../../../atoms/formfield/FormField";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import Spinner from "../../../atoms/loader/Spinner";

const containerClasses = `
    w-full mx-auto flex flex-col

    min-w-[320px]
    max-w-[90dvw]

    sm:min-w-[360px]
    sm:max-w-[440px]

    lg:min-w-[400px]
    lg:max-w-[480px]

    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-wrapper-base)

    px-(--spacing-text-container-mobile-padding-x)
    py-(--spacing-text-container-mobile-padding-y)

    gap-(--spacing-block-block-mobile-gap)
`;

// Admin login form with Zod validation.
// Handles submit state, success and error feedback via popup messages.
const AdminLoginForm = ({ handlers, state, className }) => {
  const { showMessage } = usePopupMessage();

  const isSubmitting = state?.form?.loginSubmit;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = async (formData) => {
    try {
      await handlers.form.loginSubmit(formData);

      showMessage({
        id: "success",
        role: "success",
        title: "Login Successful",
        message: "Welcome back. You have been authenticated successfully.",
        variant: "success",
        autoCloseMs: 3000,
      });

      reset();
    } catch {
      showMessage({
        id: "error",
        role: "error",
        title: "Login Failed",
        message: "Invalid login credentials. Please check your ID and password and try again.",
        variant: "error",
        autoCloseMs: 5000,
      });
    }
  };

  return (
    <form
      className={clsx(
        containerClasses,
        isSubmitting && "pointer-events-none opacity-80",
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Heading */}
      <Text variant="heading3" text="Admin Login" className="text-center" />

      {/* Login ID */}
      <FormField
        label="Email / Username"
        name="loginId"
        register={register}
        className="!w-full"
        error={errors?.loginId?.message}
      />

      {/* Password */}
      <FormField
        type="password"
        label="Password"
        name="password"
        register={register}
        className="!w-full"
        error={errors?.password?.message}
      />

      {/* Submit */}
      <Button type="submit" variant="primary" disabled={isSubmitting} className="!w-full">
        {isSubmitting ? <Spinner variant="buttonPrimary" text="Logging in" /> : "Login"}
      </Button>
    </form>
  );
};

export default AdminLoginForm;
