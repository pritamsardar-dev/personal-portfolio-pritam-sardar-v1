/**
 * Role: CMS-driven Academic Journey content block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional heading and structured academic timeline entries
 *  - Apply card-based layout with CMS-controlled alignment
 *  - Support scroll-aware visual effects for enhanced UX
 *
 * Guardrails:
 *  - Fully data-driven, no page- or section-specific logic
 *  - Designed for CMS extensibility and safe reordering
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
  flex flex-col w-full
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
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const bodyItemContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-list-item-mobile-gap)
  sm:gap-(--spacing-list-item-tablet-gap)
  lg:gap-(--spacing-list-item-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const AcademicJourneyBlock = ({
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
                {item.body.timeline.text && <Text {...item.body.timeline} />}
                {item.heading.text && <Text {...item.heading} />}
                {item.body.institute.text && <Text {...item.body.institute} />}
                {item.body.board.text && <Text {...item.body.board} />}
                {item.body.highlights.text && <Text {...item.body.highlights} />}
                {item.body.score.text && <Text {...item.body.score} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicJourneyBlock;
