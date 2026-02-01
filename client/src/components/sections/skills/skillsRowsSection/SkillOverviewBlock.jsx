/**
 * Role: CMS-driven skill overview / summary block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading with summarized skill items
 *  - Display scoped highlights and narrative lists via ListContentBlock
 *  - Respect CMS controls for alignment, ordering, and enable/disable
 *
 * Guardrails:
 *  - Fully data-driven with no page-specific logic
 *  - Safe for reuse across Work Experience and overview-style sections
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
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
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

const SkillOverviewBlock = ({ 
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
                {(item.heading || item.description || item.scopeSet) && 
                  <div className={clsx(subHeadingContainerClasses)}>
                    {/* Optional sub heading */}
                    {item.heading && <Text {...item.heading} />}

                    {/* Optional description or scope set */}
                    {item.description && <Text {...item.description} />}
                    <ListContentBlock inlineItems={item.scopeSet} />
                  </div>}
                {/* Narrative list items */}
                <ListContentBlock labelValueItems={item.narrativeList} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SkillOverviewBlock;
