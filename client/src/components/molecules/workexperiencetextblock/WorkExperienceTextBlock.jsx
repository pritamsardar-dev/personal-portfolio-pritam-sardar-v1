import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button.jsx";
import { homeWorkExperienceText } from "../../../data/home/homeWorkExperienceText.js";
homeWorkExperienceText

const blockContainerClasses = `
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

const bodyItemsContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full h-auto
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
`;

const listItemClasses = `
    list-disc
    list-outside
    pl-(--spacing-list-item-text-indent-mobile)
    sm:pl-(--spacing-list-item-text-indent-tablet)
    lg:pl-(--spacing-list-item-text-indent-desktop)
    space-y-(--spacing-list-item-text-gap-y-mobile)
    sm:space-y-(--spacing-list-item-text-gap-y-tablet)
    lg:space-y-(--spacing-list-item-text-gap-y-desktop)
`

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};


const WorkExperienceTextBlock = ({
    bodyItems = homeWorkExperienceText.bodyItems,
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
            {bodyItems.map((item, index) => (
                <div key={index} className={clsx(
                    bodyItemsContainerClasses,
                    alignmentClassBody
                    )}>
                    <div className={clsx(bodyItemContainerClasses)}>
                        <Text  {...item.overview} />

                        <ul className={clsx(listItemClasses)}>
                            {item.highlights.texts.map((listItem, index) => (
                                <Text 
                                key={index} 
                                variant={item.highlights.variant} 
                                as={item.highlights.as} 
                                text={listItem}
                                />
                            ))}
                        </ul>

                        <Text  {...item.caseStudyAtAGlance} />
                    </div>

                    <div>
                        <Button {...item.buttonProps}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperienceTextBlock;