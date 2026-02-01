/**
 * Role: CMS-driven at-a-glance toolbelt / skills content block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading with grouped skill/tool sections
 *  - Display structured sub-headings, descriptions, and skill tags
 *  - Apply CMS-controlled text alignment for heading and body content
 *
 * Guardrails:
 *  - Fully data-driven with no page- or section-specific assumptions
 *  - Safe for CMS ordering, enable/disable, and future extension
 *  - Pure presentational block with no side effects
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

const skillsetContainerClasses = `
    w-full flex flex-wrap
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const skillsTagStyleClasses = `
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-skill-wrapper-base)
    transform-gpu will-change-transform
    contain-layout contain-paint
    px-(--spacing-card-wrapper-skill-mobile-padding-x)
    sm:px-(--spacing-card-wrapper-skill-tablet-padding-x)
    lg:px-(--spacing-card-wrapper-skill-desktop-padding-x)
    px-(--spacing-card-wrapper-skill-mobile-padding-y)
    sm:py-(--spacing-card-wrapper-skill-tablet-padding-y)
    lg:py-(--spacing-card-wrapper-skill-desktop-padding-y)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full h-full
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

const bodyItemsContainerClasses = `
    flex flex-col w-full h-full
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const AtAGlanceToolbeltBlock = ({
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

                 {/* Skill Tags */}
                {Array.isArray(item.body?.texts) && item.body.texts.length > 0 && (
                    <div className={clsx(skillsetContainerClasses)}>
                        {item.body.texts.map((text, index) => (
                            <div
                                key={index}
                                className={clsx(skillsTagStyleClasses)}>
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

export default AtAGlanceToolbeltBlock;
