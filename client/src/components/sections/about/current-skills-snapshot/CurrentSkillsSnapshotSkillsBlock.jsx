import React from "react";

import clsx from "clsx";

import { currentSkillsSnapshotSkillsBlockLayoutConfig } from "./currentSkillsSnapshotSkillsBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainer: blockContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  skillsetContainer: skillsetContainerClasses,
  skillsTagStyle: skillsTagStyleClasses,
  alignmentMap,
} = currentSkillsSnapshotSkillsBlockLayoutConfig;

// CMS driven Current Skills Snapshot skills block.
// Renders an optional heading and skill groups as tagged items with CMS controlled alignment.
const CurrentSkillsSnapshotSkillsBlock = ({ data = {}, className, ...props }) => {
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
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left,
          )}
        >
          {bodyItems.map((item) => (
            <div key={item.id} className={clsx(bodyItemContainerClasses)}>
              {/* Skill Category */}
              {item.heading && <Text {...item.heading} />}

              {/* Skill Tags */}
              {Array.isArray(item.body?.texts) && item.body.texts.length > 0 && (
                <div className={clsx(skillsetContainerClasses)}>
                  {item.body.texts.map((text, index) => (
                    <div key={index} className={clsx(skillsTagStyleClasses)}>
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

export default CurrentSkillsSnapshotSkillsBlock;
