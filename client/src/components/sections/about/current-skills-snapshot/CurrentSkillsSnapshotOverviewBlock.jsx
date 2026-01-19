/**
 * Role: CMS-driven narrative content block
 * Used by: Rendered via BlockRenderer (block.type based)
 *
 * Responsibilities:
 *  - Render an optional heading and ordered narrative body items
 *  - Apply token-driven spacing and text alignment
 *
 * Guardrails:
 *  - Fully data-driven (no page or section coupling)
 *  - Safe for CMS enable/disable and alignment control
 *  - Rendering only, no side effects or data mutation
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";

const blockInnerContainerClasses = `
  flex flex-col w-full
  sm:max-w-(--size-block-wrapper-single-tablet-max-width)
  lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
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

const CurrentSkillsSnapshotOverviewBlock = ({
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
        blockInnerContainerClasses,
        alignmentMap[alignment.heading] || alignmentMap.left,
        className
      )}
      {...props}
    >
      {/* Optional Block heading */}
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
              {/* Optional subtitle */}
              {item.heading && <Text {...item.heading} />}

              {item.body && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentSkillsSnapshotOverviewBlock;
