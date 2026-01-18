/**
 * Role: CMS-driven card block for the About section
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render an optional block heading
 *   - Render a list of card items via CardRenderer
 *   - Support expand / collapse with animated height
 *   - Use padding buffer to avoid shadow clipping
 *   - Respect CMS controls (enabled, alignment, order)
 * Guardrails:
 *   - Fully data-driven, no page-specific assumptions
 *   - All cards remain mounted to enable height measurement
 *   - Expansion logic is layout-safe (no fixed heights)
 */

import React, { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import Text from "../../../atoms/text/Text.jsx";
import Button from "../../../atoms/button/Button.jsx";
import CardRenderer from "./CardRenderer.jsx";

const VISIBLE_CARDS_COLLAPSED = 2;
const BOTTOM_BUFFER = 8;

const blockContainerClasses = `
  flex flex-col w-full h-auto
  max-w-(--size-block-wrapper-mobile-max-width)
  sm:max-w-(--size-block-wrapper-tablet-max-width)
  lg:max-w-(--size-block-wrapper-desktop-max-width)
  gap-(--spacing-heading-2-heading-3-mobile-gap)
  sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
  lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const bodyItemsContainerClasses = `
  flex flex-col w-full
  gap-(--spacing-item-item-mobile-gap)
  sm:gap-(--spacing-item-item-tablet-gap)
  lg:gap-(--spacing-item-item-desktop-gap)
`;

const animatedHeightWrapper = `
  overflow-hidden transition-[max-height] duration-500
  ccubic-bezier(0.4, 0, 0.2, 1)
  px-(--spacing-card-wrapper-buffer-padding-x)
  pt-(--spacing-card-wrapper-buffer-padding-top)
  pb-(--spacing-card-wrapper-buffer-padding-bottom)
`;

const alignmentClassesMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const AboutCardBlock = ({ data = {}, className, ...props }) => {
  const {
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

  if (!enabled) return null;

  const buttonLabel = isExpanded
    ? buttonProps?.label?.expanded
    : buttonProps?.label?.collapsed;

  return (
    <div
      id={id}
      className={clsx(blockContainerClasses, alignmentClassesMap[alignment.heading], className)}
      {...props}
    >
      {heading && <Text {...heading} />}

      <div
        className={animatedHeightWrapper}
        style={{
          maxHeight: isExpanded
            ? `${heights.expanded}px`
            : `${heights.collapsed}px`,
        }}
      >
        <div ref={fullContentRef} className={clsx(bodyItemsContainerClasses)}>
          {/* Collapsed measurement group */}
          <div ref={collapsedContentRef} className={bodyItemsContainerClasses}>
            {bodyItems.slice(0, VISIBLE_CARDS_COLLAPSED).map((item) => (
              <CardRenderer key={item.id} item={item} />
            ))}
          </div>

          {/* Remaining cards */}
          {bodyItems.slice(VISIBLE_CARDS_COLLAPSED).map((item) => (
            <CardRenderer key={item.id} item={item} />
          ))}

        </div>
      </div>

      {buttonProps && bodyItems.length > VISIBLE_CARDS_COLLAPSED && (
        <div className="px-(--spacing-card-wrapper-buffer-padding-x)">
            <Button
                {...buttonProps}
                label={buttonLabel}
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
            />
        </div>
      )}
    </div>
  );
};

export default AboutCardBlock;
