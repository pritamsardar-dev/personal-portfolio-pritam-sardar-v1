import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button.jsx";
import { homeAboutCard } from "../../../data/home/homeAboutCard.js";

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


const AboutCardBlock = ({
    heading = homeAboutCard.heading,
    bodyItems = homeAboutCard.bodyItems,
    buttonProps = homeAboutCard.buttonProps,
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
                        <Text  {...item.body.timeline} />

                        <Text  {...item.heading} />

                        <Text  {...item.body.institute} />

                        <Text  {...item.body.board} />

                        <ul className={clsx(listItemClasses)}>
                            {item.body.highlights.map((listItem) => (
                                <Text {...listItem} />
                            ))}
                        </ul>

                        <Text  {...item.body.score} />
                    </div>
                ))}
            </div>
            <div>
                <Button {...buttonProps}/>
            </div>
        </div>
    )
};

export default AboutCardBlock;