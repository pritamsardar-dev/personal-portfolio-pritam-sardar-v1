/**
 * Role: CMS-driven About section
 * Used by: Home page or other pages that include About section
 * Responsibilities:
 *   - Render multiple blocks via BlockRenderer
 *   - Render section heading and optional CTA
 *   - Respect section-level CMS controls
 * Guardrails:
 *   - Fully data-driven, no page-specific logic
 *   - Alignment handled by child molecules
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import { resolveProps } from "../../../../utils/resolveProps";

const sectionContainerClasses = `
  flex flex-col w-full
  max-w-(--size-section-wrapper-mobile-max-width)
  sm:max-w-(--size-section-wrapper-tablet-max-width)
  lg:max-w-(--size-section-wrapper-desktop-max-width)

  px-(--spacing-section-wrapper-mobile-padding-x)
  sm:px-(--spacing-section-wrapper-tablet-padding-x)
  lg:px-(--spacing-section-wrapper-desktop-padding-x)

  py-(--spacing-section-wrapper-mobile-padding-y)
  sm:py-(--spacing-section-wrapper-tablet-padding-y)
  lg:py-(--spacing-section-wrapper-desktop-padding-y)

  gap-(--spacing-section-wrapper-mobile-gap)
  sm:gap-(--spacing-section-wrapper-tablet-gap)
  lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const sectionHeadingWrapperClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-1-heading-2-mobile-gap)
  sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
  lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
`;

const blocksContainerClasses = `
  flex flex-col sm:flex-row w-full
  gap-(--spacing-section-wrapper-mobile-gap)
  sm:gap-(--spacing-section-wrapper-tablet-gap)
  lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const textAlignMap = { 
    left: "text-left", 
    center: "text-center", 
    right: "text-right" 
};
const flexAlignMap = { 
    left: "justify-start", 
    center: "justify-center", 
    right: "justify-end" 
};

const AboutSection = ({ 
  data = {}, 
  className, 
  ...props 
}) => {
  
  const resolvedData = resolveProps(data, "home");

  let {
    id,
    enabled = true,
    heading,
    buttonProps,
    blocks = [],
    alignment = { heading: "center", cta: "center" },
  } = resolvedData;

  if (!enabled) return null;

  return (
    <section
      id={id}
      className={clsx(
        sectionContainerClasses, 
        className
      )}
      {...props}
    >
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {heading && (
            <div
            className={clsx(
                textAlignMap[alignment.heading]
            )}
            >
            <Text {...heading} />
            </div>
        )}

        {/* Blocks */}
        {Array.isArray(blocks) && blocks.length > 0 && (
            <div className={blocksContainerClasses}>
              {blocks
                  .filter(block => block.enabled)
                  .sort((a, b) => a.order - b.order)
                  .map(block => (<BlockRenderer key={block.id} block={block} />))
              }
            </div>
        )}
      </div>
      
      {/* Section CTA */}
      {buttonProps && (
        <div className={clsx("w-full flex", flexAlignMap[alignment.cta])}>
          <Button {...buttonProps} />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
