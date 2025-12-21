import React, { useState } from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Tag from "../../atoms/tag/Tag";
import Button from "../../atoms/button/Button";
import { homeProjectsText } from "../../../data/home/homeProjectsText";

const outerContainerProjectsCardTextClasses = `
    relative w-full flex flex-col 
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
`;

const outerContainerBaseClasses = `
    relative w-full flex flex-col
    max-w-(--size-block-wrapper-mobile-max-width)
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
`;

const textBlockHeading2ToHeading3Classes = `
    w-full flex flex-col 
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const textBlockBlockToBlockClasses = `
    w-full flex flex-col 
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
`;

const textBlockItemToItemClasses = `
    w-full flex flex-col 
    gap-(--spacing-item-item-desktop-gap)
    sm:gap-(--spacing-item-item-desktop-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const textBlockInteractiveToInteractiveClasses = `
    w-full flex flex-wrap
    gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
`;

const textBlockheading3ToBodyClasses = `
    w-full flex flex-col 
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
`;

const listItemClasses = `
    list-disc
    list-outside
    pl-(--spacing-list-item-text-indent-mobile)
    sm:pl-(--spacing-list-item-text-indent-tablet)
    lg:pl-(--spacing-list-item-text-indent-desktop)
    space-y-(--spacing-list-item-text-gap-y-mobile)
    sm:space-y-(--spacing-list-item-text-gap-y-tablet)
    lg:space-y-(--spacing-list-item-text-gap-y-desktop)
`

const ProjectsTextBlock = ({
    isProjectsCardText = false,
    content = homeProjectsText,
    className,
    ...props

}) => {
    const {
        heading, 
        tags, 
        overview, 
        ctaDefault, 
        description, 
        ctaExpanded
    } = content;
    
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

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
                if (!isProjectsCardText) {
                    setIsDetailsExpanded(t => !t);
                }
                break;

            case "projects-like":
                setIsLiked(t => !t);
                break;

            default:
                break;
            }

        // Always allow parent onClick to run
        item.onClick?.(e);
        };
    };


    return (
        <div
            className={clsx(
                textBlockBlockToBlockClasses,
                isProjectsCardText ? outerContainerProjectsCardTextClasses
                :outerContainerBaseClasses
            )}
        >
            <div
                className={clsx(
                    textBlockHeading2ToHeading3Classes,
                    className
                )}
                {...props}
            >
                <Text
                    {...heading}
                />
                <div className={clsx(textBlockBlockToBlockClasses)}>
                    <div className={clsx(textBlockItemToItemClasses)}>
                        <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
                        {tags.map((item, index) => (
                            <Tag
                                key={index}
                                {...item}
                            />
                        ))}
                        
                    </div>
                    <Text
                        {...overview}
                    />
                    </div>
                    <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
                        {ctaDefault.map((item) => (
                            <Button
                                key={item.id}
                                variant={item.variant}

                                label={resolveButtonLabel(item)}
                                iconLeft={resolveButtonIcon(item)}

                                onClick={resolveButtonAction(item)}

                                className={clsx(item.id === "projects-like" &&
                                    isLiked && 
                                    "text-[var(--color-button-overlay-text-active)] bg-[var(--color-button-overlay-background-active)]"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div 
                className={clsx(
                    textBlockBlockToBlockClasses,
                    "overflow-hidden transition-[max-height] duration-[500ms] cubic-bezier(0.4, 0, 0.2, 1)",
                    isDetailsExpanded ? "max-h-[2000px]" : "max-h-0"
                )}
            >
                <div className={clsx(textBlockItemToItemClasses)}>
                    {description.map((item, index) => (
                        <div 
                        key={index}
                        className={clsx(textBlockheading3ToBodyClasses)}
                        >
                            <Text
                                {...item.heading}
                             />
                             <ul className={clsx(listItemClasses)}>
                                {item.body.text.map((listItem, index) => (
                                    <Text
                                        key={index}
                                        as={item.body.as}
                                        variant={item.body.variant}
                                        text={listItem}
                                    />
                                ))}
                             </ul>
                        </div>
                    ))}
                </div>

                <div className={clsx(textBlockInteractiveToInteractiveClasses)}>
                    {ctaExpanded.map((item) => (
                        <Button
                            key={item.id}
                            {...item}
                            onClick={resolveButtonAction(item)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsTextBlock;