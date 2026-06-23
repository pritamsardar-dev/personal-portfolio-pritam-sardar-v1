import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import clsx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";

import { useCTA } from "../../../hooks/useCTA";
import { useLinkCTAHandler } from "./utils/useLinkCTAHandler";
import { isRowVisited, onRowViewed } from "./utils/markRowViewed";
import { resolveProps } from "../../../utils/resolveProps";
import { isEnabled } from "../../../utils/normalizeEnabledState/isEnabled";
import { workItemsTextBlockLayoutConfig } from "./workItemsTextBlockLayout.config";

import { tagIconMap } from "../../../assets/icons/system/tagIconMap";
import { ctaIconMap } from "../../../assets/icons/system/ctaIconMap";
import TooltipButton from "../../atoms/tooltip/TooltipButton";

import Text from "../../atoms/text/Text";
import Tag from "../../atoms/tag/Tag";
import Button from "../../atoms/button/Button";
import HorizontalWheelScroll from "../../wrappers/HorizontalWheelScroll";
import ListContentBlock from "../../molecules/list-content-block/ListContentBlock";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";

// CMS driven text block for Projects and Work Experience sections.
// Resolves data from block in project mode or row in experience mode.
// Supports collapsed, expanded, and full display variants with size mode.
// Manages details toggle, like state, and max height expand and collapse animation.
// Renders flexible content types and resolves CTA config dynamically.
const WorkItemsTextBlock = ({
  variant = "expanded", // collapsed / expanded / full
  mode,
  size = "default", // default / compact
  section,
  row,
  block,
  data,
  handlers,
  className,
  ...props
}) => {
  const isExperience = row?.domain === "experience";

  // Single source of truth for image and meta blocks from row
  const imageBlock = row?.blocks?.find((block) => block?.type === "imageBlock");
  const metaBlock = isExperience
    ? row?.blocks?.find((block) => block.id === "work-experience-meta-info")
    : null;
  const highlightsBlock = isExperience
    ? row?.blocks?.find((block) => block.id === "work-experience-highlights")
    : null;

  // Resolved fields from either block (project) or row (experience)
  const id = isExperience ? row?.id : block?.id;
  const enabled = isExperience ? row?.enabled : block?.enabled;

  const heading = isExperience
    ? metaBlock?.data?.bodyItems?.find((item) => item.id === "metaInfo")?.heading
    : data?.heading;

  const subTitle = isExperience
    ? metaBlock?.data?.bodyItems
      ?.find((item) => item.id === "metaInfo")
      ?.body?.labelValueItems.find((item) => item?.id === "organization")?.value
    : data?.subHeading;

  // Seeds from the server-confirmed flag (persists across reloads via the
  // RowView record) first, falling back to the in-memory session marker for
  // rows just viewed this session before the next refetch. No localStorage.
  // Derived directly from props and session marker, no useEffect needed.
  // visitedThisSession covers rows viewed this session before next refetch.
  const isVisitedBase = row?.viewed === true || isRowVisited(row?.id);
  const [visitedThisSession, setVisitedThisSession] = useState(false);
  const isVisited = isVisitedBase || visitedThisSession;
  const [viewCountDelta, setViewCountDelta] = useState(0);

  const tags =
    (isExperience ? row?.tags : data?.tags)?.map((tag) => {
      const resolvedLabel =
        tag.id === "views"
          ? String((row?.views ?? 0) + viewCountDelta)
          : typeof tag.label === "object" && tag.label !== null
            ? (tag.label[mode] ?? tag.label.project ?? tag.label.caseStudy ?? "")
            : tag.label;
      return {
        ...tag,
        label: resolvedLabel,
        ...(tag.icon ? { iconLeft: tagIconMap[tag.icon] ?? null } : {}),
      };
    }) ?? [];

  const overview = isExperience
    ? resolveProps(
      highlightsBlock?.data?.bodyItems?.find(
        (item) => item.id === "keyContributionsAndBusinessImpact",
      )?.overview,
      "home",
    )
    : data?.overview;

  const description = isExperience
    ? variant === "expanded"
      ? resolveProps(
        row?.blocks.filter((block) => block.id !== "work-experience-image-block"),
        "workExperience",
      )
      : row?.fullCaseStudy
    : data?.description;

  const ctaProps = section?.textBlockCtaProps;

  const sortedDescription = [...(Array.isArray(description) ? description : [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );

  const sortedCtaProps = [...(Array.isArray(ctaProps) ? ctaProps : [])].sort(
    (a, b) => (resolveProps(a.order, variant) ?? 0) - (resolveProps(b.order, variant) ?? 0),
  );

  // Filters CTAs based on variant and mode, excluding buttons not relevant to the current context
  const resolvedCtaExpanded = sortedCtaProps.filter((item) =>
    variant === "full"
      ? isExperience
        ? item.id !== "view-details-toggle" &&
          item.id !== "case-study-link" &&
          item.id !== "live-demo-link" &&
          item.id !== "source-code-link" &&
          item.id !== "design-file-link"
        : item.id !== "view-details-toggle" && item.id !== "case-study-link"
      : isExperience
        ? item.id !== "live-demo-link" &&
          item.id !== "source-code-link" &&
          item.id !== "design-file-link"
        : true,
  );

  const isCollapsedMode = variant === "collapsed";
  const isCompactSize = size === "compact";

  // State
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(() =>
    !isCollapsedMode ? true : false,
  );

  // Refs
  const blockRef = useRef(null);
  const contentRef = useRef(null);

  // Subscribe to view events for this row
  useEffect(() => {
    if (!row?.id) return;

    const unsubscribe = onRowViewed(row.id, ({ visited, counted }) => {
      if (visited) setVisitedThisSession(true);
      if (counted) setViewCountDelta((prev) => prev + 1);
    });

    return unsubscribe;
  }, [row?.id]);

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const existingSource = query.get("source");
  const { handleCTA } = useCTA();
  const { handleLinkCTA } = useLinkCTAHandler(row);

  // Selects the correct margin-top token class so the icon center aligns with
  // the visual center of the heading's first text line at every breakpoint.
  const iconAlignClass = (() => {
    if (isCompactSize) return "mt-(--icon-align-h2-compact)";

    const isH1Type =
      heading?.variant === "heading1Subpage" ||
      heading?.variant === "heading1";

    if (!isCollapsedMode && isH1Type)
      return clsx(
        "mt-(--icon-align-h1subpage-mobile)",
        "sm:mt-(--icon-align-h1subpage-tablet)",
        "lg:mt-(--icon-align-h1subpage-desktop)",
      );

    if (!isCollapsedMode)
      return clsx(
        "mt-(--icon-align-h2-expanded-mobile)",
        "sm:mt-(--icon-align-h2-expanded-tablet)",
        "lg:mt-(--icon-align-h2-expanded-desktop)",
      );

    return clsx(
      "mt-(--icon-align-h2-default-mobile)",
      "sm:mt-(--icon-align-h2-default-tablet)",
      "lg:mt-(--icon-align-h2-default-desktop)",
    );
  })();

  // Derives page source from URL params or current pathname
  const getPageSource = () => {
    if (existingSource) return existingSource;

    const path = location.pathname;

    if (path === "/") return "home";
    if (path.startsWith("/projects")) return "projects";
    if (path.startsWith("/case-studies")) return "case-studies";
    return "unknown";
  };

  const resolvedCtaDefault = sortedCtaProps
    .filter((item) => item.id === "view-details-toggle" || item.id === "case-study-link")
    .sort((a, b) => {
      const priority = (id) =>
        mode === "project" && !isDetailsExpanded && id === "view-details-toggle" ? -1 : 0;
      return priority(a.id) - priority(b.id);
    });

  // Writes max height directly to the DOM to avoid cascading re renders from setState.
  // Also enables the expand/collapse animation for the expanded (view details) variant,
  // not just collapsed cards. Full read mode keeps max-height unrestricted.
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    if (variant === "full") {
      contentRef.current.style.maxHeight = "none";
      return;
    }
    contentRef.current.style.maxHeight = isDetailsExpanded
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [isDetailsExpanded, sortedDescription, variant]);

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
  } = workItemsTextBlockLayoutConfig;

  // Layout classes
  const outerContainerClasses = isCollapsedMode
    ? outerContainer.collapsed[size] || outerContainer.collapsed.default
    : outerContainer.expanded;

  const textBlockHeading2ToHeading3Classes = clsx(
    textBlockHeading2ToHeading3.base,
    isCompactSize && isCollapsedMode
      ? textBlockHeading2ToHeading3.compact
      : textBlockHeading2ToHeading3.default,
  );

  const headerBlockClasses = clsx(
    headerBlock.base,
    isCompactSize && isCollapsedMode ? headerBlock.compact : headerBlock.default,
  );

  const textBlockToBlockClasses = clsx(
    textBlockToBlock.base,
    isCompactSize && isCollapsedMode ? textBlockToBlock.compact : textBlockToBlock.default,
  );

  const textBlockItemToItemClasses = clsx(
    textBlockItemToItem.base,
    isCompactSize && isCollapsedMode ? textBlockItemToItem.compact : textBlockItemToItem.default,
  );

  const textBlockInteractiveToInteractiveClasses = clsx(
    textBlockInteractiveToInteractive.base,
    isCompactSize && isCollapsedMode
      ? textBlockInteractiveToInteractive.compact
      : textBlockInteractiveToInteractive.default,
  );

  const textBlockHeading3ToBodyClasses = clsx(
    textBlockHeading3ToBody.base,
    isCompactSize && isCollapsedMode
      ? textBlockHeading3ToBody.compact
      : textBlockHeading3ToBody.default,
  );

  const tagContainerClasses = clsx(
    tagContainer.base,
    isCompactSize && isCollapsedMode ? tagContainer.compact : tagContainer.default,
  );

  const detailsExpandedAnimationClasses = clsx(
    "transition-[max-height] duration-[650ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
    !isDetailsExpanded ? "overflow-hidden" : "overflow-visible",
  );

  // Handlers
  const resolveButtonVariant = (item) => {
    if (item?.variant?.collapsed && item?.variant?.expanded) {
      return isDetailsExpanded ? item.variant?.expanded : item.variant?.collapsed;
    }
    return item.variant;
  };

  const resolveButtonLabel = (item) => {
    if (variant === "expanded" && !isDetailsExpanded && item?.id === "view-details-toggle") {
      return item?.label?.collapsed || item?.label;
    }

    if (variant === "collapsed" && item?.id === "view-details-toggle") {
      return item?.label?.collapsed || item?.label;
    }

    if (item?.label?.collapsed && item?.label?.expanded) {
      return isDetailsExpanded ? item.label?.expanded : item.label?.collapsed;
    }

    return item.label;
  };

  const resolveButtonIcon = (item) => {
    if (item?.id === "view-details-toggle") {
      if (variant === "expanded" && !isDetailsExpanded) return ctaIconMap.ChevronDown;
      if (variant === "collapsed") return ctaIconMap.ChevronRight;
      return isDetailsExpanded && item?.icon?.expanded ? ctaIconMap[item.icon.expanded] : null;
    }

    if (item?.icon?.collapsed || item?.icon?.expanded) {
      const key = isDetailsExpanded ? item.icon.expanded : item.icon.collapsed;
      return key ? ctaIconMap[key] : null;
    }

    return item?.icon ? ctaIconMap[item.icon] : null;
  };

  // Resolves the correct action per button id, handling navigation, toggle, and link CTAs
  const resolveButtonAction = (item) => {
    return () => {
      switch (item.id) {
      case "view-details-toggle":
        if (isCollapsedMode) {
          const source = getPageSource();
          navigate(`/view-details/${row?.id}?source=${source}`);
          return;
        }
        if (!isCollapsedMode) {
          const nextExpanded = !isDetailsExpanded;
          setIsDetailsExpanded(nextExpanded);

          if (contentRef.current) {
            if (nextExpanded) {
              requestAnimationFrame(() => {
                blockRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              });
            } else {
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

      case "case-study-link": {
        const source = getPageSource();
        navigate(`/full-case-study/${row?.id}?source=${source}`);
        break;
      }

      default:
        handleLinkCTA(item);
      }
    };
  };

  // Maps cta button ids to the corresponding key in row.links
  const ctaLinkKeyMap = {
    "live-demo-link": "liveDemo",
    "source-code-link": "sourceCode",
    "design-file-link": "designFile",
  };

  // Returns true/false for external-link cta items, null for non-link items
  // (view-details-toggle, case-study-link) so we know not to render a dot for those
  const getIsLinkActive = (item) => {
    const linkKey = ctaLinkKeyMap[item.id];
    if (!linkKey) return null;
    const linkData = row?.links?.[linkKey];
    return Boolean((linkData?.url && linkData.url.trim() !== "") || linkData?.active);
  };

  // Renders a single content block by type (text, list, labelValueList, image)
  const renderCaseStudyBlock = (item) => {
    if (!item?.type) return null;

    switch (item.type) {
    case "text":
      if (!item) return null;
      return <Text variant={item.variant} text={item.text} size={size} />;

    case "list":
      return <ListContentBlock items={item} />;

    case "labelValueList":
      return <ListContentBlock labelValueItems={item} />;

    case "image":
      if (!item || isCollapsedMode || !imageBlock) return null;
      return (
        <BlockRenderer
          variant="content"
          size={size}
          imageid={item.imageId}
          row={row}
          section={section}
          block={imageBlock}
          handlers={handlers}
        />
      );

    default:
      return null;
    }
  };

  return (
    <div
      ref={blockRef}
      id={id}
      className={clsx(textBlockToBlockClasses, outerContainerClasses)}
      style={!isCollapsedMode && !isDetailsExpanded ? { gap: 0 } : undefined}
    >
      {/* Collapsed Container */}
      <div
        className={clsx(textBlockHeading2ToHeading3Classes, isCollapsedMode && "flex-1", className)}
        {...props}
      >
        {/* Project Heading */}
        {heading && (
          <div className={clsx(headerBlockClasses)}>
            <div className={clsx(textBlockHeading3ToBody.default, "flex flex-col")}>
              <div className="flex items-start gap-2">
                {heading?.icon && (
                  <span
                    className={clsx(
                      "shrink-0 flex-none",
                      isCompactSize ? "w-4" : isCollapsedMode ? "w-4 sm:w-5 lg:w-6" : "w-5 lg:w-6",
                      iconAlignClass,
                    )}
                  >
                    <img src={heading.icon.src} alt="" className="w-full h-full object-contain" />
                  </span>
                )}
                <Text
                  {...heading}
                  icon={null}
                  size={size}
                  className={isCollapsedMode && "!line-clamp-2"}
                />
              </div>
              {variant === "full" && subTitle && (
                <Button
                  variant={subTitle?.variant}
                  label={subTitle?.label}
                  iconRight={subTitle?.icon ? ctaIconMap[subTitle.icon] : null}
                  className="w-fit"
                  onClick={() => handleCTA(subTitle)}
                />
              )}
            </div>
          </div>
        )}

        <div className={clsx(textBlockItemToItemClasses, isCollapsedMode && "flex-1")}>
          {((Array.isArray(tags) && tags.length > 0) || overview) && (
            <div className={clsx(textBlockItemToItemClasses, isCollapsedMode && "flex-1")}>
              {/* Tags */}
              {tags.length > 0 && (
                <HorizontalWheelScroll
                  className={clsx(
                    isCollapsedMode
                      ? tagContainerClasses
                      : textBlockInteractiveToInteractiveClasses,
                  )}
                >
                  {tags.map((item, index) => {
                    const isViewsTag = item.id === "views";

                    // Eye icon gets brand color when this row has been visited
                    const iconWrapClass =
                      isViewsTag && isVisited
                        ? "[&_svg]:text-(--color-text-primary) [&_svg]:opacity-100"
                        : undefined;

                    // Tooltip shows "You visited" when visited
                    const tooltipLabel =
                      isViewsTag && isVisited && item.tooltip
                        ? `${item.tooltip} · You visited`
                        : item.tooltip;

                    const tagEl = iconWrapClass ? (
                      <span className={iconWrapClass}>
                        <Tag {...item} size={size} />
                      </span>
                    ) : (
                      <Tag {...item} size={size} />
                    );

                    if (tooltipLabel) {
                      return (
                        <TooltipButton key={index} label={tooltipLabel}>
                          {tagEl}
                        </TooltipButton>
                      );
                    }
                    return <React.Fragment key={index}>{tagEl}</React.Fragment>;
                  })}
                </HorizontalWheelScroll>
              )}

              {/* Cover Image */}
              {!isCollapsedMode && imageBlock && (
                <BlockRenderer
                  variant="content"
                  size={size}
                  imageid={imageBlock?.data?.coverImageId}
                  row={row}
                  section={section}
                  block={imageBlock}
                  handlers={handlers}
                />
              )}

              {/* Overview */}
              {overview && (
                <Text {...overview} size={size} className={isCollapsedMode && "!line-clamp-3"} />
              )}
            </div>
          )}

          {/* Collapsed CTAs */}
          {Array.isArray(resolvedCtaDefault) &&
            resolvedCtaDefault.length > 0 &&
            !isDetailsExpanded && (
            <div
              className={clsx(
                textBlockInteractiveToInteractiveClasses,
                isCollapsedMode && "mt-auto",
              )}
            >
              {resolvedCtaDefault.map((item) => (
                <Button
                  key={item.id}
                  variant={item.variant}
                  size={size}
                  label={resolveButtonLabel(item)}
                  iconRight={resolveButtonIcon(item)}
                  onClick={resolveButtonAction(item)}
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
          variant === "full" && isDetailsExpanded && cardContainerPaddingBottom,
          variant !== "full" && detailsExpandedAnimationClasses,
          isCollapsedMode && "hidden",
        )}
      >
        {/* Description Items */}
        {Array.isArray(sortedDescription) && sortedDescription.length > 0 && (
          <div
            className={clsx(
              variant === "full" || (isExperience && variant === "expanded")
                ? textBlockToBlockClasses
                : textBlockItemToItemClasses,
            )}
          >
            {!(isExperience && variant === "expanded") &&
              sortedDescription
                .filter((item) => isEnabled(item?.enabled))
                .map((item, index) => (
                  <div key={index} className={clsx(textBlockHeading3ToBodyClasses)}>
                    {item.heading && <Text {...item.heading} size={size} />}

                    {/* Flexible content rendering by data type */}
                    {Array.isArray(item?.body) && item.body.length > 0 ? (
                      <div className={clsx(textBlockItemToItemClasses)}>
                        {item.body
                          .filter((item) => isEnabled(item?.enabled))
                          .map((block, index) => (
                            <React.Fragment key={index}>
                              {renderCaseStudyBlock(block)}
                            </React.Fragment>
                          ))}
                      </div>
                    ) : (
                      renderCaseStudyBlock(item.body)
                    )}
                  </div>
                ))}

            {/* Work Experience Case Study Preview */}
            {isExperience &&
              variant === "expanded" &&
              Array.isArray(sortedDescription) &&
              sortedDescription.length > 0 &&
              sortedDescription
                .filter((block) => isEnabled(block?.enabled))
                .map((block) => (
                  <BlockRenderer
                    variant="caseStudy"
                    key={block.id}
                    block={block}
                    section={section}
                  />
                ))}
          </div>
        )}

        {/* Expanded CTAs */}
        {Array.isArray(resolvedCtaExpanded) && resolvedCtaExpanded.length > 0 && (
          <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
            {resolvedCtaExpanded.map((item) => {
              const isLinkActive = getIsLinkActive(item);

              return (
                <div key={item.id} className="relative inline-flex">
                  <Button
                    variant={resolveButtonVariant(item)}
                    size={size}
                    label={resolveButtonLabel(item)}
                    iconRight={resolveButtonIcon(item)}
                    onClick={resolveButtonAction(item)}
                  />
                  {isLinkActive !== null && (
                    <span
                      className={clsx(
                        "absolute top-1 right-1 sm:top-1.5 sm:right-1.5 z-10",
                        "w-1.5 h-1.5 rounded-full pointer-events-none",
                      )}
                      style={{
                        background: isLinkActive
                          ? "linear-gradient(135deg, #86efac, #4ade80)"
                          : "rgba(120, 120, 120, 0.3)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkItemsTextBlock;
