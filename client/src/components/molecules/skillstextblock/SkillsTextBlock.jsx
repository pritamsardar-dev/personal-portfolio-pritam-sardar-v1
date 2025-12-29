/**
 * Role: CMS-driven text block for Skills section
 * Used by: BlockRenderer via block.type === "skillsTextBlock"
 *
 * Responsibilities:
 * - Render block heading
 * - Render multiple skill description items (heading + body)
 * - Respect alignment and enabled flags
 *
 * Guardrails:
 * - DO NOT modify layout or spacing classes
 * - Fully driven by CMS data model
 * - No CTA rendering (handled at section level)
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";

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

const SkillsTextBlock = ({ data = {}, className, ...props }) => {
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
        <div id={id} className={clsx(blockContainerOuterClasses)}>
            {/* Block Container  */}
            <div
                className={clsx(
                    blockContainerClasses,
                    alignmentClassHeading,
                    className
                )}
                {...props}
            >
                {/*  Block Heading  */}
                {heading && <Text {...heading} />}

                {/*  Body Items  */}
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
                                {/* Item Heading */}
                                {item.heading && <Text {...item.heading} />}

                                {/* Item Body */}
                                {item.body && <Text {...item.body} />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsTextBlock;
