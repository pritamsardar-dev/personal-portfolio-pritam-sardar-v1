/**
 * Role: CMS-driven contact information block
 * Used by: Mounted via BlockRenderer based on block.type
 * Responsibilities:
 *   - Render an optional block heading and description
 *   - Render a list of contact/action links as buttons
 *   - Respect CMS enable/disable and content ordering
 * Guardrails:
 *   - Fully data-driven, no hardcoded contact logic
 *   - Presentation-only (no navigation or side effects)
 *   - Safe for reuse across pages and layouts
 */

import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";

const outerContainerClasses = `
    relative  flex flex-col
    w-full
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
`;

const heading2ToHeading3Classes = `
    w-full flex flex-col 
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
`;

const itemToItemClasses = `
    w-full flex flex-col 
    gap-(--spacing-item-item-desktop-gap)
    sm:gap-(--spacing-item-item-desktop-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
`;

const listItemClasses = `
    w-full flex flex-col items-start
    gap-(--spacing-list-item-mobile-gap)
    sm:gap-(--spacing-list-item-tablet-gap)
    lg:gap-(--spacing-list-item-desktop-gap)
`

const ContactTextBlock = ({
    data = {},
    className,
    ...props
}) => {
    const {
        id,
        enabled = true,
        heading, 
        description, 
        contactLinks
    } = data;

    if (!enabled) return null;
    
    return (
        <div 
            id={id}
            className={clsx(outerContainerClasses)}
        >
            <div
                className={clsx(
                    heading2ToHeading3Classes,
                    className
                )}
                {...props}
            >   
                {/* Block title */}
                {heading && <Text {...heading} />}

                {(Array.isArray(contactLinks) && contactLinks.length > 0 || description) &&
                    <div className={clsx(itemToItemClasses)}>

                        {/* Block desciptions */}
                        {description && <Text {...description} />}

                        {/* Contact list items */}
                        {<div className={clsx(listItemClasses)}>
                            {contactLinks.map((item) => (
                                <Button
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>}
                    </div>
                }
            </div>
        </div>
    );
};

export default ContactTextBlock;