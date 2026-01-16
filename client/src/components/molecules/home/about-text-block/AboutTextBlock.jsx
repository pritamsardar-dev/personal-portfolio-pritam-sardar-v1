/**
 * Role: CMS-driven text block for the About section
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render an optional heading
 *   - Render a list of text body items
 *   - Respect CMS controls (enabled, alignment, ordering via data)
 * Guardrails:
 *   - Fully data-driven, no page-specific logic
 *   - Designed for CRUD operations via CMS
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";

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

const AboutTextBlock = ({
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
      {heading && <Text {...heading} />}

      {bodyItems.length > 0 && (
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left
          )}
        >
          {bodyItems.map((item) => (
            <div key={item.id} className={bodyItemContainerClasses}>
              {item.heading && <Text {...item.heading} />}
              {item.body && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutTextBlock;
