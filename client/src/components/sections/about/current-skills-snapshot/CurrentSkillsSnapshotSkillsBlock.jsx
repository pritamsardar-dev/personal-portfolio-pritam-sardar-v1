/**
 * Role: CMS-driven Skills Snapshot block
 * Used by: Rendered via BlockRenderer using block.type
 *
 * Responsibilities:
 *  - Render an optional block heading
 *  - Render one or more skill groups with tag-style items
 *  - Apply CMS-controlled alignment and spacing
 *  - Apply scroll-aware backdrop blur at block scope
 *
 * Guardrails:
 *  - Block owns its schema (no shared or generic schema assumptions)
 *  - Fully data-driven and CMS-safe (enable/disable, ordering)
 *  - Visual logic isolated to this block only
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import { useScrolling } from "../../../../hooks/useScrolling";

const blockContainerClasses = `
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
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const skillsetContainerClasses = `
    w-full flex flex-wrap h-auto
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

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const CurrentSkillsSnapshotSkillsBlock = ({
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
            <div key={item.id} className={clsx(bodyItemContainerClasses)}>
                {/* Optional skill Category subtitle */}
                {item.heading && <Text {...item.heading} />}

                {/* Skill Tags */}
                {item.body?.texts?.length > 0 && (
                    <div className={clsx(skillsetContainerClasses)}>
                        {item.body.texts.map((text, index) => (
                            <div
                                key={index}
                                className={clsx(skillsTagStyleClasses, backdropBlur)}>
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

export default CurrentSkillsSnapshotSkillsBlock;
