import React from "react";

import clsx from "clsx";

import { useScrolling } from "../../../hooks/useScrolling";
import { useCTA } from "../../../hooks/useCTA";

import { workExperienceMetaInfoBlockLayoutConfig } from "./workExperienceMetaInfoBlockLayout.config";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";

import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const {
  blockContainer,
  bodyItemsContainer: bodyItemsContainerClasses,
  cardContainer,
  techStackContainer: techStackContainerClasses,
  labelValueRowClasses,
  alignmentMap,
} = workExperienceMetaInfoBlockLayoutConfig;

// CMS driven Work Experience meta info block.
// Renders experience cards with timeline, label value rows, and tech stack.
// Layout and width adapt per variant (home / workExperience / caseStudy).
const WorkExperienceMetaInfoBlock = ({ variant = "home", data = {}, className, ...props }) => {
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

  const isCaseStudy = variant === "caseStudy";

  const isScrolling = useScrolling(150);
  const { handleCTA } = useCTA();

  // Disable backdrop blur while scrolling to reduce paint cost
  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-card-wrapper-background-blur)";

  const resolvedBlockContainerClasses = clsx(
    blockContainer.base,
    variant === "home" ? blockContainer.home : blockContainer.workExperience,
  );

  const resolvedCardContainerClasses = clsx(
    cardContainer.base,
    !isCaseStudy ? (variant === "home" ? cardContainer.home : cardContainer.workExperience) : "",
  );

  if (!enabled) return null;

  return (
    <div
      id={id}
      className={clsx(
        resolvedBlockContainerClasses,
        alignmentMap[alignment.heading] || alignmentMap.left,
        className,
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
            alignmentMap[alignment.body] || alignmentMap.left,
          )}
        >
          {bodyItems.map((item) => (
            <div key={item.id} className={clsx(resolvedCardContainerClasses, backdropBlur)}>
              {/* Card Heading */}
              {item.heading && !isCaseStudy && (
                item.heading?.icon ? (
                  <div className="flex items-start gap-2">
                    <span
                      className={clsx(
                        "shrink-0",
                        "flex-none",
                        "w-4",
                        "sm:w-5",
                        "lg:w-5",
                        "mt-(--icon-align-meta-heading-mobile)",
                        "sm:mt-(--icon-align-meta-heading-tablet)",
                        "lg:mt-(--icon-align-meta-heading-desktop)",
                      )}
                    >
                      <img
                        src={item.heading.icon.src}
                        alt=""
                        className="w-full h-auto block"
                      />
                    </span>
                    <Text {...item.heading} icon={null} />
                  </div>
                ) : (
                  <Text {...item.heading} />
                )
              )}

              {/* Timeline */}
              {!isCaseStudy && item.body?.timeline && <Text {...item.body.timeline} />}

              {/* Label Value Rows */}
              {item.body?.labelValueItems?.length > 0 &&
                item.body.labelValueItems.map((pair, index) => (
                  <div key={index} className={labelValueRowClasses}>
                    {pair?.label && <Text {...pair.label} />}

                    {pair?.value?.variant !== "link" && pair?.value && <Text {...pair.value} />}

                    {pair?.value?.variant === "link" && (
                      <Button
                        variant={pair?.value?.variant}
                        label={pair?.value?.label}
                        iconRight={pair?.value?.icon ? ctaIconMap[pair.value.icon] : null}
                        className="!inline-flex !items-center !py-0 !px-0"
                        onClick={() => handleCTA(pair?.value)}
                      />
                    )}
                  </div>
                ))}

              {/* Tech Stack */}
              {item.body?.techStack?.value?.texts?.length > 0 && (
                <div className={techStackContainerClasses}>
                  {item.body.techStack.label && <Text {...item.body.techStack.label} />}

                  {item.body.techStack.value.texts.map((tech, index) => (
                    <Text key={index} variant={item.body.techStack.value.variant} text={tech} />
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

export default WorkExperienceMetaInfoBlock;
