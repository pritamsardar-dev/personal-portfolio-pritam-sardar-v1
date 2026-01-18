import React from "react";
import clsx from "clsx";
import HeroTextBlock from "../../../molecules/herotextblock/HeroTextBlock";
import HeroImageBlock from "../../molecules/shared/hero-image-block/HeroImageBlock";

const heroSectionShellClasses = `
    overflow-hidden
    w-full flex flex-col sm:flex-row lg:flex-row 
    max-w-(--size-section-wrapper-mobile-max-width);
    sm:max-w-(--size-section-wrapper-tablet-max-width);
    lg:max-w-(--size-section-wrapper-desktop-max-width);
    px-(--spacing-section-wrapper-mobile-padding-x);
    sm:px-(--spacing-section-wrapper-tablet-padding-x);
    lg:px-(--spacing-section-wrapper-desktop-padding-x);
    py-(--spacing-section-wrapper-mobile-padding-y);
    sm:py-(--spacing-section-wrapper-tablet-padding-y);
    lg:py-(--spacing-section-wrapper-desktop-padding-y);
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tabet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const HeroSecion = ({
    heroTextBlockProps = {},
    heroImageBlockProps = {},
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                heroSectionShellClasses,
                className
            )}
            {...props}
        >
            <HeroTextBlock {...heroTextBlockProps} />
            <HeroImageBlock {...heroImageBlockProps} />
        </div>
    );
};

export default HeroSecion;