/**
 * Role: CMS-driven Developer Journey content block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render a developer-focused narrative with optional heading and body items
 *  - Apply card-based layout with tokenized spacing and alignment
 *  - Enhance visual depth using scroll-aware backdrop effects
 *
 * Guardrails:
 *  - Fully data-driven, no page- or section-specific assumptions
 *  - Safe for CMS-controlled ordering, enable/disable, and alignment
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import { useScrolling } from "../../../../hooks/useScrolling";

const blockOuterContainerClasses = `
  flex 
  w-full
  sm:max-w-(--size-block-wrapper-single-tablet-max-width)
  lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  py-(--spacing-text-container-mobile-padding-y)
  sm:py-(--spacing-text-container-tabelt-padding-y)
  lg:py-(--spacing-text-container-desktop-padding-y)
  bg-(--color-card-container-background)
  border-(length:--border-card-container-base-width)
  border-(--color-card-container-border)
  shadow-(--shadow-card-container)
  rounded-(--radius-card-container-base)
  transform-gpu
  will-change-transform
  contain-layout contain-paint
`;

const blockInnerContainerClasses = `
  flex flex-col w-full h-auto
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
  py-(--spacing-text-container-mobile-padding-y)
  sm:py-(--spacing-text-container-tablet-padding-y)
  lg:py-(--spacing-text-container-desktop-padding-y)
  gap-(--spacing-heading-2-heading-3-mobile-gap)
  sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
  lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const bodyItemsContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-item-item-mobile-gap)
  sm:gap-(--spacing-item-item-tablet-gap)
  lg:gap-(--spacing-item-item-desktop-gap)
`;

const bodyItemContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-3-body-mobile-gap)
  sm:gap-(--spacing-heading-3-body-tablet-gap)
  lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const DeveloperJourneyBlock = ({
  data = {},
  className,
  ...props
}) => {
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

  const isScrolling = useScrolling(150);
  
  if (!enabled) return null;
  
  const backdropBlur = 
    isScrolling ? "backdrop-blur-none" 
    : "backdrop-blur-(--effect-card-container-background-blur)";

  return (
    // Outer card wrapper
    <div className={clsx(blockOuterContainerClasses, backdropBlur)}>
      {/* Inner text container */}
      <div
        id={id}
        className={clsx(
          blockInnerContainerClasses,
          alignmentMap[alignment.heading] || alignmentMap.left,
          className
        )}
        {...props}
      >
        {/* Block heading */}
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
              <div key={item.id} className={bodyItemContainerClasses}>
                {item.heading && <Text {...item.heading} />}
                {item.body && <Text {...item.body} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperJourneyBlock;
