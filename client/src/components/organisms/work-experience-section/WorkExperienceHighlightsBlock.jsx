/**
 * Role: CMS-driven text block for the Work Experience section
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render a list of work experience items with rich text content
 *   - Support highlights, case-study notes, and optional CTA
 *   - Adapt layout and styling based on variant (home / work-experience)
 *   - Respect CMS controls: enabled flags, alignment, and ordering
 * Guardrails:
 *   - Fully data-driven, no page-specific logic
 *   - Designed for CRUD operations via CMS
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import ListContentBlock from "../../molecules/list-content-block/ListContentBlock";

const blockContainer = {
  base: `
    flex flex-col w-full
  `,
  home: `
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
  `,
  workExperience: `
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  `
};

const blockHeadingClasses = `
  flex flex-col w-ful
  gap-(--spacing-heading-2-body-mobile-gap)
  sm:gap-(--spacing-heading-2-body-tablet-gap)
  lg:gap-(--spacing-heading-2-body-desktop-gap)
`;

const bodyItemsContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const bodyItemContainer = {
  base: `
    flex flex-col w-full
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)

    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
  `,
  workExperience: `
    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)

    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
  `,
  home: `
  `
};

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const WorkExperienceHighlightsBlock = ({ 
  variant = "home", // home / workExperince
  data = {}, 
  className, 
  ...props 
}) => {
  const {
    id,
    enabled = true,
    heading,
    bodyItems = [],
    buttonProps,
    alignment = {
      heading: "left",
      body: "left",
    },
  } = data;

  if (!enabled) return null;

  const blockContainerClasses = clsx(
      blockContainer.base,
      variant === "home" ? 
         blockContainer.home 
        : blockContainer.workExperience
    );
  
    const resolvedbodyItemContainerClasses = clsx(
      bodyItemContainer.base,
      variant === "home" ? 
        bodyItemContainer.home 
        : bodyItemContainer.workExperience
    );

  return (
    <div
      id={id}
      className={clsx(
        blockContainerClasses,
        alignmentMap[alignment.body] || alignmentMap.left,
        className
      )}
      {...props}
    >
      <div className={blockHeadingClasses}>
        {/* Optional Block Heading */}
        {heading && (
          <div className={alignmentMap[alignment.heading] || alignmentMap.left}>
            <Text {...heading} />
          </div>
        )}

        {/* Body Items */}
        {bodyItems.length > 0 && (
          <div className={bodyItemsContainerClasses}>
            {bodyItems
              .filter(item => item?.enabled !== false)
              .map(item => (
                <div key={item.id} className={bodyItemsContainerClasses}>
                  <div className={resolvedbodyItemContainerClasses}>

                    {item.heading && <Text {...item.heading} />}

                    {item.overview?.text && <Text {...item.overview} />}

                    <ListContentBlock items={item.highlights} />

                    {item.caseStudyAtAGlance?.text && (
                      <Text {...item.caseStudyAtAGlance} />
                    )}
                  </div>
                </div>
              ))}

            {buttonProps && (
              <div>
                <Button {...buttonProps} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceHighlightsBlock;
