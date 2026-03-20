/**
 * Role: CMS-driven contact form block
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render a configurable list of form fields
 *   - Render a submit CTA defined by CMS data
 *   - React to scroll state to optimize blur performance
 * Guardrails:
 *   - Fully data-driven, no form logic or submission handling
 *   - No page-specific assumptions or hardcoded field configs
 *   - Safe to mount, reorder, or toggle via CMS
 */

import React from "react";
import clsx from "clsx";
import FormField from "../../atoms/formfield/FormField";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import Spinner from "../../atoms/loader/Spinner";
import { useScrolling } from "../../../hooks/useScrolling";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../../validation/contactSchema";
import { usePopupMessage } from "./utils/usePopupMessage";
import { useCTA } from "../../../hooks/useCTA";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useRefs from "../../../hooks/useRefs";

const outerContainerClasses = `
    relative  flex flex-col
    w-full
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const containerClasses = `
    relative  flex flex-col
    transform-gpu will-change-transform contain-layout contain-paint
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-wrapper-base)
    w-full
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const heading2ToBodyClasses = `
    w-full flex flex-col 

    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const itemToItemClasses = `
    w-full flex flex-col 
    gap-(--spacing-item-item-desktop-gap)
    sm:gap-(--spacing-item-item-desktop-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const buttonsClasses = `
    flex w-full justify-center sm:justify-start
    gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
    sm:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const submitButtonSpecialClasses = `
    sm:w-fit
    disabled:!bg-(--color-button-primary-background-default)
    disabled:!text-(--color-button-primary-text-default)
`;

const ContactFormBlock = ({
    data = {},
    handlers,
    state,
    ui,
    className,
    ...props
}) => {
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
        popupMessages,
    } = data;

    const isMobile = useMediaQuery("(max-width: 639px)");

    const { showMessage } = usePopupMessage();
    const { handleCTA } = useCTA();

    const isSubmitting = state?.form?.contactSubmit;

    const successMessaage = popupMessages?.find(item => item?.id === "success");
    const errorMessaage = popupMessages?.find(item => item?.id === "error");

    const onSubmit = async (formData) => {
        try {
        await handlers.form.contactSubmit(formData);
        showMessage({...successMessaage});
        reset();
        } catch {
        showMessage({...errorMessaage});
        }
    };

    const { formToggleInProgressRef } = useRefs();

    const handleToggleFullView = () => {
        if (!formToggleInProgressRef) return;

        // Start layout change
        formToggleInProgressRef.current = true;

        // Toggle UI
        ui?.form?.toggleFullView(prev => !prev);

        // Trigger CTA
        requestAnimationFrame(() => handleCTA(toggleFullFormViewButton));

        // Wait for scroll + layout to finish
        const scrollTarget = document.getElementById(toggleFullFormViewButton.target);
        if (scrollTarget) {
            const onScrollEnd = () => {
            formToggleInProgressRef.current = false;
            window.removeEventListener("scroll", onScrollEnd);
            };

            window.addEventListener("scroll", onScrollEnd);

            // Fallback timeout in case scroll event is missed
            setTimeout(() => {
            formToggleInProgressRef.current = false;
            window.removeEventListener("scroll", onScrollEnd);
            }, 350); // match scroll duration
        } else {
            // If no scroll, just reset after animation frame
            requestAnimationFrame(() => formToggleInProgressRef.current = false);
        }
    };

    const { 
        register, 
        handleSubmit,
        getValues,
        reset,    
        formState: { errors }
    } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const isScrolling = useScrolling(150);

    if (!enabled) return null;

    const backdropBlur = 
      isScrolling ? "backdrop-blur-none" 
      : "backdrop-blur-(--effect-card-wrapper-background-blur)";

    return (
        <div className={outerContainerClasses}>

            <div className={heading2ToBodyClasses}>
                {/* Block title */}
                {heading && <Text {...heading} className={`text-${alignment?.heading}`} />}

                {/* Block desciptions */}
                {description && <Text {...description} className={`text-${alignment?.body}`} />}
            </div>

            <form 
                id={id}
                className={clsx(
                    containerClasses,
                    backdropBlur,
                    isSubmitting ? "pointer-events-none opacity-80" : "",
                    className
                )}
                onSubmit={handleSubmit(onSubmit)}
                {...props}
            >
                {!isMobile &&
                    <div className="absolute top-1 right-1">
                        <Button
                            type={toggleFullFormViewButton?.type}
                            variant="iconOnlyCircular"
                            iconLeft={ui?.form?.isFullView ? toggleFullFormViewButton?.iconLeft?.collapse : toggleFullFormViewButton?.iconLeft?.expand}
                            iconLeftType={ui?.form?.isFullView ? toggleFullFormViewButton?.iconLeftType?.collapse : toggleFullFormViewButton?.iconLeftType?.expand}
                            onClick={handleToggleFullView}
                            className="opacity-80 hover:opacity-100 active:opacity-100"
                        />
                    </div>
                }

                {/* Form fields container*/}
                {Array.isArray(formFields) && formFields.length > 0 &&
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
                    </div>}
                    
                {submitButton && 
                    <Button 
                        {...submitButton} 
                        disabled={isSubmitting}
                        className={submitButtonSpecialClasses}
                    >
                        {isSubmitting && <Spinner 
                            variant="buttonPrimary"
                            text="Sending"
                        />}
                    </Button>
                }

                <span>
                        <Text
                            variant="labelDefault"
                            text="Or send directly via"
                            className="text-center sm:text-start !opacity-60"
                        />
                </span>

                {Array.isArray(altContactButtons) && altContactButtons.length > 0 && 
                    <div className={buttonsClasses}>
                        {altContactButtons.map((btn) => (
                            <Button
                                key={btn?.id}
                                type="button"
                                variant={btn?.variant} 
                                label={btn?.label} 
                                iconLeft={btn?.iconLeft}
                                iconLeftType={btn?.iconLeftType}
                                className={clsx("sm:w-fit", isSubmitting && "cursor-not-allowed" )}
                                disabled={isSubmitting}
                                onClick={() => {
                                    const currentFormValues = getValues(); // get the latest form values
                                    handleCTA(
                                        {
                                            action: btn?.action,
                                            type: btn?.type,       
                                            phone: btn?.phone,     
                                            email: btn?.email     
                                        },
                                        null,                  
                                        currentFormValues           
                                    )
                                }}
                            />
                        ))}
                    </div>
                }
            </form>
        </div>
    );
};

export default ContactFormBlock;