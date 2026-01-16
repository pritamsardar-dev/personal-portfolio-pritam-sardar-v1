/**
 * Role: CMS-driven Skills section
 * Used by: Home page or any page rendering Skills via section.type === "skills"
 *
 * Responsibilities:
 *  - Render section heading
 *  - Render grouped rows of blocks via BlockRenderer
 *  - Render optional section-level CTA
 *  - Respect enabled flags and alignment from CMS
 *
 * Guardrails:
 *  - Fully data-driven (no hardcoded layout logic)
 *  - Block layout handled by molecules
 *  - Section never mutates block data
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";

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

const rowContainerClasses = `
  flex flex-col sm:flex-row w-full
  gap-(--spacing-section-wrapper-mobile-gap)
  sm:gap-(--spacing-section-wrapper-tablet-gap)
  lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const textAlignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const flexAlignMap = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const SkillsSection = ({ data = {}, className, ...props }) => {
  const {
    id,
    enabled = true,
    heading,
    buttonProps,
    rows = [],
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = data;

  if (!enabled) return null;

  return (
    <section
      id={id}
      className={clsx(sectionContainerClasses, className)}
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

        {/* Rows & Blocks */}
        {rows.length > 0 &&
            rows
            .filter(row => row.enabled)
            .map(row => (
                <div key={row.id} className={rowContainerClasses}>
                {row.blocks
                    ?.filter(block => block.enabled)
                    .sort((a, b) => a.order - b.order)
                    .map(block => (
                    <BlockRenderer key={block.id} block={block} />
                    ))}
                </div>
            ))}
      </div>
      
      {/* Section CTA */}
      {buttonProps && (
        <div
          className={clsx(
            "w-full flex",
            flexAlignMap[alignment.cta]
          )}
        >
          <Button {...buttonProps} />
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
