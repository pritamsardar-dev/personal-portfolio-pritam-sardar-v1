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
import { useCTA } from "../../../hooks/useCTA";

const sectionContainerClasses = `
  flex flex-col w-full

  sm:max-w-(--size-section-wrapper-tablet-max-width)
  lg:max-w-(--size-section-wrapper-desktop-max-width)

  px-(--spacing-section-wrapper-mobile-padding-x)
  sm:px-(--spacing-section-wrapper-tablet-padding-x)
  lg:px-(--spacing-section-wrapper-desktop-padding-x)

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
  variant = "home", // home / workExperience
  data = {}, 
  className, 
  ...props
}) => {
  const domain = "experience"; // project / experience
    
  const resolvedByDomain = resolveProps(data, domain);
  const resolvedData = resolveProps(resolvedByDomain, variant);

  const {
    id,
    heading,
    WorkExperienceHomeCtaProps,
    rows = [],
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = resolvedData;

  const isScrolling = useScrolling(150);
  const { handleCTA } = useCTA(); 
    
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

        {/* CMS-driven Blocks */}
        {Array.isArray(rows) && rows.length > 0 && (
            <div className={rowsContainerClasses}>
            {rows
                .filter(row => row?.enabled !== false && row?.domain === domain)
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
                            section={resolvedData}
                            row={row}
                            block={block}
                        />
                      ))}
                </div>
                ))}
            </div>
        )}
      </div>     

      {/* Section CTA */}
      {variant === "home" && WorkExperienceHomeCtaProps && (
        <div className={clsx("w-full flex", ctaAlignClass)}>
          <Button 
            variant={WorkExperienceHomeCtaProps.variant} 
            label={WorkExperienceHomeCtaProps.label}
            onClick={() => handleCTA(WorkExperienceHomeCtaProps)}
          />
        </div>
      )}
    </section>
  );
};

export default WorkExperienceSection;
