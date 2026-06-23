import React from "react";

import clsx from "clsx";

import { resolveProps } from "../../../../utils/resolveProps";
import { useCTA } from "../../../../hooks/useCTA";
import { aboutSectionLayoutConfig } from "./aboutSectionLayout.config";
import { ctaIconMap } from "../../../../assets/icons/system/ctaIconMap";

import {
  SectionHeadingSkeleton,
  SectionCTASkeleton,
} from "../../../../components/skeletons/sharedSkeletons";
import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import AboutSectionSkeleton from "./skeletons/AboutSectionSkeleton";

const { sectionContainer, sectionHeadingWrapper, blocksContainer, textAlignMap, flexAlignMap } =
  aboutSectionLayoutConfig;

const sectionContainerClasses = clsx(sectionContainer);
const sectionHeadingWrapperClasses = clsx(sectionHeadingWrapper);
const blocksContainerClasses = clsx(blocksContainer);

// CMS driven About section.
// Renders section heading, ordered blocks, and an optional CTA with home domain prop resolution.
const AboutSection = ({ data = {}, isLoading, className }) => {
  const { handleCTA } = useCTA();

  const resolvedData = resolveProps(data, "home");

  let {
    id,
    heading,
    buttonProps,
    rows = [],
    alignment = { heading: "center", cta: "center" },
  } = resolvedData;

  if (isLoading) {
    return <AboutSectionSkeleton />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses, className)}>
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {isLoading ? (
          <SectionHeadingSkeleton />
        ) : (
          heading && (
            <div className={clsx(textAlignMap[alignment.heading])}>
              <Text {...heading} />
            </div>
          )
        )}

        {/* Rows */}
        {Array.isArray(rows) &&
          rows.length > 0 &&
          rows
            .filter((row) => row.enabled)
            .sort((a, b) => a.order - b.order)
            .map((row) => (
              <div key={row.id} className={blocksContainerClasses}>
                {Array.isArray(row.blocks) &&
                  row.blocks.length > 0 &&
                  row.blocks
                    .filter((block) => block.enabled)
                    .sort((a, b) => a.order - b.order)
                    .map((block) => <BlockRenderer key={block.id} block={block} />)}
              </div>
            ))}
      </div>

      {/* Section CTA */}
      {buttonProps &&
        (isLoading ? (
          <SectionCTASkeleton />
        ) : (
          <div className={clsx("w-full flex", flexAlignMap[alignment.cta])}>
            <Button
              variant={buttonProps.variant}
              label={buttonProps.label}
              iconRight={buttonProps.icon ? ctaIconMap[buttonProps.icon] : null}
              onClick={() => handleCTA(buttonProps)}
            />
          </div>
        ))}
    </section>
  );
};

export default AboutSection;
