/**
 * Role: CMS-driven Call To Action (CTA) section
 * Used by: Typically placed at the end of a page via section.type === "callToAction"
 *
 * Responsibilities:
 *  - Render a prominent section-level heading and supporting body text
 *  - Present one or more primary/secondary CTA buttons
 *  - Apply CMS-controlled alignment for heading, body, and CTAs
 *
 * Guardrails:
 *  - Fully data-driven (no page-specific or hardcoded logic)
 *  - No side effects or navigation logic inside the section
 *  - Button behavior and routing handled externally
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const sectionContainerClasses = `
  flex flex-col justify-center items-center
  w-full
  sm:max-w-(--size-block-wrapper-single-tablet-max-width)
  lg:max-w-(---size-block-wrapper-single-desktop-max-width)

  px-(--spacing-text-container-mobile-padding-x)
  sm:px-(--spacing-text-container-tablet-padding-x)
  lg:px-(--spacing-text-container-desktop-padding-x)

  py-(--spacing-section-wrapper-mobile-padding-y)
  sm:py-(--spacing-section-wrapper-tablet-padding-y)
  lg:py-(--spacing-section-wrapper-desktop-padding-y)

  gap-(--spacing-section-wrapper-mobile-gap)
  sm:gap-(--spacing-section-wrapper-tablet-gap)
  lg:gap-(--spacing-section-wrapper-desktop-gap)
`;

const buttonContainerClasses = `
    flex flex-row flex-wrap w-full
    gap-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const sectionHeadingContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-heading-1-body-mobile-gap)
  sm:gap-(--spacing-heading-1-body-tablet-gap)
  lg:gap-(--spacing-heading-1-body-desktop-gap)
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

const CallToActionSection = ({
    data = {}
}) => {
    const {
        id,
        enabled = true,
        heading,
        body,
        alignment = {
            headingContainer: "center",
            heading: "center",
            body: "left",
            cta: "center",
        },
        ctaButtons,
    } = data;

    if (!enabled) return null;

    return (
        <section
            id={id}
            className={clsx(sectionContainerClasses)}
        >
            {/* Section heading */}
            {(heading || body) && 
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

                    {/* Optional body */}
                    {body && 
                        <div className={clsx(textAlignMap[alignment.body])}>
                            <Text {...body}/>
                        </div>
                    }
                </div>
            }

            {/* Cta buttons */}
            {Array.isArray(ctaButtons) && ctaButtons.length > 0 &&
                <div className={clsx(buttonContainerClasses, flexAlignMap[alignment.cta])}>
                    {ctaButtons
                        .sort((a, b) => a.order - b.order)
                        .map((ctaButton) => (
                            <Button key={ctaButton.id} {...ctaButton} />
                    ))}
                </div>
            }
        </section>
    );

};

export default CallToActionSection;
