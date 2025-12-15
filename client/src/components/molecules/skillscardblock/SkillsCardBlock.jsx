import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import { homeSkillsCard } from "../../../data/home/homeSkillsCard.js";

const blockContainerClasses = `
    flex flex-col w-full h-auto 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const bodyItemsContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full h-auto
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const skillsetContainerClasses = `
    w-full flex flex-wrap h-auto
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`
const techStackTagStyleClasses = `
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    backdrop-blur-none
    sm:backdrop-blur-none
    lg:backdrop-blur-none
    rounded-(--radius-card-skill-wrapper-base)
    transform-gpu
    will-change-transform
    contain-layout contain-paint
    px-(--spacing-card-wrapper-skill-mobile-padding-x)
    sm:px-(--spacing-card-wrapper-skill-tablet-padding-x)
    lg:px-(--spacing-card-wrapper-skill-desktop-padding-x)
    px-(--spacing-card-wrapper-skill-mobile-padding-y)
    sm:py-(--spacing-card-wrapper-skill-tablet-padding-y)
    lg:py-(--spacing-card-wrapper-skill-desktop-padding-y)
`

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

const SkillsCardBlock = ({
    heading = homeSkillsCard.heading,
    bodyItems = homeSkillsCard.bodyItems,
    alignmentHeading = "left",
    alignmenBody = "left",
    className,
    ...props

}) => {
    const alignmentClassHeading = alignmentClassesMap[alignmentHeading] || alignmentClassesMap.left;
    const alignmentClassBody = alignmentClassesMap[alignmenBody] || alignmentClassesMap.left;

    return (
        <div
        className={clsx(
            blockContainerClasses,
            alignmentClassHeading,
            className,
        )}
        {...props}
        >
            <Text {...heading} />
            <div
            className={clsx(bodyItemsContainerClasses, alignmentClassBody)}
            >
                {bodyItems.map((item, index) => (
                    <div key={index} className={clsx(bodyItemContainerClasses,)}>

                        <Text {...item.heading} />

                        <div className={clsx(skillsetContainerClasses)}>
                            {item.body.texts.map((text, index) => (
                                <div  
                                key={index} 
                                className={clsx(techStackTagStyleClasses)}>
                                    <Text 
                                    variant={item.body.variant} 
                                    text={text} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SkillsCardBlock;