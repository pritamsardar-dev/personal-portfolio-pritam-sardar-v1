import React from "react";

import clsx from "clsx";

import { atAGlanceToolbeltBlockLayoutConfig } from "./atAGlanceToolbeltBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainer: blockContainerClasses,
  subHeadingContainer: subHeadingContainerClasses,
  skillsetContainer: skillsetContainerClasses,
  skillsTagStyle: skillsTagStyleClasses,
  bodyItemContainer: bodyItemContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = atAGlanceToolbeltBlockLayoutConfig;

// CMS driven toolbelt block.
// Renders an optional heading and grouped skill sections with subheadings and skill tags.
const AtAGlanceToolbeltBlock = ({ data = {}, className, ...props }) => {
  const {
    id,
    enabled = true,
    heading,
    bodyItems = {},
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
              {/* Subheading and Description */}
              {(item.heading || item.description) && (
                <div className={clsx(subHeadingContainerClasses)}>
                  {item.heading && <Text {...item.heading} />}
                  {item.description && <Text {...item.description} />}
                </div>
              )}

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

export default AtAGlanceToolbeltBlock;
