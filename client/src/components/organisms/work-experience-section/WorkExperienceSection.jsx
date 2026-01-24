/**
 * Role: CMS-driven Work Experience section
 * Used by: Home page or any page that includes work experience
 *
 * Responsibilities:
 *  - Render section-level heading and optional CTA
 *  - Optionally render filter controls (variant-specific)
 *  - Render CMS-defined rows and blocks via BlockRenderer
 *  - Resolve variant-based layout, alignment, and container styling
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
import { resolveProps } from "../../../utils/resolveProps";
import FilterBarSection from "../filterbar-section/FilterBarSection";
import { useScrolling } from "../../../hooks/useScrolling";

const sectionContainerClasses = `
  flex flex-col w-full 
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

const rowsContainerClasses = `
flex flex-col w-full items-center
gap-(--spacing-section-wrapper-mobile-gap) 
sm:gap-(--spacing-section-wrapper-tablet-gap) 
lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const blocksContainer = {
  base: `
    flex flex-col w-full
  `,
  home: `
    sm:flex-row
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,
  workExperience: `
    items-center
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tabelt-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

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

    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
  `
};

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

const WorkExperienceSection = ({
  variant = "workExperience", // home / workExperience
  data = {}, 
  className, 
  ...props
}) => {  
  const resolvedData = resolveProps(data, variant);

  const {
    id,
    enabled = true,
    heading,
    filters,
    buttonProps,
    rows = [],
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = resolvedData;

  // const ResolvedRows = rows
  //   .filter(row => row?.enabled !== false)
  //   .filter(row => typeof row?.topOrder === "number")
  //   .sort((a, b) => a.topOrder - b.topOrder)
  //   .slice(0, 1);

  const isScrolling = useScrolling(150);
    
  if (!enabled) return null;
  
  const backdropBlur = 
    isScrolling ? "backdrop-blur-none" 
    : "backdrop-blur-(--effect-card-container-background-blur)";

  const blocksContainerClasses = clsx(
    blocksContainer.base,
    variant === "home" ? 
        blocksContainer.home 
      : blocksContainer.workExperience
  );

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

        {/* Optional Filter Section */}
        {variant === "workExperience" && 
          <div className={clsx()}>
            <FilterBarSection data={filters}/>
          </div>}

        {/* CMS-driven Blocks */}
        {Array.isArray(rows) && rows.length > 0 && (
            <div className={rowsContainerClasses}>
            {rows
                .filter(row => row?.enabled !== false)
                .map(row => (
                  <div
                      key={row.id}
                      className={clsx(blocksContainerClasses, backdropBlur)}
                  >
                    {Array.isArray(row.blocks) &&
                      row.blocks
                        .filter(block => block?.enabled !== false)
                        .map(block => (
                        <BlockRenderer
                            variant={variant}
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
