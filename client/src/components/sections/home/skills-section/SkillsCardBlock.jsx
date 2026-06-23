import React from "react";

import clsx from "clsx";

import { skillsCardBlockLayoutConfig } from "./skillsCardBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainer: blockContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  skillsetContainer: skillsetContainerClasses,
  techStackTagStyle: techStackTagStyleClasses,
  alignmentClassesMap,
} = skillsCardBlockLayoutConfig;

// CMS driven Skills Cards block.
// Renders an optional heading and skill categories as tag style tech stacks.
const SkillsCardBlock = ({ data = {}, className, ...props }) => {
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
    <div
      id={id}
      className={clsx(blockContainerClasses, alignmentClassHeading, className)}
      {...props}
    >
      {/* Block Heading */}
      {heading && <Text {...heading} />}

      {/* Skill Categories */}
      {bodyItems.length > 0 && (
        <div className={clsx(bodyItemsContainerClasses, alignmentClassBody)}>
          {bodyItems.map((item, index) => (
            <div key={index} className={clsx(bodyItemContainerClasses)}>
              {/* Category Heading */}
              {item.heading && <Text {...item.heading} />}

              {/* Tech Stack Tags */}
              {item.body?.texts?.length > 0 && (
                <div className={clsx(skillsetContainerClasses)}>
                  {item.body.texts.map((text, index) => (
                    <div key={index} className={clsx(techStackTagStyleClasses)}>
                      <Text variant={item.body.variant} text={text} />
                    </div>
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

export default SkillsCardBlock;
