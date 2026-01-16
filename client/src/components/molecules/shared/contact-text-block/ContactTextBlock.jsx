import React from "react";
import clsx from "clsx";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import { homeContactText } from "../../../data/home/homeContactText";

const outerContainerClasses = `
    relative w-full flex flex-col
    max-w-(--size-block-wrapper-mobile-max-width)
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
    content = homeContactText,
    className,
    ...props
}) => {
    const {
        heading, 
        description, 
        contactLinks
    } = content;
    
    return (
        <div className={clsx(outerContainerClasses)}>
            <div
                className={clsx(
                    heading2ToHeading3Classes,
                    className
                )}
                {...props}
            >
                <Text {...heading} />

                <div className={clsx(itemToItemClasses)}>
                    <Text {...description} />
                  
                    <div className={clsx(listItemClasses)}>
                        {contactLinks.map((item) => (
                            <Button
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactTextBlock;