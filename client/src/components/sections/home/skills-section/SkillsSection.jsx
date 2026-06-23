import React from "react";

import clsx from "clsx";

import { resolveProps } from "../../../../utils/resolveProps";
import { resolveSkillsBlocks } from "./resolveSkillsBlocks";
import { useCTA } from "../../../../hooks/useCTA";
import { skillsSectionLayoutConfig } from "./skillsSectionLayout.config";
import { ctaIconMap } from "../../../../assets/icons/system/ctaIconMap";

import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import SkillsSectionSkeleton from "./skeletons/SkillsSectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingWrapper: sectionHeadingWrapperClasses,
  blocksContainer: blocksContainerClasses,
  textAlignMap,
  flexAlignMap,
} = skillsSectionLayoutConfig;

// CMS driven Skills section.
// Renders heading, resolved skill blocks, and an optional CTA.
// Home domain props are resolved via resolveProps.
const SkillsSection = ({ data = {}, isLoading, className }) => {
  const resolvedData = resolveProps(data, "home");

  const {
    id,
    heading,
    buttonProps,
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = resolvedData;

  const blocks = resolveSkillsBlocks(resolvedData);
  const { handleCTA } = useCTA();

  if (isLoading) {
    return <SkillsSectionSkeleton />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses, className)}>
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {heading && (
          <div className={clsx(textAlignMap[alignment.heading])}>
            <Text {...heading} />
          </div>
        )}

        {/* Blocks */}
        {Array.isArray(blocks) && blocks.length > 0 && (
          <div className={blocksContainerClasses}>
            {blocks
              ?.filter((block) => block.enabled)
              .sort((a, b) => a.order - b.order)
              .map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))}
          </div>
        )}
      </div>

      {/* Section CTA */}
      {buttonProps && (
        <div className={clsx("w-full flex", flexAlignMap[alignment.cta])}>
          <Button
            variant={buttonProps.variant}
            label={buttonProps.label}
            iconRight={buttonProps.icon ? ctaIconMap[buttonProps.icon] : null}
            onClick={() => handleCTA(buttonProps)}
          />
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
