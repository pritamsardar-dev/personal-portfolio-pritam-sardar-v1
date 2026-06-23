import React from "react";

import clsx from "clsx";

import { resolveProps } from "../../../../utils/resolveProps";
import { journeySectionLayoutConfig } from "./journeySectionLayout.config";

import Text from "../../../atoms/text/Text";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import JourneySectionSkeleton from "./skeletons/JourneySectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingWrapper: sectionHeadingWrapperClasses,
  blocksContainer: blocksContainerClasses,
  textAlignMap,
} = journeySectionLayoutConfig;

// CMS driven Journey section for the About page.
// Renders section heading and ordered blocks with about domain prop resolution.
const JourneySection = ({ data = {}, isLoading, className }) => {
  const resolvedData = resolveProps(data, "about");

  const { id, heading, rows = [], alignment = { heading: "center" } } = resolvedData;

  if (isLoading) {
    return <JourneySectionSkeleton />;
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
    </section>
  );
};

export default JourneySection;
