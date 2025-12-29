/**
 * Role: CMS-driven Skills Cards block
 * Used by: Mounted via BlockRenderer based on block.type = "skillsCardsBlock"
 *
 * Responsibilities:
 *  - Render optional block heading
 *  - Render skill categories with tag-style tech stacks
 *  - Respect alignment and enabled flags from CMS
 *
 * Guardrails:
 *  - Layout and spacing MUST NOT be modified
 *  - Fully data-driven (no static imports)
 *  - No mutation or inference of CMS data shape
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";

const blockContainerClasses = `
    flex flex-col w-full h-auto 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
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
`;

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
`;

const alignmentClassesMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

const SkillsCardBlock = ({ data = {}, className, ...props }) => {
    const {
        id,
        enabled = true,
        heading,
        bodyItems = [],
        alignment = {
            heading: "left",
            body: "left",
        },
    } = data;

    if (!enabled) return null;

    const alignmentClassHeading =
        alignmentClassesMap[alignment.heading] || alignmentClassesMap.left;

    const alignmentClassBody =
        alignmentClassesMap[alignment.body] || alignmentClassesMap.left;

    return (
        <div
            id={id}
            className={clsx(
                blockContainerClasses,
                alignmentClassHeading,
                className
            )}
            {...props}
        >
            {/* Block Heading */}
            {heading && <Text {...heading} />}

            {/* Skills Category List */}
            {bodyItems.length > 0 && (
                <div
                    className={clsx(
                        bodyItemsContainerClasses,
                        alignmentClassBody
                    )}
                >
                    {bodyItems.map((item, index) => (
                        <div
                            key={index}
                            className={clsx(bodyItemContainerClasses)}
                        >
                            {/* Skill Category Heading */}
                            {item.heading && <Text {...item.heading} />}

                            {/* Tech Stack Tags */}
                            {item.body?.texts?.length > 0 && (
                                <div className={clsx(skillsetContainerClasses)}>
                                    {item.body.texts.map((text, index) => (
                                        <div
                                            key={index}
                                            className={clsx(
                                                techStackTagStyleClasses
                                            )}
                                        >
                                            <Text
                                                variant={item.body.variant}
                                                text={text}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillsCardBlock;
