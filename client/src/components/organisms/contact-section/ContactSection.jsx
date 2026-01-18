/**
 * Role: CMS-driven Contact section
 * Used by: Any page via section.type === "contact"
 *
 * Responsibilities:
 *  - Render section-level heading and overview content
 *  - Apply CMS-controlled alignment for heading and body
 *  - Orchestrate and render child blocks via BlockRenderer
 *  - Respect block ordering and enabled flags
 *
 * Guardrails:
 *  - Fully data-driven (no page-specific or hardcoded logic)
 *  - Block rendering delegated to BlockRenderer only
 *  - Section does not mutate block data or manage side effects
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";

const sectionContainerClasses = `
  flex flex-col 
  w-full
  sm:max-w-(--size-section-wrapper-tablet-max-width)
  lg:max-w-(--size-section-wrapper-desktop-max-width)

  px-(--spacing-section-wrapper-mobile-padding-x)
  sm:px-(--spacing-section-wrapper-tablet-padding-x)
  lg:px-(--spacing-section-wrapper-desktop-padding-x)

  py-(--spacing-section-wrapper-mobile-padding-y)
  sm:py-(--spacing-section-wrapper-tablet-padding-y)
  lg:py-(--spacing-section-wrapper-desktop-padding-y)

  gap-(--spacing-heading-1-heading-2-mobile-gap)
  sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
  lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
`;

const blockWrapperSingleClasses = `
  flex 
  sm:max-w-(--size-block-wrapper-single-tablet-max-width)
  lg:max-w-(--size-block-wrapper-single-desktop-max-width)
  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)
`;

const sectionHeadingContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-1-body-mobile-gap)
  sm:gap-(--spacing-heading-1-body-tablet-gap)
  lg:gap-(--spacing-heading-1-body-desktop-gap)
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
    center: "justify-center items-center", 
    right: "justify-end" 
};

const ContactSection = ({
    data = {}
}) => {
    const {
        id,
        enabled = true,
        heading,
        overview,
        alignment = {
            headingContainer: "center",
            heading: "center",
            body: "left",
        },
        blocks,
    } = data;

    if (!enabled) return null;

    return (
        <section
            id={id}
            className={clsx(sectionContainerClasses)}
        >
            {/* Section heading */}
            {(heading || overview) && 
                <div className={clsx(
                        sectionHeadingContainerClasses,
                        flexAlignMap[alignment.headingContainer]
                    )}
                >
                    {heading && 
                        <div className={clsx(textAlignMap[alignment.heading])}>
                            <Text {...heading}/>
                        </div>
                    }

                    {overview && 
                        <div className={clsx(
                                blockWrapperSingleClasses, 
                                textAlignMap[alignment.body]
                            )}
                        >
                            <Text {...overview}/>
                        </div>
                    }
                </div>
            }

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


        </section>
    );

};

export default ContactSection;
