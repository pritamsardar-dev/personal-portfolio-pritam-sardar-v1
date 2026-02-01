/**
 * Role: CMS-driven highlights / core values content block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading and a responsive grid of highlight cards
 *  - Display structured heading + body content per card
 *  - Apply CMS-controlled text alignment for heading and body items
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

const cardContainerClasses = `
    flex flex-col w-full
    p-(--spacing-text-container-inner-1-mobile-padding)
    sm:p-(--spacing-text-container-inner-1-tablet-padding)
    lg:p-(--spacing-text-container-inner-1-desktop-padding)

    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)

    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)
`;

const bodyItemsContainerClasses = `
  grid grid-cols-1 sm:grid-cols-3 w-full
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const AtAGlanceHighlightsBlock = ({
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
            <div key={item.id} className={clsx(cardContainerClasses)}>
              {item.heading.text && <Text {...item.heading} />}
              {item.body.text && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AtAGlanceHighlightsBlock;
