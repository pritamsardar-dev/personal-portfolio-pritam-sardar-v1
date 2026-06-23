import React from "react";

import clsx from "clsx";

import { skillsTextBlockLayoutConfig } from "./skillsTextBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainerOuter: blockContainerOuterClasses,
  blockContainer: blockContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  alignmentClassesMap,
} = skillsTextBlockLayoutConfig;

// CMS driven Skills text block.
// Renders a heading and skill description items with CMS controlled alignment.
const SkillsTextBlock = ({ data = {}, className, ...props }) => {
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

  const alignmentClassHeading = alignmentClassesMap[alignment.heading] || alignmentClassesMap.left;

  const alignmentClassBody = alignmentClassesMap[alignment.body] || alignmentClassesMap.left;

  return (
    <div id={id} className={clsx(blockContainerOuterClasses)}>
      {/* Block Container */}
      <div className={clsx(blockContainerClasses, alignmentClassHeading, className)} {...props}>
        {/* Block Heading */}
        {heading && <Text {...heading} />}

        {/* Body Items */}
        {bodyItems.length > 0 && (
          <div className={clsx(bodyItemsContainerClasses, alignmentClassBody)}>
            {bodyItems.map((item, index) => (
              <div key={index} className={clsx(bodyItemContainerClasses)}>
                {/* Item Heading */}
                {item.heading && <Text {...item.heading} />}
                {/* Item Body */}
                {item.body && <Text {...item.body} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsTextBlock;
