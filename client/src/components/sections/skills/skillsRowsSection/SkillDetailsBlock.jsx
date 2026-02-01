/**
 * Role: CMS-driven skill / experience details block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading and a list of detailed items
 *  - Display rich text content using ListContentBlock for consistency
 *  - Support CMS-controlled alignment, ordering, and enable/disable flags
 *
 * Guardrails:
 *  - Fully data-driven with no page-specific logic
 *  - Safe for reuse across Work Experience and related pages
 *  - Presentational only; no side effects or navigation handling
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import ListContentBlock from "../../../molecules/list-content-block/ListContentBlock";

const blockContainerClasses = `
  flex flex-col w-full
  sm:max-w-(--size-block-wrapper-single-tablet-max-width)
  lg:max-w-(--size-block-wrapper-single-desktop-max-width)
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

const bodyItemContainerClasses = `
    flex flex-col w-full
    p-(--spacing-text-container-inner-1-mobile-padding)
    sm:p-(--spacing-text-container-inner-1-tablet-padding)
    lg:p-(--spacing-text-container-inner-1-desktop-padding)
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)
`;

const bodyItemsContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const SkillDetailsBlock = ({ 
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

      {/* Body Items */}
      {Array.isArray(bodyItems) && bodyItems.length > 0 && (
        <div className={bodyItemsContainerClasses}>
          {bodyItems
            .map(item => (
              <div key={item.id} className={bodyItemContainerClasses}>
                {(item.heading || item.description) && 
                  <div className={clsx(subHeadingContainerClasses)}>
                    {/* Optional sub heading */}
                    {item.heading && <Text {...item.heading} />}

                    {/* Optional description*/}
                    {item.description && <Text {...item.description} />}
                  </div>}
                {/* item list */}
                <ListContentBlock items={item.body} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SkillDetailsBlock;
