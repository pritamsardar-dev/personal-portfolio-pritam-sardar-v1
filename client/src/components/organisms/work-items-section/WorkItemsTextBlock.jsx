/**
 * Role: CMS-driven text block for Projects and Work Experience sections
 * Used by: BlockRenderer via `block.type`
 *
 * Responsibilities:
 *   - Render project or experience metadata (heading, tags, overview, description)
 *   - Support display variants (collapsed / expanded / full)
 *   - Resolve data from either `block` (project mode) or `row` (experience mode)
 *   - Manage internal interactive state (details toggle, like state)
 *   - Animate expand/collapse via measured max-height transitions
 *   - Render flexible content types (text, list, label-value list, image)
 *   - Delegate nested media rendering to BlockRenderer
 *   - Resolve CTA configuration dynamically (order, variant, label, icon, action)
 *   - Adjust layout based on size mode (default / compact)
 *
 * Notes:
 *   - Description content is order-sorted and filtered by `enabled`
 *   - CTA behavior is configuration-driven via `ctaProps`
 *   - Experience mode supports case study preview rendering
 */

import React, { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Tag from "../../atoms/tag/Tag";
import Button from "../../atoms/button/Button";
import { workItemsTextBlockLayoutConfig } from "./workItemsTextBlockLayout.config";
import HorizontalWheelScroll from "../../wrappers/HorizontalWheelScroll";
import ListContentBlock from "../../molecules/list-content-block/ListContentBlock";
import BlockRenderer from "../../../renderers/blocks/blockRenderer";
import { resolveProps } from "../../../utils/resolveProps";

const WorkItemsTextBlock = ({
    variant = "expanded", // collapsed / expanded / full
    mode,
    size = "default", // default / compact
    row, // For work experience data
    block,
    data, // For project data
    handlers,
    className,
    ...props

}) => {
    const isExperience = row?.domain === "experience";

    // Image block single source of truth
    const imageBlock = row?.blocks?.find(block => block?.type === "imageBlock");

    // Work experience meta block
    const metaBlock = isExperience
    ? row?.blocks?.find(block => block.id === "work-experience-meta-info")
    : null;

    // Work experience highlights block
    const highlightsBlock = isExperience
    ? row?.blocks?.find(block => block.id === "work-experience-highlights")
    : null;

    // Resolve common fields
    const id = isExperience ? row?.id : block?.id;
    const enabled = isExperience ? row?.enabled : block?.enabled;

    const heading = isExperience
    ? metaBlock?.data?.bodyItems?.find(item => item.id === "metaInfo")?.heading
    : data?.heading;
    
    const tags = isExperience ? row?.tags : data?.tags;

    const overview = isExperience
    ? resolveProps(
        highlightsBlock?.data?.bodyItems?.find(
            item => item.id === "keyContributionsAndImpact"
        )?.overview,
        "home"
        )
    : data?.overview;

    const description = isExperience 
    ? variant === "expanded" ? resolveProps(row?.blocks.filter(block => block.id !== "work-experience-image-block"), "workExperience") 
        : row?.fullCaseStudy
    : data?.description;

    const ctaProps = isExperience ? row?.ctaProps : data?.ctaProps;
    // const ctaExpanded = isExperience ? row?.ctaProps : data?.ctaProps;
    const likeBtn = ctaProps?.find(b => b?.id === "like");

    // Further sort and filter data
    const sortedDescription = [...(Array.isArray(description) ? description : [])].sort(
            (a, b) => (a.order ?? 0) - (b.order ?? 0)
        );

    const sortedCtaProps = [...Array.isArray(ctaProps) ? ctaProps : []].sort(
        (a, b) =>
            (resolveProps(a.order, variant) ?? 0) -
            (resolveProps(b.order, variant) ?? 0)
        );

    const resolvedCtaExpanded = sortedCtaProps.filter(
        item =>
            variant === "full" ?
            item.id !== "like" &&
            item.id !== "view-details-toggle" &&
            item.id !== "case-study-link" 
            : item.id !== "like"
    );

    const isCollapsedMode = variant === "collapsed";
    const isCompactSize = size === "compact";

    const [isDetailsExpanded, setIsDetailsExpanded] = useState(() => (!isCollapsedMode ? true: false));
    const [isLiked, setIsLiked] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);

    const blockRef = useRef(null);
    const contentRef = useRef(null);


    const resolvedCtaDefault = sortedCtaProps
        .filter(item =>
            item.id === "view-details-toggle" ||
            item.id === "case-study-link"
        )
        .sort((a, b) => {
            const priority = id =>
            mode === "project" && !isDetailsExpanded && id === "view-details-toggle" ? -1 : 0;

            return priority(a.id) - priority(b.id);
        });

    useLayoutEffect(() => {
        if (contentRef.current) {
            if (isDetailsExpanded) {
                // expand to actual height
                setMaxHeight(contentRef.current.scrollHeight);
            } else {
                // collapse
                setMaxHeight(0);
            }
        }
    }, [isDetailsExpanded, sortedDescription]);

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

    const outerContainerClasses = isCollapsedMode
        ? outerContainer.collapsed[size] || outerContainer.collapsed.default
        : outerContainer.expanded;

    const textBlockHeading2ToHeading3Classes = clsx(
            textBlockHeading2ToHeading3.base,
            isCompactSize && isCollapsedMode ?
            textBlockHeading2ToHeading3.compact 
            : textBlockHeading2ToHeading3.default
    );

    const headerBlockClasses = clsx(
            headerBlock.base,
            isCompactSize && isCollapsedMode ?
            headerBlock.compact 
            : headerBlock.default
    );

    const textBlockToBlockClasses = clsx(
            textBlockToBlock.base,
            isCompactSize && isCollapsedMode ?
            textBlockToBlock.compact 
            : textBlockToBlock.default
    );

    const textBlockItemToItemClasses = clsx(
            textBlockItemToItem.base,
            isCompactSize && isCollapsedMode ?
            textBlockItemToItem.compact 
            : textBlockItemToItem.default
    );

    const textBlockInteractiveToInteractiveClasses = clsx(
            textBlockInteractiveToInteractive.base,
            isCompactSize && isCollapsedMode ?
            textBlockInteractiveToInteractive.compact 
            : textBlockInteractiveToInteractive.default
    );

    const textBlockHeading3ToBodyClasses = clsx(
            textBlockHeading3ToBody.base,
            isCompactSize && isCollapsedMode ?
            textBlockHeading3ToBody.compact 
            : textBlockHeading3ToBody.default
    );

    const tagContainerClasses = clsx(
            tagContainer.base,
            isCompactSize && isCollapsedMode ?
            tagContainer.compact 
            : tagContainer.default
    );

    const detailsExpandedAnimationClasses = clsx(
        `overflow-hidden transition-[max-height] duration-[650ms] 
        cubic-bezier(0.4, 0, 0.2, 1)`
    );

    const likeBtnClasses = clsx(
        isLiked && 
        `
        text-[var(--color-button-overlay-text-active)] 
        bg-[var(--color-button-overlay-background-active)]
        `,
        "rounded-full"
    );

    const resolveButtonVariant = (item) => {
        if (item?.variant?.collapsed && item?.variant?.expanded) {
            return isDetailsExpanded
            ? item.variant?.expanded
            : item.variant?.collapsed;
        }

        return  item.variant;
    };

    const resolveButtonLabel = (item) => {
        if (item.id === "like") {
            return isLiked
            ? item.label?.active
            : item.label?.default;
        }

        if (item?.label?.collapsed && item?.label?.expanded) {
            return isDetailsExpanded
            ? item.label?.expanded
            : item.label?.collapsed;
        }

        return  item.label;
    };

    const resolveButtonIcon = (item) => {
        switch (item.id) {
            case "like":
            return isLiked
                ? item.iconLeft?.active
                : item.iconLeft?.default;

            default:
            return item.iconLeft;
        }
    };

    const resolveButtonIconType = (item) => {
        switch (item.id) {
            case "like":
            return isLiked
                ? item.iconLeftType?.active
                : item.iconLeftType?.default;

            default:
            return item.iconLeftType;
        }
    };

    const resolveButtonAction = (item) => {
        return (e) => {
            switch (item.id) {
            case "view-details-toggle":
                if (!isCollapsedMode) {
                const nextExpanded = !isDetailsExpanded;
                setIsDetailsExpanded(nextExpanded);

                if (contentRef.current) {
                    if (nextExpanded) {
                    // EXPAND → scroll after layout grows
                    requestAnimationFrame(() => {
                        blockRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        });
                    });
                    } else {
                    // COLLAPSE → wait for animation to finish
                    setTimeout(() => {
                        blockRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        });
                    }, 0); // Same as max-height transition
                    }
                }
                }
                break;

            case "like":
                setIsLiked(t => !t);
                break;

            default:
                break;
            }

            item.onClick?.(e);
        };
    };

    const renderCaseStudyBlock = (item) => {
        if (!item?.type) return null;

        switch (item.type) {
            case "text":
            if (!item) return null;
            return <Text variant={item.variant} text={item.text} size={size}/>;

            case "list":
            return <ListContentBlock items={item} />;

            case "labelValueList":
             return <ListContentBlock labelValueItems={item} />;

            case "image":
            if (!item || isCollapsedMode || !imageBlock) return null;
            return <BlockRenderer
                        variant="content"
                        size={size}
                        imageid={item.imageId}
                        row={row}
                        block={imageBlock}
                        handlers={handlers}
                    />
            default:
            return null;
        }
    };

    return (
        <div
            ref={blockRef}
            id={id}
            className={clsx(textBlockToBlockClasses, outerContainerClasses)}>
            {/* Collapsed container */}
            <div
                className={clsx(
                    textBlockHeading2ToHeading3Classes,
                    className
                )}
                {...props}
            >
                {/* Project heading container */}
                {(heading || likeBtn && isDetailsExpanded) && 
                    <div className={clsx(headerBlockClasses)}>
                        {heading && 
                            <Text 
                                {...heading} 
                                size={size}
                                className={isCollapsedMode && "!line-clamp-2"}
                            />
                        }

                        {/* Like button Expanded*/}
                        {likeBtn && !isCollapsedMode &&
                            <Button
                                key={likeBtn.id}
                                variant={likeBtn.variant}
                                size={size}

                                label={resolveButtonLabel(likeBtn)}
                                iconLeft={resolveButtonIcon(likeBtn)}

                                onClick={resolveButtonAction(likeBtn)}

                                className={clsx(likeBtn.id === "like" &&
                                    likeBtnClasses
                                )} 
                            />
                        }
                    </div>}

                <div className={clsx(textBlockToBlockClasses)}>

                    {(Array.isArray(tags) && tags.length > 0 || overview) && 
                        <div className={clsx(textBlockItemToItemClasses)}>
                            
                            {/* Tags container collapsed */}
                            {tags.length > 0 && 
                                <HorizontalWheelScroll
                                    className={clsx(
                                        isCollapsedMode ?
                                        tagContainerClasses
                                        : textBlockInteractiveToInteractiveClasses
                                    )}
                                >
                                {tags.map((item, index) => (
                                    <Tag
                                        key={index}
                                        {...item}
                                        size={size}
                                    />
                                ))}
                            </HorizontalWheelScroll >}

                            {/* Optional cover image expanded case study custom positioned */}
                            {!isCollapsedMode && imageBlock && <BlockRenderer
                                variant="content"
                                size={size}
                                imageid={imageBlock?.data?.coverImageId}
                                row={row}
                                block={imageBlock}
                                handlers={handlers}
                            />}
                        
                            {/* Overview text collapsed */}
                            {overview && <Text 
                                {...overview} 
                                size={size}
                                className={isCollapsedMode && "!line-clamp-3"}/>
                            }

                        </div>}

                    {/* Cta buttons container collapsed */}
                    {Array.isArray(resolvedCtaDefault) && resolvedCtaDefault.length > 0 && !isDetailsExpanded && 
                        <div 
                            className={clsx(textBlockInteractiveToInteractiveClasses)}
                        >
                            {resolvedCtaDefault
                                .filter(item => item.id !== "like")
                                .map((item) => (
                                    <Button
                                        key={item.id}
                                        variant={item.variant}
                                        size={size}
                                        label={resolveButtonLabel(item)}
                                        iconLeft={resolveButtonIcon(item)}
                                        iconLeftType={resolveButtonIconType(item)}
                                        onClick={resolveButtonAction(item)}
                                        className={clsx(item.id === "like" &&
                                            likeBtnClasses
                                        )}
                                    />
                                ))}
                        </div>}
                </div>
            </div>

            {/* Expanded container */}
            <div
                ref={contentRef}
                className={clsx(
                    textBlockToBlockClasses,
                    !isCollapsedMode && isDetailsExpanded && cardContainerPaddingBottom,
                    detailsExpandedAnimationClasses,
                )}
                style={{ maxHeight: `${maxHeight}px` }}
            >
                {/* Text items container expanded */}
                {Array.isArray(sortedDescription) && sortedDescription.length > 0 && 
                    <div className={clsx(
                        variant === "full" || isExperience && variant === "expanded" ? textBlockToBlockClasses 
                        : textBlockItemToItemClasses
                    )}>
                        {/* isExperience && variant !== "expanded" && (gap isuee need to be fixed) */}
                        {!(isExperience && variant === "expanded") && sortedDescription
                            .filter(item => item?.enabled !== false)
                            .map((item, index) => (
                                <div 
                                    key={index}
                                    className={clsx(textBlockHeading3ToBodyClasses)}
                                >
                                    {item.heading && <Text {...item.heading} size={size}/>}

                                    {/* Flexible rendering based on data type */}
                                    {Array.isArray(item?.body) && item.body.length > 0 ? (
                                        <div className={clsx(textBlockItemToItemClasses)}>
                                            {item.body
                                                .filter(item => item?.enabled !== false)
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

                            {/* Optional work experience case study preview mode only*/}
                            {isExperience && variant === "expanded" && Array.isArray(sortedDescription) && sortedDescription.length > 0 &&
                                sortedDescription
                                .filter(block => block?.enabled !== false)
                                .map(block => (
                                <BlockRenderer
                                    variant="caseStudy"
                                    key={block.id}
                                    block={block}
                                />
                            ))}
                    </div>
                }

                {/* Cta buttons expanded */}
                {Array.isArray(resolvedCtaExpanded) && resolvedCtaExpanded.length > 0 && 
                    <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
                        {resolvedCtaExpanded.map((item) => (
                            <Button
                                key={item.id}
                                variant={resolveButtonVariant(item)}
                                size={size}
                                label={resolveButtonLabel(item)}
                                iconLeft={resolveButtonIcon(item)}
                                iconLeftType={resolveButtonIconType(item)}
                                onClick={resolveButtonAction(item)}
                            />
                        ))}
                    </div>}
            </div>
        </div>
    );
};

export default WorkItemsTextBlock;