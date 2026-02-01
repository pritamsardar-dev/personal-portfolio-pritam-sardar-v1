/**
 * Role: CMS-driven effectiveness summary content block
 * Used by: Embedded directly inside SkillRowsSection 
 *
 * Responsibilities:
 *  - Render an optional block heading and grouped effectiveness items
 *  - Display structured sub-headings, descriptions, and text lists
 *  - Apply CMS-controlled text alignment for heading and body content
 *
 * Guardrails:
 *  - Fully data-driven with no page-specific assumptions
 *  - No routing, state, or side effects (pure presentational block)
 *  - Designed for long-term reuse and safe refactors
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";

const blockContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-2-heading-3-mobile-gap)
  sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
  lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const subHeadingContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-3-body-mobile-gap)
  sm:gap-(--spacing-heading-3-body-tablet-gap)
  lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const itemListStyleClasses = `
    flex flex-col w-full
    p-(--spacing-text-container-inner-2-mobile-padding)
    sm:p-(--spacing-text-container-inner-2-tablet-padding)
    lg:p-(--spacing-text-container-inner-2-desktop-padding)

    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)

    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full
    p-(--spacing-text-container-inner-1-mobile-padding)
    sm:p-(--spacing-text-container-inner-1-tablet-padding)
    lg:p-(--spacing-text-container-inner-1-desktop-padding)
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)
`;

const itemListContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-list-item-mobile-gap)
  sm:gap-(--spacing-list-item-tablet-gap)
  lg:gap-(--spacing-list-item-desktop-gap)
`;

const bodyItemsContainerClasses = `
    flex flex-col w-full
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const AtAGlanceEffectivenessBlock = ({
  data = {},
  className,
  ...props
}) => {
  const {
    id,
    enabled = true,
    heading,
    bodyItems = {},
    alignment = {
      heading: "left",
      body: "left",
    },
   
  } = data;

  if (!enabled) return null;
  
  return (
    <div
      id={id}
      className={clsx(
        blockContainerClasses,
        alignmentMap[alignment.heading] || alignmentMap.left,
        className
      )}
      {...props}
    >
 
      {/* Optional block heading */}
      {heading && <Text {...heading} />}
     
      {/* Body items container */}
      {Array.isArray(bodyItems) && bodyItems.length > 0 && (
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left
          )}
        >
          {/* Body item */}
          {bodyItems.map((item) => (
            <div key={item.id} className={clsx(bodyItemContainerClasses)}>
                {(item.heading || item.description) && 
                  <div className={clsx(subHeadingContainerClasses)}>
                    {/* Optional sub heading */}
                    {item.heading && <Text {...item.heading} />}

                    {/* Optional description */}
                    {item.description && <Text {...item.description} />}
                  </div>}

                {/* Item list */}
                {Array.isArray(item.body?.texts) && item.body.texts.length > 0 && (
                    <div className={clsx(itemListContainerClasses)}>
                        {item.body.texts.map((text, index) => (
                            <div
                                key={index}
                                className={clsx(itemListStyleClasses)}>
                                <Text
                                    variant={item.body.variant}
                                    text={text}
                                    icon={item.body.icon}
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

export default AtAGlanceEffectivenessBlock;
