/**
 * Role: CMS-driven cards block for the Work Experience section
 * Used by: Mounted via BlockRenderer based on block.type
 *
 * Responsibilities:
 *  - Render optional block heading
 *  - Render experience cards using label/value CMS model
 *  - Respect alignment and enabled flags
 *
 * Guardrails:
 *  - Fully data-driven (no field invention)
 *  - Labels are the bold part (handled by Text variant)
 *  - Section/block never mutates molecule data shape
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";

const blockContainerClasses = `
  flex flex-col w-full
  max-w-(--size-block-wrapper-mobile-max-width)
  sm:max-w-(--size-block-wrapper-tablet-max-width)
  lg:max-w-(--size-block-wrapper-desktop-max-width)
  gap-(--spacing-block-block-mobile-gap)
  sm:gap-(--spacing-block-block-tablet-gap)
  lg:gap-(--spacing-block-block-desktop-gap)
`;

const bodyItemsContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-item-item-mobile-gap)
  sm:gap-(--spacing-item-item-tablet-gap)
  lg:gap-(--spacing-item-item-desktop-gap)
`;

const cardContainerClasses = `
  flex flex-col w-full
  bg-(--color-card-wrapper-fill)
  border-(length:--border-card-wrapper-base-width)
  border-(--color-card-wrapper-stroke)
  shadow-(--shadow-card-wrapper)
  backdrop-blur-(--effect-card-wrapper-background-blur)
  rounded-(--radius-card-wrapper-base)
  contain-layout contain-paint

  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)

  py-(--spacing-text-container-mobile-padding-y)
  sm:py-(--spacing-text-container-tablet-padding-y)
  lg:py-(--spacing-text-container-desktop-padding-y)

  gap-(--spacing-list-item-mobile-gap)
  sm:gap-(--spacing-list-item-tablet-gap)
  lg:gap-(--spacing-list-item-desktop-gap)
`;

const techStackContainerClasses = `
  flex flex-wrap w-full
  gap-(--spacing-tech-stack-tag-mobile-gap)
  sm:gap-(--spacing-tech-stack-tag-tablet-gap)
  lg:gap-(--spacing-tech-stack-tag-desktop-gap)
`;

const labelValueRowClasses = `
  [&>*]:inline 
  [&>*+*]:ml-(--spacing-inline-text-gap)
`
const alignmentMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const WorkExperienceCardBlock = ({ data = {}, className, ...props }) => {
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
      {/* Block Heading */}
      {heading && <Text {...heading} />}

      {/* Cards */}
      {bodyItems.length > 0 && (
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left
          )}
        >
          {bodyItems.map(item => (
            <div key={item.id} className={cardContainerClasses}>
              {/* Card Heading */}
              {item.heading && <Text {...item.heading} />}

              {/* Timeline */}
              {item.body?.timeline && <Text {...item.body.timeline} />}

              {/* Label / Value rows */}
              {item.body?.labelValueItems?.length > 0 &&
                item.body.labelValueItems.map((pair, index) => (
                  <div key={index} className={labelValueRowClasses}>
                    {pair.label && <Text {...pair.label} />}
                    {pair.value && <Text {...pair.value} />}
                  </div>
                ))}

              {/* Tech Stack */}
              {item.body?.techStack?.value?.texts?.length > 0 && (
                <div className={clsx(techStackContainerClasses)}>
                  {item.body.techStack.label && (
                    <Text {...item.body.techStack.label} />
                  )}

                  {item.body.techStack.value.texts.map((tech, index) => (
                    <Text
                      key={index}
                      variant={item.body.techStack.value.variant}
                      text={tech}
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

export default WorkExperienceCardBlock;


