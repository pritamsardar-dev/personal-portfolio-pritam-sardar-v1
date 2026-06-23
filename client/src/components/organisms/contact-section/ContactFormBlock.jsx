import React, { useState, useEffect, useRef, useCallback } from "react";

import clsx from "clsx";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useScrolling } from "../../../hooks/useScrolling";
import { useCTA } from "../../../hooks/useCTA";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useRefs from "../../../hooks/useRefs";
import usePersistentState from "../../../hooks/usePersistentState";

import { contactSchema } from "../../../validation/contactSchema";
import { STORAGE_KEYS } from "../../../utils/storage/keys";
import { contactFormBlockLayoutConfig } from "./contactFormBlockLayout.config";

import {
  ArrowsMaximizeIcon,
  ArrowsMinimizeIcon,
  MailIcon,
  BrandWhatsappIcon,
} from "../../../assets/icons/system";

import TooltipButton from "../../atoms/tooltip/TooltipButton";
import FormField from "../../atoms/formfield/FormField";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import Spinner from "../../atoms/loader/Spinner";

const {
  outerContainer: outerContainerClasses,
  container: containerClasses,
  heading2ToBody: heading2ToBodyClasses,
  itemToItem: itemToItemClasses,
  buttons: buttonsClasses,
} = contactFormBlockLayoutConfig;

const submitButtonSpecialClasses = `
    sm:w-fit
    disabled:!bg-(--color-button-primary-background-default)
    disabled:!text-(--color-button-primary-text-default)
`;

const altContactButtonIcons = {
  "contact-whatsapp": {
    svg: BrandWhatsappIcon,
  },
  "contact-email": {
    svg: MailIcon,
  },
};

const toggleFormViewIcons = {
  expand: {
    svg: ArrowsMaximizeIcon,
  },
  collapse: {
    svg: ArrowsMinimizeIcon,
  },
};

