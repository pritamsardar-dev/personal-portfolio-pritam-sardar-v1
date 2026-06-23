import React from "react";

import clsx from "clsx";

import { useCTA } from "../../../../hooks/useCTA";
import { currentSkillsSnapshotSectionLayoutConfig } from "./currentSkillsSnapshotSectionLayout.config";
import { ctaIconMap } from "../../../../assets/icons/system/ctaIconMap";

import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import CurrentSkillsSnapshotSectionSkeleton from "./skeletons/CurrentSkillsSnapshotSectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingWrapper: sectionHeadingWrapperClasses,
  blocksContainer: blocksContainerClasses,
  textAlignMap,
  flexAlignMap,
} = currentSkillsSnapshotSectionLayoutConfig;

// CMS driven Current Skills Snapshot section.
// Renders an optional heading, ordered blocks, and an optional section CTA.
const CurrentSkillsSnapshotSection = ({ data = {}, isLoading, className }) => {
  const {
    id,
    heading,
    buttonProps,
    rows = [],
    alignment = {
      heading: "center",
      cta: "center",
    },
  } = data;

  const { handleCTA } = useCTA();

  if (isLoading) {
    return <CurrentSkillsSnapshotSectionSkeleton />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses, className, "text-center")}>
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {heading && (
          <div className={clsx(textAlignMap[alignment.heading])}>
            <Text {...heading} />
          </div>
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

export default CurrentSkillsSnapshotSection;
