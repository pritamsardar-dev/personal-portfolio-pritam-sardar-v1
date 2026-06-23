import React from "react";

import clsx from "clsx";

import { atAGlanceHighlightsBlockLayoutConfig } from "./atAGlanceHighlightsBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockContainer: blockContainerClasses,
  cardContainer: cardContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = atAGlanceHighlightsBlockLayoutConfig;

// CMS driven highlights block.
// Renders an optional heading and a responsive grid of highlight cards.
const AtAGlanceHighlightsBlock = ({ data = {}, className, ...props }) => {
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

      {/* Highlight Cards */}
      {Array.isArray(bodyItems) && bodyItems.length > 0 && (
        <div
          className={clsx(
            bodyItemsContainerClasses,
            alignmentMap[alignment.body] || alignmentMap.left,
          )}
        >
          {bodyItems.map((item) => (
            <div key={item.id} className={clsx(cardContainerClasses)}>
              {item.heading.text && <Text {...item.heading} />}
              {item.body.text && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AtAGlanceHighlightsBlock;
