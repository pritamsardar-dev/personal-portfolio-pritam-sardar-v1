import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const blockContainerClasses = `
    flex flex-col w-full h-auto 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    gap-(--spacing-hero-text-block-button-mobile-gap)
    sm:gap-(--spacing-hero-text-block-button-tablet-gap)
    lg:gap-(--spacing-hero-text-block-button-desktop-gap)
`;

const buttonContainerClasses = `
    flex flex-row flex-wrap
    gap-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const heroIntroHeadingClasses = `
    w-full flex flex-col 
    gap-(--spacing-hero-intro-heading-mobile-gap)
    sm:gap-(--spacing-hero-intro-heading-tablet-gap)
    lg:gap-(--spacing-hero-intro-heading-desktop-gap)
`;

const heroHeadingTaglineClasses = `
    w-full flex flex-col 
    gap-(--spacing-hero-heading-tagline-mobile-gap)
    sm:gap-(--spacing-hero-heading-tagline-tablet-gap)
    lg:gap-(--spacing-hero-heading-tagline-desktop-gap)
`;

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

const HeroTextBlock = ({
    heroIntro = { variant: "heroIntro", text: "HERO INTRO" },
    heroHeading = { 
        variant: "heroHeading", 
        textParts: [
            { text: "Hero", color: "heading" }, 
            { text: "Heading", color: "primary" }
        ] 
    },
    heroTagline = { variant: "heroTagline", text: "Hero Tagline" },
    cta = [
        { variant: "primary", label: "Primary", onClick: () => {} },
        { variant: "secondary", label: "Secondary", onClick: () => {} },
    ],
    alignment = "left",
    className,
    ...props
}) => {

    const alignmentClass = alignmentClassesMap[alignment] || alignmentClassesMap.left;

    return (
        <div
            className={clsx(blockContainerClasses, alignmentClass, className)}
            {...props}
        >
            <div className={clsx(heroHeadingTaglineClasses)}>
                <div className={clsx(heroIntroHeadingClasses)}>
                    <Text {...heroIntro} />
                    <Text {...heroHeading} />
                </div>
                <Text {...heroTagline} />
            </div>

            <div className={clsx(buttonContainerClasses)}>
                {cta.map((btnProps, index) => (
                    <Button key={index} {...btnProps} />
                ))}
            </div>
        </div>
    );
};

export default HeroTextBlock;
