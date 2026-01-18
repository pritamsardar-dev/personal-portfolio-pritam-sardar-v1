/**
 * Role: CMS-driven text block for Projects section
 * Used by: BlockRenderer via `block.type`
 * Responsibilities:
 *   - Render project metadata (heading, tags, overview, description)
 *   - Support collapsed ↔ expanded interactive states
 *   - Resolve CTA behavior (toggle details, like action) via data config
 *   - Animate height transitions and manage scroll positioning
 * Guardrails:
 *   - Fully data-driven (no page-level or hardcoded logic)
 *   - CMS-safe: supports enable/disable, ordering, and CRUD updates
 *   - Layout & spacing controlled only via tokenized config
 */

import React, { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Tag from "../../atoms/tag/Tag";
import Button from "../../atoms/button/Button";
import { projectsTextBlockLayoutConfig } from "./projectsTextBlockLayout.config";
import HorizontalWheelScroll from "../../wrappers/HorizontalWheelScroll";

const ProjectsTextBlock = ({
    variant,
    size = "default", // default / compact
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

    const isCollapsedMode = variant === "collapsed";
    const isCompactSize = size === "compact";

    const likeBtn = ctaDefault.find(b => b.id === "projects-like");

    const [isDetailsExpanded, setIsDetailsExpanded] = useState(() => (!isCollapsedMode ? true: false));
    const [isLiked, setIsLiked] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);

    const blockRef = useRef(null);
    const contentRef = useRef(null);

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
        listItem,
        tagContainer,
        cardContainerPaddingBottom,
    } = projectsTextBlockLayoutConfig;

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

    const listItemClasses = listItem;

    const likeBtnClasses = clsx(
        isLiked && 
        `
        text-[var(--color-button-overlay-text-active)] 
        bg-[var(--color-button-overlay-background-active)]
        `,
        "rounded-full"
    );

    const resolveButtonLabel = (item) => {
        switch (item.id) {
            case "projects-view-details-toggle":
            return isDetailsExpanded
                ? item.labels?.expanded
                : item.labels?.collapsed;

            case "projects-like":
            return isLiked
                ? item.labels?.active
                : item.labels?.default;

            default:
            return item.label;
        }
    };

    const resolveButtonIcon = (item) => {
        switch (item.id) {
            case "projects-like":
            return isLiked
                ? item.iconsLeft?.active
                : item.iconsLeft?.default;

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

            case "projects-like":
                setIsLiked(t => !t);
                break;

            default:
                break;
            }

            item.onClick?.(e);
        };
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

                                className={clsx(likeBtn.id === "projects-like" &&
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
                            </HorizontalWheelScroll>}
                            
                            {/* Overview text collapsed */}
                            {overview && <Text 
                                {...overview} 
                                size={size}
                                className={isCollapsedMode && "!line-clamp-3"}/>
                            }

                        </div>}

                    {/* Cta buttons container collapsed */}
                    {Array.isArray(ctaDefault) && ctaDefault.length > 0 && !isDetailsExpanded && 
                        <div 
                            className={clsx(textBlockInteractiveToInteractiveClasses)}
                        >
                            {ctaDefault
                                .filter(item => item.id !== "projects-like")
                                .map((item) => (
                                    <Button
                                        key={item.id}
                                        variant={item.variant}
                                        size={size}

                                        label={resolveButtonLabel(item)}
                                        iconLeft={resolveButtonIcon(item)}

                                        onClick={resolveButtonAction(item)}

                                        className={clsx(item.id === "projects-like" &&
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
                {Array.isArray(description) && description.length > 0 && 
                    <div className={clsx(textBlockItemToItemClasses)}>
                        {description.map((item, index) => (
                            <div 
                                key={index}
                                className={clsx(textBlockHeading3ToBodyClasses)}
                            >
                                {item.heading && <Text {...item.heading} size={size}/>}

                                <ul className={clsx(listItemClasses)}>
                                    {item.body.text.map((listItem, index) => (
                                        
                                        <Text
                                            key={index}
                                            as={item.body.as}
                                            variant={item.body.variant}
                                            size={size}
                                            text={listItem}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                }

                {/* Cta buttons expanded */}
                {Array.isArray(ctaExpanded) && ctaExpanded.length > 0 && 
                    <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
                        {ctaExpanded.map((item) => (
                            <Button
                                key={item.id}
                                {...item}
                                size={size}
                                onClick={resolveButtonAction(item)}
                            />
                        ))}
                    </div>}
            </div>
        </div>
    );
};

export default ProjectsTextBlock;