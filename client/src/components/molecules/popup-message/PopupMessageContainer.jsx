import clsx from "clsx";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import { CrossFilledIcon, CrossFilledIconType, CrossIcon, CrossIconType, PopupErrorCircleFilledIcon, PopupInfoCircleFilledIcon, PopupSuccessCircleFilledIcon } from "../../../assets/icons/system";
const popupContainerClasses = `
    relative flex flex-col w-fit items-center text-center
    max-w-(--size-popup-container-mobile-max-width)
    sm:max-w-(--size-popup-container-tablet-max-width)
    lg:max-w-(--size-popup-container-desktop-max-width)

    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)

    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)

    bg-(--color-navigation-panel-mobile-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-container-base) overflow-hidden
`;

const headingToBodyClasses = `
    w-full flex flex-col items-center justify-center overflow-hidden
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
    px-2
`;

const interactiveToInteractiveClasses = `
    w-full flex flex-row items-center justify-center
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
`;

const closeButtonOverwtriteClasses = `
    rounded-full !p-0 bg-transparent
    w-(--size-button-overlay-mobile-height)
    sm:w-(--size-button-overlay-tablet-height)
    lg:w-(--size-button-overlay-desktop-height)
    h-(--size-button-overlay-mobile-height)
    sm:h-(--size-button-overlay-tablet-height)
    lg:h-(--size-button-overlay-desktop-height)
`;

const feedbackIconClasses = `
    w-(--size-feedback-icon-diameter-desktop)
    sm:w-(--size-feedback-icon-diameter-desktop)
    lg:w-(--size-feedback-icon-diameter-desktop)
`;

const popupVariants = {
default:`
`,
  warning: `
    text-(--color-feedback-warning-icon)
  `,

  success: `
    text-(--color-feedback-success-icon)
  `,

  error: `
    text-(--color-feedback-error-icon)
  `,

  info: `
    text-(--color-text-primary)
  `,
};

const PopupMessageContainer = ({
  variant = "default",
  title,
  message,
  icon,
  actions,
  isShowCloseBtn = true,
  onClose,
  className,
}) => {

    const getIconByVariant = () => {
        if (variant === "success") return <PopupSuccessCircleFilledIcon />;
        if (variant === "info") return <PopupInfoCircleFilledIcon/>;
        if (variant === "error") return <PopupErrorCircleFilledIcon/>;
        return icon; // fallback (if you pass manually)
    };

  return (
    <div className="flex items-center justify-center px-4">
        <div
            className={clsx(
                popupContainerClasses,
                popupVariants[variant] || popupVariants.default,
                className
            )}
            >
            {/* Header */}
            {isShowCloseBtn && onClose && (
                <div className="absolute top-3 right-3 w-full flex flex-row justify-end ">
                <Button
                    variant="overlay"
                    iconLeft={CrossIcon}
                    iconLeftType={CrossIconType}
                    onClick={onClose}
                    className={closeButtonOverwtriteClasses}
                />
                </div>
            )}

            {/* Header & Message*/}
            {(icon || title || message) && (
                <div className={headingToBodyClasses}>
                    {(icon || variant) && 
                    <div className={clsx(feedbackIconClasses, popupVariants[variant])}>
                        {getIconByVariant()}
                    </div>
                    
                    }

                    {title && (
                        <Text {...title} />
                    )}

                    {message && (
                        <Text {...message} />
                    )}
                </div>
            )}

            {/* Actions */}
            {actions && (
                <div
                className={interactiveToInteractiveClasses}
                >
                {Array.isArray(actions) && actions.length > 0 ?
                    actions.map((aciton) => (
                        <Button key={aciton?.id} {...aciton} className="w-full" />
                    ))
                    : <Button {...actions} className="w-full"/>
                }
                </div>
            )}
        </div>
    </div>
  );
};

export default PopupMessageContainer;