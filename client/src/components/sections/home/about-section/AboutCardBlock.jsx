import React, { useState, useRef, useLayoutEffect } from "react";

import clsx from "clsx";

import { aboutCardBlockLayoutConfig } from "./aboutCardBlockLayout.config";
import { ctaIconMap } from "../../../../assets/icons/system/ctaIconMap";

import Text from "../../../atoms/text/Text.jsx";
import Button from "../../../atoms/button/Button.jsx";
import CardRenderer from "./CardRenderer.jsx";
import AboutCardBlockSkeleton from "./skeletons/AboutCardBlockSkeleton.jsx";

const { blockContainer, bodyItemsContainer, animatedHeightWrapper, textAlignMap } =
  aboutCardBlockLayoutConfig;

const blockContainerClasses = clsx(blockContainer);
const bodyItemsContainerClasses = clsx(bodyItemsContainer);
const animatedHeightWrapperClasses = clsx(animatedHeightWrapper);
const alignmentClassesMap = textAlignMap;

const VISIBLE_CARDS_COLLAPSED = 2;
const BOTTOM_BUFFER = 8;

// CMS driven card block for the About section.
// Renders a heading and card items with animated expand and collapse height.
// All cards stay mounted to allow accurate height measurement via ResizeObserver.
const AboutCardBlock = ({ data = {}, className, ...props }) => {
  let {
    id,
    enabled = true,
    heading,
    bodyItems = [],
    buttonProps,
    alignment = { heading: "left", body: "left" },
  } = data;

  const [isExpanded, setIsExpanded] = useState(false);
  const [heights, setHeights] = useState({ collapsed: 0, expanded: 0 });

  const fullContentRef = useRef(null);
  const collapsedContentRef = useRef(null);

  // Measures both collapsed and expanded heights including bottom buffer
  const recalcHeights = () => {
    if (!fullContentRef.current || !collapsedContentRef.current) return;
    setHeights({
      collapsed: collapsedContentRef.current.scrollHeight + BOTTOM_BUFFER,
      expanded: fullContentRef.current.scrollHeight + BOTTOM_BUFFER,
    });
  };

  useLayoutEffect(() => {
    recalcHeights();

    const resizeObserver = new ResizeObserver(() => {
      recalcHeights();
    });

    if (fullContentRef.current) resizeObserver.observe(fullContentRef.current);
    if (collapsedContentRef.current) resizeObserver.observe(collapsedContentRef.current);

    return () => resizeObserver.disconnect();
  }, [bodyItems.length]);

  const buttonLabel = isExpanded ? buttonProps?.label?.expanded : buttonProps?.label?.collapsed;
  const buttonIcon = isExpanded ? buttonProps?.icon?.expanded : buttonProps?.icon?.collapsed;

  if (!enabled) return null;

  return (
    <div
      id={id}
      className={clsx(blockContainerClasses, alignmentClassesMap[alignment.heading], className)}
      {...props}
    >
      {/* Block Heading */}
      {heading && <Text {...heading} />}

      <div
        className={animatedHeightWrapperClasses}
        style={{
          maxHeight: isExpanded ? `${heights.expanded}px` : `${heights.collapsed}px`,
        }}
      >
        <div ref={fullContentRef} className={clsx(bodyItemsContainerClasses)}>
          {/* Collapsed Cards */}
          <div ref={collapsedContentRef} className={bodyItemsContainerClasses}>
            {bodyItems.slice(0, VISIBLE_CARDS_COLLAPSED).map((item) => (
              <CardRenderer key={item.id} item={item} />
            ))}
          </div>

          {/* Remaining Cards */}
          {bodyItems.slice(VISIBLE_CARDS_COLLAPSED).map((item) => (
            <CardRenderer key={item.id} item={item} />
          ))}
        </div>
      </div>

      {buttonProps && bodyItems.length > VISIBLE_CARDS_COLLAPSED && (
        <div className="px-(--spacing-card-wrapper-buffer-padding-x)">
          <Button
            variant={buttonProps.variant}
            label={buttonLabel}
            iconRight={buttonIcon ? ctaIconMap[buttonIcon] : null}
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          />
        </div>
      )}
    </div>
  );
};

export default AboutCardBlock;
