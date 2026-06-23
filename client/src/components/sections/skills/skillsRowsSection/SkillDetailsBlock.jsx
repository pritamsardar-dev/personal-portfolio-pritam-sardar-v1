import React from "react";

import clsx from "clsx";

import { skillDetailsBlockLayoutConfig } from "./skillDetailsBlockLayout.config";

import Text from "../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import ListContentBlock from "../../../molecules/list-content-block/ListContentBlock";

const {
  blockContainer: blockContainerClasses,
  subHeadingContainer: subHeadingContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  alignmentMap,
} = skillDetailsBlockLayoutConfig;

// CMS driven skill details block.
// Renders an optional heading and detailed items with subheadings and rich text lists.
const SkillDetailsBlock = ({ data = {}, className, ...props }) => {
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
              {/* Subheading and Description */}
              {(item.heading || item.description) && (
                <div className={clsx(subHeadingContainerClasses)}>
                  {item.heading && <Text {...item.heading} />}
                  {item.description && <Text {...item.description} />}
                </div>
              )}

              {/* Item List */}
              <ListContentBlock items={item.body} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillDetailsBlock;
