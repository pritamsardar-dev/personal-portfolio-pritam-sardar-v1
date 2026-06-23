import React, { useState, useRef, useLayoutEffect } from "react";

import clsx from "clsx";

import { projectsTextBlockLayoutConfig } from "./projectsTextBlockLayout.config";

import Text from "../../atoms/text/Text";
import Tag from "../../atoms/tag/Tag";
import Button from "../../atoms/button/Button";
import HorizontalWheelScroll from "../../wrappers/HorizontalWheelScroll";
import ListContentBlock from "../../molecules/list-content-block/ListContentBlock";

// CMS driven Projects text block.
// Renders project metadata with collapsed and expanded interactive states.
// Animates height transitions and manages scroll position on expand and collapse.
const ProjectsTextBlock = ({
  variant,
  size = "default", // Variants: default / compact
  data,
  className,
  ...props
}) => {
  const {
    id,
    enabled = true,
    heading,
    tags,
    overview,
    ctaDefault,
    description,
    ctaExpanded,
  } = data;

  const sortedCtaDefault = [...ctaDefault].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const isCollapsedMode = variant === "collapsed";
  const isCompactSize = size === "compact";

  const likeBtn = sortedCtaDefault.find((b) => b.id === "projects-like");

  const [isDetailsExpanded, setIsDetailsExpanded] = useState(() =>
    !isCollapsedMode ? true : false,
  );
  const [isLiked, setIsLiked] = useState(false);

  const blockRef = useRef(null);
  const contentRef = useRef(null);

  // Animate expanded panel height based on actual content scroll height.
  // Read directly from the DOM in useLayoutEffect and apply via ref to avoid
  // setState inside an effect which would cause cascading renders.
  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isDetailsExpanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isDetailsExpanded, data.description]);

  if (!enabled) return null;

  const {
    outerContainer,
    textBlockHeading2ToHeading3,
    headerBlock,
    textBlockToBlock,
    textBlockItemToItem,
    textBlockInteractiveToInteractive,
    textBlockHeading3ToBody,
    tagContainer,
    cardContainerPaddingBottom,
  } = projectsTextBlockLayoutConfig;

  const outerContainerClasses = isCollapsedMode
    ? outerContainer.collapsed[size] || outerContainer.collapsed.default
    : outerContainer.expanded;

  const sizeVariant = isCompactSize && isCollapsedMode ? "compact" : "default";

  const textBlockHeading2ToHeading3Classes = clsx(
    textBlockHeading2ToHeading3.base,
    textBlockHeading2ToHeading3[sizeVariant],
  );

  const headerBlockClasses = clsx(headerBlock.base, headerBlock[sizeVariant]);

  const textBlockToBlockClasses = clsx(textBlockToBlock.base, textBlockToBlock[sizeVariant]);

  const textBlockItemToItemClasses = clsx(
    textBlockItemToItem.base,
    textBlockItemToItem[sizeVariant],
  );

  const textBlockInteractiveToInteractiveClasses = clsx(
    textBlockInteractiveToInteractive.base,
    textBlockInteractiveToInteractive[sizeVariant],
  );

  const textBlockHeading3ToBodyClasses = clsx(
    textBlockHeading3ToBody.base,
    textBlockHeading3ToBody[sizeVariant],
  );

  const tagContainerClasses = clsx(tagContainer.base, tagContainer[sizeVariant]);

  const detailsExpandedAnimationClasses = clsx(
    "overflow-hidden transition-[max-height] duration-[650ms]",
    "cubic-bezier(0.4, 0, 0.2, 1)",
  );

  const likeBtnClasses = clsx(
    isLiked && [
      "text-[var(--color-button-overlay-text-active)]",
      "bg-[var(--color-button-overlay-background-active)]",
    ],
    "rounded-full",
  );

  const resolveButtonLabel = (item) => {
    if (item.id === "projects-like") {
      return isLiked ? item.labels.active : item.labels.default;
    }

    if (item.labels) {
      return isDetailsExpanded ? item.labels.expanded : item.labels.collapsed;
    }

    return item.label;
  };

  const resolveButtonIcon = (item) => {
    switch (item.id) {
    case "projects-like":
      return isLiked ? item.iconsLeft?.active : item.iconsLeft?.default;
    default:
      return item.iconLeft;
    }
  };

  const resolveButtonAction = (item) => {
    return (e) => {
      switch (item.id) {
      case "projects-view-details-toggle":
      case "projects-view-less-toggle":
        if (!isCollapsedMode) {
          const nextExpanded = !isDetailsExpanded;
          setIsDetailsExpanded(nextExpanded);

          if (contentRef.current) {
            if (nextExpanded) {
              // Scroll into view after layout grows
              requestAnimationFrame(() => {
                blockRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              });
            } else {
              // Wait for collapse animation before scrolling
              setTimeout(() => {
                blockRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 0);
            }
          }
        }
        break;

      case "projects-like":
        setIsLiked((t) => !t);
        break;

      default:
        break;
      }

      item.onClick?.(e);
    };
  };

  return (
    <div ref={blockRef} id={id} className={clsx(textBlockToBlockClasses, outerContainerClasses)}>
      {/* Collapsed Container */}
      <div className={clsx(textBlockHeading2ToHeading3Classes, className)} {...props}>
        {/* Project Heading */}
        {(heading || (likeBtn && isDetailsExpanded)) && (
          <div className={clsx(headerBlockClasses)}>
            {heading && (
              <Text {...heading} size={size} className={isCollapsedMode && "!line-clamp-2"} />
            )}

            {/* Like Button */}
            {likeBtn && !isCollapsedMode && (
              <Button
                key={likeBtn.id}
                variant={likeBtn.variant}
                size={size}
                label={resolveButtonLabel(likeBtn)}
                iconLeft={resolveButtonIcon(likeBtn)}
                onClick={resolveButtonAction(likeBtn)}
                className={clsx(likeBtn.id === "projects-like" && likeBtnClasses)}
              />
            )}
          </div>
        )}

        <div className={clsx(textBlockToBlockClasses)}>
          {((Array.isArray(tags) && tags.length > 0) || overview) && (
            <div className={clsx(textBlockItemToItemClasses)}>
              {/* Tags */}
              {tags.length > 0 && (
                <HorizontalWheelScroll
                  className={clsx(
                    isCollapsedMode
                      ? tagContainerClasses
                      : textBlockInteractiveToInteractiveClasses,
                  )}
                >
                  {tags.map((item, index) => (
                    <Tag key={index} {...item} size={size} />
                  ))}
                </HorizontalWheelScroll>
              )}

              {/* Overview */}
              {overview && (
                <Text {...overview} size={size} className={isCollapsedMode && "!line-clamp-3"} />
              )}
            </div>
          )}

          {/* Default CTA Buttons */}
          {Array.isArray(sortedCtaDefault) && sortedCtaDefault.length > 0 && !isDetailsExpanded && (
            <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
              {sortedCtaDefault
                .filter((item) => item.id !== "projects-like")
                .map((item) => (
                  <Button
                    key={item.id}
                    variant={item.variant}
                    size={size}
                    label={resolveButtonLabel(item)}
                    iconLeft={resolveButtonIcon(item)}
                    onClick={resolveButtonAction(item)}
                    className={clsx(item.id === "projects-like" && likeBtnClasses)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Container */}
      <div
        ref={contentRef}
        className={clsx(
          textBlockToBlockClasses,
          !isCollapsedMode && isDetailsExpanded && cardContainerPaddingBottom,
          detailsExpandedAnimationClasses,
        )}
      >
        {/* Description Items */}
        {Array.isArray(description) && description.length > 0 && (
          <div className={clsx(textBlockItemToItemClasses)}>
            {description.map((item, index) => (
              <div key={index} className={clsx(textBlockHeading3ToBodyClasses)}>
                {item.heading && <Text {...item.heading} size={size} />}
                <ListContentBlock items={item.body} />
              </div>
            ))}
          </div>
        )}

        {/* Expanded CTA Buttons */}
        {Array.isArray(ctaExpanded) && ctaExpanded.length > 0 && (
          <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
            {ctaExpanded.map((item) => (
              <Button key={item.id} {...item} size={size} onClick={resolveButtonAction(item)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTextBlock;
