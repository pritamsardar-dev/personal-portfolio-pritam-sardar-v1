/**
 * Role: CMS-driven skills / work experience rows section
 * Used by: Rendered via SectionRenderer based on section.type
 *
 * Responsibilities:
 *  - Render section-level heading, optional filters, and CTA-driven sub blocks
 *  - Orchestrate at-a-glance summaries and row-based content layouts
 *  - Delegate all block rendering to BlockRenderer and child organisms
 *  - Resolve variant-based layout, alignment, and container styling
 *
 * Guardrails:
 *  - Fully data-driven with no page-specific logic
 *  - Safe for reuse across pages with different variants
 *  - Section-level orchestration only; no mutation or side effects
 */

import React from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import { resolveProps } from "../../../../utils/resolveProps";
import FilterBarSection from "../../../organisms/filterbar-section/FilterBarSection";
import { useScrolling } from "../../../../hooks/useScrolling";
import AtAGlanceHighlightsBlock from "./AtAGlanceHighlightsBlock";
import AtAGlanceEffectivenessBlock from "./AtAGlanceEffectivenessBlock";
import AtAGlanceToolbeltBlock from "./AtAGlanceToolbeltBlock";


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

// const blockHeadingContainerClasses = `
//   flex flex-col w-full
//   gap-(--spacing-heading-2-heading-3-mobile-gap)
//   sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
//   lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
// `;

const subHeadingContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-3-body-mobile-gap)
  sm:gap-(--spacing-heading-3-body-tablet-gap)
  lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const rowsContainerClasses = `
    flex flex-col w-full items-center 
    gap-(--spacing-section-wrapper-mobile-gap) 
    sm:gap-(--spacing-section-wrapper-tablet-gap) 
    lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const blocksContainerClasses = `
    flex flex-col w-full
    items-center
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
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

const atAGlanceBlocksColumnClasses = `
    flex flex-col sm:flex-row w-full 
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const textAlignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const SkillsRowsSection = ({
  data = {}, 
  className, 
  ...props
}) => {  
  const resolvedData = resolveProps(data, "skills");

  const {
    id,
    enabled = true,
    heading,
    filters,
    atAGlance,
    rows = [],
    alignment = {
      heading: "center",
      body: "center"
    },
  } = resolvedData;

  const skillValidationBlock = rows
  .flatMap(row => row.blocks)
  .find(block => block.id === "skill-validation");

  const isScrolling = useScrolling(150);
    
  if (!enabled) return null;
  
  const backdropBlur = 
    isScrolling ? "backdrop-blur-none" 
    : "backdrop-blur-(--effect-card-container-background-blur)";

  const headingAlignClass =
    textAlignMap[alignment.heading] || textAlignMap.center;

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
                className={clsx(headingAlignClass)}>
                <Text {...heading} />
            </div>
        )}

        {/* Optional Filter Section */}
        {filters && <FilterBarSection data={filters}/>}


        {/* Optional at a glance Section */}
        {atAGlance && atAGlance?.enabled !== false && (
            <div
                key={atAGlance.id}
                className={clsx(blocksContainerClasses, backdropBlur)}
            >
                {(atAGlance.heading || atAGlance.description) && 
                  <div className={clsx(subHeadingContainerClasses)}>
                    {/* Optional sub heading */}
                    {atAGlance.heading && <Text {...atAGlance.heading} />}

                    {/* Optional description */}
                    {atAGlance.description && <Text {...atAGlance.description} />}
                  </div>}

                {/* Optional highlights sub section */}
                {atAGlance?.highlights && 
                    <AtAGlanceHighlightsBlock data={atAGlance.highlights} />}

                {/* Optional effectiveness and toolbelt sub section */}
                {(atAGlance?.effectiveness ||atAGlance?.toolbelt) &&
                    <div className={clsx(atAGlanceBlocksColumnClasses)}>
                        <AtAGlanceEffectivenessBlock data={atAGlance.effectiveness}/>
                        <AtAGlanceToolbeltBlock data={atAGlance.toolbelt}/>
                    </div>}

                {/* Optional validation cta sub section */}
                {skillValidationBlock && 
                    <BlockRenderer 
                        variant="atAGlance"
                        key={skillValidationBlock.id} 
                        block={skillValidationBlock}
                    />}
            </div>
        )}

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
                            variant="skillsRow"
                            key={block.id}
                            block={block}
                        />
                      ))}
                </div>
                ))}
            </div>
        )}
      </div>     
    </section>
  );
};

export default SkillsRowsSection;
