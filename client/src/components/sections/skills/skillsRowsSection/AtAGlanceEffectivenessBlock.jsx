import React from "react";

import clsx from "clsx";

import { atAGlanceEffectivenessBlockLayoutConfig } from "./atAGlanceEffectivenessBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainer: blockContainerClasses,
  subHeadingContainer: subHeadingContainerClasses,
  itemListStyle: itemListStyleClasses,
  bodyItemContainer: bodyItemContainerClasses,
  itemListContainer: itemListContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = atAGlanceEffectivenessBlockLayoutConfig;

// CMS driven effectiveness summary block.
// Renders an optional heading and grouped items with subheadings, descriptions, and text lists.
const AtAGlanceEffectivenessBlock = ({ data = {}, className, ...props }) => {
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

              {/* Item List */}
              {Array.isArray(item.body?.texts) && item.body.texts.length > 0 && (
                <div className={clsx(itemListContainerClasses)}>
                  {item.body.texts.map((text, index) => (
                    <div key={index} className={clsx(itemListStyleClasses)}>
                      <Text variant={item.body.variant} text={text} icon={item.body.icon} />
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

export default AtAGlanceEffectivenessBlock;
