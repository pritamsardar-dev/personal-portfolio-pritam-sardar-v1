import React from "react";
import clsx from "clsx";
import FormField from "../../atoms/formfield/FormField";
import Button from "../../atoms/button/Button";
import { homeContactForm } from "../../../data/home/homeContactForm";

const outerContainerClasses = `
    relative w-full flex flex-col
    transform-gpu will-change-transform contain-layout contain-paint
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    backdrop-blur-(--effect-card-wrapper-background-blur)
    rounded-(--radius-card-wrapper-base)
    max-w-(--size-block-wrapper-mobile-max-width)
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
    content = homeContactForm,
    className,
    ...props
}) => {
    const { formFields, submitButton} = content;

    return (
        <div className={clsx(
            outerContainerClasses,
            className
            )}
            {...props}
            >
            <div className={clsx(itemToItemClasses)}>
                {formFields.map((item, index) => (
                    <FormField
                    key={index}
                    {...item}
                    />
                ))}
            </div>
            <Button {...submitButton} />
        </div>
    );
};

export default ContactFormBlock;