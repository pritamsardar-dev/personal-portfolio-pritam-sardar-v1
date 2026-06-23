import React, { useState } from "react";

import clsx from "clsx";

import { contactSectionLayoutConfig } from "./contactSectionLayout.config";

import Text from "../../atoms/text/Text";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import ContactSectionSkeleton from "./skeletons/ContactSectionSkeleton";

const {
  sectionContainer: sectionContainerClasses,
  sectionHeadingContainer: sectionHeadingContainerClasses,
  blockWrapperSingle: blockWrapperSingleClasses,
  blocksContainer: blocksContainerClasses,
  textAlignMap,
  flexAlignMap,
} = contactSectionLayoutConfig;

// CMS driven Contact section.
// Renders heading, overview, and child blocks via BlockRenderer.
// Manages form toggle state and passes it down to child blocks via sectionUI.
const ContactSection = ({ data = {}, isLoading, handlers, ui, state }) => {
  const {
    id,
    heading,
    overview,
    alignment = {
      headingContainer: "center",
      heading: "center",
      body: "left",
    },
    rows = [],
  } = data;

  const [isFormFullViewMode, setIsFormFullViewMode] = useState(false);

  const sectionUI = {
    ...ui,
    form: {
      isFullView: isFormFullViewMode,
      toggleFullView: setIsFormFullViewMode,
    },
  };

  if (isLoading) {
    return <ContactSectionSkeleton />;
  }

  return (
    <section id={id} className={clsx(sectionContainerClasses)}>
      {/* Section Heading and Overview */}
      {(heading || overview) && (
        <div
          className={clsx(sectionHeadingContainerClasses, flexAlignMap[alignment.headingContainer])}
        >
          {heading && (
            <div className={clsx(textAlignMap[alignment.heading])}>
              <Text {...heading} />
            </div>
          )}

          {overview && (
            <div className={clsx(blockWrapperSingleClasses, textAlignMap[alignment.body])}>
              <Text {...overview} />
            </div>
          )}
        </div>
      )}

      {/* Rows */}
      {Array.isArray(rows) &&
        rows.length > 0 &&
        rows
          .filter((row) => row.enabled)
          .sort((a, b) => a.order - b.order)
          .map((row) => (
            <div
              key={row.id}
              className={clsx(
                blocksContainerClasses,
                "transition-all duration-500 ease-in-out",
                isFormFullViewMode ? "flex-col items-center" : "flex-col sm:flex-row",
              )}
            >
              {Array.isArray(row.blocks) &&
                row.blocks.length > 0 &&
                row.blocks
                  .filter((block) => block.enabled)
                  .sort((a, b) => a.order - b.order)
                  .map((block) => (
                    <BlockRenderer
                      key={block.id}
                      block={block}
                      handlers={handlers}
                      ui={sectionUI}
                      state={state}
                    />
                  ))}
            </div>
          ))}
    </section>
  );
};

export default ContactSection;
