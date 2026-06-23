import React from "react";

import clsx from "clsx";

import { resolveProps } from "../../../../utils/resolveProps";
import { useScrolling } from "../../../../hooks/useScrolling";
import { skillsRowsSectionLayoutConfig } from "./skillsRowsSectionLayout.config";

import Text from "../../../atoms/text/Text";
import BlockRenderer from "../../../../renderers/blocks/blockRenderer";
import FilterBarSection from "../../../organisms/filterbar-section/FilterBarSection";
import AtAGlanceHighlightsBlock from "./AtAGlanceHighlightsBlock";
import AtAGlanceEffectivenessBlock from "./AtAGlanceEffectivenessBlock";
import AtAGlanceToolbeltBlock from "./AtAGlanceToolbeltBlock";
import SkillsRowsSectionSkeleton from "./skeletons/SkillsRowsSectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingWrapper: sectionHeadingWrapperClasses,
  subHeadingContainer: subHeadingContainerClasses,
  rowsContainer: rowsContainerClasses,
  blocksContainer: blocksContainerClasses,
  atAGlanceBlocksColumn: atAGlanceBlocksColumnClasses,
  textAlignMap,
} = skillsRowsSectionLayoutConfig;

// CMS driven Skills Rows section.
// Renders section heading, at a glance summaries, and row based skill blocks.
// Orchestrates highlights, effectiveness, toolbelt, and validation CTA sub blocks.
const SkillsRowsSection = ({ data = {}, isLoading, className }) => {
  const resolvedData = resolveProps(data, "skills");

  const {
    id,
    heading,
    atAGlance,
    rows = [],
    alignment = {
      heading: "center",
      body: "center",
    },
  } = resolvedData;

  const skillValidationBlock = rows
    .flatMap((row) => row.blocks)
    .find((block) => block.id === "skill-validation");

  const isScrolling = useScrolling(150);

  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-card-container-background-blur)";

  const headingAlignClass = textAlignMap[alignment.heading] || textAlignMap.center;

  if (isLoading) {
    return <SkillsRowsSectionSkeleton />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses, className)}>
      <div className={sectionHeadingWrapperClasses}>
        {/* Section Heading */}
        {heading && (
          <div className={clsx(headingAlignClass)}>
            <Text {...heading} />
          </div>
        )}

        {/* At a Glance Section */}
        {atAGlance && atAGlance?.enabled !== false && (
          <div
            id={atAGlance.id}
            key={atAGlance.id}
            className={clsx(blocksContainerClasses, backdropBlur)}
          >
            {/* Subheading and Description */}
            {(atAGlance.heading || atAGlance.description) && (
              <div className={clsx(subHeadingContainerClasses)}>
                {atAGlance.heading && <Text {...atAGlance.heading} />}
                {atAGlance.description && <Text {...atAGlance.description} />}
              </div>
            )}

            {/* Highlights */}
            {atAGlance?.highlights && <AtAGlanceHighlightsBlock data={atAGlance.highlights} />}

            {/* Effectiveness and Toolbelt */}
            {(atAGlance?.effectiveness || atAGlance?.toolbelt) && (
              <div className={clsx(atAGlanceBlocksColumnClasses)}>
                <AtAGlanceEffectivenessBlock data={atAGlance.effectiveness} />
                <AtAGlanceToolbeltBlock data={atAGlance.toolbelt} />
              </div>
            )}

            {/* Validation CTA */}
            {skillValidationBlock && (
              <BlockRenderer
                variant="atAGlance"
                key={skillValidationBlock.id}
                block={skillValidationBlock}
              />
            )}
          </div>
        )}

        {/* CMS Rows */}
        {Array.isArray(rows) && rows.length > 0 && (
          <div className={rowsContainerClasses}>
            {rows
              .filter((row) => row?.enabled !== false)
              .map((row) => (
                <div
                  id={row.id}
                  key={row.id}
                  className={clsx(blocksContainerClasses, backdropBlur)}
                >
                  {Array.isArray(row.blocks) &&
                    row.blocks
                      .filter((block) => block?.enabled !== false)
                      .map((block) => (
                        <BlockRenderer variant="skillsRow" key={block.id} block={block} />
                      ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsRowsSection;
