import React from "react";

import clsx from "clsx";

import { useScrolling } from "../../../../hooks/useScrolling";
import { developerJourneyBlockLayoutConfig } from "./developerJourneyBlockLayout.config";

import Text from "../../../atoms/text/Text";

const {
  blockOuterContainer: blockOuterContainerClasses,
  blockInnerContainer: blockInnerContainerClasses,
  bodyItemsContainer: bodyItemsContainerClasses,
  bodyItemContainer: bodyItemContainerClasses,
  alignmentMap,
} = developerJourneyBlockLayoutConfig;

// CMS driven Developer Journey block.
// Renders heading and narrative body items with scroll aware backdrop blur.
const DeveloperJourneyBlock = ({ data = {}, className, ...props }) => {
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

  const isScrolling = useScrolling(150);

  if (!enabled) return null;

  const backdropBlur = isScrolling
    ? "backdrop-blur-none"
    : "backdrop-blur-(--effect-card-container-background-blur)";

  return (
    <div className={clsx(blockOuterContainerClasses, backdropBlur)}>
      {/* Inner Text Container */}
      <div
        id={id}
        className={clsx(
          blockInnerContainerClasses,
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
    </div>
  );
};

export default DeveloperJourneyBlock;
