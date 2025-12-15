import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button.jsx";
import { homeSkillsText } from "../../../data/home/homeSkillsText.js";

const blockContainerOuterClasses = `
    flex flex-col w-full h-auto 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const blockContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const bodyItemsContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};


const SkillsTextBlock = ({
    heading = homeSkillsText.heading,
    bodyItems = homeSkillsText.bodyItems,
    buttonProps = homeSkillsText.buttonProps,
    alignmentHeading = "left",
    alignmenBody = "left",
    className,
    ...props

}) => {
    const alignmentClassHeading = alignmentClassesMap[alignmentHeading] || alignmentClassesMap.left;
    const alignmentClassBody = alignmentClassesMap[alignmenBody] || alignmentClassesMap.left;

    return (
        <div className={clsx(blockContainerOuterClasses)}>
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
                            <Text  {...item.heading} />
                            <Text  {...item.body} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Button {...buttonProps}/>
            </div>
        </div>
        
    )
};

export default SkillsTextBlock;