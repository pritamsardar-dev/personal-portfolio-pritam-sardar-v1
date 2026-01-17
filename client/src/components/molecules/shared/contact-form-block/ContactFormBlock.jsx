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
import FormField from "../../../atoms/formfield/FormField";
import Button from "../../../atoms/button/Button";
import { useScrolling } from "../../../../hooks/useScrolling";

const outerContainerClasses = `
    relative  flex flex-col
    transform-gpu will-change-transform contain-layout contain-paint
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-wrapper-base)
    w-full
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
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

const itemToItemClasses = `
    w-full flex flex-col 
    gap-(--spacing-item-item-desktop-gap)
    sm:gap-(--spacing-item-item-desktop-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const ContactFormBlock = ({
    data = {},
    className,
    ...props
}) => {
    const {
        id,
        enabled = true,
        formFields, 
        submitButton,
    } = data;

    const isScrolling = useScrolling(150);

    if (!enabled) return null;

    const backdropBlur = 
      isScrolling ? "backdrop-blur-none" 
      : "backdrop-blur-(--effect-card-wrapper-background-blur)";

    return (
        <div 
            id={id}
            className={clsx(
                outerContainerClasses,
                backdropBlur,
                className
            )}
            {...props}
        >
            {/* Form fields container*/}
            {Array.isArray(formFields) && formFields.length > 0 &&
                <div className={clsx(itemToItemClasses)}>
                    {formFields.map((item, index) => (
                        <FormField
                            key={index}
                            {...item}
                        />
                    ))}
                </div>}
            {submitButton && <Button {...submitButton} className="sm:w-fit"/>}
        </div>
    );
};

export default ContactFormBlock;