import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import { homeWorkExperienceCard } from "../../../data/home/homeWorkExperienceCard.js";

const blockContainerClasses = `
    flex flex-col w-full h-auto 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const bodyItemsContainerClasses = `
    flex flex-col w-full h-auto 
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const bodyItemContainerCardClasses = `
    flex flex-col w-full h-auto
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    backdrop-blur-(--effect-card-wrapper-background-blur)
    rounded-(--radius-card-wrapper-base)
    transform-gpu
    will-change-transform
    contain-layout contain-paint
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
`;

const techStackClasses = `
    w-full flex flex-wrap h-auto
    gap-(--spacing-tech-stack-tag-mobile-gap)
    sm:gap-(--spacing-tech-stack-tag-tablet-gap)
    lg:gap-(--spacing-tech-stack-tag-desktop-gap)
`
const labelValueRowClasses = `
    [&>*]:inline
    [&>*+*]:ml-(--spacing-inline-text-gap)
`

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

const WorkExperienceCardBlock = ({
    heading = homeWorkExperienceCard.heading,
    bodyItems = homeWorkExperienceCard.bodyItems,
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
                    <div key={index} className={clsx(bodyItemContainerCardClasses,)}>
                        <Text {...item.body.timeline} />

                        <Text {...item.heading} />

                        {item.body.labelValueItems.map((labelValueItem, index) => (
                        <span key={index} className={clsx(labelValueRowClasses)}>
                            <Text {...labelValueItem.label} />
                            <Text {...labelValueItem.value} />
                        </span>
                        ))}

                        <div className={clsx(techStackClasses)}>
                            <Text {...item.body.techStack.label}/>
                            {item.body.techStack.value.texts.map((text, index) => (
                                <Text key={index} variant={item.body.techStack.value.variant} text={text} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default WorkExperienceCardBlock;