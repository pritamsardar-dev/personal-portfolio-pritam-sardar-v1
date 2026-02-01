/**
 * Role: CMS-driven validation CTA block
 * Used by: Rendered via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render an optional block heading with supporting copy
 *  - Display one or more CTA button groups driven by CMS data
 *  - Adapt layout and container rules based on variant (atAGlance / skillsRow)
 *  - Respect CMS controls for enablement, ordering, and alignment
 *
 * Guardrails:
 *  - Fully data-driven with no page- or section-specific logic
 *  - Variant resolution handled via resolveProps
 *  - Block-level responsibility only; no side effects or navigation logic
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import { resolveProps } from "../../../../utils/resolveProps";

const blockContainer = {
  base: `
    flex flex-col w-full
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
  `,
  atAGlance: `
  `,
  skillsRow: `
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  `
};

const subHeadingContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-3-body-mobile-gap)
  sm:gap-(--spacing-heading-3-body-tablet-gap)
  lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const buttonsContainerClasses = `
    w-full flex flex-wrap h-auto
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const bodyItemContainerClasses = `
    flex flex-col w-full
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
    flex flex-col w-full
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const ValidationCtaBlock = ({
  variant = "atAGlance", // atAGlance / skillsRow
  data = {},
  className,
  ...props
}) => {
  const resolvedData = resolveProps(data, variant);
  const {
    id,
    enabled = true,
    heading,
    bodyItems = {},
    alignment = {
      heading: "left",
      body: "left",
    },
   
  } = resolvedData;

  const blockContainerClasses = clsx(
    blockContainer.base,
    variant === "atAGlance" ? 
        blockContainer.atAGlance 
      : blockContainer.skillsRow
  );

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

                 {/* Button itemes */}
                {Array.isArray(item?.ctaButtons) && item.ctaButtons.length > 0 && (
                    <div className={clsx(buttonsContainerClasses)}>
                        {item.ctaButtons.map((button, index) => (
                            <Button
                              key={index}
                              {...button}
                            />
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

export default ValidationCtaBlock;
