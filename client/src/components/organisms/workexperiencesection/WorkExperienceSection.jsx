/**
 * Role: CMS-driven Work Experience section
 * Used by: Home page or any page that includes work experience
 *
 * Responsibilities:
 *  - Render section heading and optional CTA
 *  - Render CMS-driven blocks via BlockRenderer
 *  - Respect section-level CMS controls (enabled, order, alignment)
 *
 * Guardrails:
 *  - Fully data-driven (no page-specific logic)
 *  - Alignment handled at section or child-molecule level
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";

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

const subsectionContainerClasses = `
flex flex-col w-full 
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

const WorkExperienceSection = ({ data = {}, className, ...props }) => {
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

  const headingAlignClass =
    textAlignMap[alignment.heading] || textAlignMap.center;

  const ctaAlignClass =
    flexAlignMap[alignment.cta] || flexAlignMap.center;

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
                headingAlignClass
            )}
            >
            <Text {...heading} />
            </div>
        )}

        {/* CMS-driven Blocks */}
        {Array.isArray(rows) && rows.length > 0 && (
            <div className={subsectionContainerClasses}>
            {rows
                .filter(row => row?.enabled !== false)
                .map(row => (
                <div
                    key={row.id}
                    className={blocksContainerClasses}
                >
                    {Array.isArray(row.blocks) &&
                    row.blocks
                        .filter(block => block?.enabled !== false)
                        .map(block => (
                        <BlockRenderer
                            key={block.id}
                            block={block}
                        />
                        ))}
                </div>
                ))}
            </div>
        )}
      </div>
      

      {/* Section CTA */}
      {buttonProps && (
        <div className={clsx("w-full flex", ctaAlignClass)}>
          <Button {...buttonProps} />
        </div>
      )}
    </section>
  );
};

export default WorkExperienceSection;