// CMS driven contact form block.
// Renders configurable form fields and a submit CTA from CMS data.
// Persists draft to localStorage and clears on successful submit.
const ContactFormBlock = ({ data = {}, handlers, state, ui, className, ...props }) => {
  const {
    id,
    enabled = true,
    alignment,
    heading,
    description,
    formFields,
    submitButton,
    altContactButtons,
    toggleFullFormViewButton,
  } = data;

  const isScrolling = useScrolling(150);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const { handleCTA } = useCTA();

  const isSubmitting = state?.form?.contactSubmit;

  const pauseDraftSaveRef = useRef(false);
  const [formResetKey, setFormResetKey] = useState(0);
  const [isFormInView, setIsFormInView] = useState(false);
  const formRef = useRef(null);

  const [draft] = usePersistentState(STORAGE_KEYS.CONTACT.DRAFT, {}, true);

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  });

  // Restore saved draft into form on mount
  useEffect(() => {
    if (draft && Object.keys(draft).length > 0) {
      reset(draft);
    }
  }, [draft, reset]);

  const formValues = useWatch({ control });

  // Debounced draft save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pauseDraftSaveRef.current) return;

      const values = formValues;

      const isEmpty =
        !values || Object.keys(values).length === 0 || Object.values(values || {}).every((v) => !v);

      if (isEmpty) {
        localStorage.removeItem(STORAGE_KEYS.CONTACT.DRAFT);
        return;
      }

      localStorage.setItem(STORAGE_KEYS.CONTACT.DRAFT, JSON.stringify(values));
    }, 500);

    return () => clearTimeout(timer);
  }, [formValues]);

  const onSubmitHandler = useCallback(
    async (formData) => {
      pauseDraftSaveRef.current = true;

      localStorage.removeItem(STORAGE_KEYS.CONTACT.DRAFT);

      reset({ name: "", email: "", subject: "", message: "" });
      setFormResetKey((prev) => prev + 1);

      await handlers.form.contactSubmit(formData);

      // Resume draft saving after submission settles
      setTimeout(() => {
        pauseDraftSaveRef.current = false;
      }, 300);
    },
    [handlers, reset],
  );

  const submitHandler = useCallback(
    (e) => handleSubmit(onSubmitHandler)(e),
    [handleSubmit, onSubmitHandler],
  );

  const { formToggleInProgressRef } = useRefs();

  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          setIsFormInView(true);
          setTimeout(() => setIsFormInView(false), 3000);
        }
      },
      { threshold: [0.5] },
    );

    observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleToggleFullView = () => {
    if (!formToggleInProgressRef) return;

    formToggleInProgressRef.current = true;
    ui?.form?.toggleFullView((prev) => !prev);

    requestAnimationFrame(() => handleCTA(toggleFullFormViewButton));

    const scrollTarget = document.getElementById(toggleFullFormViewButton.target);

    if (scrollTarget) {
      const onScrollEnd = () => {
        formToggleInProgressRef.current = false;
        window.removeEventListener("scroll", onScrollEnd);
      };

      window.addEventListener("scroll", onScrollEnd);

      // Fallback cleanup if scroll never fires
      setTimeout(() => {
        formToggleInProgressRef.current = false;
        window.removeEventListener("scroll", onScrollEnd);
      }, 350);
    } else {
      requestAnimationFrame(() => {
        formToggleInProgressRef.current = false;
      });
    }
  };

  // Disable backdrop blur while scrolling to reduce paint cost
  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-card-wrapper-background-blur)";

  if (!enabled) return null;

  return (
    <div className={outerContainerClasses}>
      {/* Heading and Description */}
      <div className={heading2ToBodyClasses}>
        {heading && <Text {...heading} className={`text-${alignment?.heading}`} />}
        {description && <Text {...description} className={`text-${alignment?.body}`} />}
      </div>

      <form
        ref={formRef}
        key={formResetKey}
        id={id}
        className={clsx(
          containerClasses,
          backdropBlur,
          "group",
          isSubmitting ? "pointer-events-none opacity-80" : "",
          className,
        )}
        onSubmit={submitHandler}
        {...props}
      >
        {/* Expand/Collapse Toggle */}
        {!isMobile && (
          <div
            className={clsx(
              "absolute top-1 right-1",
              "transition-opacity duration-300",
              isFormInView ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          >
            <TooltipButton label={ui?.form?.isFullView ? "Minimize" : "Maximize"} position="left">
              <Button
                type={toggleFullFormViewButton?.type}
                variant="iconOnlyCircular"
                iconLeft={
                  ui?.form?.isFullView
                    ? toggleFormViewIcons?.collapse?.svg
                    : toggleFormViewIcons?.expand?.svg
                }
                onClick={handleToggleFullView}
                className="opacity-60 hover:opacity-80 active:opacity-100"
              />
            </TooltipButton>
          </div>
        )}

        {/* Form Fields */}
        {Array.isArray(formFields) && formFields.length > 0 && (
          <div className={clsx(itemToItemClasses)}>
            {formFields.map((item, index) => (
              <FormField
                key={index}
                {...item}
                register={register}
                className="w-full"
                error={errors?.[item.name]?.message}
              />
            ))}
          </div>
        )}

        {/* Submit Button */}
        {submitButton && (
          <Button {...submitButton} disabled={isSubmitting} className={submitButtonSpecialClasses}>
            {isSubmitting && <Spinner variant="buttonPrimary" text="Sending" />}
          </Button>
        )}

        <span>
          <Text
            variant="labelDefault"
            text="Or send directly via"
            className="text-center sm:text-start !opacity-60"
          />
        </span>

        {/* Alt Contact Buttons */}
        {Array.isArray(altContactButtons) && altContactButtons.length > 0 && (
          <div className={buttonsClasses}>
            {altContactButtons.map((btn) => (
              <TooltipButton key={btn?.id} label={btn?.tooltip} position="bottom">
                <Button
                  type="button"
                  variant={btn?.variant}
                  label={btn?.label}
                  iconLeft={altContactButtonIcons?.[btn?.id]?.svg}
                  className={clsx("sm:w-fit", isSubmitting && "cursor-not-allowed")}
                  disabled={isSubmitting}
                  onClick={() => {
                    const currentFormValues = getValues();
                    handleCTA(
                      {
                        action: btn?.action,
                        type: btn?.type,
                        phone: btn?.phone,
                        email: btn?.email,
                      },
                      null,
                      currentFormValues,
                    );
                  }}
                />
              </TooltipButton>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormBlock;
