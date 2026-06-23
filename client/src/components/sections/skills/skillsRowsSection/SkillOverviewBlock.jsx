import React from "react";

import clsx from "clsx";

import { skillOverviewBlockLayoutConfig } from "./skillOverviewBlockLayout.config";

import Text from "../../../atoms/text/Text";
import ListContentBlock from "../../../molecules/list-content-block/ListContentBlock";

const {
  blockContainer: blockContainerClasses,
  subHeadingContainer: subHeadingContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = skillOverviewBlockLayoutConfig;

// CMS driven skill overview block.
// Renders an optional heading and summarized skill items with scope tags and narrative lists.
const SkillOverviewBlock = ({ data = {}, className, ...props }) => {
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
        className,
      )}
      {...props}
    >
      {/* Block Heading */}
      {heading && <Text {...heading} />}

      {/* Body Items */}
      {Array.isArray(bodyItems) && bodyItems.length > 0 && (
        <div className={bodyItemsContainerClasses}>
          {bodyItems.map((item) => (
            <div key={item.id} className={bodyItemContainerClasses}>
              {/* Subheading, Description and Scope Tags */}
              {(item.heading || item.description || item.scopeSet) && (
                <div className={clsx(subHeadingContainerClasses)}>
                  {item.heading && <Text {...item.heading} />}
                  {item.description && <Text {...item.description} />}
                  <ListContentBlock inlineItems={item.scopeSet} />
                </div>
              )}

              {/* Narrative List */}
              <ListContentBlock labelValueItems={item.narrativeList} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillOverviewBlock;
