/**
 * Role: CMS-driven text block for the Work Experience section
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render a list of experience text items
 *   - Render highlights, case study notes, and CTA per item
 *   - Respect CMS controls (enabled, alignment, ordering via data)
 * Guardrails:
 *   - Fully data-driven, no page-specific logic
 *   - Designed for CRUD operations via CMS
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import useMediaQuery from "../../../hooks/useMediaQuery";

const blockContainerClasses = `
  flex flex-col w-full
  max-w-(--size-block-wrapper-mobile-max-width)
  sm:max-w-(--size-block-wrapper-tablet-max-width)
  lg:max-w-(--size-block-wrapper-desktop-max-width)
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
`;

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

const bodyItemContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-list-item-mobile-gap)
  sm:gap-(--spacing-list-item-tablet-gap)
  lg:gap-(--spacing-list-item-desktop-gap)
`;

const listItemClasses = `
  list-disc
  list-outside
  pl-(--spacing-list-item-text-indent-mobile)
  sm:pl-(--spacing-list-item-text-indent-tablet)
  lg:pl-(--spacing-list-item-text-indent-desktop)
  space-y-(--spacing-list-item-text-gap-y-mobile)
  sm:space-y-(--spacing-list-item-text-gap-y-tablet)
  lg:space-y-(--spacing-list-item-text-gap-y-desktop)
`;

const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const WorkExperienceTextBlock = ({ data = {}, className, ...props }) => {
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

  const isMobile = useMediaQuery("(max-width: 639px)");

  if (!enabled) return null;



  const resolvedHeadingVariant = heading?.variants
    ? isMobile
      ? heading.variants.mobile
      : heading.variants.desktopTablet
    : heading?.variant;

  const shouldRenderHeading = Boolean(heading && resolvedHeadingVariant);

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
        {/* Block Heading */}
        {shouldRenderHeading && (
          <div className={alignmentMap[alignment.heading] || alignmentMap.left}>
            <Text
              {...heading}
              variant={resolvedHeadingVariant}
            />
          </div>
        )}

        {/* Body Items */}
        {bodyItems.length > 0 && (
          <div className={bodyItemsContainerClasses}>
            {bodyItems.map(item => (
              <div key={item.id} className={bodyItemsContainerClasses}>
                <div className={bodyItemContainerClasses}>
                  {item.overview && <Text {...item.overview} />}

                  {item.highlights?.texts?.length > 0 && (
                    <ul className={listItemClasses}>
                      {item.highlights.texts.map((text, index) => (
                        <Text
                          key={index}
                          variant={item.highlights.variant}
                          as={item.highlights.as}
                          text={text}
                        />
                      ))}
                    </ul>
                  )}

                  {item.caseStudyAtAGlance && (
                    <Text {...item.caseStudyAtAGlance} />
                  )}
                </div>

                {item.buttonProps && (
                  <div>
                    <Button {...item.buttonProps} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceTextBlock;
