/**
 * Role: CMS-driven Core Values content block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading and a grid of value cards
 *  - Display structured body items using a card-based layout
 *  - Apply CMS-controlled text alignment for heading and body
 *  - Add scroll-aware backdrop blur effects for subtle visual depth
 *
 * Guardrails:
 *  - Fully data-driven, no page- or section-specific assumptions
 *  - Safe for CMS ordering, enable/disable, and future extension
 *  - Visual behavior isolated to block level (no side effects)
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import { useScrolling } from "../../../../hooks/useScrolling";

const blockContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-2-heading-3-mobile-gap)
  sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
  lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const cardContainerClasses = `
  flex flex-col w-full
  bg-(--color-card-wrapper-fill)
  border-(length:--border-card-wrapper-base-width)
  border-(--color-card-wrapper-stroke)
  shadow-(--shadow-card-wrapper)
  rounded-(--radius-card-wrapper-base)
  transform-gpu will-change-transform
  contain-layout contain-paint
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
  py-(--spacing-text-container-mobile-padding-y)
  sm:py-(--spacing-text-container-tablet-padding-y)
  lg:py-(--spacing-text-container-desktop-padding-y)
  gap-(--spacing-heading-3-body-mobile-gap)
  sm:gap-(--spacing-heading-3-body-tablet-gap)
  lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const bodyItemsContainerClasses = `
  grid grid-cols-1 sm:grid-cols-2 w-full
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const CoreValuesBlock = ({
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
    : "backdrop-blur-(--effect-card-wrapper-background-blur)";

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
            <div key={item.id} className={clsx(cardContainerClasses, backdropBlur)}>
              {item.heading.text && <Text {...item.heading} />}
              {item.body.text && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreValuesBlock;
