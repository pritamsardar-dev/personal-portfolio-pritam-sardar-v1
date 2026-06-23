import React from "react";

import clsx from "clsx";

import { aboutTextBlockLayoutConfig } from "./aboutTextBlockLayout.config";

import Text from "../../../atoms/text/Text";

const { blockContainer, bodyItemsContainer, bodyItemContainer, textAlignMap } =
  aboutTextBlockLayoutConfig;

const blockContainerClasses = clsx(blockContainer);
const bodyItemsContainerClasses = clsx(bodyItemsContainer);
const bodyItemContainerClasses = clsx(bodyItemContainer);
const alignmentMap = textAlignMap;

// CMS driven About text block.
// Renders an optional heading and a list of body items with CMS controlled alignment.
const AboutTextBlock = ({ data = {}, className, ...props }) => {
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
            <div key={item.id} className={bodyItemContainerClasses}>
              {item.heading && <Text {...item.heading} />}
              {item.body && <Text {...item.body} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutTextBlock;
